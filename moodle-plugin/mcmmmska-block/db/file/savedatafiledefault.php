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
	require_once('../../../../config.php');
	$data = array(
		'$name' => optional_param('$name', '', PARAM_TEXT),
		'$email' => optional_param('$email', '', PARAM_EMAIL),
		'$date' => optional_param('$date', '', PARAM_TEXT),
		'$x' => optional_param('$x', 0, PARAM_INT),
		'$y' => optional_param('$y', 0, PARAM_INT),
		'$active' => optional_param('$active', '', PARAM_TEXT),
		'$duration' => optional_param('$duration', 0, PARAM_FLOAT),
		'$current_url' => optional_param('$current_url', '', PARAM_URL),
		'$ip_address' => optional_param('$ip_address', '', PARAM_HOST),
		'$samplingmode' => optional_param('$samplingmode', '', PARAM_TEXT),
		'$leftclick' => optional_param('$leftclick', '', PARAM_TEXT),
		'$rightclick' => optional_param('$rightclick', '', PARAM_TEXT),
		'$middleclick' => optional_param('$middleclick', '', PARAM_TEXT),
		'$mTouch' => optional_param('$mTouch', '', PARAM_TEXT),
		'$keyboardtype' => optional_param('$keyboardtype', '', PARAM_TEXT),
		'$scrollleft' => optional_param('$scrollleft', '', PARAM_INT),
		'$scrolltop' => optional_param('$scrolltop', '', PARAM_INT),
		'$windowwidth' => optional_param('$windowwidth', 0, PARAM_INT),
		'$windowheight' => optional_param('$windowheight', 0, PARAM_INT),
		'$screenwidth' => optional_param('$screenwidth', 0, PARAM_INT),
		'$screenheight' => optional_param('$screenheight', 0, PARAM_INT),
		'$zoom' => optional_param('$zoom', 0, PARAM_INT),
		'$event_type' => optional_param('$event_type', '', PARAM_TEXT),
		'$restrictedfocusviewer' => optional_param('$restrictedfocusviewer', '', PARAM_TEXT),
		'$bubbleview' => optional_param('$bubbleview', '', PARAM_TEXT),
		'$fingertracinglearningsystem' => optional_param('$fingertracinglearningsystem', '', PARAM_TEXT),
		'$cursorreminder' => optional_param('$cursorreminder', '', PARAM_TEXT),
		'$transparency' => optional_param('$transparency', '', PARAM_TEXT),
		'$magnifier' => optional_param('$magnifier', '', PARAM_TEXT),
		'$textcolor' => optional_param('$textcolor', '', PARAM_TEXT),
		'$backgroundcolor' => optional_param('$backgroundcolor', '', PARAM_TEXT)
	);
	$file = optional_param('$file', '', PARAM_TEXT);
	file_put_contents($file, json_encode($data));
