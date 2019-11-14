// Record Mouse Coordinate
$nowprev = $.now();
$i = 0;
$(document).ready(function(){
    $(document).mousemove(function(event){
        //$("span").text(event.pageX + ", " + event.pageY);
			  //var $now = new Date($.now());
				$i += 1;
				$nowaft = $.now();
				$duration = ($nowaft - $nowprev) / 1000;
				$("table").append("<tr> <td>" + $i + "</td> <td>" + $duration + "</td> <td>" + event.pageX + "</td> <td>" + event.pageY + "</td> </tr>");
				$nowprev = $nowaft;
				$('#coordinate').text('x: ' + event.pageX + ' y: ' + event.pageY);
				// Draw a circle on the canvas
				$('canvas').drawArc({
  				fillStyle: 'hsla('+ (180 - ($duration * 18)) +', 100%, 50%, 0.3)',
					//fillStyle: 'hsla(135, 100%, 50%, 0.5)',
					//opacity: $duration,
  				x: event.pageX, y: event.pageY,
  				radius: 10
				});
    });
});