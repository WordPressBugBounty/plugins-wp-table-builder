<?php

namespace WPTableBuilder\Blocks;

class TextBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'Text';
    }

    public static function getName(): string
    {
        return 'text';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        content:
        - `props.text`: string — HTML body (paragraphs, links, bold, etc.)

        typography:
        - `props.fontSize`: CSS font-size (e.g. `"1em"`, `"16px"`); omit to inherit from table
        - `props.color`: CSS text color (hex/rgb); omit to inherit from table
        - `props.linkColor`: CSS color for anchor tags inside the text
        - `props.align`: `"left"` | `"right"` | `"center"` | `"justify"`

        layout:
        - `props.padding`: SpacingValue
        - `props.margin`: SpacingValue
        AI_SCHEMA;
    }
}
