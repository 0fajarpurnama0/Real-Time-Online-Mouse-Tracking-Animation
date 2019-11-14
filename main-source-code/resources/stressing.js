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
	/*$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
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

	$('#stressing').click(function() {
		console.log('succeed');
		/*
		switch ($('#stressing).text()') {
			case 'start':
				$('#stressing').text('stop');
				break;
			case 'stop':
				$('#stressing').text('start');
				break;
			default:
				$('#stressing').text('start');
			}
		*/
	});
});
