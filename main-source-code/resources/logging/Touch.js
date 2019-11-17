var mTouch = [];

var page_Touch = 0;
var roi_Touch = 0;

function Touch() {
	if($("#touch").is(":checked")){
		$(window).on("touchstart", function(event) {
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				mTouch[i] = 'touched';
				x[i] = event.touches[0].pageX;
				y[i] = event.touches[0].pageY;
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
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
					// Demo
					demo();
				}
			}
			if($("#pagetracking").is(":checked")){
				page_Touch ++;
				page_debug_amount();
			}
			if($("#roitracking").is(":checked")){
				area = ROI(event.pageX, event.pageY, areas);
				if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
					roi_Touch ++;
				} else {
					if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
						post_data_fly($('#roi-data-to-database-on-fly').val());
					}
					reset_amount();
					roi_Touch ++;
				}
				prev_area = area;
				roi_debug_amount();
			}
		}).on("touchend", function(event) {
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				mTouch[i] = 'untouched';
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
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
					// Demo
					demo();
				}
			}
		}).on("touchcancel", function(event) {
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				general_variables();
				mTouch[i] = 'interrupted';
				x[i] = event.touches[0].pageX;
				y[i] = event.touches[0].pageY;
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
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
					// Demo
					demo();
				}
			}
		});
	}
}
