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

$string['pluginname'] = 'Mouse Tracking and Animation';
$string['mcmmmska'] = 'Mouse Tracking and Animation';
$string['mcmmmska:addinstance'] = 'Add a new Mouse Tracking and Animation block';
$string['mcmmmska:myaddinstance'] = 'Add a new Mouse Tracking and Animation block to the My Moodle page';
$string['blockstring'] = 'Add text';
$string['blocktitle'] = 'Add title';
$string['labelallowhtml'] = 'Allow HTML';
$string['descallowhtml'] = 'Description here';
$string['headerconfig'] = 'Allow HTML Settings';
$string['descconfig'] = 'Description here';

$string['restricted_focus_viewer_imitation_checkbox'] = 'Restricted Focus Viewer Imitation';
$string['restricted_focus_viewer_imitation_checkboxdesc'] = 'Blurs except a small circle area around the mouse.';
$string['bubble_view_imitation_checkbox'] = 'Bubbleview Imitation';
$string['bubble_view_imitation_checkboxdesc'] = 'Pop the blurs.';
$string['finger_tracing_learning_system_imitation_checkbox'] = 'Finger Tracing Learning System Imitation';
$string['finger_tracing_learning_system_imitation_checkboxdesc'] = 'Reveal per characters';
$string['transparency_control'] = 'Transparency Control Hover';
$string['transparency_controldesc'] = 'Make all DOM element transparent and reveal only when mouse hovers. Value: 0-100';
$string['fontsize_magnifier'] = 'Fontsize Magnifier Hover';
$string['fontsize_magnifierdesc'] = 'Increase smaller fonts to this set size when mouse hovers.';
$string['background_color_checkbox'] = 'Background Color Hover';
$string['background_color_checkboxdesc'] = 'Change background color of DOM elements on hover.';
$string['background_color'] = 'Background Color';
$string['background_colordesc'] = 'Choose the background color on DOM element hover.';
$string['color_checkbox'] = 'Text Color Hover';
$string['color_checkboxdesc'] = 'Change text color of DOM elements on hover.';
$string['color'] = 'Color';
$string['colordesc'] = 'Change text color of DOM elements on hover.';
$string['cursor_reminder'] = 'Cursor Reminder';
$string['cursor_reminderdesc'] = 'Blurs the whole page and shows reminder to move the mouse when mouse is idle for set seconds.';
$string['logging'] = 'Logging Activator:';
$string['loggingdesc'] = 'Check this option first before checking other specific loggings.';
$string['mouseclick'] = 'Mouse Click';
$string['mouseclickdesc'] = 'Mouse click loggings.';
$string['touch'] = 'Touch';
$string['touchdesc'] = 'Touch loggings.';
$string['mousemove'] = 'Mouse Move';
$string['mousemovedesc'] = 'Mouse move loggings.';
$string['touchmove'] = 'Touchmove';
$string['touchmovedesc'] = 'Touchmove loggings.';
$string['mousescroll'] = 'Mouse Scroll';
$string['mousescrolldesc'] = 'Mouse scroll loggings.';
$string['keyboardpress'] = 'Keyboard Press';
$string['keyboardpressdesc'] = 'Keyboard loggings.';
$string['zoom'] = 'Zoom';
$string['zoomdesc'] = 'Zoom loggings.';
$string['event_type'] = 'Event Type';
$string['event_typedesc'] = 'Event Type loggings.';
$string['sampling_rate_mode_checkbox'] = 'Sampling Rate Mode';
$string['sampling_rate_mode_checkboxdesc'] = 'For data reduction, capture logs on time interval. Default: unchecked';
$string['sampling_rate'] = 'Sampling Rate Value';
$string['sampling_ratedesc'] = 'lower value equals lower data rate, i.e. capture loggings every 1 second';
$string['tabstatus_checkbox'] = 'Tab Status';
$string['tabstatus_checkboxdesc'] = 'Shows active when mouse cursor is inside Moodle page and vice versa.';
$string['name_checkbox'] = 'Name';
$string['name_checkboxdesc'] = 'User name';
$string['email_checkbox'] = 'Email';
$string['email_checkboxdesc'] = 'User email';
$string['windowsize_checkbox'] = 'Window Size';
$string['windowsize_checkboxdesc'] = 'User set window width and height.';
$string['screensize_checkbox'] = 'Screen Size';
$string['screensize_checkboxdesc'] = 'User set screen width and height.';
$string['currenturl_checkbox'] = 'Current URL';
$string['currenturl_checkboxdesc'] = 'Current opened moodle URL.';
$string['ipaddress_checkbox'] = 'IP Address';
$string['ipaddress_checkboxdesc'] = 'User origin public IP Address.';
$string['date_checkbox'] = 'Date';
$string['date_checkboxdesc'] = 'User dates of event logs.';
$string['duration_checkbox'] = 'Duration';
$string['duration_checkboxdesc'] = 'User durations of event logs. <br /> Data view and saving:';
$string['demo_checkbox'] = 'Demo Loggings';
$string['demo_checkboxdesc'] = 'Demonstrate the loggings.';
$string['user_show_config_checkbox'] = 'User Show Config';
$string['user_show_config_checkboxdesc'] = 'Show configurations to users.';
$string['savedatafiledefaulteach_checkbox'] = 'Data to File on Fly.';
$string['savedatafiledefaulteach_checkboxdesc'] = 'Automatically save logs to file.';
$string['savedatabasedefaulteach_checkbox'] = 'Data to Database on Fly';
$string['savedatabasedefaulteach_checkboxdesc'] = 'Automatically save logs to database.';
