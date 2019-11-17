var samplingmode = [];
var sampling_timer;

function sampling_rate() {
	if ($('#sampling-rate-mode-checkbox').is(":checked")) {
		sampling_timer = setInterval(function() {
			// increment the counter when there was an event and post only when event was triggered
			if(trigger){
				demo();
				i ++;
				// post to database
				if ($("#data-to-database-on-fly-checkbox").is(":checked")) {
					post_data_fly($('#data-to-database-on-fly').val());
				}
				/*
				// post to file
				if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
					post_data_fly("files/savedatafiledefaulteach.php");
				}
				*/
				trigger = false;
			}
		}, 1000 / $('#sampling-rate').val());
	} else {
		clearTimeout(sampling_timer);
	}
}
