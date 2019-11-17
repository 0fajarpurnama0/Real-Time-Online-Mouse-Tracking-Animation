var lastScrolledLeft = 0;
var lastScrolledTop = 0;
var scrollleft = [0];
var scrolltop = [0];

var page_Scrolls = 0;
var roi_Scrolls = 0;

function Scroll() {
	if($("#mousescroll").is(":checked")){
		$(window).scroll(function(event) {
			if($("#default").is(":checked")){
				if (!$('#sampling-rate-mode-checkbox').is(":checked")){
					i ++;
				} else {
					trigger = true;
				}
				default_sync_other_logs();
				if(Number.isInteger(x[i]) && Number.isInteger(y[i])){
					if (lastScrolledLeft != $(document).scrollLeft()) {
						x[i] -= lastScrolledLeft;
						lastScrolledLeft = $(document).scrollLeft();
						x[i] += lastScrolledLeft;
					}
					if (lastScrolledTop != $(document).scrollTop()) {
						y[i] -= lastScrolledTop;
						lastScrolledTop = $(document).scrollTop();
						y[i] += lastScrolledTop;
					}
				}
				scrollleft[i] = $(document).scrollLeft();
				scrolltop[i] = $(document).scrollTop();
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
				page_Scrolls ++;
				page_debug_amount();
			}
			if($("#roitracking").is(":checked")){
				area = ROI(event.pageX, event.pageY, areas);
				if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
					roi_Scrolls ++;
				} else {
					if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
						roi_post_data_fly($('#roi-data-to-database-on-fly').val());
					}
					reset_amount();
					roi_Scrolls ++;
				}
				prev_area = area;
				roi_debug_amount();			
			}
		});
	}
}
