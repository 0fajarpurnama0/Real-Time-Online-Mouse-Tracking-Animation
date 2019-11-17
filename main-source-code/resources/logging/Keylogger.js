var keyboardtype = [];
var keyboardPress;

var page_Keyboardtype = 0;

var roi_Keyboardtype = 0;

function KeyboardLog() {
	if($("#keyboardpress").is(":checked")){
		$(window).keypress(function(event) {
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				// Keyboard Event
				keyboardtype[i] += event.key;
				keyboardPress = event.key;
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
				page_Keyboardtype ++;
				page_debug_amount();
			}
			if($("#roitracking").is(":checked")){
				area = ROI(event.pageX, event.pageY, areas);
				if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
					roi_Keyboardtype ++;
				} else {
					if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
						roi_post_data_fly($('#roi-data-to-database-on-fly').val());
					}
					reset_amount();
					roi_Keyboardtype ++;
				}
				prev_area = area;
				roi_debug_amount();
			}
		});
	}
}
