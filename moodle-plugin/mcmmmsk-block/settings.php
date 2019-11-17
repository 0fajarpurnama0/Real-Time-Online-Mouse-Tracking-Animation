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

defined('MOODLE_INTERNAL') || die;

$settings->add(new admin_setting_heading(
 'headerconfig',
 get_string('headerconfig', 'block_mcmmmsk'),
 get_string('descconfig', 'block_mcmmmsk')
));

$settings->add(new admin_setting_configcheckbox(
 'mcmmmsk/Allow_HTML',
 get_string('labelallowhtml', 'block_mcmmmsk'),
 get_string('descallowhtml', 'block_mcmmmsk'),
 '1'
));

$allowHTML = get_config('mcmmmsk', 'Allow_HTML');

if ($ADMIN->fulltree) {
	
	// Modification Start
	// This theme's specific features settings.
	
	// Loggings
	
	// Loggings Activator
	$name = 'block_mcmmmsk/logging';
    $title = get_string('logging', 'block_mcmmmsk');
    $description = get_string('loggingdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Default Logging
	$name = 'block_mcmmmsk/default';
    $title = get_string('default', 'block_mcmmmsk');
    $description = get_string('defaultdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Pagetracking Logging
	$name = 'block_mcmmmsk/pagetracking';
    $title = get_string('pagetracking', 'block_mcmmmsk');
    $description = get_string('pagetrackingdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Pagetracking Logging
	$name = 'block_mcmmmsk/roitracking';
    $title = get_string('roitracking', 'block_mcmmmsk');
    $description = get_string('roitrackingdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Sampling Rate Mode
	$name = 'block_mcmmmsk/sampling_rate_mode_checkbox';
    $title = get_string('sampling_rate_mode_checkbox', 'block_mcmmmsk');
    $description = get_string('sampling_rate_mode_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Sampling Rate
	$name = 'block_mcmmmsk/sampling_rate';
    $title = get_string('sampling_rate', 'block_mcmmmsk');
    $description = get_string('sampling_ratedesc', 'block_mcmmmsk');
    $setting = new admin_setting_configtext($name, $title, $description, 0, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Clicks
	$name = 'block_mcmmmsk/mouseclick';
    $title = get_string('mouseclick', 'block_mcmmmsk');
    $description = get_string('mouseclickdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Moves
	$name = 'block_mcmmmsk/mousemove';
    $title = get_string('mousemove', 'block_mcmmmsk');
    $description = get_string('mousemovedesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Scrolls
	$name = 'block_mcmmmsk/mousescroll';
    $title = get_string('mousescroll', 'block_mcmmmsk');
    $description = get_string('mousescrolldesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Keyboard Press
	$name = 'block_mcmmmsk/keyboardpress';
    $title = get_string('keyboardpress', 'block_mcmmmsk');
    $description = get_string('keyboardpressdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Zoom
	$name = 'block_mcmmmsk/zoom';
    $title = get_string('zoom', 'block_mcmmmsk');
    $description = get_string('zoomdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
		// Event Type
	$name = 'block_mcmmmsk/event_type';
    $title = get_string('event_type', 'block_mcmmmsk');
    $description = get_string('event_typedesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Touch
	$name = 'block_mcmmmsk/touch';
    $title = get_string('touch', 'block_mcmmmsk');
    $description = get_string('touchdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Touchmove
	$name = 'block_mcmmmsk/touchmove';
    $title = get_string('touchmove', 'block_mcmmmsk');
    $description = get_string('touchmovedesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Other Loggings
	
	// Tab Status
	$name = 'block_mcmmmsk/tabstatus_checkbox';
    $title = get_string('tabstatus_checkbox', 'block_mcmmmsk');
    $description = get_string('tabstatus_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Name
	$name = 'block_mcmmmsk/name_checkbox';
    $title = get_string('name_checkbox', 'block_mcmmmsk');
    $description = get_string('name_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Email
	$name = 'block_mcmmmsk/email_checkbox';
    $title = get_string('email_checkbox', 'block_mcmmmsk');
    $description = get_string('email_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Window Size
	$name = 'block_mcmmmsk/windowsize_checkbox';
    $title = get_string('windowsize_checkbox', 'block_mcmmmsk');
    $description = get_string('windowsize_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Screen Size
	$name = 'block_mcmmmsk/screensize_checkbox';
    $title = get_string('screensize_checkbox', 'block_mcmmmsk');
    $description = get_string('screensize_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Current URL
	$name = 'block_mcmmmsk/currenturl_checkbox';
    $title = get_string('currenturl_checkbox', 'block_mcmmmsk');
    $description = get_string('currenturl_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// IP Address
	$name = 'block_mcmmmsk/ipaddress_checkbox';
    $title = get_string('ipaddress_checkbox', 'block_mcmmmsk');
    $description = get_string('ipaddress_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Date
	$name = 'block_mcmmmsk/date_checkbox';
    $title = get_string('date_checkbox', 'block_mcmmmsk');
    $description = get_string('date_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Duration
	$name = 'block_mcmmmsk/duration_checkbox';
    $title = get_string('duration_checkbox', 'block_mcmmmsk');
    $description = get_string('duration_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Demo
	$name = 'block_mcmmmsk/demo_checkbox';
    $title = get_string('demo_checkbox', 'block_mcmmmsk');
    $description = get_string('demo_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Page Debug Amount
	$name = 'block_mcmmmsk/page_debug_amount';
    $title = get_string('page_debug_amount', 'block_mcmmmsk');
    $description = get_string('page_debug_amountdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// ROI Debug Amount
	$name = 'block_mcmmmsk/roi_debug_amount';
    $title = get_string('roi_debug_amount', 'block_mcmmmsk');
    $description = get_string('roi_debug_amountdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Show config to user
	$name = 'block_mcmmmsk/user_show_config_checkbox';
    $title = get_string('user_show_config_checkbox', 'block_mcmmmsk');
    $description = get_string('user_show_config_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Automatically save to data to file on fly
	$name = 'block_mcmmmsk/savedatafiledefaulteach_checkbox';
    $title = get_string('savedatafiledefaulteach_checkbox', 'block_mcmmmsk');
    $description = get_string('savedatafiledefaulteach_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Automatically save to data to database on fly
	$name = 'block_mcmmmsk/savedatabasedefaulteach_checkbox';
    $title = get_string('savedatabasedefaulteach_checkbox', 'block_mcmmmsk');
    $description = get_string('savedatabasedefaulteach_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Pagetracking data to database on fly
	$name = 'block_mcmmmsk/pagedatabasedefaulteach_checkbox';
    $title = get_string('pagedatabasedefaulteach_checkbox', 'block_mcmmmsk');
    $description = get_string('pagedatabasedefaulteach_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Roitracking data to file on fly
	$name = 'block_mcmmmsk/roidatabasedefaulteach_checkbox';
    $title = get_string('roidatabasedefaulteach_checkbox', 'block_mcmmmsk');
    $description = get_string('roidatabasedefaulteach_checkboxdesc', 'block_mcmmmsk');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	// Modification End
}
