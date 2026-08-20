=== WP Table Builder – Drag & Drop Table Builder ===
Contributors: dotcamp, wptb, imtiazrayhan, istiakrayhan, permafrost06, erdembircan, protibimbok, ultimateblocks, wpcdplugin, wpleaders1
Tags: table, table builder, drag and drop
Requires at least: 4.9
Tested up to: 7.0
Stable tag: 2.2.1
Requires PHP: 7.4
License: GPL3+
License URI: http://www.gnu.org/licenses/gpl-3.0.txt
Donate Link: https://www.paypal.me/imtiazrayhan/

Drag and Drop Table Builder Plugin. Build Responsive Tables Easily.

== Description ==

[Plugin Demo](https://wptablebuilder.com/demo-tables/) | [Documentation](https://wptablebuilder.com/docs/) | [Support](https://wptablebuilder.com/support/) | [Tutorials](https://wptablebuilder.com/blog/) | [Get Pro](https://wptablebuilder.com/pricing/)

WP Table Builder is a drag and drop table builder plugin for WordPress. It's insanely easy to create responsive tables with WP Table Builder.

WP Table Builder is perfect for creating comparison tables, pricing tables, list tables and many more.

The builder comes with 7 elements right now. You can add the following elements in a table:

* Text
* Image
* List
* Button
* Star Rating
* Custom HTML
* Shortcode

All the elements come with customization options of their own.

We have a cell management mode which comes with options like Add New Row, Add New Column, Merge Cells, Split Cells and many more.

## How to Use

https://www.youtube.com/watch?v=VAU-i6RvXSI

After you install the plugin, you will see a Table Builder menu. Go to Table Builder > Add New.

You will be able select column number and row number. Once you select that, click on Generate. The table will be generated.

You can then drag and drop elements from the left panel into the table cells. Once you are done adding and editing elements, click on Save to save the tables.

After the table is saved, you can embed it in post and pages by using a shortcode. Click on 'Embed' on the top to get the shortcode.

You can also get the shortcode from the 'All Tables' list under 'Table Builder' menu.

## Import Tables

You can import tables from CSV or XML files. You can import both single and multiple CSV or XML files. Multiple files will have to be zipped.

You can also import tables from TablePress plugin.

## Export Tables

Just like importing you can export the tables to CSV or XML files.

If you are looking to move tables created with WP Table Builder to another site, XML is the better choice as it will preserve table settings.

== Frequently Asked Questions ==

= Installation Instructions =

Please remember you MUST have PHP 5.6+ to be able to use this plugin.

1. Upload the plugin zip file via the plugin page of WordPress by clicking 'Add New' and selecting the zip from your local computer.
2. Activate the plugins through the Plugins menu in WordPress.

That's it. You're done!

## Join Us To Get Updates and Resources

* [Visit WP Table Builder Website](https://wptablebuilder.com/)
* [Documentation](https://wptablebuilder.com/docs/)
* [Support](https://wptablebuilder.com/support/)
* [Tutorials](https://wptablebuilder.com/blog/)
* [WP Table Builder Support Community](https://wptablebuilder.com/community/)
* [Follow Us on Twitter](https://twitter.com/wptbplugin)
* [Join Our Facebook Group](https://www.facebook.com/groups/497986907442780/)

== Screenshots ==

1. New Table.
2. Table Interface
3. Images in the Table.
4. Lists in the Table.
5. Star Ratings in the Table.
6. Buttons in the Table.
7. Customize the Table.
8. Responsive Tables.

== Changelog ==

= 2.2.1 =
* NEW: Welcome page shown after activation
* NEW: Bulk delete for tables in the trash
* IMPROVE: Redesigned export page
* IMPROVE: Import and export feedback is now shown in page
* FIX: Import failures on zip files
* FIX: Default font size on text blocks
* FIX: Security improvements
* [PRO] FIX: Pro is deactivated when the free plugin is deactivated

= 2.2.0 =
* NEW: Font system with font selection for text blocks
* NEW: Border radius option for the whole table
* [PRO] NEW: Added option to choose which row/col should be sticky
* [PRO] NEW: Added offset for sticky row/col
* IMPROVE: Updated link picker design and rel options
* IMPROVE: Min-width and scroll for the builder view
* IMPROVE: Moved AI sidebar below toolbar
* FIX: Button font size in the editor

= 2.1.18 =
* IMPROVE: Control panel open by default

= 2.1.17 =
* IMPROVE: Improved ergonomics

= 2.1.16 =
* NEW: AI builder for editing tables with natural language
* IMPROVE: Allow forms and relative elements in html
* IMPROVE: Improved performance when changing table's props

= 2.1.15 =
* IMPROVE: More flexibility in custom styles
* FIX: Default inner border applies on new tables
* FIX: Restore `wptb-cell` class on table cells
* FIX: Allow `src` and `title` attributes on input elements

= 2.1.14 =
* NEW: Content distribution options
* NEW: Optional "Powered by WP Table Builder" attribution setting
* IMPROVE: Undo support in radio group controls
* IMPROVE: Table list search matches table ID and shortcode
* FIX: Button padding applies correctly to the button background
* FIX: Security improvements
* FIX: Issues when site has trailing slash redirection enabled

= 2.1.13 =
* FIX: Saving link target as same window (This window)
* FIX: Row styles shifting when inserting a new row
* IMPROVE: Link target control uses a switch for clearer choices

= 2.1.12 =
* NEW: Vertical alignment options per row and column
* FIX: Ctrl+Z in the editor no longer clears unsaved changes
* FIX: Sticky row and column behavior with horizontal scroll enabled

= 2.1.11 =
* NEW: Option to use TH cells for the first row
* FIX: Image width and links preservation
* FIX: Purge frontend cache when a table is updated
* FIX: Table preview layout in the builder
* FIX: Preserve link colors

= 2.1.10 =
* FIX: strikethrough and text-align not saving

= 2.1.9 =
* FIX: Sorting edge case when string starts with a number
* FIX: HTML purifier warnings

= 2.1.8 =
* FIX: Security improvements

= 2.1.7 =
* FIX: Table style not working in gutenberg

= 2.1.6 =
* FIX: Sticky first row & column
* FIX: Sort buttons becoming hidden in some sites
* FIX: Custom styles not working in some cases

= 2.1.5 =
* FIX: Saving as template
* FIX: Corner Ribbon Style
* FIX: Table preview width not responding to change in the builder
* FIX: Saving floating point percentage in circle rating & progress bar
* FIX: Hide column on mobile is not working
* FIX: Shortcode not working properly in the frontend
* IMPROVE: Added padding option for the whole table

= 2.1.4 =
* IMPROVE: Individual item color and icon options for styled list items
* IMPROVE: Individual item color option for list
* IMPROVE: Persist formatting and links between copy-paste
* FIX: Text color getting overridden
* FIX: Image lazy loading

= 2.1.3 =
* FIX: Unordered list displaying as ordered
* FIX: List Item text breaking
* FIX: PHP Compatibility issue
* FIX: Improved style isolation
* IMPROVE: Added recovery option for corrupted tables

= 2.1.2 =
* FIX: Version sync from 2.0.x
* IMPROVE: Include file hash in the assets url
* FIX: Responsiveness not working on some edge cases
* FIX: Default odd/even colors in responsive mode
* FIX: Import export functionality
* FIX: Tags functionality
* FIX: Padding not parsing properly
* FIX: Improve row background specificity
* FIX: saving & rendering circle rating type properly

= 2.1.1 = 
* Re upload to wordpress

= 2.1.0 =
* IMPROVE: Removed legacy code and builder
* IMPROVE: Custom style preview is available in the builder
* IMPROVE: Search preview is available in the builder
* IMPROVE: Improved row/column moving UX
* FIX: Colors losing their alpha value
* FIX: Allow adding image from url
* FIX: Table inner border getting lost in some tables
* FIX: Border Color becoming transparent on reset
* FIX: Prevent error when saving table in some sites

= 2.0.20 = 
* FIX: Securiy improvements

= 2.0.19 =
* IMPROVE: Added support for media queries in custom styles
* FIX: Some tables becoming small in mobile devices

= 2.0.18 =
* FIX: Sticky first column not persisting
* FIX: Table spacing not working properly for large tables
* FIX: Incorrect versions are shown in the rollback option
* FIX: Error when saving shortcode element
* FIX: Device detection logic for responsiveness
* IMPROVE: Hard limit highlight scaling between 100-105%
* IMPROVE: Make the default items per head = 1 for mobile

= 2.0.17 =
* FIX: Scrollable in mobile devices when responsive is enabled
* PRO: FIX: Search & Sort feature not working properly

= 2.0.16 =
* FIX: Re-implement responsive algorithm to cover all tables
* FIX: Disable max width not working properly
* FIX: Cell background not working properly in responsive mode
* FIX: Potential issue with cell border & radius
* IMPROVE: Mobile Device starts from 375px
* IMPROVE: Couple responsive tab with device preview button
* IMPROVE: Updated edit table label in gutenberg
* IMPROVE: Font size inconsistency in some websites
* IMPROVE: Updated patterns
* PRO: IMPROVE: Added border radius in badge

= 2.0.15 =
* FIX: Redo/Undo breaks the editor with more than 30 rows
* FIX: Updated the plugin title
* FIX: Responsiveness edge case with single row

= 2.0.14 =
* IMPROVE: Display proper message in table import page
* FIX: Some options in the responsive settings not loading properly
* FIX: Potential error in some setup caused by lazy load manager
* FIX: Responsive preview breaks if the repeated row/col has span
* FIX: Error when notifying from inside a dispatch

= 2.0.13 =
* FIX: XSS Vulnerability
* FIX: Header Inner Border option always loads as enabled
* FIX: Incorrect table structure when has span in gutenberg preview

= 2.0.12 =
* FIX: Disable theme style not loading correctly
* FIX: Corner Ribbon not styled correctly when positioned right
* FIX: Added logo in the gutenberg block
* FIX: Special chars not displaying correctly in some table list
* FIX: Updated Freemius sdk to 2.12.1
* IMPROVE: Render large tables
* IMPROVE: Changed table font style label
* IMPROVE: Color picker consistency in border control
* IMPROVE: Make hex the default color format
* IMPROVE: Added label in the embed button

= 2.0.11 =
* FIX: _load_textdomain_just_in_time warning

= 2.0.10 =
* FIX: Rollback textdomain notice fix because it was causing a lot of issues
* PRO: FIX: Circle rating 100% renders empty circle

= 2.0.8 =
* FIX: _load_textdomain_just_in_time notice no longer appears

= 2.0.7 =
* FIX: Improved XSS security
* FIX: Potential path traversal vulnerability
* FIX: ZIP not importing in UNIX systems
* FIX: Dynamic roles in allowed roles option
* FIX: Import CSV without delimiter
* FIX: Preview not working in some cases
* FIX: Responsive preview not working properly
* FIX: Different sizes in builder & frontend on some cases
* FIX: headers already sent warning
* IMPROVE: Updated Freemius sdk

= 2.0.6 =
* FIX: Fixed XSS issue
* FIX: Fixed undefined array key & stdClass warning

= 2.0.5 =
* FIX: 'h.json' not found error on table list Actions
* FIX: broken special chars in table list title
* FIX: Column becomes hidden if width is 0
* FIX: Error when different instance of same block is selected right after one another
* FIX: Improved XSS protection
* IMPROVE: Remove hover styles from the preview

= 2.0.4 =
* FIX: Loading tables & patterns despite permalink config
* FIX: target attribute getting removed in custom html
* FIX: Frontend assets loading after every update
* FIX: Column sizing when fixed width is set with colspan
* FIX: Saving linkrel of image & button
* FIX: Display button size accurately in the editor
* FIX: Star rating block displaying more than 2 digits

= 2.0.3 =
* FIX: Rest route warning
* FIX: Image link label
* FIX: Undefined key warning: isEmpty, stickyTopRow

= 2.0.2 =
* FIX: New builder not visible to non admin users
* FIX: Tags functionality was missing
* FIX: Theme color not applying properly
* FIX: Link url not updating
* FIX: Improved ColorPicker UX
* IMPROVE: Ability to temporarily switch to the old builder
* PRO: FIX: Added save as template option

= 2.0.1 =
* FIX: remove nullsafe operator (php 7.4)
* FIX: New table page link in toolbar

= 2.0.0 =
* Introduced the new builder
* FIX: Undefined key: highlighted warning
* FIX: Some html getting corrupted in xss protection
* FIX: Possible XSS vulnerability
* FIX: Allow youtube embeds in iframe
