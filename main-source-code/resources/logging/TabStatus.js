var active = [];

var page_active = 0;
var page_inactive = 0;

var roi_active = 0;
var roi_inactive = 0;

function TabStatus() {
	if($("#tabstatus-checkbox").is(":checked")){
		$(window).mouseenter(function() {
			tabisactive();
		}).mouseover(function() {
			tabisactive();
		}).on("pageshow", function() {
			tabisactive();
		}).mouseleave(function() {
			tabnotactive();
		}).mouseout(function() {
			tabnotactive();
		}).on("pagehide", function() {
			tabnotactive();
		});
	}
}

function tabisactive(){
	if($("#default").is(":checked")){
		if (!$('#sampling-rate-mode-checkbox').is(":checked")){
			i ++;
		} else {
			trigger = true;
		}
		$('#active').text('active');
		default_sync_other_logs();
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
		page_active ++;
		page_debug_amount();
	}
	if($("#roitracking").is(":checked")){
		area = ROI(event.pageX, event.pageY, areas);
		if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
			roi_active ++;
		} else {
			if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
				roi_post_data_fly($('#roi-data-to-database-on-fly').val());
			}
			reset_amount();
			roi_active ++;
		}
		prev_area = area;
		roi_debug_amount();			
	}
}

function tabnotactive(){
	if($("#default").is(":checked")){
		if (!$('#sampling-rate-mode-checkbox').is(":checked")){
			i ++;
		} else {
			trigger = true;
		}
		$('#active').text('inactive');
		default_sync_other_logs();
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
		page_inactive ++;
		page_debug_amount();
	}
	if($("#roitracking").is(":checked")){
		area = ROI(event.pageX, event.pageY, areas);
		if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
			roi_inactive ++;
		} else {
			if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
				roi_post_data_fly($('#roi-data-to-database-on-fly').val());
			}
			reset_amount();
			roi_inactive ++;
		}
		prev_area = area;
		roi_debug_amount();			
	}
}
