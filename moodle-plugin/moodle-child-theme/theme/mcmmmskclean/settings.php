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
 * Moodle's mcmmmskClean theme, is a modification Clean theme which adds trackings
 * of mouse clicks, mouse movements, mouse scrolls, and keyboards utilizing jquery.
 * Published source codes will be available soon.
 *
 * @package   theme_mcmmmskclean
 * @copyright 2018 Fajar Purnama, Moodle, moodle.org,
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {

    // Invert Navbar to dark background.
    $name = 'theme_mcmmmskclean/invert';
    $title = get_string('invert', 'theme_mcmmmskclean');
    $description = get_string('invertdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Logo file setting.
    $name = 'theme_mcmmmskclean/logo';
    $title = get_string('logo','theme_mcmmmskclean');
    $description = get_string('logodesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configstoredfile($name, $title, $description, 'logo');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Small logo file setting.
    $name = 'theme_mcmmmskclean/smalllogo';
    $title = get_string('smalllogo', 'theme_mcmmmskclean');
    $description = get_string('smalllogodesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configstoredfile($name, $title, $description, 'smalllogo');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Show site name along with small logo.
    $name = 'theme_mcmmmskclean/sitename';
    $title = get_string('sitename', 'theme_mcmmmskclean');
    $description = get_string('sitenamedesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Custom CSS file.
    $name = 'theme_mcmmmskclean/customcss';
    $title = get_string('customcss', 'theme_mcmmmskclean');
    $description = get_string('customcssdesc', 'theme_mcmmmskclean');
    $default = '';
    $setting = new admin_setting_configtextarea($name, $title, $description, $default);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

    // Footnote setting.
    $name = 'theme_mcmmmskclean/footnote';
    $title = get_string('footnote', 'theme_mcmmmskclean');
    $description = get_string('footnotedesc', 'theme_mcmmmskclean');
    $default = '';
    $setting = new admin_setting_confightmleditor($name, $title, $description, $default);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Modification Start
	// This theme's specific features settings.
	
	// Loggings
	
	// Loggings Activator
	$name = 'theme_mcmmmskclean/logging';
    $title = get_string('logging', 'theme_mcmmmskclean');
    $description = get_string('loggingdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 1);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Sampling Rate Mode
	$name = 'theme_mcmmmskclean/sampling_rate_mode_checkbox';
    $title = get_string('sampling_rate_mode_checkbox', 'theme_mcmmmskclean');
    $description = get_string('sampling_rate_mode_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Sampling Rate
	$name = 'theme_mcmmmskclean/sampling_rate';
    $title = get_string('sampling_rate', 'theme_mcmmmskclean');
    $description = get_string('sampling_ratedesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configtext($name, $title, $description, 0, PARAM_INT, 11);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Clicks
	$name = 'theme_mcmmmskclean/mouseclick';
    $title = get_string('mouseclick', 'theme_mcmmmskclean');
    $description = get_string('mouseclickdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Moves
	$name = 'theme_mcmmmskclean/mousemove';
    $title = get_string('mousemove', 'theme_mcmmmskclean');
    $description = get_string('mousemovedesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Mouse Scrolls
	$name = 'theme_mcmmmskclean/mousescroll';
    $title = get_string('mousescroll', 'theme_mcmmmskclean');
    $description = get_string('mousescrolldesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Keyboard Press
	$name = 'theme_mcmmmskclean/keyboardpress';
    $title = get_string('keyboardpress', 'theme_mcmmmskclean');
    $description = get_string('keyboardpressdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Zoom
	$name = 'theme_mcmmmskclean/zoom';
    $title = get_string('zoom', 'theme_mcmmmskclean');
    $description = get_string('zoomdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
		// Event Type
	$name = 'theme_mcmmmskclean/event_type';
    $title = get_string('event_type', 'theme_mcmmmskclean');
    $description = get_string('event_typedesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Touch
	$name = 'theme_mcmmmskclean/touch';
    $title = get_string('touch', 'theme_mcmmmskclean');
    $description = get_string('touchdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Touchmove
	$name = 'theme_mcmmmskclean/touchmove';
    $title = get_string('touchmove', 'theme_mcmmmskclean');
    $description = get_string('touchmovedesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Other Loggings
	
	// Tab Status
	$name = 'theme_mcmmmskclean/tabstatus_checkbox';
    $title = get_string('tabstatus_checkbox', 'theme_mcmmmskclean');
    $description = get_string('tabstatus_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Name
	$name = 'theme_mcmmmskclean/name_checkbox';
    $title = get_string('name_checkbox', 'theme_mcmmmskclean');
    $description = get_string('name_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Email
	$name = 'theme_mcmmmskclean/email_checkbox';
    $title = get_string('email_checkbox', 'theme_mcmmmskclean');
    $description = get_string('email_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Window Size
	$name = 'theme_mcmmmskclean/windowsize_checkbox';
    $title = get_string('windowsize_checkbox', 'theme_mcmmmskclean');
    $description = get_string('windowsize_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Screen Size
	$name = 'theme_mcmmmskclean/screensize_checkbox';
    $title = get_string('screensize_checkbox', 'theme_mcmmmskclean');
    $description = get_string('screensize_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Current URL
	$name = 'theme_mcmmmskclean/currenturl_checkbox';
    $title = get_string('currenturl_checkbox', 'theme_mcmmmskclean');
    $description = get_string('currenturl_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// IP Address
	$name = 'theme_mcmmmskclean/ipaddress_checkbox';
    $title = get_string('ipaddress_checkbox', 'theme_mcmmmskclean');
    $description = get_string('ipaddress_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Date
	$name = 'theme_mcmmmskclean/date_checkbox';
    $title = get_string('date_checkbox', 'theme_mcmmmskclean');
    $description = get_string('date_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Duration
	$name = 'theme_mcmmmskclean/duration_checkbox';
    $title = get_string('duration_checkbox', 'theme_mcmmmskclean');
    $description = get_string('duration_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Demo
	$name = 'theme_mcmmmskclean/demo_checkbox';
    $title = get_string('demo_checkbox', 'theme_mcmmmskclean');
    $description = get_string('demo_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Show config to user
	$name = 'theme_mcmmmskclean/user_show_config_checkbox';
    $title = get_string('user_show_config_checkbox', 'theme_mcmmmskclean');
    $description = get_string('user_show_config_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	
	// Automatically save to data to file on fly
	$name = 'theme_mcmmmskclean/savedatafiledefaulteach_checkbox';
    $title = get_string('savedatafiledefaulteach_checkbox', 'theme_mcmmmskclean');
    $description = get_string('savedatafiledefaulteach_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);

	// Automatically save to data to file on fly
	$name = 'theme_mcmmmskclean/savedatabasedefaulteach_checkbox';
    $title = get_string('savedatabasedefaulteach_checkbox', 'theme_mcmmmskclean');
    $description = get_string('savedatabasedefaulteach_checkboxdesc', 'theme_mcmmmskclean');
    $setting = new admin_setting_configcheckbox($name, $title, $description, 0);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $settings->add($setting);
	// Modification End
}
