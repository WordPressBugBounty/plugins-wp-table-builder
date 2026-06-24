<?php

namespace WPTableBuilder\Core\Database;

class Migration
{

    const VERSION_KEY = 'wptb_migration_version';

    private static function v100()
    {
        $chats_table = DB::get_table_name(DB::AI_CHATS);
        $messages_table = DB::get_table_name(DB::AI_CHAT_MESSAGES);

        // @codingStandardsIgnoreStart
        $sql1 = <<<SQL
        CREATE TABLE IF NOT EXISTS `{$chats_table}` (
            `id` char(36) NOT NULL,
            `table_id` bigint(20) NULL DEFAULT NULL,
            `title` varchar(255) NOT NULL,
            `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `table_id` (`table_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        SQL;


        $sql2 = <<<SQL
        CREATE TABLE IF NOT EXISTS `{$messages_table}` (
            `id` bigint(20) NOT NULL AUTO_INCREMENT,
            `chat_id` char(36) NOT NULL,
            `role` varchar(255) NOT NULL,
            `content` TEXT NOT NULL,
            `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `chat_id` (`chat_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        SQL;
        // @codingStandardsIgnoreEnd
        return [$sql1, $sql2];
    }

    private static function v101()
    {
        global $wpdb;
        $chats_table = DB::get_table_name(DB::AI_CHATS);
        $queries = [];

        // @codingStandardsIgnoreStart
        $vendor_col = $wpdb->get_results("SHOW COLUMNS FROM `{$chats_table}` LIKE 'vendor'");
        if (empty($vendor_col)) {
            $queries[] = "ALTER TABLE `{$chats_table}` ADD COLUMN `vendor` varchar(50) NOT NULL DEFAULT 'anthropic'";
        }

        $model_col = $wpdb->get_results("SHOW COLUMNS FROM `{$chats_table}` LIKE 'model'");
        if (empty($model_col)) {
            $queries[] = "ALTER TABLE `{$chats_table}` ADD COLUMN `model` varchar(100) NOT NULL DEFAULT ''";
        }
        // @codingStandardsIgnoreEnd

        return $queries;
    }

    public static function migrate()
    {
        // phpcs:ignore
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        $current_version = get_option(self::VERSION_KEY, '0.0.0');

        $migrations = [
            '1.0.0' => [self::class, 'v100'],
            '1.0.1' => [self::class, 'v101'],
        ];

        global $wpdb;

        foreach ($migrations as $version => $sql) {
            if (version_compare($current_version, $version, '<')) {
                $queries = $sql();
                foreach ($queries as $query) {
                    // @codingStandardsIgnoreStart
                    $wpdb->query($wpdb->prepare($query));
                    // @codingStandardsIgnoreEnd
                }
                update_option(self::VERSION_KEY, $version);
            }
        }
    }
}