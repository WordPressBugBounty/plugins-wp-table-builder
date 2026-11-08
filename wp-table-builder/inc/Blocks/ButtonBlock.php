<?php

namespace WPTableBuilder\Blocks;

class ButtonBlock implements BaseBlock
{
    public static function getTitle(): string
    {
        return 'Button';
    }

    public static function getName(): string
    {
        return 'button';
    }

    public static function getAISchema(): string
    {
        return <<<AI_SCHEMA
        Props:

        content:
        - `props.text`: string — CTA label (may include HTML)

        label (`props.label`, an object; the small corner badge):
        - `props.label.enabled`: boolean — show the badge
        - `props.label.text`: string — badge text/HTML
        - `props.label.background`: CSS color for the badge background
        - `props.label.color`: CSS color for the badge text

        icon (`props.icon`, an object):
        - `props.icon.name`: string — icon slug; empty means no icon
        - `props.icon.position`: `"left"` | `"right"` — icon side relative to the label
        - `props.icon.size`: CSS height/size of the icon

        link (`props.link`, an object):
        - `props.link.url`: string — link href; **protected, never mutate**
        - `props.link.target`: `"_blank"` | `"_self"`
        - `props.link.rel`: string[] — rel tokens
        - `props.link.convertToAbsolute`: boolean — prefix a relative URL with `https://` on render

        layout:
        - `props.size`: `"s"` | `"m"` | `"l"` | `"xl"` — preset size token
        - `props.fullWidth`: boolean — stretch button to full cell width
        - `props.alignment`: `"left"` | `"center"` | `"right"` — align the button in the cell
        - `props.contentAlignment`: `"left"` | `"center"` | `"right"` — align label+icon inside the button
        - `props.padding`: SpacingValue
        - `props.margin`: SpacingValue

        typography:
        - `props.fontSize`: CSS font size (e.g. `"16px"`)
        - `props.color`: CSS text color

        style:
        - `props.background`: CSS background value
        - `props.borderRadius`: BorderRadius

        hover (`props.hover`, an object):
        - `props.hover.background`: CSS background color on hover
        - `props.hover.color`: CSS text color on hover
        - `props.hover.scale`: number between `1.0` and `1.1` (e.g. `1.05`); `1` means no grow

        Protected props — never mutate:
        - `props.link.url`
        AI_SCHEMA;
    }
}
