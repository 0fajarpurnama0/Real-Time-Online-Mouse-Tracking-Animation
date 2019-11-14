// This is where the checkbox html are created to activate or diactivate.
$(document).ready(function(){
	$('#transparency-control').change(function(){
		$('#transparency-control-text').text($('#transparency-control').val()/100);
	});
	$('#fontsize-magnifier').change(function(){
		$('#fontsize-magnifier-text').text('Increase Element Font Size Smaller Than '+$('#fontsize-magnifier').val()+'px');
	});
	$('#cursor-reminder').change(function(){
		$('#cursor-reminder-text').text($('#cursor-reminder').val() + ' seconds');
	});
	$('#sampling-rate').change(function(){
       $('#sampling-rate-text').text($('#sampling-rate').val() + ' Hz');
    });

    function saveChanges() {
		// Get a value saved in a form.
		
		// Identity
		var name;
		var thename = $('#name').val();
		var email;
		var theemail = $('#email').val();
		
		// Loggings 
		var thelogging;
		if($('#logging').prop( "checked" )){
			thelogging = 'on';
		} else {
			thelogging = 'off';
		}
		var logging;
		
		var themouseclick;
		if($('#mouseclick').prop( "checked" )){
			themouseclick = 'on';
		} else {
			themouseclick = 'off';
		}
		var mouseclick;
		
		var thetouch;
		if($('#touch').prop( "checked" )){
			thetouch = 'on';
		} else {
			thetouch = 'off';
		}
		var touch;
		
		var thetouchmove;
		if($('#touchmove').prop( "checked" )){
			thetouchmove = 'on';
		} else {
			thetouchmove = 'off';
		}
		var touchmove;
		
		var themousemove;
		if($('#mousemove').prop( "checked" )){
			themousemove = 'on';
		} else {
			themousemove = 'off';
		}
		var mousemove;
		
		var themousescroll;
		if($('#mousescroll').prop( "checked" )){
			themousescroll = 'on';
		} else {
			themousescroll = 'off';
		}
		var mousescroll;
		
		var thekeyboardpress;
		if($('#keyboardpress').prop( "checked" )){
			thekeyboardpress = 'on';
		} else {
			thekeyboardpress = 'off';
		}
		var keyboardpress;
		
		var thezoom;
		if($('#zoom').prop( "checked" )){
			thezoom = 'on';
		} else {
			thezoom = 'off';
		}
		var zoom;
		
		var theevent_type;
		if($('#event-type').prop( "checked" )){
			theevent_type = 'on';
		} else {
			theevent_type = 'off';
		}
		var event_type;

		// Sampling Rate Mode 
		var thesampling_rate_mode_checkbox;
		if($('#sampling-rate-mode-checkbox').prop( "checked" )){
			thesampling_rate_mode_checkbox = 'on';
		} else {
			thesampling_rate_mode_checkbox = 'off';
		}
		var sampling_rate_mode_checkbox;
		var sampling_rate;
		var thesampling_rate = $('#sampling-rate').val();
		
		// Restricted Focus Viewer Imitation
		var therestricted_focus_viewer_imitation_checkbox;
		if($('#restricted-focus-viewer-imitation-checkbox').prop( "checked" )){
			therestricted_focus_viewer_imitation_checkbox = 'on';
		} else {
			therestricted_focus_viewer_imitation_checkbox = 'off';
		}
		var restricted_focus_viewer_imitation_checkbox;
		
		// Bubbleview Imitation
		var thebubble_view_imitation_checkbox;
		if($('#bubble-view-imitation-checkbox').prop( "checked" )){
			thebubble_view_imitation_checkbox = 'on';
		} else {
			thebubble_view_imitation_checkbox = 'off';
		}
		var bubble_view_imitation_checkbox;
		
		// Finger Tracing Learning System Imitation
		var thefinger_tracing_learning_system_imitation_checkbox;
		if($('#finger-tracing-learning-system-imitation-checkbox').prop( "checked" )){
			thefinger_tracing_learning_system_imitation_checkbox = 'on';
		} else {
			thefinger_tracing_learning_system_imitation_checkbox = 'off';
		}
		var finger_tracing_learning_system_imitation_checkbox;
		
		// Transparency per element (similar to Viewser)
		var transparency_control;
		var thetransparency_control = $('#transparency-control').val();
		
		// Font Size magnifier per Element
		var fontsize_magnifier;
		var thefontsize_magnifier = $('#fontsize-magnifier').val();

		// Background Color per Element
		var background_color;
		var thebackground_color = $('#background-color').val();
		var thebackground_color_checkbox;
		if($('#background-color-checkbox').prop( "checked" )){
			thebackground_color_checkbox = 'on';
		} else {
			thebackground_color_checkbox = 'off';
		}
		var background_color_checkbox;
		
		// Text Color per Element
		var color;
		var thecolor = $('#color').val();
		var thecolor_checkbox;
		if($('#color-checkbox').prop( "checked" )){
			thecolor_checkbox = 'on';
		} else {
			thecolor_checkbox = 'off';
		}
		var color_checkbox;
		
		//tab status
		var thetabstatus_checkbox;
		if($('#tabstatus-checkbox').prop( "checked" )){
			thetabstatus_checkbox = 'on';
		} else {
			thetabstatus_checkbox = 'off';
		}
		var tabstatus_checkbox;
		
		//name
		var thename_checkbox;
		if($('#name-checkbox').prop( "checked" )){
			thename_checkbox = 'on';
		} else {
			thename_checkbox = 'off';
		}
		var name_checkbox;
		
		//email
		var theemail_checkbox;
		if($('#email-checkbox').prop( "checked" )){
			theemail_checkbox = 'on';
		} else {
			theemail_checkbox = 'off';
		}
		var email_checkbox;
		
		//windowsize
		var thewindowsize_checkbox;
		if($('#windowsize-checkbox').prop( "checked" )){
			thewindowsize_checkbox = 'on';
		} else {
			thewindowsize_checkbox = 'off';
		}
		var windowsize_checkbox;
		
		//screensize
		var thescreensize_checkbox;
		if($('#screensize-checkbox').prop( "checked" )){
			thescreensize_checkbox = 'on';
		} else {
			thescreensize_checkbox = 'off';
		}
		var screensize_checkbox;
		
		//currenturl
		var thecurrenturl_checkbox;
		if($('#currenturl-checkbox').prop( "checked" )){
			thecurrenturl_checkbox = 'on';
		} else {
			thecurrenturl_checkbox = 'off';
		}
		var currenturl_checkbox;
		
		//ipaddress
		var theipaddress_checkbox;
		if($('#ipaddress-checkbox').prop( "checked" )){
			theipaddress_checkbox = 'on';
		} else {
			theipaddress_checkbox = 'off';
		}
		var ipaddress_checkbox;
		
		//date
		var thedate_checkbox;
		if($('#date-checkbox').prop( "checked" )){
			thedate_checkbox = 'on';
		} else {
			thedate_checkbox = 'off';
		}
		var date_checkbox;
		
		//duration
		var theduration_checkbox;
		if($('#duration-checkbox').prop( "checked" )){
			theduration_checkbox = 'on';
		} else {
			theduration_checkbox = 'off';
		}
		var duration_checkbox;
		
		// data to file on fly
		var data_to_file_on_fly;
		var thedata_to_file_on_fly = $('#data-to-file-on-fly').val();
		var thedata_to_file_on_fly_checkbox;
		if($('#data-to-file-on-fly-checkbox').prop( "checked" )){
			thedata_to_file_on_fly_checkbox = 'on';
		} else {
			thedata_to_file_on_fly_checkbox = 'off';
		}
		var data_to_file_on_fly_checkbox;
		
		// data to database on fly
		var data_to_database_on_fly;
		var thedata_to_database_on_fly = $('#data-to-database-on-fly').val();
		var thedata_to_database_on_fly_checkbox;
		if($('#data-to-database-on-fly-checkbox').prop( "checked" )){
			thedata_to_database_on_fly_checkbox = 'on';
		} else {
			thedata_to_database_on_fly_checkbox = 'off';
		}
		var data_to_database_on_fly_checkbox;
		
		// Cursor Reminder
		var cursor_reminder;
		var thecursor_reminder = $('#cursor-reminder').val();
		
		// Demo
		var thedemo_checkbox;
		if($('#demo-checkbox').prop( "checked" )){
			thedemo_checkbox = 'on';
		} else {
			thedemo_checkbox = 'off';
		}
		var demo_checkbox;
		
        // Check that there's some code there.
		/*
        if (!therestricted_focus_viewer_imitation_checkbox) {
          //message('Error: No value specified');
          return;
        }
		*/
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'name': thename, 'email': theemail, 'logging': thelogging, 'mouseclick': themouseclick, 'touch': thetouch, 'mousemove': themousemove, 'touchmove': thetouchmove, 'mousescroll': themousescroll, 'keyboardpress': thekeyboardpress, 'sampling_rate_mode_checkbox': thesampling_rate_mode_checkbox, 'sampling_rate': thesampling_rate, 'restricted_focus_viewer_imitation_checkbox': therestricted_focus_viewer_imitation_checkbox, 'bubble_view_imitation_checkbox': thebubble_view_imitation_checkbox, 'finger_tracing_learning_system_imitation_checkbox': thefinger_tracing_learning_system_imitation_checkbox, 'transparency_control': thetransparency_control, 'fontsize_magnifier': thefontsize_magnifier, 'background_color': thebackground_color, 'background_color_checkbox': thebackground_color_checkbox, 'color': thecolor, 'color_checkbox': thecolor_checkbox,  'tabstatus_checkbox': thetabstatus_checkbox, 'name_checkbox': thename_checkbox, 'email_checkbox': theemail_checkbox, 'windowsize_checkbox': thewindowsize_checkbox, 'screensize_checkbox': thescreensize_checkbox, 'zoom': thezoom, 'event_type': theevent_type, 'currenturl_checkbox': thecurrenturl_checkbox, 'ipaddress_checkbox': theipaddress_checkbox, 'date_checkbox': thedate_checkbox, 'duration_checkbox': theduration_checkbox, 'data_to_file_on_fly': thedata_to_file_on_fly, 'data_to_file_on_fly_checkbox': thedata_to_file_on_fly_checkbox, 'data_to_database_on_fly': thedata_to_database_on_fly, 'data_to_database_on_fly_checkbox': thedata_to_database_on_fly_checkbox, 'cursor_reminder': thecursor_reminder, 'demo_checkbox': thedemo_checkbox}, function() {
          // Notify that we saved.
          //message('Settings saved');
		  console.log('name is set to ' + thename);
		  console.log('email is set to ' + theemail);
		  console.log('logging is set to ' + thelogging);
		  console.log('mouseclick is set to ' + themouseclick);
		  console.log('touch is set to ' + thetouch);
		  console.log('mousemove is set to ' + themousemove);
		  console.log('touchmove is set to ' + thetouchmove);
		  console.log('mousescroll is set to ' + themousescroll);
		  console.log('keyboardpress is set to ' + thekeyboardpress);
		  console.log('sampling_rate_mode_checkbox is set to ' + thesampling_rate_mode_checkbox);
		  console.log('sampling_rate is set to ' + thesampling_rate);
		  console.log('restricted_focus_viewer_imitation_checkbox is set to ' + therestricted_focus_viewer_imitation_checkbox);
		  console.log('bubble_view_imitation_checkbox is set to ' + thebubble_view_imitation_checkbox);
		  console.log('finger_tracing_learning_system_imitation_checkbox is set to ' + thefinger_tracing_learning_system_imitation_checkbox);
		  console.log('transparency_control ' + thetransparency_control);
		  console.log('fontsize_magnifier ' + thefontsize_magnifier);
		  console.log('background_color ' + thebackground_color);
		  console.log('background_color_checkbox ' + thebackground_color_checkbox);
		  console.log('color ' + thecolor);
		  console.log('color_checkbox ' + thecolor_checkbox);
		  console.log('tabstus_checkbox ' + thetabstatus_checkbox);
		  console.log('name_checkbox ' + thename_checkbox);
		  console.log('email_checkbox ' + theemail_checkbox);
		  console.log('windowsize_checkbox ' + thewindowsize_checkbox);
		  console.log('screensize_checkbox ' + thescreensize_checkbox);
		  console.log('zoom ' + thezoom);
		  console.log('event_type ' + theevent_type);
		  console.log('currenturl_checkbox ' + thecurrenturl_checkbox);
		  console.log('ipaddress_checkbox ' + theipaddress_checkbox);
		  console.log('date_checkbox ' + thedate_checkbox);
		  console.log('duration_checkbox ' + theduration_checkbox);
		  console.log('data_to_file_on_fly ' + thedata_to_file_on_fly);
		  console.log('data_to_file_on_fly_checkbox ' + thedata_to_file_on_fly_checkbox);
		  console.log('data_to_database_on_fly ' + thedata_to_database_on_fly);
		  console.log('data_to_database_on_fly_checkbox ' + thedata_to_database_on_fly_checkbox);
		  console.log('cursor_reminder ' + thecursor_reminder);
		  console.log('demo_checkbox ' + thedemo_checkbox);
        });
		}
		
		function loadChanges(){
			    var option_event_type;
			chrome.storage.sync.get(['name', 'email', 'logging', 'mouseclick', 'touch', 'mousemove', 'touchmove', 'mousescroll', 'keyboardpress', 'sampling_rate_mode_checkbox', 'sampling_rate', 'restricted_focus_viewer_imitation_checkbox', 'bubble_view_imitation_checkbox', 'finger_tracing_learning_system_imitation_checkbox', 'transparency_control', 'fontsize_magnifier', 'background_color', 'background_color_checkbox', 'color', 'color_checkbox', 'tabstatus_checkbox', 'name_checkbox', 'email_checkbox', 'windowsize_checkbox', 'screensize_checkbox', 'zoom', 'event_type', 'currenturl_checkbox', 'ipaddress_checkbox', 'date_checkbox', 'duration_checkbox', 'data_to_file_on_fly', 'data_to_database_on_fly_checkbox', 'data_to_database_on_fly', 'data_to_database_on_fly_checkbox', 'cursor_reminder', 'demo_checkbox'], function(result) {
			
			if(result.name != null){
			$('#name').val(result.name);
			}
			if(result.email != null){
			$('#email').val(result.email);
			}
			
			if(result.logging == 'on'){
				console.log('logging currently is ' + true);
				$('#logging').prop( "checked", true);
			} else {
				console.log('logging currently is ' + false);
				$('#logging').prop( "checked", false);
			}
			
			if(result.mouseclick == 'on'){
				console.log('mouseclick currently is ' + true);
				$('#mouseclick').prop( "checked", true);
			} else {
				console.log('mouseclick currently is ' + false);
				$('#mouseclick').prop( "checked", false);
			}
			
			if(result.touch == 'on'){
				console.log('touch currently is ' + true);
				$('#touch').prop( "checked", true);
			} else {
				console.log('touch currently is ' + false);
				$('#touch').prop( "checked", false);
			}
			
			if(result.mousemove == 'on'){
				console.log('mousemove currently is ' + true);
				$('#mousemove').prop( "checked", true);
			} else {
				console.log('mousemove currently is ' + false);
				$('#mousemove').prop( "checked", false);
			}
			
			if(result.touchmove == 'on'){
				console.log('touchmove currently is ' + true);
				$('#touchmove').prop( "checked", true);
			} else {
				console.log('touchmove currently is ' + false);
				$('#touchmove').prop( "checked", false);
			}
			
			if(result.mousescroll == 'on'){
				console.log('mousescroll currently is ' + true);
				$('#mousescroll').prop( "checked", true);
			} else {
				console.log('mousescroll currently is ' + false);
				$('#mousescroll').prop( "checked", false);
			}
			
			if(result.keyboardpress == 'on'){
				console.log('keyboardpress currently is ' + true);
				$('#keyboardpress').prop( "checked", true);
			} else {
				console.log('keyboardpress currently is ' + false);
				$('#keyboardpress').prop( "checked", false);
			}
			
			if(result.sampling_rate_mode_checkbox == 'on'){
				console.log('sampling_rate_mode_checkbox currently is ' + true);
				$('#sampling-rate-mode-checkbox').prop( "checked", true);
			} else {
				console.log('sampling_rate_mode_checkbox currently is ' + false);
				$('#sampling-rate-mode-checkbox').prop( "checked", false);
			}
			if(result.sampling_rate != null){
				$('#sampling-rate').val(result.sampling_rate);
			}
			
			if(result.restricted_focus_viewer_imitation_checkbox == 'on'){
				console.log('restricted_focus_viewer_imitation_checkbox currently is ' + true);
				$('#restricted-focus-viewer-imitation-checkbox').prop( "checked", true);
			} else {
				console.log('restricted_focus_viewer_imitation_checkbox currently is ' + false);
				$('#restricted-focus-viewer-imitation-checkbox').prop( "checked", false);
			}
			
			if(result.bubble_view_imitation_checkbox == 'on'){
				console.log('bubble_view_imitation_checkbox currently is ' + true);
				$('#bubble-view-imitation-checkbox').prop( "checked", true);
			} else {
				console.log('bubble_view_imitation_checkbox currently is ' + false);
				$('#bubble-view-imitation-checkbox').prop( "checked", false);
			}
			
			if(result.finger_tracing_learning_system_imitation_checkbox == 'on'){
				console.log('finger_tracing_learning_system_imitation_checkbox currently is ' + true);
				$('#finger-tracing-learning-system-imitation-checkbox').prop( "checked", true);
			} else {
				console.log('finger_tracing_learning_system_imitation_checkbox currently is ' + false);
				$('#finger-tracing-learning-system-imitation-checkbox').prop( "checked", false);
			}
			
			if(result.transparency_control != null){
			$('#transparency-control').val(result.transparency_control);
			console.log('transparency_control currently is ' + result.transparency_control);
			}
			
			if(result.fontsize_magnifier != null){
			$('#fontsize-magnifier').val(result.fontsize_magnifier);
			console.log('fontsize_magnifier currently is ' + result.fontsize_magnifier);
			}
			
			if(result.background_color != null){
			$('#background-color').val(result.background_color);
			console.log('background_color currently is ' + result.background_color);
			}
			if(result.background_color_checkbox == 'on'){
				console.log('background_color_checkbox currently is ' + true);
				$('#background-color-checkbox').prop( "checked", true);
			} else {
				console.log('background_color_checkbox currently is ' + false);
				$('#background-color-checkbox').prop( "checked", false);
			}
			
			if(result.color != null){
			$('#color').val(result.color);
			console.log('color currently is ' + result.color);
			if(result.color_checkbox == 'on'){
				console.log('color_checkbox currently is ' + true);
				$('#color-checkbox').prop( "checked", true);
			} else {
				console.log('color_checkbox currently is ' + false);
				$('#color-checkbox').prop( "checked", false);
			}
			}
			
			if(result.tabstatus_checkbox == 'on'){
				console.log('tabstatus_checkbox currently is ' + true);
				$('#tabstatus-checkbox').prop( "checked", true);
			} else {
				console.log('tabstatus_checkbox currently is ' + false);
				$('#tabstatus-checkbox').prop( "checked", false);
			}
			
			if(result.name_checkbox == 'on'){
				console.log('name_checkbox currently is ' + true);
				$('#name-checkbox').prop( "checked", true);
			} else {
				console.log('name_checkbox currently is ' + false);
				$('#name-checkbox').prop( "checked", false);
			}
			
			if(result.email_checkbox == 'on'){
				console.log('email_checkbox currently is ' + true);
				$('#email-checkbox').prop( "checked", true);
			} else {
				console.log('email_checkbox currently is ' + false);
				$('#email-checkbox').prop( "checked", false);
			}
			
			if(result.windowsize_checkbox == 'on'){
				console.log('windowsize_checkbox currently is ' + true);
				$('#windowsize-checkbox').prop( "checked", true);
			} else {
				console.log('windowsize_checkbox currently is ' + false);
				$('#windowsize-checkbox').prop( "checked", false);
			}
			
			if(result.screensize_checkbox == 'on'){
				console.log('screensize_checkbox currently is ' + true);
				$('#screensize-checkbox').prop( "checked", true);
			} else {
				console.log('screensize_checkbox currently is ' + false);
				$('#screensize-checkbox').prop( "checked", false);
			}
			
			if(result.zoom == 'on'){
				console.log('zoom currently is ' + true);
				$('#zoom').prop( "checked", true);
			} else {
				console.log('zoom currently is ' + false);
				$('#zoom').prop( "checked", false);
			}

			if(result.event_type == 'on'){
				console.log('event_type currently is ' + true);
				option_event_type = 1;
				$('#event-type').prop( "checked", true);
			} else {
				console.log('event_type currently is ' + false);
				option_event_type = 0;
				$('#event-type').prop( "checked", false);
			}
			
			if(result.currenturl_checkbox == 'on'){
				console.log('currenturl_checkbox currently is ' + true);
				$('#currenturl-checkbox').prop( "checked", true);
			} else {
				console.log('currenturl_checkbox currently is ' + false);
				$('#currenturl-checkbox').prop( "checked", false);
			}
			
			if(result.ipaddress_checkbox == 'on'){
				console.log('ipaddress_checkbox currently is ' + true);
				$('#ipaddress-checkbox').prop( "checked", true);
			} else {
				console.log('ipaddress_checkbox currently is ' + false);
				$('#ipaddress-checkbox').prop( "checked", false);
			}
			
			if(result.date_checkbox == 'on'){
				console.log('date_checkbox currently is ' + true);
				$('#date-checkbox').prop( "checked", true);
			} else {
				console.log('date_checkbox currently is ' + false);
				$('#date-checkbox').prop( "checked", false);
			}
			
			if(result.duration_checkbox == 'on'){
				console.log('duration_checkbox currently is ' + true);
				$('#duration-checkbox').prop( "checked", true);
			} else {
				console.log('duration_checkbox currently is ' + false);
				$('#duration-checkbox').prop( "checked", false);
			}
			
			if(result.data_to_file_on_fly != null){
			$('#data-to-file-on-fly').val(result.data_to_file_on_fly);
			console.log('data_to_file_on_fly currently is ' + result.data_to_file_on_fly);
			if(result.data_to_file_on_fly_checkbox == 'on'){
				console.log('data_to_file_on_fly_checkbox currently is ' + true);
				$('#data-to-file-on-fly-checkbox').prop( "checked", true);
			} else {
				console.log('data_to_file_on_fly_checkbox currently is ' + false);
				$('#data-to-file-on-fly-checkbox').prop( "checked", false);
			}
			}
			
			if(result.data_to_database_on_fly != null){
			$('#data-to-database-on-fly').val(result.data_to_database_on_fly);
			console.log('data_to_database_on_fly currently is ' + result.data_to_database_on_fly);
			if(result.data_to_database_on_fly_checkbox == 'on'){
				console.log('data_to_database_on_fly_checkbox currently is ' + true);
				$('#data-to-database-on-fly-checkbox').prop( "checked", true);
			} else {
				console.log('data_to_database_on_fly_checkbox currently is ' + false);
				$('#data-to-database-on-fly-checkbox').prop( "checked", false);
			}
			}
			
			if(result.cursor_reminder != null){
			$('#cursor-reminder').val(result.cursor_reminder);
			}
			
			if(result.demo_checkbox == 'on'){
				console.log('demo_checkbox currently is ' + true);
				$('#demo-checkbox').prop( "checked", true);
			} else {
				console.log('demo_checkbox currently is ' + false);
				$('#demo-checkbox').prop( "checked", false);
			}
		});
	}
		
	$('#save').click(function(){
		saveChanges();
		loadChanges();
	});
	loadChanges();
});
