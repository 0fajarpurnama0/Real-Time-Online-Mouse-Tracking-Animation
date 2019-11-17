// This is where the checkbox html are created to activate or diactivate.
$(document).ready(function(){
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
			thelogging = true;
		} else {
			thelogging = false;
		}
		var logging;
		
		var themouseclick;
		if($('#mouseclick').prop( "checked" )){
			themouseclick = true;
		} else {
			themouseclick = false;
		}
		var mouseclick;
		
		var thetouch;
		if($('#touch').prop( "checked" )){
			thetouch = true;
		} else {
			thetouch = false;
		}
		var touch;
		
		var thetouchmove;
		if($('#touchmove').prop( "checked" )){
			thetouchmove = true;
		} else {
			thetouchmove = false;
		}
		var touchmove;
		
		var themousemove;
		if($('#mousemove').prop( "checked" )){
			themousemove = true;
		} else {
			themousemove = false;
		}
		var mousemove;
		
		var themousescroll;
		if($('#mousescroll').prop( "checked" )){
			themousescroll = true;
		} else {
			themousescroll = false;
		}
		var mousescroll;
		
		var thekeyboardpress;
		if($('#keyboardpress').prop( "checked" )){
			thekeyboardpress = true;
		} else {
			thekeyboardpress = false;
		}
		var keyboardpress;
		
		var thezoom;
		if($('#zoom').prop( "checked" )){
			thezoom = true;
		} else {
			thezoom = false;
		}
		var zoom;
		
		var theevent_type;
		if($('#event-type').prop( "checked" )){
			theevent_type = true;
		} else {
			theevent_type = false;
		}
		var event_type;

		// Sampling Rate Mode 
		var thesampling_rate_mode_checkbox;
		if($('#sampling-rate-mode-checkbox').prop( "checked" )){
			thesampling_rate_mode_checkbox = true;
		} else {
			thesampling_rate_mode_checkbox = false;
		}
		var sampling_rate_mode_checkbox;
		var sampling_rate;
		var thesampling_rate = $('#sampling-rate').val();
		
		//tab status
		var thetabstatus_checkbox;
		if($('#tabstatus-checkbox').prop( "checked" )){
			thetabstatus_checkbox = true;
		} else {
			thetabstatus_checkbox = false;
		}
		var tabstatus_checkbox;
		
		//name
		var thename_checkbox;
		if($('#name-checkbox').prop( "checked" )){
			thename_checkbox = true;
		} else {
			thename_checkbox = false;
		}
		var name_checkbox;
		
		//email
		var theemail_checkbox;
		if($('#email-checkbox').prop( "checked" )){
			theemail_checkbox = true;
		} else {
			theemail_checkbox = false;
		}
		var email_checkbox;
		
		//windowsize
		var thewindowsize_checkbox;
		if($('#windowsize-checkbox').prop( "checked" )){
			thewindowsize_checkbox = true;
		} else {
			thewindowsize_checkbox = false;
		}
		var windowsize_checkbox;
		
		//screensize
		var thescreensize_checkbox;
		if($('#screensize-checkbox').prop( "checked" )){
			thescreensize_checkbox = true;
		} else {
			thescreensize_checkbox = false;
		}
		var screensize_checkbox;
		
		//currenturl
		var thecurrenturl_checkbox;
		if($('#currenturl-checkbox').prop( "checked" )){
			thecurrenturl_checkbox = true;
		} else {
			thecurrenturl_checkbox = false;
		}
		var currenturl_checkbox;
		
		//ipaddress
		var theipaddress_checkbox;
		if($('#ipaddress-checkbox').prop( "checked" )){
			theipaddress_checkbox = true;
		} else {
			theipaddress_checkbox = false;
		}
		var ipaddress_checkbox;
		
		//date
		var thedate_checkbox;
		if($('#date-checkbox').prop( "checked" )){
			thedate_checkbox = true;
		} else {
			thedate_checkbox = false;
		}
		var date_checkbox;
		
		//duration
		var theduration_checkbox;
		if($('#duration-checkbox').prop( "checked" )){
			theduration_checkbox = true;
		} else {
			theduration_checkbox = false;
		}
		var duration_checkbox;
		
		// data to file on fly
		var data_to_file_on_fly;
		var thedata_to_file_on_fly = $('#data-to-file-on-fly').val();
		var thedata_to_file_on_fly_checkbox;
		if($('#data-to-file-on-fly-checkbox').prop( "checked" )){
			thedata_to_file_on_fly_checkbox = true;
		} else {
			thedata_to_file_on_fly_checkbox = false;
		}
		var data_to_file_on_fly_checkbox;
		
		// data to database on fly
		var data_to_database_on_fly;
		var thedata_to_database_on_fly = $('#data-to-database-on-fly').val();
		var thedata_to_database_on_fly_checkbox;
		if($('#data-to-database-on-fly-checkbox').prop( "checked" )){
			thedata_to_database_on_fly_checkbox = true;
		} else {
			thedata_to_database_on_fly_checkbox = false;
		}
		var data_to_database_on_fly_checkbox;
		
		// Demo
		var thedemo_checkbox;
		if($('#demo-checkbox').prop( "checked" )){
			thedemo_checkbox = true;
		} else {
			thedemo_checkbox = false;
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
        chrome.storage.sync.set({'name': thename, 'email': theemail, 'logging': thelogging, 'mouseclick': themouseclick, 'touch': thetouch, 'mousemove': themousemove, 'touchmove': thetouchmove, 'mousescroll': themousescroll, 'keyboardpress': thekeyboardpress, 'sampling_rate_mode_checkbox': thesampling_rate_mode_checkbox, 'sampling_rate': thesampling_rate, 'tabstatus_checkbox': thetabstatus_checkbox, 'name_checkbox': thename_checkbox, 'email_checkbox': theemail_checkbox, 'windowsize_checkbox': thewindowsize_checkbox, 'screensize_checkbox': thescreensize_checkbox, 'zoom': thezoom, 'event_type': theevent_type, 'currenturl_checkbox': thecurrenturl_checkbox, 'ipaddress_checkbox': theipaddress_checkbox, 'date_checkbox': thedate_checkbox, 'duration_checkbox': theduration_checkbox, 'data_to_file_on_fly': thedata_to_file_on_fly, 'data_to_file_on_fly_checkbox': thedata_to_file_on_fly_checkbox, 'data_to_database_on_fly': thedata_to_database_on_fly, 'data_to_database_on_fly_checkbox': thedata_to_database_on_fly_checkbox, 'demo_checkbox': thedemo_checkbox}, function() {
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
		  console.log('demo_checkbox ' + thedemo_checkbox);
        });
		}
		
		function loadChanges(){
			    var option_event_type;
			chrome.storage.sync.get(['name', 'email', 'logging', 'mouseclick', 'touch', 'mousemove', 'touchmove', 'mousescroll', 'keyboardpress', 'sampling_rate_mode_checkbox', 'sampling_rate', 'tabstatus_checkbox', 'name_checkbox', 'email_checkbox', 'windowsize_checkbox', 'screensize_checkbox', 'zoom', 'event_type', 'currenturl_checkbox', 'ipaddress_checkbox', 'date_checkbox', 'duration_checkbox', 'data_to_file_on_fly', 'data_to_file_on_fly_checkbox', 'data_to_database_on_fly', 'data_to_database_on_fly_checkbox', 'demo_checkbox'], function(result) {
			
			if(result.name != null){
			$('#name').val(result.name);
			}
			if(result.email != null){
			$('#email').val(result.email);
			}
			
			if(result.logging){
				console.log('logging currently is ' + true);
				$('#logging').prop( "checked", true);
			} else {
				console.log('logging currently is ' + false);
				$('#logging').prop( "checked", false);
			}
			
			if(result.mouseclick){
				console.log('mouseclick currently is ' + true);
				$('#mouseclick').prop( "checked", true);
			} else {
				console.log('mouseclick currently is ' + false);
				$('#mouseclick').prop( "checked", false);
			}
			
			if(result.touch){
				console.log('touch currently is ' + true);
				$('#touch').prop( "checked", true);
			} else {
				console.log('touch currently is ' + false);
				$('#touch').prop( "checked", false);
			}
			
			if(result.mousemove){
				console.log('mousemove currently is ' + true);
				$('#mousemove').prop( "checked", true);
			} else {
				console.log('mousemove currently is ' + false);
				$('#mousemove').prop( "checked", false);
			}
			
			if(result.touchmove){
				console.log('touchmove currently is ' + true);
				$('#touchmove').prop( "checked", true);
			} else {
				console.log('touchmove currently is ' + false);
				$('#touchmove').prop( "checked", false);
			}
			
			if(result.mousescroll){
				console.log('mousescroll currently is ' + true);
				$('#mousescroll').prop( "checked", true);
			} else {
				console.log('mousescroll currently is ' + false);
				$('#mousescroll').prop( "checked", false);
			}
			
			if(result.keyboardpress){
				console.log('keyboardpress currently is ' + true);
				$('#keyboardpress').prop( "checked", true);
			} else {
				console.log('keyboardpress currently is ' + false);
				$('#keyboardpress').prop( "checked", false);
			}
			
			if(result.sampling_rate_mode_checkbox){
				console.log('sampling_rate_mode_checkbox currently is ' + true);
				$('#sampling-rate-mode-checkbox').prop( "checked", true);
			} else {
				console.log('sampling_rate_mode_checkbox currently is ' + false);
				$('#sampling-rate-mode-checkbox').prop( "checked", false);
			}
			if(result.sampling_rate != null){
				$('#sampling-rate').val(result.sampling_rate);
			}
			
			if(result.tabstatus_checkbox){
				console.log('tabstatus_checkbox currently is ' + true);
				$('#tabstatus-checkbox').prop( "checked", true);
			} else {
				console.log('tabstatus_checkbox currently is ' + false);
				$('#tabstatus-checkbox').prop( "checked", false);
			}
			
			if(result.name_checkbox){
				console.log('name_checkbox currently is ' + true);
				$('#name-checkbox').prop( "checked", true);
			} else {
				console.log('name_checkbox currently is ' + false);
				$('#name-checkbox').prop( "checked", false);
			}
			
			if(result.email_checkbox){
				console.log('email_checkbox currently is ' + true);
				$('#email-checkbox').prop( "checked", true);
			} else {
				console.log('email_checkbox currently is ' + false);
				$('#email-checkbox').prop( "checked", false);
			}
			
			if(result.windowsize_checkbox){
				console.log('windowsize_checkbox currently is ' + true);
				$('#windowsize-checkbox').prop( "checked", true);
			} else {
				console.log('windowsize_checkbox currently is ' + false);
				$('#windowsize-checkbox').prop( "checked", false);
			}
			
			if(result.screensize_checkbox){
				console.log('screensize_checkbox currently is ' + true);
				$('#screensize-checkbox').prop( "checked", true);
			} else {
				console.log('screensize_checkbox currently is ' + false);
				$('#screensize-checkbox').prop( "checked", false);
			}
			
			if(result.zoom){
				console.log('zoom currently is ' + true);
				$('#zoom').prop( "checked", true);
			} else {
				console.log('zoom currently is ' + false);
				$('#zoom').prop( "checked", false);
			}

			if(result.event_type){
				console.log('event_type currently is ' + true);
				$('#event-type').prop( "checked", true);
			} else {
				console.log('event_type currently is ' + false);
				$('#event-type').prop( "checked", false);
			}
			
			if(result.currenturl_checkbox){
				console.log('currenturl_checkbox currently is ' + true);
				$('#currenturl-checkbox').prop( "checked", true);
			} else {
				console.log('currenturl_checkbox currently is ' + false);
				$('#currenturl-checkbox').prop( "checked", false);
			}
			
			if(result.ipaddress_checkbox){
				console.log('ipaddress_checkbox currently is ' + true);
				$('#ipaddress-checkbox').prop( "checked", true);
			} else {
				console.log('ipaddress_checkbox currently is ' + false);
				$('#ipaddress-checkbox').prop( "checked", false);
			}
			
			if(result.date_checkbox){
				console.log('date_checkbox currently is ' + true);
				$('#date-checkbox').prop( "checked", true);
			} else {
				console.log('date_checkbox currently is ' + false);
				$('#date-checkbox').prop( "checked", false);
			}
			
			if(result.duration_checkbox){
				console.log('duration_checkbox currently is ' + true);
				$('#duration-checkbox').prop( "checked", true);
			} else {
				console.log('duration_checkbox currently is ' + false);
				$('#duration-checkbox').prop( "checked", false);
			}
			
			if(result.data_to_file_on_fly != null){
			$('#data-to-file-on-fly').val(result.data_to_file_on_fly);
			console.log('data_to_file_on_fly currently is ' + result.data_to_file_on_fly);
			if(result.data_to_file_on_fly_checkbox){
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
			if(result.data_to_database_on_fly_checkbox){
				console.log('data_to_database_on_fly_checkbox currently is ' + true);
				$('#data-to-database-on-fly-checkbox').prop( "checked", true);
			} else {
				console.log('data_to_database_on_fly_checkbox currently is ' + false);
				$('#data-to-database-on-fly-checkbox').prop( "checked", false);
			}
			}
			
			if(result.demo_checkbox){
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
