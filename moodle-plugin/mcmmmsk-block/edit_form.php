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
class block_mcmmmsk_edit_form extends block_edit_form {
 
 protected function specific_definition($mform) {
 
  // Section header title according to language file
  $mform->addElement('header', 'configheader', get_string('blocksettings', 'block'));

  // A sample string variable with a default value.
  $mform->addElement('text', 'config_title', get_string('blocktitle', 'block_mcmmmsk'));
  $mform->setDefault('config_title', 'Additional features coming soon!');
  $mform->setType('config_title', PARAM_TEXT);

  // A sample string variable with a default value.
  $mform->addElement('text', 'config_text', get_string('blockstring', 'block_mcmmmsk'));
  $mform->setDefault('config_text', 'Mouse tracking is active here.');
  $mform->setType('config_text', PARAM_RAW);
  
 }
}
