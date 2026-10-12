<?php

namespace WPTableBuilder\Utils;

use WPTableBuilder\Core\Settings;

class AssetsFrontend
{

    private static $has_enqueued = false;

    public static function enqueue()
    {
        if (self::$has_enqueued) {
            return;
        }
        self::$has_enqueued = true;

        $assets = new AssetLoader(
            WPTB_PLUGIN_URL, 
            WPTB_PLUGIN_DIR . '/dist/vite/manifest.json', 
            WPTB_PLUGIN_DIR . '/tmp/.hotfile'
        );
        $assets->register('src/frontend/common.ts');
        $assets->register_style('wptb-frontend-style', 'src/styles.scss');

        do_action('wptb_enqueue_frontend_assets');

        $assets->register('src/frontend/index.ts');


        $assets->enqueue_styles();

        add_action('wp_footer', function() use ($assets) {
            $global_styles = Settings::get_styles();
            if (!empty($global_styles)) {
                echo '<script type="text/javascript">var WPTB_GLOBAL_STYLES = ' . wp_json_encode($global_styles, JSON_HEX_TAG | JSON_HEX_AMP) . ';</script>';
            }
            echo $assets->get_scripts();
        });
    }
}