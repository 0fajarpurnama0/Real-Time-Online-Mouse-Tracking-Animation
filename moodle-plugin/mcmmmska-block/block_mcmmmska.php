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

class block_mcmmmska extends block_base {
 public function init() {
  $this->title = get_string('mcmmmska', 'block_mcmmmska');
  }
 
 public function get_content() {

 global $PAGE, $CFG, $USER;
  $firstname = $USER->firstname;
  $lastname = $USER->lastname;
  $email = $USER->email;
  $restricted_focus_viewer_imitation_checkbox = get_config('block_mcmmmska', 'restricted_focus_viewer_imitation_checkbox');
  $bubble_view_imitation_checkbox = get_config('block_mcmmmska', 'bubble_view_imitation_checkbox');
  $finger_tracing_learning_system_imitation_checkbox = get_config('block_mcmmmska', '$finger_tracing_learning_system_imitation_checkbox');
  $transparency_control = get_config('block_mcmmmska', 'transparency_control');
  $fontsize_magnifier = get_config('block_mcmmmska', 'fontsize_magnifier');
  $background_color_checkbox = get_config('block_mcmmmska', 'background_color_checkbox');
  $background_color = get_config('block_mcmmmska', 'background_color');
  $color_checkbox = get_config('block_mcmmmska', 'color_checkbox');
  $color = get_config('block_mcmmmska', 'color');
  $cursor_reminder = get_config('block_mcmmmska', 'cursor_reminder');
  $logging = get_config('block_mcmmmska', 'logging');
  $sampling_rate_mode_checkbox = get_config('block_mcmmmska', 'sampling_rate_mode_checkbox');
  $sampling_rate = get_config('block_mcmmmska', 'sampling_rate');
  $mouseclick = get_config('block_mcmmmska', 'mouseclick');
  $mousemove = get_config('block_mcmmmska', 'mousemove');
  $mousescroll = get_config('block_mcmmmska', 'mousescroll');
  $keyboardpress = get_config('block_mcmmmska', 'keyboardpress');
  $zoom = get_config('block_mcmmmska', 'zoom');
  $event_type = get_config('block_mcmmmska', 'event_type');
  $touch = get_config('block_mcmmmska', 'touch');
  $touchmove = get_config('block_mcmmmska', 'touchmove');
  $tabstatus_checkbox = get_config('block_mcmmmska', 'tabstatus_checkbox');
  $name_checkbox = get_config('block_mcmmmska', 'name_checkbox');
  $email_checkbox = get_config('block_mcmmmska', 'email_checkbox');
  $windowsize_checkbox = get_config('block_mcmmmska', 'windowsize_checkbox');
  $screensize_checkbox = get_config('block_mcmmmska', 'screensize_checkbox');
  $currenturl_checkbox = get_config('block_mcmmmska', 'currenturl_checkbox');
  $ipaddress_checkbox = get_config('block_mcmmmska', 'ipaddress_checkbox');
  $date_checkbox = get_config('block_mcmmmska', 'date_checkbox');
  $duration_checkbox = get_config('block_mcmmmska', 'duration_checkbox');
  $demo_checkbox = get_config('block_mcmmmska', 'demo_checkbox');
  $user_show_config_checkbox = get_config('block_mcmmmska', 'user_show_config_checkbox');
  $savedatafiledefaulteach_checkbox = get_config('block_mcmmmska', 'savedatafiledefaulteach_checkbox');
  $savedatabasedefaulteach_checkbox = get_config('block_mcmmmska', 'savedatabasedefaulteach_checkbox');
  $savedatafiledefault = $CFG->wwwroot.'/blocks/mcmmmska/db/file/savedatafiledefault.php';
  $savedatafiledefaulteach = $CFG->wwwroot.'/blocks/mcmmmska/db/file/savedatafiledefault.php';
  $savedatabasedefault = $CFG->wwwroot.'/blocks/mcmmmska/db/savedatabasedefault.php';
  $savedatabasedefaulteach = $CFG->wwwroot.'/blocks/mcmmmska/db/savedatabasedefaulteach.php';

  $PAGE->requires->js_call_amd('block_mcmmmska/mcmmmskaconfig', 'init', array($firstname, $lastname, $email, $restricted_focus_viewer_imitation_checkbox, $bubble_view_imitation_checkbox, $finger_tracing_learning_system_imitation_checkbox, $transparency_control, $fontsize_magnifier, $background_color_checkbox, $background_color, $color_checkbox, $color, $cursor_reminder, $logging, $mouseclick, $mousemove, $mousescroll, $keyboardpress, $zoom, $event_type, $touch, $touchmove, $sampling_rate_mode_checkbox, $sampling_rate, $tabstatus_checkbox, $name_checkbox, $email_checkbox, $windowsize_checkbox, $screensize_checkbox, $currenturl_checkbox, $ipaddress_checkbox, $date_checkbox, $duration_checkbox, $demo_checkbox, $user_show_config_checkbox, $savedatafiledefaulteach_checkbox, $savedatabasedefaulteach_checkbox, $savedatafiledefault, $savedatafiledefaulteach, $savedatabasedefault, $savedatabasedefaulteach));
  $PAGE->requires->js_call_amd('block_mcmmmska/mcmmmskaanimation', 'init');
  $PAGE->requires->js_call_amd('block_mcmmmska/mcmmmskalogging', 'init');
  $PAGE->requires->js_call_amd('block_mcmmmska/mcmmmskadata', 'init');
  $PAGE->requires->js_call_amd('block_mcmmmska/mcmmmskascreenshot', 'init');

  if($this->content !== null) {
   return $this->content;
  }

  $this->content = new stdClass;
  $this->content->text = 'Additional features coming soon!';
  $this->content->footer = 'Mouse tracking and animation is active here.';
  
  /*if (! empty($this->config->text)) {
   $this->content->text = $this->config->text;
  }*/

  return $this->content;
 }
 
  public function specialization() {
  if (isset($this->config)) {
   if (empty($this->config->title)) {
    $this->title = get_string('defaulttitle', 'block_mcmmmska');
   } else {
    $this->title = $this->config->title;
   }
  

   if (empty($this->config->text)) {
    $this->config->text = get_string('defaulttext', 'block_mcmmmska');
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
