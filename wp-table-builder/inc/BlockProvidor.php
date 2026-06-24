<?php

namespace WPTableBuilder;

use WPTableBuilder\Blocks\BaseBlock;

class BlockProvidor
{
    /** @var class-string<BaseBlock>[] */
    private static $free_blocks = [];

    /** @var class-string<BaseBlock>[] */
    private static $pro_blocks = [];

    /** @return class-string<BaseBlock>[] */
    public static function getFreeBlocks()
    {
        return self::$free_blocks;
    }

    /** @return class-string<BaseBlock>[] */
    public static function getProBlocks()
    {
        return self::$pro_blocks;
    }

    /**
     * @param class-string<BaseBlock> $blockClass
     */
    public static function registerBlock(string $blockClass, bool $pro = false)
    {
        if ($pro) {
            self::$pro_blocks[] = $blockClass;
        } else {
            self::$free_blocks[] = $blockClass;
        }
    }
}
