<?php

namespace WPTableBuilder\Blocks;

class ListBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'List';
    }

    public static function getName(): string
    {
        return 'list';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        structure:
        - `props.type`: `"ordered"` (numbers) | `"unordered"` (bullets)
        - `props.listIcon`: `"disc"` | `"circle"` | `"square"` | `"none"` — bullet style when unordered

        typography:
        - `props.color`: CSS color string — default text color for items when not overridden per item
        - `props.fontSize`: CSS font size (e.g. `"16px"`, `"1.125rem"`)
        - `props.alignment`: `"left"` | `"center"` | `"right"` — default text alignment for items

        layout:
        - `props.itemSpacing`: CSS margin-bottom between items (e.g. `"8px"`, `"12px"`)
        - `props.padding`: SpacingValue
        - `props.margin`: SpacingValue

        Children:
        - Only `list-item` blocks are valid children
        AI_SCHEMA;
    }
}
