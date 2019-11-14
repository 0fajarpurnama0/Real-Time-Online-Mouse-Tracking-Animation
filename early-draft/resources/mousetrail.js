$.getScript("resources/transparency.js");
$(document).ready(function(){
		$name = [];
		$email = [];
		$now = [];
		$i = 0;
		//$now[$i] = $.now();
		$now[$i] = new Date();
		$duration = [];
		$x = [];
		$y = [];
		// get ip address
		$ip_address = [];
		$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
			$ip_address[$i] = data.ip;
		});
		// Transparency from transparency.js
		$transparency = [];
		$magnifyer = [];
		// Record Mouse Coordinate.
		function mousetrailrecord(){
			// Respond to switch in config.js if checked then activate if unchecked the diactivate.
			if ($("#mouse-trail-recording").is(":checked")) {
				$(window).mousemove(function(event){
					
					// Coordinates
					$x[$i] = event.pageX;
					$y[$i] = event.pageY;
					
					// record name and email each time
					if ($('#name').val() === ''){
						$name[$i] = 'anonymous';
					} else {
						$name[$i] = $('#name').val();
					}
					if ($('#email').val() === ''){
						$email[$i] = 'anonymous';
					} else {
						$email[$i] = $('#email').val();
					}
					
					// transparency
					$transparency[$i] = $('#transparency-control').val()/100;
					$magnifyer[$i] = $('#fontsize-magnifyer').val();
					
					$i += 1;
					// get ip address again due to latency limitation the result can be undefined, so return to previous value.
					$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
						$ip_address[$i] = data.ip;
					});
					if ($ip_address[$i] == null) {
						$ip_address[$i] = $ip_address[$i-1]
					}
					
					// Date and duration
					$now[$i] = new Date();
					$duration[$i-1] = ($now[$i] - $now[$i-1]) / 1000;
					$(this).focus();
    		}).focusin(function(){
					$('title').text('start');
				}).focusout(function(){
					$('title').text('stop');
				});
			} else {
				$('title').text('stop');
				$(window).off();
			}
		}
		// Run the mousetrailrecord() function when the #mouse-trail-recording checkbox is checked.
		$("#mouse-trail-recording").click(function(){
			mousetrailrecord();
		})
		// Run the function on startup.
		mousetrailrecord();
});