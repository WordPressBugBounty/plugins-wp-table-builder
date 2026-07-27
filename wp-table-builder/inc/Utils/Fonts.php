<?php

namespace WPTableBuilder\Utils;

class Fonts
{
    public static function get_font_families()
    {
        $fonts = [];
        $seen = [];

        $add_font = function ($name, $slug, $font_family) use (&$fonts, &$seen) {
            if (!$font_family) {
                return;
            }
            $key = $slug ?: $font_family;
            if (isset($seen[$key])) {
                return;
            }
            $seen[$key] = true;
            $fonts[] = [
                'name' => $name ?: $slug ?: $font_family,
                'slug' => $slug ?: '',
                'fontFamily' => $font_family,
            ];
        };

        if (function_exists('wp_get_global_settings')) {
            $font_families = wp_get_global_settings(['typography', 'fontFamilies']);
            if (is_array($font_families)) {
                $origins = ['default', 'theme', 'custom'];
                $has_origins = false;
                foreach ($origins as $origin) {
                    if (!empty($font_families[$origin]) && is_array($font_families[$origin])) {
                        $has_origins = true;
                        foreach ($font_families[$origin] as $family) {
                            if (!is_array($family)) {
                                continue;
                            }
                            $add_font(
                                $family['name'] ?? '',
                                $family['slug'] ?? '',
                                $family['fontFamily'] ?? ''
                            );
                        }
                    }
                }
                if (!$has_origins) {
                    foreach ($font_families as $family) {
                        if (!is_array($family) || !isset($family['fontFamily'])) {
                            continue;
                        }
                        $add_font(
                            $family['name'] ?? '',
                            $family['slug'] ?? '',
                            $family['fontFamily'] ?? ''
                        );
                    }
                }
            }
        }

        // Font Library installed fonts (wp_font_family posts).
        if (post_type_exists('wp_font_family')) {
            $posts = get_posts([
                'post_type' => 'wp_font_family',
                'post_status' => 'publish',
                'numberposts' => -1,
                'orderby' => 'title',
                'order' => 'ASC',
            ]);

            foreach ($posts as $post) {
                $settings = json_decode($post->post_content, true);
                if (!is_array($settings)) {
                    $settings = [];
                }
                $add_font(
                    $post->post_title ?: ($settings['name'] ?? ''),
                    $post->post_name ?: ($settings['slug'] ?? ''),
                    $settings['fontFamily'] ?? ''
                );
            }
        }

        return $fonts;
    }

    public static function get_ai_allowed_values(): string
    {
        $fonts = self::get_font_families();
        if (!$fonts) {
            return 'omit (no WordPress fonts available on this site)';
        }

        $values = array_map(function ($font) {
            return '`' . $font['fontFamily'] . '`';
        }, $fonts);

        return implode(' | ', $values) . '; omit to inherit';
    }
}
