<?php
 
function xmldb_theme_mcmmmskaclean_upgrade($oldversion) {
    global $CFG, $DB;
 
    $result = TRUE;
    $dbman = $DB->get_manager();
// Insert PHP code from XMLDB Editor here
    if ($oldversion < 2019061100) {

        // Define table theme_mcmmmskaclean to be created.
        $table = new xmldb_table('theme_mcmmmskaclean');

        // Adding fields to table theme_mcmmmskaclean.
        $table->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
        $table->add_field('name', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('email', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('date', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('x', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('y', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('tab', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('duration', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('current_url', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('ip_address', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('samplingmode', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('leftclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('rightclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('middleclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
		$table->add_field('touch', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('keyboardtype', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('scrollx', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('scrolly', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('windowwidth', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('windowheight', XMLDB_TYPE_CHAR, '255', null, null, null, null);
		$table->add_field('screenwidth', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('screenheight', XMLDB_TYPE_CHAR, '255', null, null, null, null);
		$table->add_field('zoom', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('event_type', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('restrictedfocusviewer', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('bubbleview', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('fingertracinglearningsystem', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('cursorreminder', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('transparency', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table->add_field('magnifier', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('textcolor', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table->add_field('backgroundcolor', XMLDB_TYPE_CHAR, '255', null, null, null, null);

        // Adding keys to table theme_mcmmmskaclean.
        $table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));

        // Conditionally launch create table for theme_mcmmmskaclean.
        //if (!$dbman->table_exists($table)) {
            $dbman->create_table($table);
        //}

        // Mcmmmskaclean savepoint reached.
        upgrade_plugin_savepoint(true, 2019061100, 'theme', 'mcmmmskaclean');
    }
 

    return $result;
}
