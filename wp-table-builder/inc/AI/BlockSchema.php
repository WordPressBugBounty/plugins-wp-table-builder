<?php

namespace WPTableBuilder\AI;

use WPTableBuilder\BlockProvidor;

class BlockSchema
{
    public static function get_structural(): array
    {
        return [
            'table' => <<<AI_SCHEMA
                Props:

                structure (protected — never mutate directly; use insert/delete on row/cell children instead):
                - `props.colCount`: number — total columns
                - `props.rowCount`: number — total rows

                layout:
                - `props.alignment`: `"left"` | `"center"` | `"right"` — horizontal alignment of the table on the page
                - `props.cellPadding`: CSS spacing inside every cell
                - `props.cellMinWidth`: CSS min-width applied to every cell
                - `props.colSpacing`: CSS spacing between columns
                - `props.rowSpacing`: CSS spacing between rows
                - `props.padding`: SpacingValue — padding around the table
                - `props.enableMaxWidth`: boolean — clamp the table width
                - `props.maxWidth`: CSS width (used when `enableMaxWidth` is true)
                - `props.contentDistribution`: `"space-between"` | `"space-around"` | `"space-evenly"` — default cell content distribution

                typography:
                - `props.fontColor`: CSS color — default text color for cells
                - `props.linkColor`: CSS color for anchor tags inside cells
                - `props.fontSize`: CSS font size — default font size for cell content

                style:
                - `props.tableBorder`: Border — outer border around the table
                - `props.enableInnerBorder`: boolean — show inner borders
                - `props.innerBorder`: Border — inner grid border style
                - `props.headerInnerBorder`: boolean — apply inner border under header row
                - `props.innerBorderRadius`: BorderRadius — inner border radius
                - `props.separateRowCol`: boolean — separate row/column borders
                - `props.rowBorderOnly`: boolean — only render row borders
                - `props.columnBorderOnly`: boolean — only render column borders

                colors:
                - `props.headerBg`: CSS color for the header row background
                - `props.evenRowBg`: CSS color for even row backgrounds
                - `props.oddRowBg`: CSS color for odd row backgrounds
                - `props.hoverHeaderBg`: CSS color on header hover
                - `props.hoverEvenRowBg`: CSS color on even-row hover
                - `props.hoverOddRowBg`: CSS color on odd-row hover

                behavior:
                - `props.sortHorizontal`: `{ enable, by?, order? }` — horizontal sorting config
                - `props.sortVertical`: `{ enable, by?, order? }` — vertical sorting config
                - `props.scrollX`: boolean — enable horizontal scroll
                - `props.useThForFirstRow`: boolean — render the first row using `<th>` cells
                - `props.stickyFirstColumn`: boolean — sticky first column
                - `props.stickyTopRow`: boolean — sticky top row
                - `props.paginationEnable`: boolean — enable pagination
                - `props.paginationTopRowAsHeader`: boolean — keep top row as header across pages
                - `props.rowsPerPage`: number — page size
                - `props.dyanamicPageSize`: boolean — adapt page size to viewport (key spelling is historical)
                - `props.searchEnable`: boolean — enable search input
                - `props.searchKeepHeader`: boolean — keep header visible while searching
                - `props.searchPosition`: string — placement of the search input

                advanced:
                - `props.role`: string — ARIA role override
                - `props.disableThemeStyles`: boolean — strip theme defaults
                - `props.extraStyles`: string — raw extra CSS scoped to the table
                - `props.showPoweredByBadge`: boolean — show the "Powered by" footer badge
                - `props.responsive`: `{ enable, widthTarget: "window"|"container", mobile, tablet }` — responsive configuration

                Children:
                - Only `row` nodes are valid children. To add a new row, emit an `insert` with `parentId` = this table\'s id and `block.name` = `"row"`.'
                AI_SCHEMA,

            'row' => <<<AI_SCHEMA
                Props:
                - `props.background`: CSS color for the row background
                - `props.height`: CSS height of the row (e.g. `"40px"`)
                - `props.vAlign`: `"top"` | `"middle"` | `"bottom"` — vertical alignment of cell content
                - `props.highlight`: boolean — emphasize this row
                - `props.highlightScale`: number — scale factor when highlighted (e.g. `1.05`)

                Children:
                - A row\'s children are exactly its `cell` nodes. Cells are structural — they cannot be inserted, moved, or deleted via ops here.
                - **Rows themselves never accept block inserts.** To place a block in this row, set `parentId` to one of this row\'s `cell` ids (visible in the Current UI Tree).',

                            'column' => <<<AI_SCHEMA
                Column nodes appear in the UI Tree as direct children of the table, before the rows, with ids `"@table-col-0"`, `"@table-col-1"`, etc.

                Props (column-level — stored on the column node, NOT on individual cells):
                - `props.width`: CSS width (e.g. `"120px"`, `"20%"`)
                - `props.vAlign`: `"top"` | `"middle"` | `"bottom"` — vertical alignment of cell content
                - `props.contentDistribution`: `"space-between"` | `"space-around"` | `"space-evenly"`
                - `props.highlight`: boolean — visually emphasize the whole column
                - `props.highlightScale`: number — scale factor when highlighted (e.g. `1.05`)
                - `props.hideOnMobile`: boolean — hide the entire column on mobile viewports

                Operation guide — three distinct scenarios:

                1. **Column-level props** (`width`, `highlight`, `vAlign`, `contentDistribution`, `hideOnMobile`, `highlightScale`):
                   → `update` the column node directly: `{ "op": "update", "id": "@table-col-N", "props": { ... } }`

                2. **Per-cell visual props for every cell in the column** (`background`, `border`, `hoverBg`, `rowspan`, `colspan`):
                   → `update` each individual cell whose `props._col === N` — do NOT target the column node for these.

                3. **Insert content blocks into cells of the column**:
                   → `insert` into each cell whose `props._col === N` as the `parentId` — never target the column node for inserts.

                Columns cannot be inserted, deleted, moved, or copied via ops — use `addColumn` / `removeColumn` instead.
                AI_SCHEMA,

            'cell' => <<<AI_SCHEMA
                Props:

                position (protected — never mutate; for reference only):
                - `props._row`: number — 0-based row index
                - `props._col`: number — 0-based column index

                merge:
                - `props.colspan`: number — number of columns this cell spans
                - `props.rowspan`: number — number of rows this cell spans
                - `props.isEmpty`: boolean — true when this cell is the empty side of a merge
                - `props.isNotACell`: boolean — true when this slot is consumed by a neighboring rowspan/colspan

                style:
                - `props.background`: CSS color for the cell background
                - `props.hoverBg`: CSS color on hover
                - `props.border`: Border — per-cell border override
                - `props.vAlign`: `"top"` | `"middle"` | `"bottom"` — vertical alignment of inner content
                - `props.contentDistribution`: `"space-between"` | `"space-around"` | `"space-evenly"`

                sorting:
                - `props.sortedVertical`: boolean — currently sorted by vertical
                - `props.sortedHorizontal`: boolean — currently sorted by horizontal

                responsive:
                - `props.responsive`: `{ isVisible?, colspan?, rowspan? }` — per-device overrides

                Children:
                - A cell may hold any registered content block (`text`, `list`, `button`, `image`, …). To add, move, copy, or delete a block inside a row, target this cell\'s id — never the surrounding row\'s id.
                AI_SCHEMA,
        ];
    }

    public static function get_all(bool $is_pro = false): array
    {
        $result = [];

        foreach (BlockProvidor::getFreeBlocks() as $blockClass) {
            $schema = trim($blockClass::getAISchema());
            if ($schema !== '') {
                $result[$blockClass::getName()] = $schema;
            }
        }

        if ($is_pro) {
            foreach (BlockProvidor::getProBlocks() as $blockClass) {
                $schema = trim($blockClass::getAISchema());
                if ($schema !== '') {
                    $result[$blockClass::getName()] = $schema;
                }
            }
        }

        return $result;
    }

}
