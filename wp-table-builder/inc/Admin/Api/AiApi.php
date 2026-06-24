<?php

namespace WPTableBuilder\Admin\Api;

use WPTableBuilder\Admin\Authorization;
use WPTableBuilder\AI\BlockSchema;
use WPTableBuilder\AI\ChatRepository;
use WPTableBuilder\AI\PromptBuilder;
use WPTableBuilder\AI\VendorProxy;
use WPTableBuilder\Core\Settings;
use WPTableBuilder\WPTableBuilder;

class AiApi
{
    public static function register($apiBase)
    {

        register_rest_route($apiBase, '/ai/init', [
            'methods'             => 'GET',
            'callback'            => [self::class, 'get_init'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);

        register_rest_route($apiBase, '/ai/chats', [
            'methods'             => 'GET',
            'callback'            => [self::class, 'list_chats'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);

        register_rest_route($apiBase, '/ai/chats/(?P<id>[a-zA-Z0-9\-]+)/delete', [
            'methods'             => 'POST',
            'callback'            => [self::class, 'delete_chat'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);

        register_rest_route($apiBase, '/ai/chats/(?P<id>[a-zA-Z0-9\-]+)/update', [
            'methods'             => 'POST',
            'callback'            => [self::class, 'update_chat'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);

        register_rest_route($apiBase, '/ai/chats/(?P<id>[a-zA-Z0-9\-]+)/messages', [
            'methods'             => 'GET',
            'callback'            => [self::class, 'get_messages'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);

        register_rest_route($apiBase, '/ai/chat', [
            'methods'             => 'POST',
            'callback'            => [self::class, 'send_message'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);

        register_rest_route($apiBase, '/ai/validate-key', [
            'methods'             => 'POST',
            'callback'            => [self::class, 'validate_api_key'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);

        register_rest_route($apiBase, '/ai/models', [
            'methods'             => 'POST',
            'callback'            => [self::class, 'fetch_models'],
            'permission_callback' => [self::class, 'check_permission'],
        ]);
    }

    public static function check_permission()
    {
        return Authorization::can_edit();
    }

    public static function get_init($request)
    {
        $ai      = Settings::get_ai();
        $vendors = $ai['vendors'] ?? [];
        $result  = [];

        foreach ($vendors as $vendor => $cfg) {
            $api_key        = $cfg['api_key'] ?? '';
            $enabled_models = $cfg['enabled_models'] ?? [];
            if ($api_key !== '' && !empty($enabled_models)) {
                $result[$vendor] = [
                    'api_key_set'    => true,
                    'enabled_models' => array_values($enabled_models),
                ];
            }
        }

        return ApiHandler::response(['vendors' => $result]);
    }

    public static function get_block_schema($request)
    {
        $is_pro = WPTableBuilder::is_pro();
        return ApiHandler::response([
            'structural' => BlockSchema::get_structural(),
            'blocks'     => BlockSchema::get_all($is_pro),
        ]);
    }

    public static function list_chats($request)
    {
        $table_id = $request->get_param('table_id');
        $table_id = $table_id ? (int) $table_id : null;
        $chats = ChatRepository::get_chats($table_id);
        return ApiHandler::response(['chats' => $chats]);
    }

    public static function delete_chat($request)
    {
        $id = sanitize_text_field($request->get_param('id'));
        ChatRepository::delete_chat($id);
        return ApiHandler::response(['deleted' => true]);
    }

    public static function update_chat($request)
    {
        $id     = sanitize_text_field($request->get_param('id'));
        $params = $request->get_json_params();

        if (isset($params['vendor'], $params['model'])) {
            ChatRepository::update_chat_model(
                $id,
                sanitize_text_field($params['vendor']),
                sanitize_text_field($params['model'])
            );
        }

        if (isset($params['title'])) {
            ChatRepository::update_chat_title($id, sanitize_text_field($params['title']));
        }

        $chat = ChatRepository::get_chat($id);
        return ApiHandler::response(['chat' => $chat]);
    }

    public static function get_messages($request)
    {
        $id = sanitize_text_field($request->get_param('id'));
        $messages = ChatRepository::get_messages($id);
        return ApiHandler::response(['messages' => $messages]);
    }

    public static function validate_api_key($request)
    {
        $params  = $request->get_json_params();
        $vendor  = sanitize_text_field($params['vendor'] ?? '');
        $api_key = sanitize_text_field($params['api_key'] ?? '');

        if ($vendor === '') {
            return ApiHandler::response(['error' => 'vendor is required.'], 400);
        }

        if ($api_key === '') {
            $vendors = Settings::get_ai('vendors') ?? [];
            $api_key = $vendors[$vendor]['api_key'] ?? '';
        }

        if ($api_key === '') {
            return ApiHandler::response(['error' => 'API key is required.'], 400);
        }

        $result = VendorProxy::validate_api_key($vendor, $api_key);

        if ($result['error'] !== null) {
            return ApiHandler::response(['error' => $result['error']], 502);
        }

        return ApiHandler::response(['valid' => true]);
    }

    public static function fetch_models($request)
    {
        $params  = $request->get_json_params();
        $vendor  = sanitize_text_field($params['vendor'] ?? '');
        $api_key = sanitize_text_field($params['api_key'] ?? '');

        if ($vendor === '') {
            return ApiHandler::response(['error' => 'vendor is required.'], 400);
        }

        if ($api_key === '') {
            $vendors = Settings::get_ai('vendors') ?? [];
            $api_key = $vendors[$vendor]['api_key'] ?? '';
        }

        if ($api_key === '') {
            return ApiHandler::response(['error' => 'API key is required.'], 400);
        }

        $result = VendorProxy::fetch_models($vendor, $api_key);

        if ($result['error'] !== null) {
            return ApiHandler::response(['error' => $result['error']], 502);
        }

        return ApiHandler::response(['models' => $result['models']]);
    }

    public static function send_message($request)
    {
        $params = $request->get_json_params();

        $chat_id           = sanitize_text_field($params['chat_id'] ?? '');
        $user_request      = sanitize_textarea_field($params['user_request'] ?? '');
        $ui_tree           = $params['ui_tree'] ?? [];
        $selected_ids      = $params['selected_block_ids'] ?? [];
        $vendor            = sanitize_text_field($params['vendor'] ?? 'anthropic');
        $model             = sanitize_text_field($params['model'] ?? '');

        if ($user_request === '') {
            return ApiHandler::response(['error' => 'user_request is required.'], 400);
        }

        if (!is_array($ui_tree)) {
            return ApiHandler::response(['error' => 'ui_tree must be an object.'], 400);
        }

        if ($chat_id === '') {
            $chat_id = wp_generate_uuid4();
        }

        // Ensure chat exists in DB (create if first message or no chat_id was provided)
        $chat = ChatRepository::get_chat($chat_id);
        if (!$chat) {
            $title    = mb_substr($user_request, 0, 50) ?: 'New chat';
            $table_id = isset($params['table_id']) ? (int) $params['table_id'] : null;
            ChatRepository::create_chat($chat_id, $table_id, $title, $vendor, $model);
        }

        // Load conversation history — cap to the most recent 10 messages (5 turns)
        // to keep token counts manageable across all vendors.
        $db_messages = array_slice(ChatRepository::get_messages($chat_id), -10);

        // Build prompt
        $system = PromptBuilder::build_system_prompt();
        $user   = PromptBuilder::build_user_payload(
            $ui_tree,
            (array) $selected_ids,
            $user_request,
            $db_messages
        );

        // Save user message to DB
        ChatRepository::add_message($chat_id, 'user', $user_request);

        // Call vendor API
        $result = VendorProxy::chat($vendor, $model, $system, $user);

        if ($result['error'] !== null) {
            return ApiHandler::response(['error' => $result['error']], 502);
        }

        $content = $result['content'];

        // Save assistant response to DB
        ChatRepository::add_message($chat_id, 'assistant', $content);

        return ApiHandler::response([
            'content' => $content,
            'chat_id' => $chat_id,
        ]);
    }
}
