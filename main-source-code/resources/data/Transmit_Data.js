function post_data(script) {
	var data = {
		file: String(name[1]).replace(" ", "") + String(now[1]).replace(":", ".").replace(" ", "") + '.json',
		name: name,
		email: email,
		date: date,
		x: x,
		y: y,
		active: active,
		duration: duration,
		current_url: current_url,
		ip_address: ip_address,
		samplingmode: samplingmode,
		leftclick: leftclick,
		rightclick: rightclick,
		middleclick: middleclick,
		mTouch: mTouch,
		keyboardtype: keyboardtype,
		scrollleft: scrollleft,
		scrolltop: scrolltop,
		windowwidth: windowwidth,
		windowheight: windowheight,
		screenwidth: screenwidth,
		screenheight: screenheight,
		zoom: zoom,
		event_type: event_type
	}
	
	$.post(script, data, function(data,status){
		console.log(data);
	});
}

function post_data_fly(script) {
	var mydata = {
	}
	mydata.$file = String(name[1]).replace(" ", "") + String(now[1]).replace(":", ".").replace(" ", "") + '.json';
	if(name[i] != 'anonymous'){
		mydata.$name = name[i];
	}
	if(email[i] != 'anonymous'){
		mydata.$email = email[i];
	}
	if(date[i] != 'disabled'){
		mydata.$date = date[i];
	}
	if(x[i] != 'disabled'){
		mydata.$x = x[i];
	}
	if(y[i] != 'disabled'){
		mydata.$y = y[i];
	}
	if(active[i] != 'disabled'){
		mydata.$active = active[i];
	}
	if(duration[i] != 'disabled'){
		mydata.$duration = duration[i];
	}
	if(current_url[i] != 'disabled'){
		mydata.$current_url = current_url[i];
	}
	if(ip_address[i] != 'disabled'){
		mydata.$ip_address = ip_address[i];
	}
	if(samplingmode[i] != 'disabled'){
		mydata.$samplingmode = samplingmode[i];
	}
	if(leftclick[i] != 'disabled'){
		mydata.$leftclick = leftclick[i];
	}
	if(rightclick[i] != 'disabled'){
		mydata.$rightclick = rightclick[i];
	}
	if(middleclick[i] != 'disabled'){
		mydata.$middleclick = middleclick[i];
	}
	if(mTouch[i] != 'disabled'){
		mydata.$mTouch = mTouch[i];
	}
	if(keyboardtype[i] != 'disabled'){
		mydata.$keyboardtype = keyboardtype[i];
	}
	if(scrollleft[i] != 'disabled'){
		mydata.$scrollleft = scrollleft[i];
	}
	if(scrolltop[i] != 'disabled'){
		mydata.$scrolltop = scrolltop[i];
	}
	if(windowwidth[i] != 'disabled'){
		mydata.$windowwidth = windowwidth[i];
	}
	if(windowheight[i] != 'disabled'){
		mydata.$windowheight = windowheight[i];
	}
	if(screenwidth[i] != 'disabled'){
		mydata.$screenwidth = screenwidth[i];
	}
	if(screenheight[i] != 'disabled'){
		mydata.$screenheight = screenheight[i];
	}
	if(zoom[i] != 'disabled'){
		mydata.$zoom = zoom[i];
	}
	if(event_type[i] != 'disabled'){
		mydata.$event_type = event_type[i];
	}

	$.post(script, mydata, function(data,status){
		console.log(data);
		console.log(status);
	});
}

$('#send-data-file').click(function(){
	post_data($('#file-server-script').val());
});
$('#send-data-database').click(function(){
	post_data($('#database-server-script').val());
});

function page_post_data(script) {
	var mydata = {$name: page_name, $email: page_email, $date: page_date, $duration: page_duration, $current_url: page_current_url, $ip_address: page_ip_address, $area: area, $mousemove: page_Mousemove, $leftclick: page_Leftclick, $rightclick: page_Rightclick, $middleclick: page_Middleclick, $keyboardtype: page_Keyboardtype, $scroll: page_Scrolls, $zoom: page_zoom, $active: page_active, $inactive: page_inactive}
	mydata.$file = String(page_name).replace(" ", "") + String(page_date).replace(":", ".").replace(" ", "") + '.json';

	$.post(script, mydata, function(data,status){
		console.log(data);
		console.log(status);
	});
}

function roi_post_data_fly(script) {
	var mydata = {$name: roi_name, $email: roi_email, $date: roi_date, $duration: roi_duration, $current_url: roi_current_url, $ip_address: roi_ip_address, $area: JSON.stringify(area), $mousemove: roi_Mousemove, $leftclick: roi_Leftclick, $rightclick: roi_Rightclick, $middleclick: roi_Middleclick, $keyboardtype: roi_Keyboardtype, $scroll: roi_Scrolls, $zoom: roi_zoom, $active: roi_active, $inactive: roi_inactive}

	mydata.$file = String(roi_name).replace(" ", "") + String(roi_date).replace(":", ".").replace(" ", "") + '.json';

	$.post(script, mydata, function(data,status){
		console.log(data);
		console.log(status);
	});		
}
