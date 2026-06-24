<?php

namespace WPTableBuilder\Blocks;

interface BaseBlock
{
    public static function getTitle(): string;

    public static function getName(): string;

    public static function getAISchema(): string;
}
