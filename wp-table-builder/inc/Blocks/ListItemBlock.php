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
        - `props.toolTip`: string — HTML shown in a hover tooltip when non-empty

        behavior:
        - `props.tooltipPosision`: `"top"` | `"bottom"` | `"left"` | `"right"` — tooltip placement (typo in key is historical)

        style:
        - `props.alignment`: `"left"` | `"center"` | `"right"` — per-item override
        - `props.color`: CSS color override for this item

        structure:
        - `props.index`: number — 1-based position used for ordered list display

        Parent:
        - `list-item` blocks must live inside a `list` block
        AI_SCHEMA;
    }
}
