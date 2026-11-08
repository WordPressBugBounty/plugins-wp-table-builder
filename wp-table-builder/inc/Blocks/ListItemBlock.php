<?php

namespace WPTableBuilder\Blocks;

class ListItemBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'List Item';
    }

    public static function getName(): string
    {
        return 'list-item';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        content:
        - `props.text`: string — HTML content for the list item body

        tooltip (`props.tooltip`, an object):
        - `props.tooltip.text`: string — HTML shown in a hover tooltip when non-empty
        - `props.tooltip.position`: `"top"` | `"bottom"` | `"left"` | `"right"` — tooltip placement

        style:
        - `props.alignment`: `"left"` | `"center"` | `"right"` — per-item override
        - `props.color`: CSS color override for this item

        Parent:
        - `list-item` blocks must live inside a `list` block
        AI_SCHEMA;
    }
}
