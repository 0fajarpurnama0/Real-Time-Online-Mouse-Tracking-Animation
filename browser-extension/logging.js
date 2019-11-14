chrome.storage.sync.get(['name', 'email', 'logging', 'mouseclick', 'touch', 'mousemove', 'touchmove', 'mousescroll', 'keyboardpress', 'sampling_rate_mode_checkbox', 'sampling_rate', 'restricted_focus_viewer_imitation_checkbox', 'bubble_view_imitation_checkbox', 'finger_tracing_learning_system_imitation_checkbox', 'transparency_control', 'fontsize_magnifier', 'background_color', 'background_color_checkbox', 'color', 'color_checkbox', 'tabstatus_checkbox', 'name_checkbox', 'email_checkbox', 'windowsize_checkbox', 'screensize_checkbox', 'zoom', 'event_type', 'currenturl_checkbox', 'ipaddress_checkbox', 'date_checkbox', 'duration_checkbox', 'data_to_file_on_fly', 'data_to_file_on_fly_checkbox', 'data_to_database_on_fly', 'data_to_database_on_fly_checkbox', 'cursor_reminder', 'demo_checkbox'], function(result) {

$(document).ready(function() {
	$i = 0;
	$name = [];
	$email = [];
	$date = [new Date()];
	$now = [new Date()];
	$duration = [0];
	$active = [];
	$x = [0];
	$y = [0];
	// get ip address
	$ip_address = [];
	/*
	$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
		$ip_address[$i] = data.ip;
	});*/
	$current_url = [];
	$samplingmode = [];
	var trigger = false;
	$leftclick = [false];
	$rightclick = [false];
	$middleclick = [false];
	$keyboardtype = [];
	var lastScrolledLeft = 0;
	var lastScrolledTop = 0;
	var mouseClick;
	var keyboardPress;
	$scrollleft = [0];
	$scrolltop = [0];
	$windowwidth = [window.innerWidth];
	$windowheight = [window.innerHeight];
	$screenwidth = [screen.width];
	$screenheight = [screen.height];
	$zoom = [100*screen.width/window.innerWidth];
	$mTouch = [];
	var events = 0;
	var eps = 0;
	var sevent;
	$event_type = [];
	
	//animations
	$restrictedfocusviewer = [];
	$bubbleview = [];
	$fingertracinglearningsystem = [];
	$cursorreminder = [];
	$transparency = [];
	$magnifier = [];
	$textcolor = [];
	$backgroundcolor = [];
	var sampling_timer;
	// Record Mouse Coordinate.
	if (result.demo_checkbox) {
			$('body').prepend('<span class="sticky" id="demo"></span>');
	}

	function logging() {
		$(window).off(); // remove previous window.mousemove if exists
		// Respond to switch in config.js if checked then activate if unchecked the diactivate.
		if (result.logging) {
			if (result.sampling_rate_mode_checkbox) {
				sampling_timer = setInterval(function() {
					// increment the counter when there was an event and post only when event was triggered
					if(trigger){
						demo();
						$i += 1;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						trigger = false;
					}
					if(result.mouseclick){
						$(window).mousedown(function(event) {
							trigger = true;
							general_variables()
							// Coordinates
							$x[$i] = event.pageX;
							$y[$i] = event.pageY;
							switch (event.which) {
								case 1:
									$leftclick[$i] = true;
									mouseClick = 'left';
									break;
								case 2:
									$middleclick[$i] = true;
									mouseClick = 'middle';
									break;
								case 3:
									$rightclick[$i] = true;
									mouseClick = 'right';
									break;
								default:
									console.log('You have a strange Mouse!');
							}
						}).mouseup(function(event){
							$i += 1;
							general_variables();
							mouseClick = 'no click';
							$leftclick[$i] = false;
							$middleclick[$i] = false;
							$rightclick[$i] = false;
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if (result.data_to_file_on_fly_checkbox) {
								post_data_fly(result.data_to_file_on_fly);
							}
							*/
							// Demo
							demo();
						});
					}
					if(result.mousemove){
						$(window).mousemove(function(event) {
							trigger = true;
							general_variables();
							// Coordinates
							$x[$i] = event.pageX;
							$y[$i] = event.pageY;
						});
					}
					if(result.mousescroll){
						$(window).scroll(function(event) {
							trigger = true;
							general_variables();
							if(Number.isInteger($x[$i]) && Number.isInteger($y[$i])){
								if (lastScrolledLeft != $(document).scrollLeft()) {
									$x[$i] -= lastScrolledLeft;
									lastScrolledLeft = $(document).scrollLeft();
									$x[$i] += lastScrolledLeft;
								}
								if (lastScrolledTop != $(document).scrollTop()) {
									$y[$i] -= lastScrolledTop;
									lastScrolledTop = $(document).scrollTop();
									$y[$i] += lastScrolledTop;
								}
							}
							$scrollleft[$i] = $(document).scrollLeft();
							$scrolltop[$i] = $(document).scrollTop();
						});
					}
					if(result.keyboardpress){
						$(window).keypress(function(event) {
							trigger = true;
							general_variables();
							// Keyboard Event
							$keyboardtype[$i] += event.key;
							keyboardPress = event.key;
						});
					}
					if(result.tabstatus_checkbox){
						$(window).mouseenter(function() {
							$i += 1;
							$active[$i]='active';
							general_variables();
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).mouseover(function() {
							$i += 1;
							$active[$i]='active';
							general_variables();
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).on("pageshow", function() {
							$i += 1;
							$active[$i]='active';
							general_variables();
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
							post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).mouseleave(function() {
							$i += 1;
							general_variables();
							$active[$i]='inactive';
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).mouseout(function() {
							$i += 1;
							general_variables();
							$active[$i]='inactive';
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).on("pagehide", function() {
							$i += 1;
							general_variables();
							$active[$i]='inactive';
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						});
					}
					if(result.zoom){
						$(window).resize(function() {
							$i += 1;
							general_variables();
							$zoom[$i] = 100*screen.width/window.innerWidth;
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if (result.data_to_file_on_fly_checkbox) {
								post_data_fly(result.data_to_file_on_fly);
							}
							*/
							demo();
						});
					}

				if(result.touch){
					$(window).on("touchstart", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'touched';
						$x[$i] = event.touches[0].pageX;
						$y[$i] = event.touches[0].pageY;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("touchend", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'untouched';
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("touchcancel", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'interrupted';
						$x[$i] = event.touches[0].pageX;
						$y[$i] = event.touches[0].pageY;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					});
				}
				if(result.touchmove){
					$(window).on("touchmove", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'moving';
						$x[$i] = event.touches[0].pageX;
						$y[$i] = event.touches[0].pageY;
						zoom = 100*screen.width/window.visualViewport.width;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					});
				}
				if(result.event_type){
					$(window).on("auxclick", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("contextmenu", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("dblclick", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("select", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("wheel", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("copy", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("cut", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("paste", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					});
				}
	
				}, 1000 / result.sampling_rate);
			} else {
				clearTimeout(sampling_timer);
				if(result.mouseclick){
					$(window).mousedown(function(event) {
						$i += 1;
						general_variables()
						// Coordinates
						$x[$i] = event.pageX;
						$y[$i] = event.pageY;
						switch (event.which) {
							case 1:
								$leftclick[$i] = true;
								mouseClick = 'left click';
								break;
							case 2:
								$middleclick[$i] = true;
								mouseClick = 'middle click';
								break;
							case 3:
								$rightclick[$i] = true;
								mouseClick = 'right click';
								break;
							default:
								console.log('You have a strange Mouse!');
						}
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						// Demo
						demo();
					}).mouseup(function(event){
						$i += 1;
						general_variables();
						mouseClick = 'no click';
						$leftclick[$i] = false;
						$middleclick[$i] = false;
						$rightclick[$i] = false;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						// Demo
						demo();
					});
				}
				if(result.mousemove){
					$(window).mousemove(function(event) {
						$i += 1;
						general_variables();
						// Coordinates
						$x[$i] = event.pageX;
						$y[$i] = event.pageY;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						// Demo
						demo();
					});
				}
				if(result.mousescroll){
					$(window).scroll(function(event) {
						$i += 1;
						general_variables();
						if(Number.isInteger($x[$i]) && Number.isInteger($y[$i])){
							if (lastScrolledLeft != $(document).scrollLeft()) {
								$x[$i] -= lastScrolledLeft;
								lastScrolledLeft = $(document).scrollLeft();
								$x[$i] += lastScrolledLeft;
							}
							if (lastScrolledTop != $(document).scrollTop()) {
								$y[$i] -= lastScrolledTop;
								lastScrolledTop = $(document).scrollTop();
								$y[$i] += lastScrolledTop;
							}
						}
						$scrollleft[$i] = $(document).scrollLeft();
						$scrolltop[$i] = $(document).scrollTop();
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						// Demo
						demo();
					});
				}
				if(result.keyboardpress){
					$(window).keypress(function(event) {
						$i += 1;
						general_variables();
						// Keyboard Event
						$keyboardtype[$i] += event.key;
						keyboardPress = event.key;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						//demo
						demo();
					});
				}
					if(result.tabstatus_checkbox){
						$(window).mouseenter(function() {
							$i += 1;
							$active[$i]='active';
							general_variables();
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).mouseover(function() {
							$i += 1;
							$active[$i]='active';
							general_variables();
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).on("pageshow", function() {
							$i += 1;
							$active[$i]='active';
							general_variables();
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
							post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).mouseleave(function() {
							$i += 1;
							general_variables();
							$active[$i]='inactive';
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).mouseout(function() {
							$i += 1;
							general_variables();
							$active[$i]='inactive';
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						}).on("pagehide", function() {
							$i += 1;
							general_variables();
							$active[$i]='inactive';
							// post to database
							if (result.data_to_database_on_fly_checkbox) {
								post_data_fly(result.data_to_database_on_fly);
							}
							/*
							// post to file
							if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
								post_data_fly("files/savedatafiledefaulteach.php");
							}
							*/
							demo();
						});
					}
				if(result.zoom){
					$(window).resize(function() {
						$i += 1;
						general_variables();
						$zoom[$i] = 100*screen.width/window.innerWidth;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					});
				}
				if(result.touch){
					$(window).on("touchstart", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'touched';
						$x[$i] = event.touches[0].pageX;
						$y[$i] = event.touches[0].pageY;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("touchend", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'untouched';
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("touchcancel", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'interrupted';
						$x[$i] = event.touches[0].pageX;
						$y[$i] = event.touches[0].pageY;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					});
				}
				if(result.touchmove){
					$(window).on("touchmove", function(event) {
						$i += 1;
						general_variables();
						$mTouch[$i] = 'moving';
						$x[$i] = event.touches[0].pageX;
						$y[$i] = event.touches[0].pageY;
						zoom = 100*screen.width/window.visualViewport.width;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					});
				}
				if(result.event_type){
					$(window).on("auxclick", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("contextmenu", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("dblclick", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("select", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("wheel", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("copy", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("cut", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					}).on("paste", function(event) {
						$i += 1;
						general_variables();
						sevent = event.type;
						// post to database
						if (result.data_to_database_on_fly_checkbox) {
							post_data_fly(result.data_to_database_on_fly);
						}
						/*
						// post to file
						if (result.data_to_file_on_fly_checkbox) {
							post_data_fly(result.data_to_file_on_fly);
						}
						*/
						demo();
					});
				}
			}
		} else {
			$(window).off();
		}
	}
	logging();
	
	function general_variables() {
		
		events += 1;
		eps += 1;

		if(result.event_type){
			$event_type[$i] = event.type;
		} else {
			$event_type[$i] = 'disabled';
		}

		if(result.mouseclick){
			$leftclick[$i] = $leftclick[$i-1];
			$rightclick[$i] = $rightclick[$i-1];
			$middleclick[$i] = $middleclick[$i-1];
		} else {
			$leftclick[$i] = 'disabled';
			$rightclick[$i] = 'disabled';
			$middleclick[$i] = 'disabled';
		}
		
		if(result.touch){
			$mTouch[$i] = $mTouch[$i-1];
		} else {
			$mTouch[$i] = 'disabled';
		}
		
		if(result.mousemove || result.touchmove){
			$x[$i] = $x[$i-1];
			$y[$i] = $y[$i-1];
		} else {
			$x[$i] = 'disabled';
			$y[$i] = 'disabled';
		}
		
		if(result.mousescroll){
			$scrollleft[$i] = $scrollleft[$i - 1];
			$scrolltop[$i] = $scrolltop[$i - 1];
		} else {
			$scrollleft[$i] = 'disabled';
			$scrolltop[$i] = 'disabled';
		}
		
		if(result.keyboardpress){
			$keyboardtype[$i] = '';
		} else {
			$keyboardtype[$i] = 'disabled';
		}
		
		if(result.tabstatus_checkbox){
			$active[$i] = $active[$i-1];
		} else {
			$active[$i] = 'disabled';
		}
		
		if (result.name_checkbox) {
			$name[$i] = result.name;			
		} else {
			$name[$i] = 'anonymous';
		}
		
		if (result.email_checkbox) {
			$email[$i] = result.email;			
		} else {
			$email[$i] = 'anonymous';
		}
		
		if(result.windowsize_checkbox){
			$windowwidth[$i] = window.innerWidth;
			$windowheight[$i] = window.innerHeight;
		} else {
			$windowwidth[$i] = 'disabled';
			$windowheight[$i] = 'disabled';
		}
		
		if(result.screensize_checkbox){
			$screenwidth[$i] = screen.width;
			$screenheight[$i] = screen.height;
		} else {
			$screenwidth[$i] = 'disabled';
			$screenheight[$i] = 'disabled';
		}
		
		if(result.zoom){
			$zoom[$i] = 100*screen.width/window.innerWidth;
		} else {
			$zoom[$i] = 'disabled';
		}
		
		if(result.currenturl_checkbox){
			$current_url[$i] = window.location.href;
		} else {
			$current_url[$i] = 'disabled';
		}
		
		$samplingmode[$i] = result.sampling_rate_mode_checkbox;
		// Animation
		$restrictedfocusviewer[$i] = result.restricted_focus_viewer_imitation_checkbox;
		$bubbleview[$i] = result.bubble_view_imitation_checkbox;
		$fingertracinglearningsystem[$i] = result.finger_tracing_learning_system_imitation_checkbox;
		$cursorreminder[$i] = result.cursor_reminder;
		$transparency[$i] = result.transparency_control / 100;
		$magnifier[$i] = result.fontsize_magnifier;
		
		if (result.color_checkbox) {
			$textcolor[$i] = result.color;
		}
		
		if (result.background_color_checkbox) {
			$backgroundcolor[$i] = result.background_color;
		}
		
		if(result.ipaddress_checkbox){
			// get ip address again due to latency limitation the result can be undefined, so return to previous value.
			$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
				$ip_address[$i] = data.ip;
			});
			if ($ip_address[$i] == null) {
				$ip_address[$i] = $ip_address[$i - 1]
			}
		} else {
			$ip_address[$i] = 'disabled';
		}
		// Date and duration
		if(result.date_checkbox){
			$date[$i] = new Date();
		} else {
			$date[$i] = 'disabled';
		}
		
		$now[$i] = new Date();
		
		if(result.duration_checkbox){
			
			$duration[$i] = ($now[$i] - $now[$i - 1]) / 1000;
		} else {
			$duration[$i] = 'disabled';
		}
	}
	
	function post_data_fly(script) {
		var mydata = {
		}
		mydata.$file = String($name[1]).replace(" ", "") + String($now[1]).replace(":", ".").replace(" ", "") + '.json';
		if($name[$i] != 'anonymous'){
			mydata.$name = $name[$i];
		}
		if($email[$i] != 'anonymous'){
			mydata.$email = $email[$i];
		}
		if($date[$i] != 'disabled'){
			mydata.$date = $date[$i];
		}
		if($x[$i] != 'disabled'){
			mydata.$x = $x[$i];
		}
		if($y[$i] != 'disabled'){
			mydata.$y = $y[$i];
		}
		if($active[$i] != 'disabled'){
			mydata.$active = $active[$i];
		}
		if($duration[$i] != 'disabled'){
			mydata.$duration = $duration[$i];
		}
		if($current_url[$i] != 'disabled'){
			mydata.$current_url = $current_url[$i];
		}
		if($ip_address[$i] != 'disabled'){
			mydata.$ip_address = $ip_address[$i];
		}
		if($samplingmode[$i] != 'disabled'){
			mydata.$samplingmode = $samplingmode[$i];
		}
		if($leftclick[$i] != 'disabled'){
			mydata.$leftclick = $leftclick[$i];
		}
		if($rightclick[$i] != 'disabled'){
			mydata.$rightclick = $rightclick[$i];
		}
		if($middleclick[$i] != 'disabled'){
			mydata.$middleclick = $middleclick[$i];
		}
		if($mTouch[$i] != 'disabled'){
			mydata.$mTouch = $mTouch[$i];
		}
		if($keyboardtype[$i] != 'disabled'){
			mydata.$keyboardtype = $keyboardtype[$i];
		}
		if($scrollleft[$i] != 'disabled'){
			mydata.$scrollleft = $scrollleft[$i];
		}
		if($scrolltop[$i] != 'disabled'){
			mydata.$scrolltop = $scrolltop[$i];
		}
		if($windowwidth[$i] != 'disabled'){
			mydata.$windowwidth = $windowwidth[$i];
		}
		if($windowheight[$i] != 'disabled'){
			mydata.$windowheight = $windowheight[$i];
		}
		if($screenwidth[$i] != 'disabled'){
			mydata.$screenwidth = $screenwidth[$i];
		}
		if($screenheight[$i] != 'disabled'){
			mydata.$screenheight = $screenheight[$i];
		}
		if($zoom[$i] != 'disabled'){
			mydata.$zoom = $zoom[$i];
		}
		if($event_type[$i] != 'disabled'){
			mydata.$event_type = $event_type[$i];
		}
		if($restrictedfocusviewer[$i]){
			mydata.$restrictedfocusviewer = $restrictedfocusviewer[$i];
		}
		if($bubbleview[$i]){
			mydata.$bubbleview = $bubbleview[$i];
		}
		if($fingertracinglearningsystem[$i]){
			mydata.$fingertracinglearningsystem = $fingertracinglearningsystem[$i];
		}
		if($cursorreminder[$i] != 0){
			mydata.$cursorreminder = $cursorreminder[$i];
		}
		if($transparency[$i] != 100){
			mydata.$transparency = $transparency[$i];
		}
		if($magnifier[$i] != 1){
			mydata.$magnifier = $magnifier[$i];
		}
		if($textcolor[$i] != null){
			mydata.$textcolor = $textcolor[$i];
		}
		if($backgroundcolor[$i] != null){
			mydata.$backgroundcolor = $backgroundcolor[$i];
		}
		$.post(script, mydata, function(data,status){
			console.log(data);
			console.log(status);
		});
	}
	

	function demo() {
		// Demo
		if (result.demo_checkbox) {
			$("#demo").html("<strong>MouseX</strong>: " + $x[$i] + " ,<strong>MouseY</strong>: " + $y[$i] + " ,<strong>ScrollLeft</strong>: " + $scrollleft[$i] + " ,<strong>ScrollTop</strong>: " + $scrolltop[$i] + " ,<strong>KeyboardPress</strong>: " + keyboardPress + " ,<strong>MouseClick</strong>: " + mouseClick + "<strong>Touch</strong>: " + $mTouch[$i] + " ,<strong>Zoom</strong>: " + $zoom[$i] + "%" + " , <strong>events</strong>: " + events + " , <strong>eps</strong>: " + eps + " , <strong>event type</strong>: " + $event_type[$i] + " , <strong>special event type</strong>: " + sevent).css('display', 'block');
		}
	}

	demo();
	
	
	setInterval(function(){ eps = 0;}, 1000);

}).on("beforeunload", function() {
	if (result.data_to_file_on_fly_checkbox) {
		post_data_fly(result.data_to_file_on_fly);
	}
});

});
