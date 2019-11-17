var page_Touchmove = 0;
var roi_Touchmove = 0;

function TouchMove() {
	if($("#touchmove").is(":checked")){
		$(window).on("touchmove", function(event) {
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				mTouch[i] = 'moving';
				x[i] = event.touches[0].pageX;
				y[i] = event.touches[0].pageY;
				zoom = 100*screen.width/window.visualViewport.width;
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
				page_Touchmove ++;
				page_debug_amount();
			}
			if($("#roitracking").is(":checked")){
				area = ROI(event.pageX, event.pageY, areas);
				if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
					roi_Touchmove ++;
				} else {
					if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
						post_data_fly($('#roi-data-to-database-on-fly').val());
					}
					reset_amount();
					roi_Touchmove ++;
				}
				prev_area = area;
				roi_debug_amount();
			}
		});
	}
}
