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

defined('MOODLE_INTERNAL') || die;

$plugin->version   = 2019061100;
$plugin->requires  = 2018050800;
$plugin->component = 'theme_mcmmmskclean';
$plugin->dependencies = array(
    'theme_bootstrapbase'  => 2018050800,
);
