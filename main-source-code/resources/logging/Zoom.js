var windowwidth = [window.innerWidth];
var windowheight = [window.innerHeight];
var screenwidth = [screen.width];
var screenheight = [screen.height];
var zoom = [100*screen.width/window.innerWidth];

if($("#windowsize-checkbox").is(":checked")){
	var page_windowwidth = window.innerWidth;
	var page_windowheight = window.innerHeight;
} else {
	var page_windowwidth = 'disabled';
	var page_windowheight = 'disabled';
}
		
if($("#screensize-checkbox").is(":checked")){
	var page_screenwidth = screen.width;
	var page_screenheight = screen.height;
} else {
	var page_screenwidth = 'disabled';
	var page_screenheight = 'disabled';
}

var page_zoom = 0;

if($("#windowsize-checkbox").is(":checked")){
	var roi_windowwidth = window.innerWidth;
	var roi_windowheight = window.innerHeight;
} else {
	var roi_windowwidth = 'disabled';
	var roi_windowheight = 'disabled';
}
		
if($("#screensize-checkbox").is(":checked")){
	var roi_screenwidth = screen.width;
	var roi_screenheight = screen.height;
} else {
	var roi_screenwidth = 'disabled';
	var roi_screenheight = 'disabled';
}

var roi_zoom = 0;

function Zoom() {
	if($("#zoom").is(":checked")){
		$(window).resize(function() {
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				zoom[i] = 100*screen.width/window.innerWidth;
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
				page_zoom ++;
				page_debug_amount();
			}
			if($("#roitracking").is(":checked")){
				area = ROI(event.pageX, event.pageY, areas);
				if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
					roi_zoom ++;
				} else {
					if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
						roi_post_data_fly($('#roi-data-to-database-on-fly').val());
					}
					reset_amount();
					roi_zoom ++;
				}
				prev_area = area;
				roi_debug_amount();
			}
		});
	}
}
