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
        - `props.icon`: string — icon slug; empty means no icon
        - `props.hasLabel`: boolean — show small corner badge
        - `props.labelText`: string — badge text/HTML
        - `props.labelBg`: CSS color for the badge background
        - `props.labelColor`: CSS color for the badge text

        link:
        - `props.url`: string — link href; **protected, never mutate**
        - `props.linkTarget`: `"_blank"` | `"_self"`

        layout:
        - `props.size`: `"s"` | `"m"` | `"l"` | `"xl"` — preset size token
        - `props.fullWidth`: boolean — stretch button to full cell width
        - `props.buttonAlignment`: `"left"` | `"center"` | `"right"` — align the button in the cell
        - `props.contentAlignment`: `"left"` | `"center"` | `"right"` — align label+icon inside the button
        - `props.iconPosition`: `"left"` | `"right"` — icon side relative to the label
        - `props.iconSize`: CSS height/size of the icon
        - `props.padding`: SpacingValue
        - `props.margin`: SpacingValue

        typography:
        - `props.fontSize`: CSS font size (e.g. `"16px"`)
        - `props.color`: CSS text color

        style:
        - `props.background`: CSS background value
        - `props.borderRadius`: BorderRadius
        - `props.hoverBg`: CSS color on hover
        - `props.hoverColor`: CSS color on hover
        - `props.hoverScale`: number between `1.0` and `1.1` (e.g. `1.05`); `1` means no grow

        Protected props — never mutate:
        - `props.url`
        AI_SCHEMA;
    }
}
