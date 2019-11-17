$(document).ready(function() {
		var roi_Mousemove = 0; 
		var roi_Leftclick = 0;
		var roi_Rightclick = 0;
		var roi_Middleclick = 0;
		var roi_Keyboardtype = 0;
		var roi_Scrolls = 0; 
		var roi_Touch = 0;
		var roi_Touchmove = 0;
		var roi_zoom = 0;

		if ($('#name-checkbox').is(":checked")) {
			var roi_name = $('#name').val();			
		} else {
			var roi_name = 'anonymous';
		}
		
		if ($('#email-checkbox').is(":checked")) {
			var roi_email = $('#email').val();			
		} else {
			var roi_email = 'anonymous';
		}
		
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
		
		if($("#currenturl-checkbox").is(":checked")){
			var roi_current_url = window.location.href;
		} else {
			var roi_current_url = 'disabled';
		}

		var roi_date = new Date();

		if($("#duration-checkbox").is(":checked")){
			var roi_duration = (new Date() - roi_date) / 1000;
		} else {
			var roi_duration = 'disabled';
		}

		var samplingmode = $('#sampling-rate-mode-checkbox').prop("checked");
		
		if($("#ipaddress-checkbox").is(":checked")){
			// get ip address again due to latency limitation the result can be undefined, so return to previous value.
			$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
				var roi_ip_address = data.ip;
			});
		} else {
			var roi_ip_address = 'disabled';
		}
		var trigger = false;
		var roi_mouseClick;
		var roi_keyboardPress;

	function reset_amount(){
		roi_Mousemove = 0; 
		roi_Leftclick = 0;
		roi_Rightclick = 0;
		roi_Middleclick = 0;
		roi_Keyboardtype = 0;
		roi_Scrolls = 0; 
		roi_Touch = 0;
		roi_Touchmove = 0;
		roi_zoom = 0;

		if ($('#name-checkbox').is(":checked")) {
			roi_name = $('#name').val();			
		} else {
			roi_name = 'anonymous';
		}
		
		if ($('#email-checkbox').is(":checked")) {
			roi_email = $('#email').val();			
		} else {
			roi_email = 'anonymous';
		}
		
		if($("#windowsize-checkbox").is(":checked")){
			roi_windowwidth = window.innerWidth;
			roi_windowheight = window.innerHeight;
		} else {
			roi_windowwidth = 'disabled';
			roi_windowheight = 'disabled';
		}
		
		if($("#screensize-checkbox").is(":checked")){
			roi_screenwidth = screen.width;
			roi_screenheight = screen.height;
		} else {
			roi_screenwidth = 'disabled';
			roi_screenheight = 'disabled';
		}
		
		if($("#currenturl-checkbox").is(":checked")){
			roi_current_url = window.location.href;
		} else {
			roi_current_url = 'disabled';
		}

		roi_date = new Date();

		if($("#duration-checkbox").is(":checked")){
			roi_duration = (new Date() - roi_date) / 1000;
		} else {
			roi_duration = 'disabled';
		}

		samplingmode = $('#sampling-rate-mode-checkbox').prop("checked");
		
		if($("#ipaddress-checkbox").is(":checked")){
			// get ip address again due to latency limitation the result can be undefined, so return to previous value.
			$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
				roi_ip_address = data.ip;
			});
		} else {
			roi_ip_address = 'disabled';
		}
		trigger = false;
		roi_mouseClick;
		roi_keyboardPress;
	}
	// format: [x1, x2, y1, y2] 1920x
	var areas = {quiz1flag: [384, 528, 291, 570], quiz1: [529, 1900, 291, 570], quiz2flag: [384, 528, 571, 852], quiz2: [529, 1900, 571, 852], quiz3flag: [384, 528, 853, 1133], quiz3: [529, 1900, 853, 1133], quiz4flag: [384, 528, 1134, 1441], quiz4: [529, 1900, 1134, 1441], quiz5flag: [384, 528, 1442, 1748], quiz5: [529, 1900, 1442, 1748], quiz6flag: [384, 528, 1749, 2027], quiz6: [529, 1900, 1749, 2027], quiz7flag: [384, 528, 2028, 2452], quiz7: [529, 1900, 2028, 2452], quiz8flag: [384, 528, 2453, 2730], quiz8: [529, 1900, 2453, 2730], quiz9flag: [384, 528, 2731, 3242], quiz9: [529, 1900, 2731, 3242], quiz10flag: [384, 528, 3243, 3580], quiz10: [529, 1900, 3243, 3580], quiz11flag: [384, 528, 3581, 3856], quiz11: [529, 1900, 3581, 3856], quiz12flag: [384, 528, 3857, 4169], quiz12: [529, 1900, 3857, 4169], quiz13flag: [384, 528, 4170, 4746], quiz13: [529, 1900, 4170, 4746], quiz14flag: [384, 528, 4747, 5295], quiz14: [529, 1900, 4747, 5295], quiz15flag: [384, 528, 5296, 5842], quiz15: [529, 1900, 5296, 5842], header: [0, 1920, 0, 64], title: [16, 1904, 150, 270], quiz_navigation: [18, 364, 291, 532], navigation: [16, 366, 551, 1042], administration: [18, 364, 1062, 1693], finish_attempt: [1720, 1896, 5864, 5939], footer: [0, 1920, 5939, 6116]};

	var area = {};
	var prev_area = {};

	function ROI(x, y, areas) {
		var output = {};
		for (var i in areas) {
			if(x >= areas[i][0] && x <= areas[i][1] && y >= areas[i][2] && y <= areas[i][3]) {
				output[i] = areas[i];
				break;
			}
		}
		if(jQuery.isEmptyObject(output)){
			output = {other: [0, 0, 0, 0]};
		}
		return output;
	}

	var sampling_timer;

	reset_amount();

	function roitracking() {
		$(window).off(); // remove previous window.mousemove if exists
		// Respond to switch in config.js if checked then activate if unchecked the diactivate.
		if ($("#roitracking").is(":checked")) {
			if ($('#sampling-rate-mode-checkbox').is(":checked")) {
				sampling_timer = setInterval(function() {
	
				}, 1000 / $('#sampling-rate').val());
			} else {
				clearTimeout(sampling_timer);
				if($("#mouseclick").is(":checked")){
					$(window).mousedown(function(event) {
						area = ROI(event.pageX, event.pageY, areas);
						if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
							switch (event.which) {
							case 1:
								roi_Leftclick ++;
								roi_mouseClick = 'left click';
								break;
							case 2:
								roi_Middleclick ++;
								roi_mouseClick = 'middle click';
								break;
							case 3:
								roi_Rightclick ++;
								roi_mouseClick = 'right click';
								break;
							default:
								console.log('You have a strange Mouse!');
							}
						} else {
							// Post to Database now
							if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
								post_data_fly($('#roi-data-to-database-on-fly').val());
							}
							reset_amount();
							switch (event.which) {
							case 1:
								roi_Leftclick ++;
								roi_mouseClick = 'left click';
								break;
							case 2:
								roi_Middleclick ++;
								roi_mouseClick = 'middle click';
								break;
							case 3:
								roi_Rightclick ++;
								roi_mouseClick = 'right click';
								break;
							default:
								console.log('You have a strange Mouse!');
							}							
						}
						prev_area = area;
						roi_debug_amount();
					}).mouseup(function(event){
						roi_mouseClick = 'no click';
					});
				}
				if($("#mousemove").is(":checked")){
					$(window).mousemove(function(event) {
						area = ROI(event.pageX, event.pageY, areas);
						if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
							roi_Mousemove ++;
						} else {
							if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
								post_data_fly($('#roi-data-to-database-on-fly').val());
							}
							reset_amount();
							roi_Mousemove ++;
						}
						prev_area = area;
						roi_debug_amount();
					});
				}
				if($("#mousescroll").is(":checked")){
					$(window).scroll(function(event) {
						area = ROI(event.pageX, event.pageY, areas);
						if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
							roi_Scrolls ++;
						} else {
							if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
								post_data_fly($('#roi-data-to-database-on-fly').val());
							}
							reset_amount();
							roi_Scrolls ++;
						}
						prev_area = area;
						roi_debug_amount();
					});
				}
				if($("#keyboardpress").is(":checked")){
					$(window).keypress(function(event) {
						area = ROI(event.pageX, event.pageY, areas);
						if((String(Object.keys(area)) == String(Object.keys(prev_area))) || jQuery.isEmptyObject(prev_area)){
							roi_Keyboardtype ++;
						} else {
							if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
								post_data_fly($('#roi-data-to-database-on-fly').val());
							}
							reset_amount();
							roi_Keyboardtype ++;
						}
						prev_area = area;
						roi_debug_amount();
					});
				}
				if($("#touch").is(":checked")){
					$(window).on("touchstart", function(event) {
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
					})
				}
				if($("#touchmove").is(":checked")){
					$(window).on("touchmove", function(event) {
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
					});
				}
			}
		} else {
			if (!$("#logging").is(":checked") && !$("#pagetracking").is(":checked") && !$("#roitracking").is(":checked")) {
				$(window).off();
			}
		}
	}
	// Run the roitracking() function when the #pagetracking checkbox is checked.
	$("#pagetracking, #roitracking, #logging, #mouseclick, #mousemove, #mousescroll, #keyboardpress, #sampling-rate-mode-checkbox, #data-to-file-on-fly-checkbox, #data-to-database-on-fly-checkbox").click(function() {
		roitracking();
	}).ready(function() {
		roitracking();
	})
		
	setInterval(function(){ eps = 0;}, 1000);

	function post_data_fly(script) {
		var mydata = {$name: roi_name, $email: roi_email, $date: roi_date, $duration: roi_duration, $current_url: roi_current_url, $ip_address: roi_ip_address, $area: area, $mousemove: roi_Mousemove, $leftclick: roi_Leftclick, $rightclick: roi_Rightclick, $middleclick: roi_Middleclick, $keyboardtype: roi_Keyboardtype, $scroll: roi_Scrolls}

		mydata.$file = String(roi_name).replace(" ", "") + String(roi_date).replace(":", ".").replace(" ", "") + '.json';

		$.post(script, mydata, function(data,status){
			console.log(data);
			console.log(status);
		});		
	}

	function roi_debug_amount(){
		console.log('area: ' + JSON.stringify(area) + ' Leftclick: ' + roi_Leftclick + ' Rightclick: ' + roi_Rightclick + ' Middleclick: ' + roi_Middleclick + ' Mousemove: ' + roi_Mousemove + ' Keyboardtype: ' + roi_Keyboardtype + ' Scroll: ' + roi_Scrolls);
	}

}).on("beforeunload", function() {
	if ($("#roi-data-to-file-on-fly-checkbox").is(":checked")) {
		post_data_fly($('#roi-file-server-scrip').val());
	}

	if ($("#roi-data-to-database-on-fly-checkbox").is(":checked")) {
		post_data_fly($('#roi-data-to-database-on-fly').val());
	}
});
