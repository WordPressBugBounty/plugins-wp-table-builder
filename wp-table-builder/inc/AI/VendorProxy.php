<?php

namespace WPTableBuilder\AI;

use WPTableBuilder\Core\Settings;

class VendorProxy
{
    public static function chat(string $vendor, string $model, string $system, string $user): array
    {
        $api_key = Settings::get_ai('vendors')[$vendor]['api_key'] ?? '';

        if ($api_key === '') {
            return ['content' => null, 'error' => "No API key configured for vendor: {$vendor}"];
        }

        switch ($vendor) {
            case 'anthropic':
                return self::call_anthropic($api_key, $model, $system, $user);
            case 'openai':
                return self::call_openai($api_key, $model, $system, $user);
            case 'google':
                return self::call_google($api_key, $model, $system, $user);
            default:
                return ['content' => null, 'error' => "Unsupported vendor: {$vendor}"];
        }
    }

    public static function validate_api_key(string $vendor, string $api_key): array
    {
        switch ($vendor) {
            case 'anthropic':
                return self::validate_anthropic_key($api_key);
            case 'openai':
                return self::validate_openai_key($api_key);
            case 'google':
                return self::validate_google_key($api_key);
            default:
                return ['valid' => false, 'error' => "Unsupported vendor: {$vendor}"];
        }
    }

    public static function fetch_models(string $vendor, string $api_key): array
    {
        switch ($vendor) {
            case 'anthropic':
                return self::fetch_anthropic_models($api_key);
            case 'openai':
                return self::fetch_openai_models($api_key);
            case 'google':
                return self::fetch_google_models($api_key);
            default:
                return ['models' => null, 'error' => "Unsupported vendor: {$vendor}"];
        }
    }

    private static function fetch_anthropic_models(string $api_key): array
    {
        $response = wp_remote_get('https://api.anthropic.com/v1/models', [
            'timeout' => 15,
            'headers' => [
                'x-api-key'         => $api_key,
                'anthropic-version' => '2023-06-01',
            ],
        ]);

        if (is_wp_error($response)) {
            return ['models' => null, 'error' => $response->get_error_message()];
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);

        if ($code !== 200) {
            $msg = $body['error']['message'] ?? "Anthropic error {$code}";
            return ['models' => null, 'error' => $msg];
        }

        $models = array_column($body['data'] ?? [], 'id');
        sort($models);
        return ['models' => $models, 'error' => null];
    }

    private static function fetch_openai_models(string $api_key): array
    {
        $response = wp_remote_get('https://api.openai.com/v1/models', [
            'timeout' => 15,
            'headers' => ['Authorization' => "Bearer {$api_key}"],
        ]);

        if (is_wp_error($response)) {
            return ['models' => null, 'error' => $response->get_error_message()];
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);

        if ($code !== 200) {
            $msg = $body['error']['message'] ?? "OpenAI error {$code}";
            return ['models' => null, 'error' => $msg];
        }

        $chat_prefixes = ['gpt-', 'o1', 'o2', 'o3', 'o4', 'chatgpt-'];
        $models = array_values(array_filter(
            array_column($body['data'] ?? [], 'id'),
            function ($id) use ($chat_prefixes) {
                foreach ($chat_prefixes as $prefix) {
                    if (str_starts_with($id, $prefix)) {
                        return true;
                    }
                }
                return false;
            }
        ));
        sort($models);
        return ['models' => $models, 'error' => null];
    }

    private static function fetch_google_models(string $api_key): array
    {
        $url      = 'https://generativelanguage.googleapis.com/v1beta/models?key=' . urlencode($api_key);
        $response = wp_remote_get($url, ['timeout' => 15]);

        if (is_wp_error($response)) {
            return ['models' => null, 'error' => $response->get_error_message()];
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);

        if ($code !== 200) {
            $msg = $body['error']['message'] ?? "Google error {$code}";
            return ['models' => null, 'error' => $msg];
        }

        $models = [];
        foreach ($body['models'] ?? [] as $m) {
            $name    = $m['name'] ?? '';
            $methods = $m['supportedGenerationMethods'] ?? [];
            if (in_array('generateContent', $methods) && str_contains($name, 'gemini')) {
                $models[] = str_replace('models/', '', $name);
            }
        }
        sort($models);
        return ['models' => $models, 'error' => null];
    }

    private static function validate_anthropic_key(string $api_key): array
    {
        return self::validate_key_from_models(self::fetch_anthropic_models($api_key));
    }

    private static function validate_openai_key(string $api_key): array
    {
        return self::validate_key_from_models(self::fetch_openai_models($api_key));
    }

    private static function validate_google_key(string $api_key): array
    {
        return self::validate_key_from_models(self::fetch_google_models($api_key));
    }

    private static function validate_key_from_models(array $result): array
    {
        return [
            'valid' => $result['error'] === null,
            'error' => $result['error'],
        ];
    }

    private static function call_anthropic(string $api_key, string $model, string $system, string $user): array
    {
        $response = wp_remote_post('https://api.anthropic.com/v1/messages', [
            'timeout' => 60,
            'headers' => [
                'x-api-key'         => $api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type'      => 'application/json',
            ],
            'body' => json_encode([
                'model'      => $model,
                'system'     => $system,
                'messages'   => [['role' => 'user', 'content' => $user]],
                'max_tokens' => 4096,
                'temperature' => 0.2,
            ]),
        ]);

        if (is_wp_error($response)) {
            return ['content' => null, 'error' => $response->get_error_message()];
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);

        if ($code !== 200) {
            $msg = $body['error']['message'] ?? "Anthropic error {$code}";
            return ['content' => null, 'error' => $msg];
        }

        $parts = $body['content'] ?? [];
        $text = implode('', array_column(
            array_filter($parts, fn($p) => ($p['type'] ?? '') === 'text'),
            'text'
        ));

        return ['content' => $text, 'error' => null];
    }

    /**
     * OpenAI o-series reasoning models (o1, o3, o4, …) do not accept a custom
     * temperature value — only the default of 1 is supported.
     */
    private static function openai_supports_temperature(string $model): bool
    {
        return !preg_match('/^o[0-9]/', $model);
    }

    private static function call_openai(string $api_key, string $model, string $system, string $user): array
    {
        $body = [
            'model'    => $model,
            'messages' => [
                ['role' => 'system', 'content' => $system],
                ['role' => 'user',   'content' => $user],
            ],
        ];

        if (self::openai_supports_temperature($model)) {
            $body['temperature'] = 0.2;
        }

        $response = wp_remote_post('https://api.openai.com/v1/chat/completions', [
            'timeout' => 60,
            'headers' => [
                'Authorization' => "Bearer {$api_key}",
                'Content-Type'  => 'application/json',
            ],
            'body' => json_encode($body),
        ]);

        if (is_wp_error($response)) {
            return ['content' => null, 'error' => $response->get_error_message()];
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);

        if ($code !== 200) {
            $msg = $body['error']['message'] ?? "OpenAI error {$code}";
            return ['content' => null, 'error' => $msg];
        }

        $text = $body['choices'][0]['message']['content'] ?? '';
        return ['content' => $text, 'error' => null];
    }

    private static function call_google(string $api_key, string $model, string $system, string $user): array
    {
        $url = 'https://generativelanguage.googleapis.com/v1beta/models/'
            . urlencode($model)
            . ':generateContent?key='
            . urlencode($api_key);

        $response = wp_remote_post($url, [
            'timeout' => 60,
            'headers' => ['Content-Type' => 'application/json'],
            'body'    => json_encode([
                'systemInstruction' => ['role' => 'system', 'parts' => [['text' => $system]]],
                'contents'          => [['role' => 'user', 'parts' => [['text' => $user]]]],
                'generationConfig'  => ['temperature' => 0.2],
            ]),
        ]);

        if (is_wp_error($response)) {
            return ['content' => null, 'error' => $response->get_error_message()];
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);

        if ($code !== 200) {
            $msg = $body['error']['message'] ?? "Google error {$code}";
            return ['content' => null, 'error' => $msg];
        }

        $parts = $body['candidates'][0]['content']['parts'] ?? [];
        $text = implode('', array_column($parts, 'text'));
        return ['content' => $text, 'error' => null];
    }
}
