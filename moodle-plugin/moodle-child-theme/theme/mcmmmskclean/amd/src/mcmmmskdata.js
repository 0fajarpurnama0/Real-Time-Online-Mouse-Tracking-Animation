define(['jquery', 'jqueryui'], function($, jqui) {
 
    return {
        init: function() {

		// All non moodle codes starts here 
// Generate and save the data.
$(document).ready(function(){
  $('#generate-table').click(function(){
		// mouse cursor coordinates
		$.each( $y, function( index, value ){
			$('#mousetrail').append('<tr> <td>' + (index + 1) + '</td> <td>' + $name[index] + '</td> <td>' + $email[index] + '</td> <td>'+ $date[index] + '</td> <td>' + $duration[index] + 'sec' + '</td> <td>' + $active[index] + '</td> <td>' + $x[index] + '</td> <td>' + $y[index] + '</td> <td>' + $scrollleft[index] + '</td> <td>' + $scrolltop[index] + '</td> <td>' + $current_url[index] + '</td> <td>' + $ip_address[index]  + '</td> <td>' + $windowwidth[index] + '</td> <td>' + $windowheight[index] + '</td> <td>' + $screenwidth[index] + '</td> <td>' + $screenheight[index] + '</td> <td>' + $zoom[index] + '</td> <td>' + $samplingmode[index] + '</td> <td>' + $leftclick[index] + '</td> <td>' + $middleclick[index] +  '</td> <td>' + $rightclick[index] + '</td> <td>' + $mTouch[index] + '</td> <td>' + $keyboardtype[index] + '</td> <td>' + $event_type[index] + '</td> </tr>');
		});
	});
	// Download the data in json format.
	$('#download-data').click(function(){
		// Create data in json format
		$data = {
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
			$event_type: $event_type
		};
		var a = document.createElement("a");			
		a.download = String($name[1]).replace(" ", "") + String($date[1]).replace(":", ".").replace(" ", "") + '.json';
		a.href = "data:text/plain;base64," + btoa(JSON.stringify($data));
		a.click();
	});

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
			$event_type: $event_type
		}
		
		$.post(script, data, function(data,status){
			console.log(data);
		});
	}

	$('#send-data-file').click(function(){
		post_data($('#file-server-script').val());
	});
	$('#send-data-database').click(function(){
		post_data($('#database-server-script').val());
	});
});
		// All non moodle codes ends here 
		
        }
    };
});
