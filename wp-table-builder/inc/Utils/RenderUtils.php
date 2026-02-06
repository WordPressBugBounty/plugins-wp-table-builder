<?php

namespace WPTableBuilder\Utils;

class RenderUtils
{
    public static function generate_css_string($styles)
    {
        $css_string = '';

        foreach ($styles as $key => $value) {
            if (trim($value) !== '') {
                $css_string .= $key . ': ' . $value . '; ';
            }
        }

        return esc_attr($css_string);
    }

    public static function generate_attrs_string($attrs)
    {
        $attrs_string = '';
        foreach ($attrs as $key => $value) {
            if ($value !== false) {
                $attrs_string .= $key . '="' . esc_attr($value) . '" ';
            }
        }
        return $attrs_string;
    }

    public static function get_icon($name)
    {
        $path = WPTB_PLUGIN_DIR . '/assets/icons/' . $name . '.svg';
        if (file_exists($path)) {
            return file_get_contents($path);
        }
        return '';
    }

    public static function strip_xss($html)
    {
        if (!$html) {
            return '';
        }

        $wrapper = '<div>' . $html . '</div>';

        libxml_use_internal_errors(true);

        $dom = new \DOMDocument();
        $dom->encoding = 'UTF-8';
        $wrapper = mb_encode_numericentity($wrapper, [0x80, 0x10FFFF, 0, ~0], 'UTF-8');
        $dom->loadHTML($wrapper, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);


        $xpath = new \DOMXPath($dom);


        $dangerousTags = ['script', 'object', 'embed', 'link', 'style', 'iframe'];
        $tagsQuery = '//' . implode(' | //', $dangerousTags);

        foreach ($xpath->query($tagsQuery) as $node) {
            if ($node->nodeName === 'iframe') {
                $src = $node->getAttribute('src');
                if (!preg_match('#^https://(www\.)?youtube\.com/embed/[\w-]+$#', $src)) {
                    $node->parentNode->removeChild($node);
                }
            } else {
                $node->parentNode->removeChild($node);
            }
        }


        foreach ($xpath->query('//*[@*]') as $node) {
            foreach (iterator_to_array($node->attributes) as $attr) {
                if (self::isDangerousAttribute($attr)) {
                    $node->removeAttribute($attr->nodeName);
                }
            }
        }

        $body = $dom->getElementsByTagName('div')->item(0);
        $innerHTML = '';
        foreach ($body->childNodes as $child) {
            $innerHTML .= $dom->saveHTML($child);
        }

        libxml_clear_errors();

        return $innerHTML;
    }


    private static function isDangerousAttribute($attr)
    {
        $name = strtolower($attr->nodeName);
        $value = strtolower($attr->nodeValue);
        return (
            strpos($name, 'on') === 0 ||
            strpos($value, 'javascript:') !== false
            // || ($name === 'style' && (
            //     strpos($value, 'expression(') !== false ||
            //     strpos($value, 'javascript:') !== false
            // ))
        );
    }



}