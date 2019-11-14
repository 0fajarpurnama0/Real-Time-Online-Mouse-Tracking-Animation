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

require_once($CFG->dirroot . '/theme/bootstrapbase/renderers.php');

/**
 * mcmmmskaClean core renderers.
 *
 * @package    theme_mcmmmskaclean
 * @copyright  2015 Frédéric Massart - FMCorz.net
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class theme_mcmmmskaclean_core_renderer extends theme_bootstrapbase_core_renderer {

    /**
     * Either returns the parent version of the header bar, or a version with the logo replacing the header.
     *
     * @since Moodle 2.9
     * @param array $headerinfo An array of header information, dependant on what type of header is being displayed. The following
     *                          array example is user specific.
     *                          heading => Override the page heading.
     *                          user => User object.
     *                          usercontext => user context.
     * @param int $headinglevel What level the 'h' tag will be.
     * @return string HTML for the header bar.
     */
    public function context_header($headerinfo = null, $headinglevel = 1) {

        if ($this->should_render_logo($headinglevel)) {
            return html_writer::tag('div', '', array('class' => 'logo'));
        }
        return parent::context_header($headerinfo, $headinglevel);
    }

    /**
     * Determines if we should render the logo.
     *
     * @param int $headinglevel What level the 'h' tag will be.
     * @return bool Should the logo be rendered.
     */
    protected function should_render_logo($headinglevel = 1) {
        global $PAGE;

        // Only render the logo if we're on the front page or login page
        // and the theme has a logo.
        $logo = $this->get_logo_url();
        if ($headinglevel == 1 && !empty($logo)) {
            if ($PAGE->pagelayout == 'frontpage' || $PAGE->pagelayout == 'login') {
                return true;
            }
        }

        return false;
    }

    /**
     * Returns the navigation bar home reference.
     *
     * The small logo is only rendered on pages where the logo is not displayed.
     *
     * @param bool $returnlink Whether to wrap the icon and the site name in links or not
     * @return string The site name, the small logo or both depending on the theme settings.
     */
    public function navbar_home($returnlink = true) {
        global $CFG;

        $imageurl = $this->get_compact_logo_url(null, 35);
        if ($this->should_render_logo() || empty($imageurl)) {
            // If there is no small logo we always show the site name.
            return $this->get_home_ref($returnlink);
        }
        $image = html_writer::img($imageurl, get_string('sitelogo', 'theme_' . $this->page->theme->name),
            array('class' => 'small-logo'));

        if ($returnlink) {
            $logocontainer = html_writer::link(new moodle_url('/'), $image,
                array('class' => 'small-logo-container', 'title' => get_string('home')));
        } else {
            $logocontainer = html_writer::tag('span', $image, array('class' => 'small-logo-container'));
        }

        // Sitename setting defaults to true.
        if (!isset($this->page->theme->settings->sitename) || !empty($this->page->theme->settings->sitename)) {
            return $logocontainer . $this->get_home_ref($returnlink);
        }

        return $logocontainer;
    }

    /**
     * Returns a reference to the site home.
     *
     * It can be either a link or a span.
     *
     * @param bool $returnlink
     * @return string
     */
    protected function get_home_ref($returnlink = true) {
        global $CFG, $SITE;

        $sitename = format_string($SITE->shortname, true, array('context' => context_course::instance(SITEID)));

        if ($returnlink) {
            return html_writer::link(new moodle_url('/'), $sitename, array('class' => 'brand', 'title' => get_string('home')));
        }

        return html_writer::tag('span', $sitename, array('class' => 'brand'));
    }

    /**
     * Return the theme logo URL, else the site's logo URL, if any.
     *
     * Note that maximum sizes are not applied to the theme logo.
     *
     * @param int $maxwidth The maximum width, or null when the maximum width does not matter.
     * @param int $maxheight The maximum height, or null when the maximum height does not matter.
     * @return moodle_url|false
     */
    public function get_logo_url($maxwidth = null, $maxheight = 100) {
        global $CFG;

        if (!empty($this->page->theme->settings->logo)) {
            $url = $this->page->theme->setting_file_url('logo', 'logo');
            // Get a URL suitable for moodle_url.
            $relativebaseurl = preg_replace('|^https?://|i', '//', $CFG->wwwroot);
            $url = str_replace($relativebaseurl, '', $url);
            return new moodle_url($url);
        }
        return parent::get_logo_url($maxwidth, $maxheight);
    }

    /**
     * Return the theme's compact logo URL, else the site's compact logo URL, if any.
     *
     * Note that maximum sizes are not applied to the theme logo.
     *
     * @param int $maxwidth The maximum width, or null when the maximum width does not matter.
     * @param int $maxheight The maximum height, or null when the maximum height does not matter.
     * @return moodle_url|false
     */
    public function get_compact_logo_url($maxwidth = 100, $maxheight = 100) {
        global $CFG;

        if (!empty($this->page->theme->settings->smalllogo)) {
            $url = $this->page->theme->setting_file_url('smalllogo', 'smalllogo');
            // Get a URL suitable for moodle_url.
            $relativebaseurl = preg_replace('|^https?://|i', '//', $CFG->wwwroot);
            $url = str_replace($relativebaseurl, '', $url);
            return new moodle_url($url);
        }
        return parent::get_compact_logo_url($maxwidth, $maxheight);
    }

/* Modification Starts */
    public function standard_head_html() {
        global $SITE, $PAGE, $USER, $CFG;
	
		$firstname = $USER->firstname;
		$lastname = $USER->lastname;
		$email = $USER->email;
		$restricted_focus_viewer_imitation_checkbox = get_config('theme_mcmmmskaclean', 'restricted_focus_viewer_imitation_checkbox');
		$bubble_view_imitation_checkbox = get_config('theme_mcmmmskaclean', 'bubble_view_imitation_checkbox');
		$finger_tracing_learning_system_imitation_checkbox = get_config('theme_mcmmmskaclean', '$finger_tracing_learning_system_imitation_checkbox');
		$transparency_control = get_config('theme_mcmmmskaclean', 'transparency_control');
		$fontsize_magnifier = get_config('theme_mcmmmskaclean', 'fontsize_magnifier');
		$background_color_checkbox = get_config('theme_mcmmmskaclean', 'background_color_checkbox');
		$background_color = get_config('theme_mcmmmskaclean', 'background_color');
		$color_checkbox = get_config('theme_mcmmmskaclean', 'color_checkbox');
		$color = get_config('theme_mcmmmskaclean', 'color');
		$cursor_reminder = get_config('theme_mcmmmskaclean', 'cursor_reminder');
		$logging = get_config('theme_mcmmmskaclean', 'logging');
		$sampling_rate_mode_checkbox = get_config('theme_mcmmmskaclean', 'sampling_rate_mode_checkbox');
		$sampling_rate = get_config('theme_mcmmmskaclean', 'sampling_rate');
		$mouseclick = get_config('theme_mcmmmskaclean', 'mouseclick');
		$mousemove = get_config('theme_mcmmmskaclean', 'mousemove');
		$mousescroll = get_config('theme_mcmmmskaclean', 'mousescroll');
		$keyboardpress = get_config('theme_mcmmmskaclean', 'keyboardpress');
		$zoom = get_config('theme_mcmmmskaclean', 'zoom');
		$event_type = get_config('theme_mcmmmskaclean', 'event_type');
		$touch = get_config('theme_mcmmmskaclean', 'touch');
		$touchmove = get_config('theme_mcmmmskaclean', 'touchmove');
		$tabstatus_checkbox = get_config('theme_mcmmmskaclean', 'tabstatus_checkbox');
		$name_checkbox = get_config('theme_mcmmmskaclean', 'name_checkbox');
		$email_checkbox = get_config('theme_mcmmmskaclean', 'email_checkbox');
		$windowsize_checkbox = get_config('theme_mcmmmskaclean', 'windowsize_checkbox');
		$screensize_checkbox = get_config('theme_mcmmmskaclean', 'screensize_checkbox');
		$currenturl_checkbox = get_config('theme_mcmmmskaclean', 'currenturl_checkbox');
		$ipaddress_checkbox = get_config('theme_mcmmmskaclean', 'ipaddress_checkbox');
		$date_checkbox = get_config('theme_mcmmmskaclean', 'date_checkbox');
		$duration_checkbox = get_config('theme_mcmmmskaclean', 'duration_checkbox');
		$demo_checkbox = get_config('theme_mcmmmskaclean', 'demo_checkbox');
		$user_show_config_checkbox = get_config('theme_mcmmmskaclean', 'user_show_config_checkbox');
		$savedatafiledefaulteach_checkbox = get_config('theme_mcmmmskaclean', 'savedatafiledefaulteach_checkbox');
		$savedatabasedefaulteach_checkbox = get_config('theme_mcmmmskaclean', 'savedatabasedefaulteach_checkbox');
		$savedatafiledefault = $CFG->wwwroot.'/theme/mcmmmskaclean/db/file/savedatafiledefault.php';
		$savedatafiledefaulteach = $CFG->wwwroot.'/theme/mcmmmskaclean/db/file/savedatafiledefault.php';
		$savedatabasedefault = $CFG->wwwroot.'/theme/mcmmmskaclean/db/savedatabasedefault.php';
		$savedatabasedefaulteach = $CFG->wwwroot.'/theme/mcmmmskaclean/db/savedatabasedefaulteach.php';
	
		$PAGE->requires->js_call_amd('theme_mcmmmskaclean/mcmmmskaconfig', 'init', array($firstname, $lastname, $email, $restricted_focus_viewer_imitation_checkbox, $bubble_view_imitation_checkbox, $finger_tracing_learning_system_imitation_checkbox, $transparency_control, $fontsize_magnifier, $background_color_checkbox, $background_color, $color_checkbox, $color, $cursor_reminder, $logging, $mouseclick, $mousemove, $mousescroll, $keyboardpress, $zoom, $event_type, $touch, $touchmove, $sampling_rate_mode_checkbox, $sampling_rate, $tabstatus_checkbox, $name_checkbox, $email_checkbox, $windowsize_checkbox, $screensize_checkbox, $currenturl_checkbox, $ipaddress_checkbox, $date_checkbox, $duration_checkbox, $demo_checkbox, $user_show_config_checkbox, $savedatafiledefaulteach_checkbox, $savedatabasedefaulteach_checkbox, $savedatafiledefault, $savedatafiledefaulteach, $savedatabasedefault, $savedatabasedefaulteach));
		$PAGE->requires->js_call_amd('theme_mcmmmskaclean/mcmmmskaanimation', 'init');
		$PAGE->requires->js_call_amd('theme_mcmmmskaclean/mcmmmskalogging', 'init');
		$PAGE->requires->js_call_amd('theme_mcmmmskaclean/mcmmmskadata', 'init');
		$PAGE->requires->js_call_amd('theme_mcmmmskaclean/mcmmmskascreenshot', 'init');	

        $output = parent::standard_head_html();

        // Setup help icon overlays.
        $this->page->requires->yui_module('moodle-core-popuphelp', 'M.core.init_popuphelp');
        $this->page->requires->strings_for_js(array(
            'morehelp',
            'loadinghelp',
        ), 'moodle');

        if ($PAGE->pagelayout == 'frontpage') {
            $summary = s(strip_tags(format_text($SITE->summary, FORMAT_HTML)));
            if (!empty($summary)) {
                $output .= "<meta name=\"description\" content=\"$summary\" />\n";
            }
        }

        return $output;
    }
/* Modification Ends */

}
