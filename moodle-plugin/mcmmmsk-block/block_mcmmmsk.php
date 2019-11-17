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

class block_mcmmmsk extends block_base {
 public function init() {
  $this->title = get_string('mcmmmsk', 'block_mcmmmsk');
  }
 
 public function get_content() {

 global $PAGE, $CFG, $USER;
  $firstname = $USER->firstname;
  $lastname = $USER->lastname;
  $email = $USER->email;
  $logging = get_config('block_mcmmmsk', 'logging');
  $default = get_config('block_mcmmmsk', 'default');
  $pagetracking = get_config('block_mcmmmsk', 'pagetracking');
  $roitracking = get_config('block_mcmmmsk', 'roitracking');
  $sampling_rate_mode_checkbox = get_config('block_mcmmmsk', 'sampling_rate_mode_checkbox');
  $sampling_rate = get_config('block_mcmmmsk', 'sampling_rate');
  $mouseclick = get_config('block_mcmmmsk', 'mouseclick');
  $mousemove = get_config('block_mcmmmsk', 'mousemove');
  $mousescroll = get_config('block_mcmmmsk', 'mousescroll');
  $keyboardpress = get_config('block_mcmmmsk', 'keyboardpress');
  $zoom = get_config('block_mcmmmsk', 'zoom');
  $event_type = get_config('block_mcmmmsk', 'event_type');
  $touch = get_config('block_mcmmmsk', 'touch');
  $touchmove = get_config('block_mcmmmsk', 'touchmove');
  $tabstatus_checkbox = get_config('block_mcmmmsk', 'tabstatus_checkbox');
  $name_checkbox = get_config('block_mcmmmsk', 'name_checkbox');
  $email_checkbox = get_config('block_mcmmmsk', 'email_checkbox');
  $windowsize_checkbox = get_config('block_mcmmmsk', 'windowsize_checkbox');
  $screensize_checkbox = get_config('block_mcmmmsk', 'screensize_checkbox');
  $currenturl_checkbox = get_config('block_mcmmmsk', 'currenturl_checkbox');
  $ipaddress_checkbox = get_config('block_mcmmmsk', 'ipaddress_checkbox');
  $date_checkbox = get_config('block_mcmmmsk', 'date_checkbox');
  $duration_checkbox = get_config('block_mcmmmsk', 'duration_checkbox');
  $demo_checkbox = get_config('block_mcmmmsk', 'demo_checkbox');
  $page_debug_amount_checkbox = get_config('block_mcmmmsk', 'page_debug_amount');
  $roi_debug_amount_checkbox = get_config('block_mcmmmsk', 'roi_debug_amount');
  $user_show_config_checkbox = get_config('block_mcmmmsk', 'user_show_config_checkbox');
  $savedatafiledefaulteach_checkbox = get_config('block_mcmmmsk', 'savedatafiledefaulteach_checkbox');
  $savedatabasedefaulteach_checkbox = get_config('block_mcmmmsk', 'savedatabasedefaulteach_checkbox');
  $savedatafiledefault = $CFG->wwwroot.'/blocks/mcmmmsk/db/file/savedatafiledefault.php';
  $savedatafiledefaulteach = $CFG->wwwroot.'/blocks/mcmmmsk/db/file/savedatafiledefault.php';
  $savedatabasedefault = $CFG->wwwroot.'/blocks/mcmmmsk/db/savedatabasedefault.php';
  $savedatabasedefaulteach = $CFG->wwwroot.'/blocks/mcmmmsk/db/savedatabasedefaulteach.php';
  $pagedatabasedefaulteach_checkbox = get_config('block_mcmmmsk', 'pagedatabasedefaulteach_checkbox');
  $pagedatabasedefaulteach = $CFG->wwwroot.'/blocks/mcmmmsk/db/pagetracking.php';
  $roidatabasedefaulteach_checkbox = get_config('block_mcmmmsk', 'roidatabasedefaulteach_checkbox');
  $roidatabasedefaulteach = $CFG->wwwroot.'/blocks/mcmmmsk/db/roitracking.php';

  $PAGE->requires->js_call_amd('block_mcmmmsk/logging', 'init');
  $PAGE->requires->js_call_amd('block_mcmmmsk/screenshot', 'init');
  $PAGE->requires->js_call_amd('block_mcmmmsk/config', 'init', array($firstname, $lastname, $email, $logging, $default, $pagetracking, $roitracking, $mouseclick, $mousemove, $mousescroll, $keyboardpress, $zoom, $event_type, $touch, $touchmove, $sampling_rate_mode_checkbox, $sampling_rate, $tabstatus_checkbox, $name_checkbox, $email_checkbox, $windowsize_checkbox, $screensize_checkbox, $currenturl_checkbox, $ipaddress_checkbox, $date_checkbox, $duration_checkbox, $demo_checkbox, $page_debug_amount_checkbox, $roi_debug_amount_checkbox, $user_show_config_checkbox, $savedatafiledefaulteach_checkbox, $savedatabasedefaulteach_checkbox, $savedatafiledefault, $savedatafiledefaulteach, $savedatabasedefault, $savedatabasedefaulteach, $pagedatabasedefaulteach_checkbox, $pagedatabasedefaulteach, $roidatabasedefaulteach_checkbox, $roidatabasedefaulteach));

  if($this->content !== null) {
   return $this->content;
  }

  $this->content = new stdClass;
  $this->content->text = 'Additional features coming soon!';
  $this->content->footer = 'Mouse tracking is active here.';
  
  /*if (! empty($this->config->text)) {
   $this->content->text = $this->config->text;
  }*/

  return $this->content;
 }
 
  public function specialization() {
  if (isset($this->config)) {
   if (empty($this->config->title)) {
    $this->title = get_string('defaulttitle', 'block_mcmmmsk');
   } else {
    $this->title = $this->config->title;
   }
  

   if (empty($this->config->text)) {
    $this->config->text = get_string('defaulttext', 'block_mcmmmsk');
   } else {
    $this->content->text = $this->config->text;
   }
  }
 }

 public function instance_allow_multiple() {
  return true;
 }

 public function has_config() {
  return true;
 }
}
