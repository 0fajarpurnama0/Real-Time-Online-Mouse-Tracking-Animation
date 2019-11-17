// Generate and save the data.
$(document).ready(function(){
 		$('#generate-table').click(function(){
		// mouse cursor coordinates
		$.each( $y, function( index, value ){
			$('#mousetrail').append('<tbody><tr> <td>' + (index + 1) + '</td> <td>' + $name[index] + '</td> <td>' + $email[index] + '</td> <td>'+ $now[index + 1] + '</td> <td>' + $duration[index] + 'sec' + '</td> <td>' + $x[index] + '</td> <td>' + $y[index] + '</td> <td>' + $ip_address[index]  + '</td> <td>' + $transparency[index] +  '</td> <td>' + '+'+$magnifyer[index]+'px' + '</td> </tr></tbody>');
		});
		// Create data in json format
		$data = {
			$name: $name,
			$email: $email,
			$now: $now,
    			$x: $x,
    			$y: $y,
			$duration: $duration,
			$ip_address: $ip_address,
			$transparency: $transparency,
			$magnifyer: $magnifyer
		};
		// Download the data in json format.
		var a = document.createElement("a");
		$('#dialog').append(a);				
		a.download = "export.json";
		a.href = "data:text/plain;base64," + btoa(JSON.stringify($data));
		a.innerHTML = "download example text";
  });
});
