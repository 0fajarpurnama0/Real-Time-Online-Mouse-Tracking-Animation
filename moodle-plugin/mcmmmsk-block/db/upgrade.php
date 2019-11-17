<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Moodle's block_mcmmmsk is a block plugin which adds trackings of mouse clicks, 
 * mouse movements, mouse scrolls, and keyboards utilizing jquery on assigned page.
 *
 * Published source codes will be available soon.
 *
 * @package   block_mcmmmsk
 * @copyright 2019 Fajar Purnama, Moodle, moodle.org,
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

function xmldb_block_mcmmmsk_upgrade($oldversion) {
    global $CFG, $DB;
 
    $result = TRUE;
    $dbman = $DB->get_manager();
// Insert PHP code from XMLDB Editor here
    if ($oldversion < 2019101100) {

        // Define table block_mcmmmsk to be created.
        $table = new xmldb_table('block_mcmmmsk');

        // Adding fields to table block_mcmmmsk.
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

        // Adding keys to table block_mcmmmsk.
        $table->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));

        // Conditionally launch create table for block_mcmmmsk.
        //if (!$dbman->table_exists($table)) {
            $dbman->create_table($table);
        //}

       // Define table block_mcmmmsk to be created.
        $table_page = new xmldb_table('block_mcmmmsk_page');

        // Adding fields to table block_mcmmmsk.
        $table_page->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
        $table_page->add_field('name', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_page->add_field('email', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_page->add_field('date', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_page->add_field('duration', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_page->add_field('current_url', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_page->add_field('ip_address', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_page->add_field('leftclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_page->add_field('rightclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_page->add_field('middleclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_page->add_field('mousemove', XMLDB_TYPE_TEXT, '255', null, null, null, null);
        $table_page->add_field('scroll', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_page->add_field('keyboardtype', XMLDB_TYPE_CHAR, '255', null, null, null, null);
	$table_page->add_field('zoom', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_page->add_field('active', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_page->add_field('inactive', XMLDB_TYPE_TEXT, null, null, null, null, null);

        // Adding keys to table block_mcmmmsk.
        $table_page->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));

        // Conditionally launch create table for block_mcmmmsk.
        //if (!$dbman->table_exists($table_page)) {
            $dbman->create_table($table_page);
        //}
       // Define table block_mcmmmsk to be created.
        $table_roi = new xmldb_table('block_mcmmmsk_roi');

        // Adding fields to table block_mcmmmsk.
        $table_roi->add_field('id', XMLDB_TYPE_INTEGER, '10', null, XMLDB_NOTNULL, XMLDB_SEQUENCE, null);
        $table_roi->add_field('name', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_roi->add_field('email', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_roi->add_field('date', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_roi->add_field('area', XMLDB_TYPE_TEXT, '255', null, null, null, null);
        $table_roi->add_field('duration', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_roi->add_field('current_url', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_roi->add_field('ip_address', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_roi->add_field('leftclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_roi->add_field('rightclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_roi->add_field('middleclick', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_roi->add_field('mousemove', XMLDB_TYPE_TEXT, '255', null, null, null, null);
        $table_roi->add_field('scroll', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_roi->add_field('keyboardtype', XMLDB_TYPE_CHAR, '255', null, null, null, null);
	$table_roi->add_field('zoom', XMLDB_TYPE_CHAR, '255', null, null, null, null);
        $table_roi->add_field('active', XMLDB_TYPE_TEXT, null, null, null, null, null);
        $table_roi->add_field('inactive', XMLDB_TYPE_TEXT, null, null, null, null, null);

        // Adding keys to table block_mcmmmsk.
        $table_roi->add_key('primary', XMLDB_KEY_PRIMARY, array('id'));

        // Conditionally launch create table for block_mcmmmsk.
        //if (!$dbman->table_exists($table_roi)) {
            $dbman->create_table($table_roi);
        //}
        // mcmmmsk savepoint reached.
        upgrade_plugin_savepoint(true, 2019101100, 'block', 'mcmmmsk');
    }
 

    return $result;
}
