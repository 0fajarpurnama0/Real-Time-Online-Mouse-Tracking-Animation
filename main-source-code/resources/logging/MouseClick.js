var leftclick = [false];
var rightclick = [false];
var middleclick = [false];
var mouseClick;

var page_Leftclick = 0;
var page_Rightclick = 0;
var page_Middleclick = 0;

var roi_Leftclick = 0;
var roi_Rightclick = 0;
var roi_Middleclick = 0;

function MouseClick() {
	if($("#mouseclick").is(":checked")){
		$(window).mousedown(function(event) {
			trigger = true;
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				// Coordinates
				x[i] = event.pageX;
				y[i] = event.pageY;
				switch (event.which) {
					case 1:
						leftclick[i] = true;
						mouseClick = 'left click';
						break;
					case 2:
						middleclick[i] = true;
						mouseClick = 'middle click';
						break;
					case 3:
						rightclick[i] = true;
						mouseClick = 'right click';
						break;
					default:
						console.log('You have a strange Mouse!');
				}
				if(!$('#sampling-rate-mode-checkbox').is(":checked")){
					/*
					// post to file
					if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
						post_data_fly("files/savedatafiledefaulteach.php");
					}
					*/
					// post to database
					if ($("#data-to-database-on-fly-checkbox").is(":checked")) {
						post_data_fly($('#data-to-database-on-fly').val());
					}
					// Demo
					demo();
				}
			}
			if($("#pagetracking").is(":checked")){
				switch (event.which) {
					case 1:
						page_Leftclick ++;
						break;
					case 2:
						page_Middleclick ++;
						break;
					case 3:
						page_Rightclick ++;
						break;
					default:
						console.log('You have a strange Mouse!');
				}
				page_debug_amount();
			}
			if($("#roitracking").is(":checked")){
				area = ROI(event.pageX, event.pageY, areas);
				if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
					switch (event.which) {
					case 1:
						roi_Leftclick ++;
						break;
					case 2:
						roi_Middleclick ++;
						break;
					case 3:
						roi_Rightclick ++;
						break;
					default:
						console.log('You have a strange Mouse!');
					}
				} else {
					// Post to Database now
					if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
						roi_post_data_fly($('#roi-data-to-database-on-fly').val());
					}
					reset_amount();
					switch (event.which) {
					case 1:
						roi_Leftclick ++;
						break;
					case 2:
						roi_Middleclick ++;
						break;
					case 3:
						roi_Rightclick ++;
						break;
					default:
						console.log('You have a strange Mouse!');
					}							
				}
				prev_area = area;
				roi_debug_amount();
			}
		}).mouseup(function(event){
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				leftclick[i] = false;
				middleclick[i] = false;
				rightclick[i] = false;
				if(!$('#sampling-rate-mode-checkbox').is(":checked")){
					/*
					// post to file
					if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
						post_data_fly("files/savedatafiledefaulteach.php");
					}
					*/
					// post to database
					if ($("#data-to-database-on-fly-checkbox").is(":checked")) {
						post_data_fly($('#data-to-database-on-fly').val());
					}
					mouseClick = 'no click';
					// Demo
					demo();
				}
			}
		});
	}
}
