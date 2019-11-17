define(['jquery', 'jqueryui'], function($, jqui) {
 
    return {
        init: function(firstname, lastname, email, logging, mouseclick, mousemove, mousescroll, keyboardpress, zoom, event_type, touch, touchmove, sampling_rate_mode_checkbox, sampling_rate, tabstatus_checkbox, name_checkbox, email_checkbox, windowsize_checkbox, screensize_checkbox, currenturl_checkbox, ipaddress_checkbox, date_checkbox, duration_checkbox, demo_checkbox, user_show_config_checkbox, savedatafiledefaulteach_checkbox, savedatabasedefaulteach_checkbox, savedatafiledefault, savedatafiledefaulteach, savedatabasedefault, savedatabasedefaulteach) {

// This is where the checkbox html are created to activate or diactivate.
$(document).ready(function() {
	$(function() {
		$('#dialog').dialog({
			autoOpen: false,
			width: $(window).width() * 0.8,
			height: $(window).height() * 0.8
		});
	});
	$('body').prepend(' <div id="dialog" title="Configuration"> <p>Hello, please support us in our user interraction project by allowing us to record your interractions:</p> </div> <br />');
	if(parseInt(user_show_config_checkbox)){
		$('body').prepend(' <button id="opener">Open Logging Settings</button>');
		$('body').prepend(' <button id="closer">Close Logging Settings</button>');
		$("#dialog").css('display', 'block');
		$("#opener").on("click", function() {
			$("#dialog").dialog("open");
		});
		$("#closer").on("click", function() {
			$("#dialog").dialog("close");
		});
	}
	$('body').prepend('<span class="sticky" id="demo"></span>');
	function set_checked_checkbox(moodle_config_value){
		if(moodle_config_value){
			return 'checked = "checked"';
		} else {
			return '';
		}	
	}
	
	var thelogging = set_checked_checkbox(parseInt(logging));		
	var themouseclick = set_checked_checkbox(parseInt(mouseclick));
	var thetouch = set_checked_checkbox(parseInt(touch));
	var themousemove = set_checked_checkbox(parseInt(mousemove));
	var thetouchmove = set_checked_checkbox(parseInt(touchmove));	
	var themousescroll = set_checked_checkbox(parseInt(mousescroll));
	var thekeyboardpress = set_checked_checkbox(parseInt(keyboardpress));
	var thezoom = set_checked_checkbox(parseInt(zoom));
	var theevent_type = set_checked_checkbox(parseInt(event_type));
	var thesampling_rate_mode_checkbox = set_checked_checkbox(parseInt(sampling_rate_mode_checkbox));	
	var thetabstatus_checkbox = set_checked_checkbox(parseInt(tabstatus_checkbox));
	var thename_checkbox = set_checked_checkbox(parseInt(name_checkbox));
	var theemail_checkbox = set_checked_checkbox(parseInt(email_checkbox));
	var thewindowsize_checkbox = set_checked_checkbox(parseInt(windowsize_checkbox));
	var thescreensize_checkbox = set_checked_checkbox(parseInt(screensize_checkbox));	
	var thecurrenturl_checkbox = set_checked_checkbox(parseInt(currenturl_checkbox));	
	var theipaddress_checkbox = set_checked_checkbox(parseInt(ipaddress_checkbox));
	var thedate_checkbox = set_checked_checkbox(parseInt(date_checkbox));
	var theduration_checkbox = set_checked_checkbox(parseInt(duration_checkbox));
	var thedemo_checkbox = set_checked_checkbox(parseInt(demo_checkbox));
	var thesavedatafiledefaulteach_checkbox = set_checked_checkbox(parseInt(savedatafiledefaulteach_checkbox));
	var thesavedatabasedefaulteach_checkbox = set_checked_checkbox(parseInt(savedatabasedefaulteach_checkbox));
	
	$('#dialog').append(`
	Status: <span id="active">active</span> <br /> <br /> <br /> What is your name? (leave blank if you want to be anonymous) <input type="text" id="name" value="`+firstname+` `+lastname+`"/> <br />
	<br /> <br /> Do you have an email address? (leave blank if you want to be anonymous) <input type="text" id="email" value="`+email+`"/> <br />
	
	<input type="checkbox" id="logging" `+thelogging+`> Loggings
	<ul> 
	<li><input type="checkbox" id="sampling-rate-mode-checkbox" `+thesampling_rate_mode_checkbox+`> Sampling Rate Mode <br /> <input type="range" min="1" max="90" value="`+sampling_rate+`" id="sampling-rate"> <p id="sampling-rate-text"> </p> </li> 
	<li><input type="checkbox" id="mouseclick" `+themouseclick+`> Mouse Click</li> 
	<li><input type="checkbox" id="mousemove" `+themousemove+`> Mouse Move</li> 
	<li><input type="checkbox" id="mousescroll" `+themousescroll+`> Mouse Scroll</li> 
	<li><input type="checkbox" id="keyboardpress" `+thekeyboardpress+`> Keyboard Press</li>
	<li><input type="checkbox" id="zoom" `+thezoom+`> Zoom</li> 
	<li><input type="checkbox" id="event-type" `+theevent_type+`> Event Type</li> 
	<li>Mobile:</li>
	<li><input type="checkbox" id="touch" `+thetouch+`> Touch</li> 
	<li><input type="checkbox" id="touchmove" `+thetouchmove+`> Touch Move</li> 
	</ul>
	
	Other loggings:
	<ul> 
	<li><input type="checkbox" id="tabstatus-checkbox" `+thetabstatus_checkbox+`> Tab Status</li> 
	<li><input type="checkbox" id="name-checkbox" `+thename_checkbox+`> Name</li> 
	<li><input type="checkbox" id="email-checkbox" `+theemail_checkbox+`> Email</li> 
	<li><input type="checkbox" id="windowsize-checkbox" `+thewindowsize_checkbox+`> Window Size</li> 
	<li><input type="checkbox" id="screensize-checkbox" `+thescreensize_checkbox+`> Screen Size</li> 
	<li><input type="checkbox" id="currenturl-checkbox" `+thecurrenturl_checkbox+`> Current URL </li> 
	<li><input type="checkbox" id="ipaddress-checkbox" `+theipaddress_checkbox+`> IP Address </li> 
	<li><input type="checkbox" id="date-checkbox" `+thedate_checkbox+`> Date </li> 
	<li><input type="checkbox" id="duration-checkbox" `+theduration_checkbox+`> Duration </li> 
	</ul>
	
	<input type="checkbox" id="demo-checkbox" `+thedemo_checkbox+`> Demo Logging <br />
	<button id="Capture">Capture</button>
	<button id="generate-table">Generate Table</button>
	<button id="download-data">Download Data</button>
	
	<br /><button id="send-data-file">Send Data File</button><input type="text" id="file-server-script" value="`+savedatafiledefault+`" />
	<br /> <input type="checkbox" id="data-to-file-on-fly-checkbox" `+thesavedatafiledefaulteach_checkbox+`> Data to file on fly</input><input type="text" id="data-to-file-on-fly" value="`+savedatafiledefault+`" />
	<br /><button id="send-data-database">Send Data Database</button><input type="text" id="database-server-script" value="`+savedatabasedefault+`" />
	<br /> <input type="checkbox" id="data-to-database-on-fly-checkbox" `+thesavedatabasedefaulteach_checkbox+`> Data to database on fly</input><input type="text" id="data-to-database-on-fly" value="`+savedatabasedefaulteach+`" />
	<div id="table"></div>
	`);
	$('#table').html('<p>Mouse is at coordinates: <span> <table id="mousetrail"> <tr> <th>No</th> <th>Name</th> <th>Email</th> <th>Date</th> <th>Duration</th> <th>Tab</th> <th>X</th> <th>Y</th> <th>ScrollX</th> <th>scrollY</th> <th>Current Url</th> <th>IP Address</th> <th>Window Width</th> <th>Window Height</th> <th>Screen Width</th> <th>Screen Height</th> <th>Zoom</th> <th>Event Type</th> <th>Sampling Rate Mode</th> <th>Left Click</th> <th>Middle Click</th> <th>Right Click</th> <th>Touch</th> <th>Keyboard Type</th> </tr></table></span>.</p>');
	$('#sampling-rate').change(function() {
		$('#sampling-rate-text').text($('#sampling-rate').val() + ' Hz');
	});
});

        }
    };
});
