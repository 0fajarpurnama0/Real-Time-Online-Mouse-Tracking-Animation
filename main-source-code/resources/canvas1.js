$(document).ready(function() {

	// Create the buttons
	$('body').prepend('<p id="test-box"></p>');
	$('body').prepend(' <button id="generate-scroll-trail">Generate Scroll Trail</button>');
	$('body').prepend(' <button id="generate-keyboard-trail">Keyboard Trail</button>');
	$('body').prepend(' <button id="generate-click-trail">Click Trail</button>');
	$('body').prepend(' <button id="generate-heat-map">Generate Heat Map</button>');
	$('body').prepend('<input type="color" id="favcolor" value="#9effb1"></input>');
	$('body').prepend('<select id="speed"> <option value="realtime">realtime</option> <option value="slow">slow</option><option value="medium">medium</option><option value="fast">fast</option></select>');
	$('body').prepend(' <button id="generate-mouse-trail">Generate Mouse Trail</button>');
	$('body').prepend(' Opacity <input type="range" id="opacity" min="0" max="100" value="50"><p id="opacity-text">0.5</p></input>');
	$('body').prepend('Radius <input type="range" id="radius" min="0" max="100" value="10"><p id="radius-text">10</p></input>');
	$('body').prepend('Mouse Trail Data <input type="file" id="mouse-trail-data" /><br />');
	$('body').prepend('Wep Page Image <input type="file" id="web-page-image" />');

	// upload webpage screenshot
	$('#web-page-image').change(function() {

		var u = URL.createObjectURL(this.files[0]);
		var img = new Image();

		img.onload = function() {
			$("canvas").attr({
				"width": img.width,
				"height": img.height
			});
			$("#heatmapContainer").attr({
				"width": img.width,
				"height": img.height
			});
			$('canvas').drawImage({
				layer: true,
				source: img,
				fromCenter: false
			});
		};

		img.src = u;

	});

	// upload mouse trail data
	$('#mouse-trail-data').change(function(event) {
		var fileToLoad = event.target.files[0];
		if (fileToLoad) {
			var reader = new FileReader();
			reader.onload = function(fileLoadedEvent) {
				var textFromFileLoaded = fileLoadedEvent.target.result;
				var json = textFromFileLoaded;
				obj = JSON.parse(json);
				$x = obj.$x;
				$y = obj.$y;
				$duration = obj.$duration;
				$keyboardtype = obj.$keyboardtype;
				$leftclick = obj.$leftclick;
				$middleclick = obj.$middleclick;
				$rightclick = obj.$rightclick;
				$scrollleft = obj.$scrollleft;
				$scrolltop = obj.$scrolltop;
				$windowwidth = obj.$windowwidth;
				$windowheight = obj.$windowheight;
			};
			reader.readAsText(fileToLoad, 'UTF-8');
		}
	})

	//radius-text value
	$('#radius').change(function() {
		$('#radius-text').text($('#radius').val());
	});
	//opacity-text value
	$('#opacity').change(function() {
		$('#opacity-text').text($('#opacity').val() / 100);
	});

	// Generate moustrail over webpage screenshot
	$('#generate-mouse-trail').click(function() {
		//$("canvas").attr({"width": Math.max(...$x), "height": Math.max(...$y)});
		$.each($y, function(index, value) {
			switch ($('#speed').val()) {
				case 'realtime':
					$speed = $duration[index];
					break;
				case 'slow':
					$speed = 100;
					break;
				case 'medium':
					$speed = 50;
					break;
				case 'fast':
					$speed = 0;
					break;
			}
			// Draw a circle on the canvas
			setTimeout(function() {
				$('canvas').drawArc({
					fillStyle: $('#favcolor').val(),
					layer: true,
					opacity: $('#opacity').val() / 100,
					x: $x[index],
					y: $y[index],
					radius: $('#radius').val()
				});
			}, index * $speed);
		});
	});
	
	$('#generate-keyboard-trail').click(function() {
		//$("canvas").attr({"width": Math.max(...$x), "height": Math.max(...$y)});
		$.each($y, function(index, value) {
			switch ($('#speed').val()) {
				case 'realtime':
					$speed = $duration[index];
					break;
				case 'slow':
					$speed = 100;
					break;
				case 'medium':
					$speed = 50;
					break;
				case 'fast':
					$speed = 0;
					break;
			}
			// Draw a circle on the canvas
			setTimeout(function() {
			    if($keyboardtype[index] !== ''){
				    $('canvas').drawText({
					    fillStyle: $('#favcolor').val(),
					    layer: true,
					    opacity: $('#opacity').val() / 100,
					    x: $x[index],
					    y: $y[index],
					    strokeStyle: '#25a',
                        strokeWidth: 2,
                        fontSize: 16,
                        fontFamily: 'Verdana, sans-serif',
                        text: $keyboardtype[index]
				    });
			    }
			}, index * $speed);
		});
	});
	
	// Generate moustrail over webpage screenshot
	$('#generate-click-trail').click(function() {
		//$("canvas").attr({"width": Math.max(...$x), "height": Math.max(...$y)});
		$.each($y, function(index, value) {
			switch ($('#speed').val()) {
				case 'realtime':
					$speed = $duration[index];
					break;
				case 'slow':
					$speed = 100;
					break;
				case 'medium':
					$speed = 50;
					break;
				case 'fast':
					$speed = 0;
					break;
			}
			// Draw a circle on the canvas
			setTimeout(function() {
			    if($leftclick[index]){
				    $('canvas').drawPolygon({
					    fillStyle: $('#favcolor').val(),
					    layer: true,
					    opacity: $('#opacity').val() / 100,
					    x: $x[index],
					    y: $y[index],
					    strokeStyle: 'black',
                        strokeWidth: 4,
					    radius: $('#radius').val(),
					    sides: 3
				    });
			    } 
			    if($middleclick[index]){
				    $('canvas').drawPolygon({
					    fillStyle: $('#favcolor').val(),
					    layer: true,
					    opacity: $('#opacity').val() / 100,
					    x: $x[index],
					    y: $y[index],
					    strokeStyle: 'black',
                        strokeWidth: 4,
					    radius: $('#radius').val(),
					    sides: 5
				    });
			    }
			    if($rightclick[index]){
				    $('canvas').drawPolygon({
					    fillStyle: $('#favcolor').val(),
					    layer: true,
					    opacity: $('#opacity').val() / 100,
					    x: $x[index],
					    y: $y[index],
					    strokeStyle: 'black',
                        strokeWidth: 4,
					    radius: $('#radius').val(),
					    sides: 6
				    });
			    }
			}, index * $speed);
		});
	});
	
    $('#generate-scroll-trail').click(function() {
		//$("canvas").attr({"width": Math.max(...$x), "height": Math.max(...$y)});
		$.each($y, function(index, value) {
			switch ($('#speed').val()) {
				case 'realtime':
					$speed = $duration[index];
					break;
				case 'slow':
					$speed = 100;
					break;
				case 'medium':
					$speed = 50;
					break;
				case 'fast':
					$speed = 0;
					break;
			}
			// Draw a circle on the canvas
			setTimeout(function() {
				$('canvas').drawRect({
				    strokeStyle: '#c33',
					fillStyle: $('#favcolor').val(),
					layer: true,
					opacity: $('#opacity').val() / 100,
					x: $scrollleft[index] + ($windowwidth[index]/2),
					y: $scrolltop[index] + ($windowheight[index]/2),
					width: $windowwidth[index],
                    height: $windowheight[index]
				});
			}, index * $speed);
		});
	});

	$('#generate-heat-map').click(function() {
		// create configuration object and requires heatmap.js
		var config = {
			container: document.getElementById('heatmapContainer'),
			radius: $('#radius').val(),
			maxOpacity: $('#opacity').val() / 100,
			minOpacity: 0,
			//blur: 0.75
		};
		// create heatmap with configuration
		var heatmapInstance = h337.create(config);

		var dataPoints = [];
		$.each($y, function(index, value) {
			var dataPoint = {
				x: $x[index], // x coordinate of the datapoint, a number 
				y: $y[index], // y coordinate of the datapoint, a number
				value: $duration[index] // the value at datapoint(x, y)
			};
			dataPoints.push(dataPoint);
		});
		// multiple datapoints (for data initialization use setData!!)
		var data = {
			max: Math.max(...$duration),
			min: 0,
			data: dataPoints
		};
		heatmapInstance.setData(data);
	});
});
