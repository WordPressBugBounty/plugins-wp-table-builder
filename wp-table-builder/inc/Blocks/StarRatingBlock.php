<?php

namespace WPTableBuilder\Blocks;

class StarRatingBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'Star Rating';
    }

    public static function getName(): string
    {
        return 'star-rating';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        content:
        - `props.value`: number — current rating (may be fractional, e.g. `4.5`)
        - `props.maxValue`: number — number of stars / max rating (typically `5`)
        - `props.showRating`: boolean — show numeric text next to the stars when true

        style:
        - `props.starSize`: CSS height/size of each star (e.g. `"20px"`)
        - `props.starColor`: CSS fill color for filled stars
        - `props.alignment`: `"left"` | `"center"` | `"right"` — horizontal alignment in the cell

        typography (numeric label, when shown):
        - `props.fontSize`: CSS font size for the numeric label
        - `props.color`: CSS color for the numeric label

        layout:
        - `props.padding`: SpacingValue
        - `props.margin`: SpacingValue
        AI_SCHEMA;
    }
}
