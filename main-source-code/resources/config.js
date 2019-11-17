$.getScript("resources/screenshot.js");
$.getScript("resources/logging.js");
$.getScript("resources/simulation/stressing.js");

// This is where the checkbox html are created to activate or diactivate.
$(document).ready(function() {
	$(function() {
		$('#dialog').dialog({
			autoOpen: false,
			width: $(window).width() * 0.8,
			height: $(window).height() * 0.8
		});
	});
	$('body').prepend(' <div id="dialog" title="Configuration"> <p>Hello, please support us in our user interraction project by allowing us to record your interractions:</p> </div> <br />');
	$('body').prepend(' <button id="opener">Open Logging Settings</button>');
	$('body').prepend(' <button id="closer">Close Logging Settings</button>');
	$("#opener").on("click", function() {
		$("#dialog").dialog("open");
	});
	$("#closer").on("click", function() {
		$("#dialog").dialog("close");
	});
	$('#dialog').append(`
	Status: <span id="active">active</span> <br />
	<br /> <br /> What is your name? (leave blank if you want to be anonymous) <input type="text" id="name" /> <br />
	<br /> <br /> Do you have an email address? (leave blank if you want to be anonymous) <input type="text" id="email" /> <br /> <br />
	
	<button id="stressing">Stress Test</button><input type="text" id="eps" value="0"/>EPS<input type="text" id="data-to-database-stressing" value="files/savedatabasedefaulteach.php" /> <br>
	<input type="checkbox" id="logging"> Loggings
	<ul>
		<li> <input type="checkbox" id="default"> default </li>
		<li> <input type="checkbox" id="pagetracking"> pagetracking </li>
		<li> <input type="checkbox" id="roitracking"> roitracking </li>
	</ul>
	<ul> 
		<li><input type="checkbox" id="sampling-rate-mode-checkbox"> Sampling Rate Mode <br /> <input type="range" min="1" max="90" value="1" id="sampling-rate"> <p id="sampling-rate-text"> </p> </li>
		<li>Computer:</li>
		<li><input type="checkbox" id="mouseclick"> Mouse Click</li>
		<li><input type="checkbox" id="mousemove"> Mouse Move</li> 
		<li><input type="checkbox" id="mousescroll"> Mouse Scroll</li> 
		<li><input type="checkbox" id="keyboardpress"> Keyboard Press</li>
		<li><input type="checkbox" id="zoom"> Zoom</li>
		<li><input type="checkbox" id="event-type"> Event Type</li>
		<li>Mobile:</li>
		<li><input type="checkbox" id="touch"> Touch</li>
		<li><input type="checkbox" id="touchmove"> Touch Move</li>
	</ul>
	
	Other loggings:
	<ul> 
	<li><input type="checkbox" id="tabstatus-checkbox" checked="checked"> Tab Status</li> 
	<li><input type="checkbox" id="name-checkbox" checked="checked"> Name</li> 
	<li><input type="checkbox" id="email-checkbox" checked="checked"> Email</li> 
	<li><input type="checkbox" id="windowsize-checkbox" checked="checked"> Window Size</li>
	<li><input type="checkbox" id="screensize-checkbox" checked="checked"> Screen Size</li> 
	<li><input type="checkbox" id="currenturl-checkbox" checked="checked"> Current URL </li> 
	<li><input type="checkbox" id="ipaddress-checkbox"> IP Address </li> 
	<li><input type="checkbox" id="date-checkbox" checked="checked"> Date </li> 
	<li><input type="checkbox" id="duration-checkbox" checked="checked"> Duration </li> 
	</ul>
	
	<input type="checkbox" id="demo-checkbox"> Demo Logging <br />
	<input type="checkbox" id="page-debug-amount"> Pagetracking Debug <br />
	<input type="checkbox" id="roi-debug-amount"> Roitracking Debug <br />
	<button id="Capture">Capture</button>
	<button id="generate-table">Generate Table</button>
	<button id="download-data">Download Data</button>
	<br /><button id="send-data-file">Send Data File</button><input type="text" id="file-server-script" value="files/savedatafiledefault.php" />
	<br /> <input type="checkbox" id="data-to-file-on-fly-checkbox"> Data to file on fly<input type="text" id="data-to-file-on-fly" value="files/savedatafiledefault.php" />
	<br /><button id="send-data-database">Send Data Database</button><input type="text" id="database-server-script" value="files/savedatabasedefault.php" />
	<br /> <input type="checkbox" id="data-to-database-on-fly-checkbox"> Data to database on fly<input type="text" id="data-to-database-on-fly" value="files/savedatabasedefaulteach.php" />
	<br /> <input type="checkbox" id="page-data-to-database-on-fly-checkbox"> Pagetracking to database on fly<input type="text" id="page-data-to-database-on-fly" value="files/pagetracking.php" />
	<br /> <input type="checkbox" id="roi-data-to-database-on-fly-checkbox"> Roitracking to database on fly<input type="text" id="roi-data-to-database-on-fly" value="files/roitracking.php" />
	<div id="table"></div>
	`);
	$('#table').html('<p>Mouse is at coordinates: <span> <table id="mousetrail"> <tr> <th>No</th> <th>Name</th> <th>Email</th> <th>Date</th> <th>Duration</th> <th>Tab</th> <th>X</th> <th>Y</th> <th>ScrollX</th> <th>scrollY</th> <th>Current Url</th> <th>IP Address</th> <th>Window Width</th> <th>Window Height</th> <th>Screen Width</th> <th>Screen Height</th> <th>Zoom</th> <th>Sampling Rate Mode</th> <th>Left Click</th> <th>Middle Click</th> <th>Right Click</th> <th>Touch</th> <th>Keyboard Type</th> <th>Event Type</th> </tr></table></span>.</p>');
	$('#sampling-rate').change(function() {
		$('#sampling-rate-text').text($('#sampling-rate').val() + ' Hz');
	});
});
