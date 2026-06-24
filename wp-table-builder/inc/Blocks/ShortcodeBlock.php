<?php

namespace WPTableBuilder\Blocks;

class ShortcodeBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'Shortcode';
    }

    public static function getName(): string
    {
        return 'shortcode';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        content:
        - `props.shortcode`: string — full shortcode text including brackets (e.g. `"[gallery ids=1,2]"`); executed as shortcode output on the site

        layout:
        - `props.padding`: SpacingValue — around the shortcode container
        - `props.margin`: SpacingValue
        AI_SCHEMA;
    }
}
