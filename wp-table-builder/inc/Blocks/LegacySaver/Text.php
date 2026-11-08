<?php

namespace WPTableBuilder\Blocks\LegacySaver;

use WPTableBuilder\Utils\RenderUtils;

class Text
{
    private static $elemId = 597;

    public static function render($block)
    {

        $attrs = $block['props'];
        $style = RenderUtils::generate_css_string([
            "color" => $attrs['color'] ?? '',
            "font-size" => $attrs['fontSize'] ?? '',
            "font-family" => $attrs['fontFamily'] ?? '',
            "padding" => $attrs['padding'] ?? '',
            "margin" => $attrs['margin'] ?? '',
        ]);
        // $html = wp_kses_post($attrs['text']);
        $html = RenderUtils::strip_xss($attrs['text'] ?? '');

        $elId = self::$elemId++;
        $heading = in_array($attrs['tag'] ?? '', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], true) ? $attrs['tag'] : '';
        $tag = $heading ?: 'div';
        $dataTag = $heading ? " data-tag=\"{$heading}\"" : '';
        $innerAttrs = "";
        if (isset($attrs['isFirst']) && $attrs['isFirst']) {
            $innerAttrs = 'style="position: relative;"';
        }
        return "<div class=\"wptb-text-container wptb-ph-element wptb-element-text-{$elId}\"{$dataTag} style=\"{$style}\"><{$tag} {$innerAttrs}>{$html}</{$tag}></div>";
    }
}

