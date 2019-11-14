// Generate and save the data.
$(document).ready(function(){
	function post_data(script) {
		var data = {
			$file: String($name[1]).replace(" ", "") + String($now[1]).replace(":", ".").replace(" ", "") + '.json',
			$name: $name,
			$email: $email,
			$date: $date,
			$x: $x,
			$y: $y,
			$active: $active,
			$duration: $duration,
			$current_url: $current_url,
			$ip_address: $ip_address,
			$samplingmode: $samplingmode,
			$leftclick: $leftclick,
			$rightclick: $rightclick,
			$middleclick: $middleclick,
			$mTouch: $mTouch,
			$keyboardtype: $keyboardtype,
			$scrollleft: $scrollleft,
			$scrolltop: $scrolltop,
			$windowwidth: $windowwidth,
			$windowheight: $windowheight,
			$screenwidth: $screenwidth,
			$screenheight: $screenheight,
			$zoom: $zoom,
			$event_type: $event_type,
			$restrictedfocusviewer: $restrictedfocusviewer,
			$bubbleview: $bubbleview,
			$fingertracinglearningsystem: $fingertracinglearningsystem,
			$cursorreminder: $cursorreminder,
			$transparency: $transparency,
			$magnifier: $magnifier,
			$textcolor: $textcolor,
			$backgroundcolor: $backgroundcolor
		}
		
		$.post(script, data, function(data,status){
			console.log(data);
		});
	}
});
