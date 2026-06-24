<?php

namespace WPTableBuilder\Blocks;

class CustomHtmlBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'Custom HTML';
    }

    public static function getName(): string
    {
        return 'custom-html';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        content:
        - `props.html`: string — arbitrary HTML fragment rendered inside the wrapper (sanitization depends on site policy)

        layout:
        - `props.padding`: SpacingValue — around the HTML wrapper
        - `props.margin`: SpacingValue
        AI_SCHEMA;
    }
}
