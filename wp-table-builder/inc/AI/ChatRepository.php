<?php

namespace WPTableBuilder\AI;

use WPTableBuilder\Core\Database\DB;

class ChatRepository
{
    public static function create_chat(string $id, ?int $table_id, string $title, string $vendor, string $model): void
    {
        DB::insert(DB::AI_CHATS, [
            'id'       => $id,
            'table_id' => $table_id,
            'title'    => $title,
            'vendor'   => $vendor,
            'model'    => $model,
        ]);
    }

    public static function get_chats(?int $table_id = null): array
    {
        global $wpdb;
        $table = DB::get_table_name(DB::AI_CHATS);
        // @codingStandardsIgnoreStart
        if ($table_id !== null) {
            $results = $wpdb->get_results(
                $wpdb->prepare("SELECT * FROM `{$table}` WHERE `table_id` = %d ORDER BY `created_at` DESC", $table_id),
                ARRAY_A
            );
        } else {
            $results = $wpdb->get_results("SELECT * FROM `{$table}` ORDER BY `created_at` DESC", ARRAY_A);
        }
        // @codingStandardsIgnoreEnd
        return $results ?: [];
    }

    public static function get_chat(string $id): ?array
    {
        global $wpdb;
        $table = DB::get_table_name(DB::AI_CHATS);
        // @codingStandardsIgnoreStart
        $row = $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM `{$table}` WHERE `id` = %s", $id),
            ARRAY_A
        );
        // @codingStandardsIgnoreEnd
        return $row ?: null;
    }

    public static function delete_chat(string $id): void
    {
        global $wpdb;
        $messages_table = DB::get_table_name(DB::AI_CHAT_MESSAGES);
        // @codingStandardsIgnoreStart
        $wpdb->query($wpdb->prepare("DELETE FROM `{$messages_table}` WHERE `chat_id` = %s", $id));
        // @codingStandardsIgnoreEnd
        DB::delete(DB::AI_CHATS, ['id' => $id]);
    }

    public static function add_message(string $chat_id, string $role, string $content): int
    {
        DB::insert(DB::AI_CHAT_MESSAGES, [
            'chat_id' => $chat_id,
            'role'    => $role,
            'content' => $content,
        ]);

        global $wpdb;
        return (int) $wpdb->insert_id;
    }

    public static function get_messages(string $chat_id): array
    {
        global $wpdb;
        $table = DB::get_table_name(DB::AI_CHAT_MESSAGES);
        // @codingStandardsIgnoreStart
        $results = $wpdb->get_results(
            $wpdb->prepare("SELECT * FROM `{$table}` WHERE `chat_id` = %s ORDER BY `id` ASC", $chat_id),
            ARRAY_A
        );
        // @codingStandardsIgnoreEnd
        return $results ?: [];
    }

    public static function update_chat_model(string $id, string $vendor, string $model): void
    {
        DB::update(DB::AI_CHATS, ['vendor' => $vendor, 'model' => $model], ['id' => $id]);
    }

    public static function update_chat_title(string $id, string $title): void
    {
        DB::update(DB::AI_CHATS, ['title' => $title], ['id' => $id]);
    }
}
