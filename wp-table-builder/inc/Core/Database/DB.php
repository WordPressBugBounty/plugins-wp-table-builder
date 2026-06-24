<?php

namespace WPTableBuilder\Core\Database;

class DB
{
    public const AI_CHATS = 'ai_chats';
    public const AI_CHAT_MESSAGES = 'ai_chat_messages';

    public static function get_table_name($table)
    {
        return $GLOBALS['wpdb']->prefix . 'wptb_' . $table;
    }

    public static function get_row($sql, ...$args)
    {
        global $wpdb;
        // @codingStandardsIgnoreStart
        $sql = $wpdb->prepare($sql, ...$args);
        return $wpdb->get_row($sql);
        // @codingStandardsIgnoreEnd
    }

    public static function get_results($sql, ...$args)
    {
        global $wpdb;
        // @codingStandardsIgnoreStart
        $sql = $wpdb->prepare($sql, ...$args);
        return $wpdb->get_results($sql);
        // @codingStandardsIgnoreEnd
    }

    public static function get_var($sql, ...$args)
    {
        global $wpdb;
        // @codingStandardsIgnoreStart
        $sql = $wpdb->prepare($sql, ...$args);
        return $wpdb->get_var($sql);
        // @codingStandardsIgnoreEnd
    }

    public static function insert($table, $data)
    {
        global $wpdb;
        // @codingStandardsIgnoreStart
        return $wpdb->insert(self::get_table_name($table), $data);
        // @codingStandardsIgnoreEnd
    }

    public static function update($table, $data, $where)
    {
        global $wpdb;
        // @codingStandardsIgnoreStart
        return $wpdb->update(self::get_table_name($table), $data, $where);
        // @codingStandardsIgnoreEnd
    }

    public static function delete($table, $where)
    {
        global $wpdb;
        // @codingStandardsIgnoreStart
        return $wpdb->delete(self::get_table_name($table), $where);
        // @codingStandardsIgnoreEnd
    }
}