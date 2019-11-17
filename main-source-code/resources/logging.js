$.getScript("resources/logging/identity_variables.js");
$.getScript("resources/logging/logging_variables.js");
$.getScript("resources/logging/MouseClick.js");
$.getScript("resources/logging/MouseMove.js");
$.getScript("resources/logging/Scroll.js");
$.getScript("resources/logging/Keylogger.js");
$.getScript("resources/logging/TabStatus.js");
$.getScript("resources/logging/Zoom.js");
$.getScript("resources/logging/Touch.js");
$.getScript("resources/logging/TouchMove.js");
$.getScript("resources/logging/EventType.js");
$.getScript("resources/data/Transmit_Data.js");
$.getScript("resources/data/Local_Data.js");
$.getScript("resources/data/sampling_rate.js");
$.getScript("resources/logging/demo.js");
$.getScript("resources/logging/default_sync_other_logs.js");

$(document).ready(function() {

	function logging() {
		$(window).off(); // remove previous window.mousemove if exists
		// Respond to switch in config.js if checked then activate if unchecked the diactivate.
		if ($("#logging").is(":checked")) {
			sampling_rate();
			MouseClick();
			MouseMove();
			Scroll();
			KeyboardLog();
			TabStatus();
			Zoom();
			Touch();
			TouchMove();
			EventType();
		} else {
			$(window).off();
		}
	}
		
	// Run the logging() function when the #logging checkbox is checked.
	$("#logging, #default, #pagetracking, #roitracking, #mouseclick, #mousemove, #mousescroll, #keyboardpress, #sampling-rate-mode-checkbox, #data-to-file-on-fly-checkbox, #data-to-database-on-fly-checkbox").click(function() {
		logging();
	}).ready(function() {
		logging();
	})

	window.addEventListener("beforeunload", function(event) {
		Leaving();
	});
/*	window.addEventListener("unload", function(event) {
		console.log('test2');
	});*/

})

function Leaving() {
	if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
		post_data_fly($('#file-server-scrip').val());
	}

	if($("#pagetracking").is(":checked")){
		if ($("#page-data-to-database-on-fly-checkbox").is(":checked")) {
			if($("#duration-checkbox").is(":checked")){
				page_duration = (new Date() - page_date) / 1000;
			} else {
				page_duration = 'disabled';
			}
			page_post_data($('#page-data-to-database-on-fly').val());
		}
	}

	if($("#roitracking").is(":checked")){
		if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
			roi_post_data_fly($('#roi-data-to-database-on-fly').val());
		}
	}
	event.returnValue = "Write something clever here..";
}
