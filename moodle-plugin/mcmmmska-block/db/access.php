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

$capabilities = array(
 'block/mcmmmska:myaddinstance' => array(
  'captype' => 'write',
  'contextlevel' => CONTEXT_SYSTEM,
  'archetypes' => array(
   'user' => CAP_ALLOW
  ),

  'clonepermissionsfrom' => 'moodle/my:manageblocks'
 ),

 'block/mcmmmska:addinstance' => array(
  'riskbitmask' => RISK_SPAM | RISK_XSS,
 
  'captype' => 'write',
  'contextlevel' => CONTEXT_BLOCK,
  'archetypes' => array(
   'editingteacher' => CAP_ALLOW,
   'manager' => CAP_ALLOW
  ),
 
  'clonepermissionsfrom' => 'moodle/site:manageblocks'
 ),
);
