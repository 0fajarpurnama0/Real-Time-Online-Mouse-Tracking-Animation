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
 * This theme also includes DOM animations with the purpose of drawing the eyes
 * to the mouse cursor in order to generate a mouse tracking result closer to eye
 * tracking result.
 *
 * Published source codes will be available soon.
 *
 * @package   theme_mcmmmskclean
 * @copyright 2018 Fajar Purnama, Moodle, moodle.org,
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['choosereadme'] = '
<div class="clearfix">
<div class="well">
<h2>mcmmmskClean</h2>
<p><img class=img-polaroid src="mcmmmskclean/pix/screenshot.png" /></p>
</div>
<div class="well">
<h3>About</h3>
<p>mcmmmskClean theme, is a modification Clean theme which adds trackings of mouse clicks, mouse movements, mouse scrolls, and keyboards utilizing jquery. This theme also includes DOM animations with the purpose of drawing the eyes to the mouse cursor in order to generate a mouse tracking result closer to eye tracking result.</p>
<h3>Parents</h3>
<p>This theme is based upon the Bootstrap theme, which was created for Moodle 2.5, with the help of:<br>
Stuart Lamour, Mark Aberdour, Paul Hibbitts, Mary Evans.</p>
<h3>Theme Credits</h3>
<p>Authors: Fajar Purnama, Bas Brands, David Scotson, Mary Evans<br>
Contact: fajar@st.cs.kumamoto-u.ac.jp<br>
Website: <a href="https://hicc.cs.kumamoto-u.ac.jp/~fajar">https://hicc.cs.kumamoto-u.ac.jp/~fajar</a>
</p>
<h3>Report a bug:</h3>
<p><a href="http://tracker.moodle.org">http://tracker.moodle.org</a></p>
<h3>More information</h3>
<p><a href="mcmmmskclean/README.txt">How to copy and customise this theme.</a></p>
</div></div>';

$string['configtitle'] = 'Mouse Click Mouse Movement Mouse Scroll Keyboard Clean';

$string['customcss'] = 'Custom CSS';
$string['customcssdesc'] = 'Whatever CSS rules you add to this textarea will be reflected in every page, making for easier customization of this theme.';

$string['footnote'] = 'Footnote';
$string['footnotedesc'] = 'Whatever you add to this textarea will be displayed in the footer throughout your Moodle site.';

$string['invert'] = 'Invert navbar';
$string['invertdesc'] = 'Swaps text and background for the navbar at the top of the page between black and white.';

$string['logo'] = 'Logo';
$string['logodesc'] = 'The logo is only displayed in the header of the front page and login page.<br /> If the height of your logo is more than 75px add div.logo {height: 100px;} to the Custom CSS box below, amending accordingly if the height is other than 100px. If a logo is not added here, the logo in Appearance > Logos will be used.';

$string['pluginname'] = 'Mouse Click Mouse Movement Mouse Scroll Keyboard Clean';
$string['privacy:metadata'] = 'The mcmmmskClean theme stores user data and made them publicly open: firstname, lastname, email, mouse tracking data  (date, x, y, active on tab, duration, leftclick, rightclick, middleclick, scrollleft, scrolltop), and browser information (current_url, ip_address).';
$string['region-side-post'] = 'Right';
$string['region-side-pre'] = 'Left';

$string['sitelogo'] = 'Site logo';
$string['sitename'] = 'Display site name along with small logo';
$string['sitenamedesc'] = 'If there is no small logo, the site name is always displayed in the navigation bar. If a small logo is set, it may be displayed with or without the site name.';
$string['smalllogo'] = 'Small logo';
$string['smalllogodesc'] = 'The small logo is displayed in the navigation bar. If there is a header logo for the front page and login page, the small logo is not displayed on these pages. If a logo is not added here, the compact logo in Appearance > Logos will be used. <br /> <br />';

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
