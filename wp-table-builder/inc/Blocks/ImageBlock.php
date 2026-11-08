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
        - `props.width`: CSS width of the displayed image (e.g. `"100%"`, `"200px"`), used when relative to the container
        - `props.sizeRelativeTo`: `"container"` | `"self"` — what the size is measured against
        - `props.size`: string — two CSS lengths joined by `:` (e.g. `"50%:50%"`), used when relative to the image itself
        - `props.naturalWidth`: number — natural pixel width of the source (used for the self-relative math)
        - `props.naturalHeight`: number — natural pixel height of the source (used for the self-relative math)

        layout:
        - `props.alignment`: `"left"` | `"center"` | `"right"` — horizontal alignment in the cell
        - `props.padding`: SpacingValue
        - `props.margin`: SpacingValue

        link (`props.link`, an object):
        - `props.link.url`: string — wraps the image in a link when set; **protected, never mutate**
        - `props.link.target`: `"_blank"` | `"_self"`
        - `props.link.rel`: string[] — rel tokens
        - `props.link.convertToAbsolute`: boolean — resolve relative link URLs on render

        Protected props — never mutate:
        - `props.src`
        - `props.link.url`
        AI_SCHEMA;
    }
}
