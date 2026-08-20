<?php

namespace WPTableBuilder\Admin;

use WPTableBuilder\Core\Settings;

class Authorization
{
    public static function can_edit()
    {
        return Settings::is_user_allowed();
    }

    public static function can_view()
    {
        return Settings::is_user_allowed() || current_user_can('edit_posts');
    }

    public static function can_edit_table($id)
    {
        return Settings::is_user_allowed(absint($id));
    }

    public static function can_view_table($id)
    {
        if (!self::can_view()) {
            return false;
        }
        return Settings::user_owns_table(absint($id));
    }

    public static function can_edit_tables(array $ids)
    {
        if (empty($ids)) {
            return false;
        }

        foreach ($ids as $id) {
            if (!self::can_edit_table($id)) {
                return false;
            }
        }

        return true;
    }

    public static function can_view_tables(array $ids)
    {
        if (empty($ids)) {
            return false;
        }

        foreach ($ids as $id) {
            if (!self::can_view_table($id)) {
                return false;
            }
        }

        return true;
    }
}
