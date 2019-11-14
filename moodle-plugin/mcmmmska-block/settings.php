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
 * Moodle's block_mcmmmska is a block plugin which adds trackings of mouse clicks, 
 * mouse movements, mouse scrolls, and keyboards utilizing jquery on assigned page.
 * This theme also includes DOM animations with the purpose of drawing the eyes
 * to the mouse cursor in order to generate a mouse tracking result closer to eye
 * tracking result.
 *
 * Published source codes will be available soon.
 *
 * @package   block_mcmmmska
 * @copyright 2019 Fajar Purnama, Moodle, moodle.org,
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

$settings->add(new admin_setting_heading(
 'headerconfig',
 get_string('headerconfig', 'block_mcmmmska'),
 get_string('descconfig', 'block_mcmmmska')
));

$settings->add(new admin_setting_configcheckbox(
 'mcmmmska/Allow_HTML',
 get_string('labelallowhtml', 'block_mcmmmska'),
 get_string('descallowhtml', 'block_mcmmmska'),
 '1'
));

$allowHTML = get_config('mcmmmska', 'Allow_HTML');

if ($ADMIN->fulltree) {
	
	// Modification Start
	// This theme's specific features settings.
	
	// Animations
	// Restricted Focus Viewer Imitation
	$name = 'block_mcmmmska/restricted_focus_viewer_imitation_checkbox';
    $title = get_string('restricted_focus_viewer_imitation_checkbox', 'block_mcmmmska');
    $description = get_string('restricted_focus_viewer_imitation_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Bubbleview
	$name = 'block_mcmmmska/bubble_view_imitation_checkbox';
    $title = get_string('bubble_view_imitation_checkbox', 'block_mcmmmska');
    $description = get_string('bubble_view_imitation_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Finger Tracing Learning System
	$name = 'block_mcmmmska/finger_tracing_learning_system_imitation_checkbox';
    $title = get_string('finger_tracing_learning_system_imitation_checkbox', 'block_mcmmmska');
    $description = get_string('finger_tracing_learning_system_imitation_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Transparency Control Hover
	$name = 'block_mcmmmska/transparency_control';
    $title = get_string('transparency_control', 'block_mcmmmska');
    $description = get_string('transparency_controldesc', 'block_mcmmmska');
    $setting = new admin_setting_configtext($name, $title, $description, 100, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Fontsize Magnifier Hover
	$name = 'block_mcmmmska/fontsize_magnifier';
    $title = get_string('fontsize_magnifier', 'block_mcmmmska');
    $description = get_string('fontsize_magnifierdesc', 'block_mcmmmska');
    $setting = new admin_setting_configtext($name, $title, $description, 1, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Background Color Hover Check Box
	$name = 'block_mcmmmska/background_color_checkbox';
    $title = get_string('background_color_checkbox', 'block_mcmmmska');
    $description = get_string('background_color_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Background Color Hover
	$name = 'block_mcmmmska/background_color';
    $title = get_string('background_color', 'block_mcmmmska');
    $description = get_string('background_colordesc', 'block_mcmmmska');
    $setting = new admin_setting_configcolourpicker($name, $title, $description, '#f3fafd');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Text Color Hover
	$name = 'block_mcmmmska/color_checkbox';
    $title = get_string('color_checkbox', 'block_mcmmmska');
    $description = get_string('color_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Text Color Hover
	$name = 'block_mcmmmska/color';
    $title = get_string('color', 'block_mcmmmska');
    $description = get_string('colordesc', 'block_mcmmmska');
    $setting = new admin_setting_configcolourpicker($name, $title, $description, '#001014');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Cursor Reminder
	$name = 'block_mcmmmska/cursor_reminder';
    $title = get_string('cursor_reminder', 'block_mcmmmska');
    $description = get_string('cursor_reminderdesc', 'block_mcmmmska');
    $setting = new admin_setting_configtext($name, $title, $description, 0, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Loggings
	
	// Loggings Activator
	$name = 'block_mcmmmska/logging';
    $title = get_string('logging', 'block_mcmmmska');
    $description = get_string('loggingdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Sampling Rate Mode
	$name = 'block_mcmmmska/sampling_rate_mode_checkbox';
    $title = get_string('sampling_rate_mode_checkbox', 'block_mcmmmska');
    $description = get_string('sampling_rate_mode_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Sampling Rate
	$name = 'block_mcmmmska/sampling_rate';
    $title = get_string('sampling_rate', 'block_mcmmmska');
    $description = get_string('sampling_ratedesc', 'block_mcmmmska');
    $setting = new admin_setting_configtext($name, $title, $description, 0, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Clicks
	$name = 'block_mcmmmska/mouseclick';
    $title = get_string('mouseclick', 'block_mcmmmska');
    $description = get_string('mouseclickdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Moves
	$name = 'block_mcmmmska/mousemove';
    $title = get_string('mousemove', 'block_mcmmmska');
    $description = get_string('mousemovedesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Scrolls
	$name = 'block_mcmmmska/mousescroll';
    $title = get_string('mousescroll', 'block_mcmmmska');
    $description = get_string('mousescrolldesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Keyboard Press
	$name = 'block_mcmmmska/keyboardpress';
    $title = get_string('keyboardpress', 'block_mcmmmska');
    $description = get_string('keyboardpressdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Zoom
	$name = 'block_mcmmmska/zoom';
    $title = get_string('zoom', 'block_mcmmmska');
    $description = get_string('zoomdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
		// Event Type
	$name = 'block_mcmmmska/event_type';
    $title = get_string('event_type', 'block_mcmmmska');
    $description = get_string('event_typedesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Touch
	$name = 'block_mcmmmska/touch';
    $title = get_string('touch', 'block_mcmmmska');
    $description = get_string('touchdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Touchmove
	$name = 'block_mcmmmska/touchmove';
    $title = get_string('touchmove', 'block_mcmmmska');
    $description = get_string('touchmovedesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Other Loggings
	
	// Tab Status
	$name = 'block_mcmmmska/tabstatus_checkbox';
    $title = get_string('tabstatus_checkbox', 'block_mcmmmska');
    $description = get_string('tabstatus_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Name
	$name = 'block_mcmmmska/name_checkbox';
    $title = get_string('name_checkbox', 'block_mcmmmska');
    $description = get_string('name_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Email
	$name = 'block_mcmmmska/email_checkbox';
    $title = get_string('email_checkbox', 'block_mcmmmska');
    $description = get_string('email_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Window Size
	$name = 'block_mcmmmska/windowsize_checkbox';
    $title = get_string('windowsize_checkbox', 'block_mcmmmska');
    $description = get_string('windowsize_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Screen Size
	$name = 'block_mcmmmska/screensize_checkbox';
    $title = get_string('screensize_checkbox', 'block_mcmmmska');
    $description = get_string('screensize_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Current URL
	$name = 'block_mcmmmska/currenturl_checkbox';
    $title = get_string('currenturl_checkbox', 'block_mcmmmska');
    $description = get_string('currenturl_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// IP Address
	$name = 'block_mcmmmska/ipaddress_checkbox';
    $title = get_string('ipaddress_checkbox', 'block_mcmmmska');
    $description = get_string('ipaddress_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Date
	$name = 'block_mcmmmska/date_checkbox';
    $title = get_string('date_checkbox', 'block_mcmmmska');
    $description = get_string('date_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Duration
	$name = 'block_mcmmmska/duration_checkbox';
    $title = get_string('duration_checkbox', 'block_mcmmmska');
    $description = get_string('duration_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Demo
	$name = 'block_mcmmmska/demo_checkbox';
    $title = get_string('demo_checkbox', 'block_mcmmmska');
    $description = get_string('demo_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Show config to user
	$name = 'block_mcmmmska/user_show_config_checkbox';
    $title = get_string('user_show_config_checkbox', 'block_mcmmmska');
    $description = get_string('user_show_config_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Automatically save to data to file on fly
	$name = 'block_mcmmmska/savedatafiledefaulteach_checkbox';
    $title = get_string('savedatafiledefaulteach_checkbox', 'block_mcmmmska');
    $description = get_string('savedatafiledefaulteach_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Automatically save to data to file on fly
	$name = 'block_mcmmmska/savedatabasedefaulteach_checkbox';
    $title = get_string('savedatabasedefaulteach_checkbox', 'block_mcmmmska');
    $description = get_string('savedatabasedefaulteach_checkboxdesc', 'block_mcmmmska');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	// Modification End
}
