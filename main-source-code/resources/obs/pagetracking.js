$(document).ready(function() {
	if ($('#name-checkbox').is(":checked")) {
		var page_name = $('#name').val();			
	} else {
		var page_name = 'anonymous';
	}
		
	if ($('#email-checkbox').is(":checked")) {
		var page_email = $('#email').val();			
	} else {
		var page_email = 'anonymous';
	}
		
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
		
	if($("#currenturl-checkbox").is(":checked")){
		var page_current_url = window.location.href;
	} else {
		var page_current_url = 'disabled';
	}

	var page_date = new Date();
	var samplingmode = $('#sampling-rate-mode-checkbox').prop("checked");
		
	if($("#ipaddress-checkbox").is(":checked")){
		// get ip address again due to latency limitation the result can be undefined, so return to previous value.
		$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
			var page_ip_address = data.ip;
		});
	} else {
		var page_ip_address = 'disabled';
	}
	var trigger = false;
	var mouseClick;
	var keyboardPress;
	var page_Mousemove = 0; 
	var page_Leftclick = 0;
	var page_Rightclick = 0;
	var page_Middleclick = 0;
	var page_Keyboardtype = 0;
	var page_Scrolls = 0; 
	var page_Touch = 0;
	var page_Touchmove = 0;
	var page_zoom = 0;
	
	var sampling_timer;

	function pagetracking() {
		$(window).off(); // remove previous window.mousemove if exists
		// Respond to switch in config.js if checked then activate if unchecked the diactivate.
		if ($("#pagetracking").is(":checked")) {
			if ($('#sampling-rate-mode-checkbox').is(":checked")) {
				sampling_timer = setInterval(function() {
				if($("#mouseclick").is(":checked")){
					$(window).mousedown(function(event) {
						switch (event.which) {
							case 1:
								page_Leftclick ++;
								mouseClick = 'left click';
								break;
							case 2:
								page_Middleclick ++;
								mouseClick = 'middle click';
								break;
							case 3:
								page_Rightclick ++;
								mouseClick = 'right click';
								break;
							default:
								console.log('You have a strange Mouse!');
						}
						page_debug_amount();
					}).mouseup(function(event){
						mouseClick = 'no click';
					});
				}
				if($("#mousemove").is(":checked")){
					$(window).mousemove(function(event) {
						page_Mousemove ++;
						page_debug_amount();
					});
				}
				if($("#mousescroll").is(":checked")){
					$(window).scroll(function(event) {
						page_Scrolls ++;
						page_debug_amount();
					});
				}
				if($("#keyboardpress").is(":checked")){
					$(window).keypress(function(event) {
						page_Keyboardtype ++;
						page_debug_amount();
					});
				}
				if($("#touch").is(":checked")){
					$(window).on("touchstart", function(event) {
						page_Touch ++;
						page_debug_amount();
					})
				}
				if($("#touchmove").is(":checked")){
					$(window).on("touchmove", function(event) {
						page_Touchmove ++;
						page_debug_amount();
					});
				}
	
				}, 1000 / $('#sampling-rate').val());
			} else {
				clearTimeout(sampling_timer);
				if($("#mouseclick").is(":checked")){
					$(window).mousedown(function(event) {
						switch (event.which) {
							case 1:
								page_Leftclick ++;
								mouseClick = 'left click';
								break;
							case 2:
								page_Middleclick ++;
								mouseClick = 'middle click';
								break;
							case 3:
								page_Rightclick ++;
								mouseClick = 'right click';
								break;
							default:
								console.log('You have a strange Mouse!');
						}
						page_debug_amount();
					}).mouseup(function(event){
						mouseClick = 'no click';
					});
				}
				if($("#mousemove").is(":checked")){
					$(window).mousemove(function(event) {
						page_Mousemove ++;
						page_debug_amount();
					});
				}
				if($("#mousescroll").is(":checked")){
					$(window).scroll(function(event) {
						page_Scrolls ++;
						page_debug_amount();
					});
				}
				if($("#keyboardpress").is(":checked")){
					$(window).keypress(function(event) {
						page_Keyboardtype ++;
						page_debug_amount();
					});
				}
				if($("#touch").is(":checked")){
					$(window).on("touchstart", function(event) {
						page_Touch ++;
						page_debug_amount();
					})
				}
				if($("#touchmove").is(":checked")){
					$(window).on("touchmove", function(event) {
						page_Touchmove ++;
						page_debug_amount();
					});
				}
			}
		} else {
			if (!$("#logging").is(":checked") && !$("#pagetracking").is(":checked") && !$("#roitracking").is(":checked")) {
				$(window).off();
			}
		}
	}
	// Run the pagetracking() function when the #pagetracking checkbox is checked.
	$("#pagetracking, #roitracking, #logging, #mouseclick, #mousemove, #mousescroll, #keyboardpress, #sampling-rate-mode-checkbox, #data-to-file-on-fly-checkbox, #data-to-database-on-fly-checkbox").click(function() {
		pagetracking();
	}).ready(function() {
		pagetracking();
	})
		
	setInterval(function(){ eps = 0;}, 1000);

	function page_debug_amount(){
		console.log('Leftclick: ' + page_Leftclick + ' Rightclick: ' + page_Rightclick + ' Middleclick: ' + page_Middleclick + ' Mousemove: ' + page_Mousemove + ' Keyboardtype: ' + page_Keyboardtype + ' Scroll: ' + page_Scrolls);
	}

	function post_data_fly(script) {
		var mydata = {$name: page_name, $email: page_email, $date: page_date, $duration: page_duration, $current_url: page_current_url, $ip_address: page_ip_address, $area: area, $mousemove: page_Mousemove, $leftclick: page_Leftclick, $rightclick: page_Rightclick, $middleclick: page_Middleclick, $keyboardtype: page_Keyboardtype, $scroll: page_Scrolls}
		mydata.$file = String(page_name).replace(" ", "") + String(page_date).replace(":", ".").replace(" ", "") + '.json';

		$.post(script, mydata, function(data,status){
			console.log(data);
			console.log(status);
		});
	}

}).on("beforeunload", function() {
	if($("#duration-checkbox").is(":checked")){
		var duration = (new Date() - date) / 1000;
	} else {
		var duration = 'disabled';
	}

	if ($("#page-data-to-file-on-fly-checkbox").is(":checked")) {
		post_data_fly($('#page-file-server-scrip').val());
	}

	if ($("#page-data-to-database-on-fly-checkbox").is(":checked")) {
		post_data_fly($('#page-data-to-database-on-fly').val());
	}
});
