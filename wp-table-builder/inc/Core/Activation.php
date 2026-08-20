<?php

namespace WPTableBuilder\Core;


class Activation
{
    const REDIRECT_TRANSIENT = 'wptb_activation_redirect';

    public static function init()
    {
        register_activation_hook(WPTB_PLUGIN_FILE, [self::class, 'on_activate']);
        add_action('admin_init', [self::class, 'maybe_redirect']);
    }

    public static function on_activate($network_wide = false)
    {
        // Network wide activations have no single site to land on.
        if ($network_wide) {
            return;
        }

        set_transient(self::REDIRECT_TRANSIENT, 1, 60);
    }

    public static function maybe_redirect()
    {
        if (!get_transient(self::REDIRECT_TRANSIENT)) {
            return;
        }

        if (wp_doing_ajax() || (defined('DOING_CRON') && DOING_CRON)) {
            return;
        }

        delete_transient(self::REDIRECT_TRANSIENT);

        // Bulk activations keep the user on the plugins screen.
        if (isset($_GET['activate-multi'])) {
            return;
        }

        // Never hijack a screen the user was already sent to, most notably the
        // Freemius opt-in page that opens right after activation.
        if (isset($_GET['page']) || isset($_GET['fs_action'])) {
            return;
        }

        if (!current_user_can('activate_plugins') || !Settings::user_has_role()) {
            return;
        }

        wp_safe_redirect(admin_url('admin.php?page=wptb-welcome'));
        exit;
    }
}
