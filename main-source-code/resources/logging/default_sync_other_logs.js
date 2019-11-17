function default_sync_other_logs() {	
	events ++;
	eps ++;

	if($("#event-type").is(":checked")){
		event_type[i] = event.type;
	} else {
		event_type[i] = 'disabled';
	}

	if($("#mouseclick").is(":checked")){
		leftclick[i] = leftclick[i-1];
		rightclick[i] = rightclick[i-1];
		middleclick[i] = middleclick[i-1];
	} else {
		leftclick[i] = 'disabled';
		rightclick[i] = 'disabled';
		middleclick[i] = 'disabled';
	}
		
	if($("#touch").is(":checked")){
		mTouch[i] = mTouch[i-1];
	} else {
		mTouch[i] = 'disabled';
	}
		
	if($("#mousemove").is(":checked") || $("#touchmove").is(":checked")){
		x[i] = x[i-1];
		y[i] = y[i-1];
	} else {
		x[i] = 'disabled';
		y[i] = 'disabled';
	}
		
	if($("#mousescroll").is(":checked")){
		scrollleft[i] = scrollleft[i-1];
		scrolltop[i] = scrolltop[i-1];
	} else {
		scrollleft[i] = 'disabled';
		scrolltop[i] = 'disabled';
	}
		
	if($("#keyboardpress").is(":checked")){
		keyboardtype[i] = '';
	} else {
		keyboardtype[i] = 'disabled';
	}
		
	if($("#tabstatus-checkbox").is(":checked")){
		active[i] = $('#active').text();
	} else {
		active[i] = 'disabled';
	}
		
	if ($('#name-checkbox').is(":checked")) {
		name[i] = $('#name').val();			
	} else {
		name[i] = 'anonymous';
	}
		
	if ($('#email-checkbox').is(":checked")) {
		email[i] = $('#email').val();			
	} else {
		email[i] = 'anonymous';
	}
		
	if($("#windowsize-checkbox").is(":checked")){
		windowwidth[i] = window.innerWidth;
		windowheight[i] = window.innerHeight;
	} else {
		windowwidth[i] = 'disabled';
		windowheight[i] = 'disabled';
	}
		
	if($("#screensize-checkbox").is(":checked")){
		screenwidth[i] = screen.width;
		screenheight[i] = screen.height;
	} else {
		screenwidth[i] = 'disabled';
		screenheight[i] = 'disabled';
	}
		
	if($("#zoom").is(":checked")){
		zoom[i] = 100*screen.width/window.innerWidth;
	} else {
		zoom[i] = 'disabled';
	}
		
	if($("#currenturl-checkbox").is(":checked")){
		current_url[i] = window.location.href;
	} else {
		current_url[i] = 'disabled';
	}
		
	samplingmode[i] = $('#sampling-rate-mode-checkbox').prop("checked");
		
	if($("#ipaddress-checkbox").is(":checked")){
		// get ip address again due to latency limitation the result can be undefined, so return to previous value.
		$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
			ip_address[i] = data.ip;
		});
		if ($ip_address[i] == null) {
			ip_address[i] = ip_address[i-1]
		}
	} else {
		ip_address[i] = 'disabled';
	}
	
	// Date and duration
	if($("#date-checkbox").is(":checked")){
		date[i] = new Date();
	} else {
		date[i] = 'disabled';
	}
		
	now[i] = new Date();
		
	if($("#duration-checkbox").is(":checked")){			
		duration[i] = (now[i] - now[i-1]) / 1000;
	} else {
		duration[i] = 'disabled';
	}
}

function reset_amount(){
	roi_Mousemove = 0; 
	roi_Leftclick = 0;
	roi_Rightclick = 0;
	roi_Middleclick = 0;
	roi_Keyboardtype = 0;
	roi_Scrolls = 0; 
	roi_Touch = 0;
	roi_Touchmove = 0;
	roi_zoom = 0;

	if ($('#name-checkbox').is(":checked")) {
		roi_name = $('#name').val();			
	} else {
		roi_name = 'anonymous';
	}
		
	if ($('#email-checkbox').is(":checked")) {
		roi_email = $('#email').val();			
	} else {
		roi_email = 'anonymous';
	}
		
	if($("#windowsize-checkbox").is(":checked")){
		roi_windowwidth = window.innerWidth;
		roi_windowheight = window.innerHeight;
	} else {
		roi_windowwidth = 'disabled';
		roi_windowheight = 'disabled';
	}
		
	if($("#screensize-checkbox").is(":checked")){
		roi_screenwidth = screen.width;
		roi_screenheight = screen.height;
	} else {
		roi_screenwidth = 'disabled';
		roi_screenheight = 'disabled';
	}
		
	if($("#currenturl-checkbox").is(":checked")){
		roi_current_url = window.location.href;
	} else {
		roi_current_url = 'disabled';
	}

	roi_date = new Date();

	if($("#duration-checkbox").is(":checked")){
		roi_duration = (new Date() - roi_date) / 1000;
	} else {
		roi_duration = 'disabled';
	}

	samplingmode = $('#sampling-rate-mode-checkbox').prop("checked");
		
	if($("#ipaddress-checkbox").is(":checked")){
		// get ip address again due to latency limitation the result can be undefined, so return to previous value.
		$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
			roi_ip_address = data.ip;
		});
	} else {
		roi_ip_address = 'disabled';
	}
	trigger = false;
}
