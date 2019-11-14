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
 * Moodle's mcmmmskaClean theme, is a modification Clean theme which adds trackings
 * of mouse clicks, mouse movements, mouse scrolls, and keyboards utilizing jquery.
 * This theme also includes DOM animations with the purpose of drawing the eyes
 * to the mouse cursor in order to generate a mouse tracking result closer to eye
 * tracking result.
 *
 * Published source codes will be available soon.
 *
 * @package   theme_mcmmmskaclean
 * @copyright 2018 Fajar Purnama, Moodle, moodle.org,
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {

    // Invert Navbar to dark background.
    $name = 'theme_mcmmmskaclean/invert';
    $title = get_string('invert', 'theme_mcmmmskaclean');
    $description = get_string('invertdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Logo file setting.
    $name = 'theme_mcmmmskaclean/logo';
    $title = get_string('logo','theme_mcmmmskaclean');
    $description = get_string('logodesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configstoredfile($name, $title, $description, 'logo');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Small logo file setting.
    $name = 'theme_mcmmmskaclean/smalllogo';
    $title = get_string('smalllogo', 'theme_mcmmmskaclean');
    $description = get_string('smalllogodesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configstoredfile($name, $title, $description, 'smalllogo');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Show site name along with small logo.
    $name = 'theme_mcmmmskaclean/sitename';
    $title = get_string('sitename', 'theme_mcmmmskaclean');
    $description = get_string('sitenamedesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Custom CSS file.
    $name = 'theme_mcmmmskaclean/customcss';
    $title = get_string('customcss', 'theme_mcmmmskaclean');
    $description = get_string('customcssdesc', 'theme_mcmmmskaclean');
    $default = '';
    $setting = new admin_setting_configtextarea($name, $title, $description, $default);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Footnote setting.
    $name = 'theme_mcmmmskaclean/footnote';
    $title = get_string('footnote', 'theme_mcmmmskaclean');
    $description = get_string('footnotedesc', 'theme_mcmmmskaclean');
    $default = '';
    $setting = new admin_setting_confightmleditor($name, $title, $description, $default);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Modification Start
	// This theme's specific features settings.
	
	// Animations
	// Restricted Focus Viewer Imitation
	$name = 'theme_mcmmmskaclean/restricted_focus_viewer_imitation_checkbox';
    $title = get_string('restricted_focus_viewer_imitation_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('restricted_focus_viewer_imitation_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Bubbleview
	$name = 'theme_mcmmmskaclean/bubble_view_imitation_checkbox';
    $title = get_string('bubble_view_imitation_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('bubble_view_imitation_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Finger Tracing Learning System
	$name = 'theme_mcmmmskaclean/finger_tracing_learning_system_imitation_checkbox';
    $title = get_string('finger_tracing_learning_system_imitation_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('finger_tracing_learning_system_imitation_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Transparency Control Hover
	$name = 'theme_mcmmmskaclean/transparency_control';
    $title = get_string('transparency_control', 'theme_mcmmmskaclean');
    $description = get_string('transparency_controldesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configtext($name, $title, $description, 100, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Fontsize Magnifier Hover
	$name = 'theme_mcmmmskaclean/fontsize_magnifier';
    $title = get_string('fontsize_magnifier', 'theme_mcmmmskaclean');
    $description = get_string('fontsize_magnifierdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configtext($name, $title, $description, 1, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Background Color Hover Check Box
	$name = 'theme_mcmmmskaclean/background_color_checkbox';
    $title = get_string('background_color_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('background_color_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Background Color Hover
	$name = 'theme_mcmmmskaclean/background_color';
    $title = get_string('background_color', 'theme_mcmmmskaclean');
    $description = get_string('background_colordesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcolourpicker($name, $title, $description, '#f3fafd');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Text Color Hover
	$name = 'theme_mcmmmskaclean/color_checkbox';
    $title = get_string('color_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('color_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Text Color Hover
	$name = 'theme_mcmmmskaclean/color';
    $title = get_string('color', 'theme_mcmmmskaclean');
    $description = get_string('colordesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcolourpicker($name, $title, $description, '#001014');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Cursor Reminder
	$name = 'theme_mcmmmskaclean/cursor_reminder';
    $title = get_string('cursor_reminder', 'theme_mcmmmskaclean');
    $description = get_string('cursor_reminderdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configtext($name, $title, $description, 0, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Loggings
	
	// Loggings Activator
	$name = 'theme_mcmmmskaclean/logging';
    $title = get_string('logging', 'theme_mcmmmskaclean');
    $description = get_string('loggingdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Sampling Rate Mode
	$name = 'theme_mcmmmskaclean/sampling_rate_mode_checkbox';
    $title = get_string('sampling_rate_mode_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('sampling_rate_mode_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Sampling Rate
	$name = 'theme_mcmmmskaclean/sampling_rate';
    $title = get_string('sampling_rate', 'theme_mcmmmskaclean');
    $description = get_string('sampling_ratedesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configtext($name, $title, $description, 0, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Clicks
	$name = 'theme_mcmmmskaclean/mouseclick';
    $title = get_string('mouseclick', 'theme_mcmmmskaclean');
    $description = get_string('mouseclickdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Moves
	$name = 'theme_mcmmmskaclean/mousemove';
    $title = get_string('mousemove', 'theme_mcmmmskaclean');
    $description = get_string('mousemovedesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Scrolls
	$name = 'theme_mcmmmskaclean/mousescroll';
    $title = get_string('mousescroll', 'theme_mcmmmskaclean');
    $description = get_string('mousescrolldesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Keyboard Press
	$name = 'theme_mcmmmskaclean/keyboardpress';
    $title = get_string('keyboardpress', 'theme_mcmmmskaclean');
    $description = get_string('keyboardpressdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Zoom
	$name = 'theme_mcmmmskaclean/zoom';
    $title = get_string('zoom', 'theme_mcmmmskaclean');
    $description = get_string('zoomdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
		// Event Type
	$name = 'theme_mcmmmskaclean/event_type';
    $title = get_string('event_type', 'theme_mcmmmskaclean');
    $description = get_string('event_typedesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Touch
	$name = 'theme_mcmmmskaclean/touch';
    $title = get_string('touch', 'theme_mcmmmskaclean');
    $description = get_string('touchdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Touchmove
	$name = 'theme_mcmmmskaclean/touchmove';
    $title = get_string('touchmove', 'theme_mcmmmskaclean');
    $description = get_string('touchmovedesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Other Loggings
	
	// Tab Status
	$name = 'theme_mcmmmskaclean/tabstatus_checkbox';
    $title = get_string('tabstatus_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('tabstatus_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Name
	$name = 'theme_mcmmmskaclean/name_checkbox';
    $title = get_string('name_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('name_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Email
	$name = 'theme_mcmmmskaclean/email_checkbox';
    $title = get_string('email_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('email_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Window Size
	$name = 'theme_mcmmmskaclean/windowsize_checkbox';
    $title = get_string('windowsize_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('windowsize_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Screen Size
	$name = 'theme_mcmmmskaclean/screensize_checkbox';
    $title = get_string('screensize_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('screensize_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Current URL
	$name = 'theme_mcmmmskaclean/currenturl_checkbox';
    $title = get_string('currenturl_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('currenturl_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// IP Address
	$name = 'theme_mcmmmskaclean/ipaddress_checkbox';
    $title = get_string('ipaddress_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('ipaddress_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Date
	$name = 'theme_mcmmmskaclean/date_checkbox';
    $title = get_string('date_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('date_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Duration
	$name = 'theme_mcmmmskaclean/duration_checkbox';
    $title = get_string('duration_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('duration_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Demo
	$name = 'theme_mcmmmskaclean/demo_checkbox';
    $title = get_string('demo_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('demo_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Show config to user
	$name = 'theme_mcmmmskaclean/user_show_config_checkbox';
    $title = get_string('user_show_config_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('user_show_config_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Automatically save to data to file on fly
	$name = 'theme_mcmmmskaclean/savedatafiledefaulteach_checkbox';
    $title = get_string('savedatafiledefaulteach_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('savedatafiledefaulteach_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Automatically save to data to file on fly
	$name = 'theme_mcmmmskaclean/savedatabasedefaulteach_checkbox';
    $title = get_string('savedatabasedefaulteach_checkbox', 'theme_mcmmmskaclean');
    $description = get_string('savedatabasedefaulteach_checkboxdesc', 'theme_mcmmmskaclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	// Modification End
}
