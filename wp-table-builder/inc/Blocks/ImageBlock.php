<?php

namespace WPTableBuilder\Blocks;

class ImageBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'Image';
    }

    public static function getName(): string
    {
        return 'image';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        content:
        - `props.src`: string — image URL
        - `props.alt`: string — accessibility alt text

        sizing:
        - `props.width`: CSS width of the displayed image (e.g. `"100%"`, `"200px"`)
        - `props.sizeRelativeTo`: string — how width is interpreted (`"self"` | `"container"`)
        - `props.size`: string — optional aspect/preset token when using ratio sizing
        - `props.imgWidth`: number — natural pixel width of the source (used for ratio math)
        - `props.imgHeight`: number — natural pixel height of the source (used for ratio math)

        layout:
        - `props.alignment`: `"left"` | `"center"` | `"right"` — horizontal alignment in the cell
        - `props.padding`: SpacingValue
        - `props.margin`: SpacingValue

        link:
        - `props.url`: string — wraps the image in a link when set; **protected, never mutate**
        - `props.linkTarget`: `"_blank"` | `"_self"`
        - `props.linkRel`: string[] — rel tokens
        - `props.convertToAbsolute`: boolean — resolve relative link URLs on render

        Protected props — never mutate:
        - `props.src`
        - `props.url`
        AI_SCHEMA;
    }
}
