var name = [];
var email = [];
var date = [new Date()];
// get ip address
var ip_address = [];
/*
$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
	$ip_address[$i] = data.ip;
});*/
var current_url = [];

if($("#currenturl-checkbox").is(":checked")){
	var page_current_url = window.location.href;
} else {
	var page_current_url = 'disabled';
}

var page_date = new Date();

if($("#ipaddress-checkbox").is(":checked")){
	// get ip address again due to latency limitation the result can be undefined, so return to previous value.
	$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
		var page_ip_address = data.ip;
	});
} else {
	var page_ip_address = 'disabled';
}

if ($('#name-checkbox').is(":checked")) {
	var page_name = $('#name').val();			
} else {
	var page_name = 'anonymous';
}
		
if ($('#email-checkbox').is(":checked")) {
	var page_email = $('#email').val();			
} else {
	var page_email = 'anonymous';
}

if ($('#name-checkbox').is(":checked")) {
	var roi_name = $('#name').val();			
} else {
	var roi_name = 'anonymous';
}
		
if ($('#email-checkbox').is(":checked")) {
	var roi_email = $('#email').val();			
} else {
	var roi_email = 'anonymous';
}

if($("#currenturl-checkbox").is(":checked")){
	var roi_current_url = window.location.href;
} else {
	var roi_current_url = 'disabled';
}

var roi_date = new Date();

if($("#ipaddress-checkbox").is(":checked")){
	// get ip address again due to latency limitation the result can be undefined, so return to previous value.
	$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
		var roi_ip_address = data.ip;
	});
} else {
	var roi_ip_address = 'disabled';
}
