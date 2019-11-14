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

require_once('../../../config.php');

global $DB;

	$name = optional_param('$name', '', PARAM_TEXT);
	$email = optional_param('$email', '', PARAM_EMAIL);
	$date = optional_param('$date', '', PARAM_TEXT);
	$x = optional_param('$x', 0, PARAM_TEXT);
	$y = optional_param('$y', 0, PARAM_TEXT);
	$active = optional_param('$active', '', PARAM_TEXT);
	$duration = optional_param('$duration', 0, PARAM_FLOAT);
	$current_url = optional_param('$current_url', '', PARAM_URL);
	$ip_address = optional_param('$ip_address', '', PARAM_HOST);
	$samplingmode = optional_param('$samplingmode', '', PARAM_TEXT);
	$leftclick = optional_param('$leftclick', '', PARAM_TEXT);
	$rightclick = optional_param('$rightclick', '', PARAM_TEXT);
	$middleclick = optional_param('$middleclick', '', PARAM_TEXT);
	$touch = optional_param('$mTouch', '', PARAM_TEXT);
	$keyboardtype = optional_param('$keyboardtype', '', PARAM_TEXT);
	$scrollleft = optional_param('$scrollleft', 0, PARAM_TEXT);
	$scrolltop = optional_param('$scrolltop', 0, PARAM_TEXT);
	$windowwidth = optional_param('$windowwidth', 0, PARAM_TEXT);
	$windowheight = optional_param('$windowheight', 0, PARAM_TEXT);
	$screenwidth = optional_param('$screenwidth', 0, PARAM_TEXT);
	$screenheight = optional_param('$screenheight', 0, PARAM_TEXT);
	$zoom = optional_param('$zoom', 0, PARAM_TEXT);
	$event_type = optional_param('$event_type', 0, PARAM_TEXT);
	$restrictedfocusviewer = optional_param('$restrictedfocusviewer', '', PARAM_TEXT);
	$bubbleview = optional_param('$bubbleview', '', PARAM_TEXT);
	$fingertracinglearningsystem = optional_param('$fingertracinglearningsystem', '', PARAM_TEXT);
	$cursorreminder = optional_param('$cursorreminder', '', PARAM_TEXT);
	$transparency = optional_param('$transparency', '', PARAM_TEXT);
	$magnifier = optional_param('$magnifier', '', PARAM_TEXT);
	$textcolor = optional_param('$textcolor', '', PARAM_TEXT);
	$backgroundcolor = optional_param('$backgroundcolor', '', PARAM_TEXT);

$table = 'block_mcmmmska';
$dataobjects = new stdClass();
for($i = 0; $i < count($name); $i++){
	$dataobjects->name = $name[$i]; 
	$dataobjects->email = $email[$i];
	$dataobjects->date = $date[$i];
	$dataobjects->x = $x[$i]; 
	$dataobjects->y = $y[$i]; 
	$dataobjects->tab = $active[$i]; 
	$dataobjects->duration = $duration[$i]; 
	$dataobjects->current_url = $current_url[$i]; 
	$dataobjects->ip_address = $ip_address[$i]; 
	$dataobjects->samplingmode = $samplingmode[$i]; 
	$dataobjects->leftclick = $leftclick[$i]; 
	$dataobjects->rightclick = $rightclick[$i]; 
	$dataobjects->middleclick = $middleclick[$i];
	$dataobjects->touch = $touch[$i];
	$dataobjects->keyboardtype = $keyboardtype[$i]; 
	$dataobjects->scrollx = $scrollleft[$i]; 
	$dataobjects->scrolly = $scrolltop[$i]; 
	$dataobjects->windowwidth = $windowwidth[$i]; 
	$dataobjects->windowheight = $windowheight[$i]; 
	$dataobjects->screenwidth = $screenwidth[$i]; 
	$dataobjects->screenheight = $screenheight[$i]; 
	$dataobjects->zoom = $zoom[$i]; 
	$dataobjects->event_type = $event_type[$i]; 
	$dataobjects->restrictedfocusviewer = $restrictedfocusviewer[$i]; 
	$dataobjects->bubbleview = $bubbleview[$i]; 
	$dataobjects->fingertracinglearningsystem = $fingertracinglearningsystem[$i]; 
	$dataobjects->cursorreminder = $cursorreminder[$i]; 
	$dataobjects->transparency = $transparency[$i]; 
	$dataobjects->magnifier = $magnifier[$i]; 
	$dataobjects->textcolor = $textcolor[$i]; 
	$dataobjects->backgroundcolor = $backgroundcolor[$i];
	$DB->insert_record($table, $dataobjects);
}
