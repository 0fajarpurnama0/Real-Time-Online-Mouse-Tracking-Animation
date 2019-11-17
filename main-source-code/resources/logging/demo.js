if ($("#demo-checkbox").is(":checked")) {
	$('body').prepend('<span class="sticky" id="demo"></span>');
}

function demo() {
	// Demo
	if ($("#demo-checkbox").is(":checked")) {
		if(!$('#demo').length){
			$('body').prepend('<span class="sticky" id="demo"></span>');
		}
		$("#demo").html("<strong>MouseX</strong>: " + x[i] + " ,<strong>MouseY</strong>: " + y[i] + " ,<strong>ScrollLeft</strong>: " + scrollleft[i] + " ,<strong>ScrollTop</strong>: " + scrolltop[i] + " ,<strong>KeyboardPress</strong>: " + keyboardPress + " ,<strong>MouseClick</strong>: " + mouseClick + "<strong>Touch</strong>: " + mTouch[i] + " ,<strong>Zoom</strong>: " + zoom[i] + "%" + " , <strong>events</strong>: " + events + " , <strong>eps</strong>: " + eps + " , <strong>event type</strong>: " + event_type[i] + " , <strong>special event type</strong>: " + sevent).css('display', 'block');
	} else {
		$('#demo').remove();
	}
}

$('#demo-checkbox').click(function() {
	demo();
}).ready(function() {
	demo();
})

setInterval(function(){ eps = 0;}, 1000);

function page_debug_amount(){
	if ($("#page-debug-amount").is(":checked")) {
		console.log('Leftclick: ' + page_Leftclick + ' Rightclick: ' + page_Rightclick + ' Middleclick: ' + page_Middleclick + ' Mousemove: ' + page_Mousemove + ' Keyboardtype: ' + page_Keyboardtype + ' Scroll: ' + page_Scrolls + ' Zoom: ' + page_zoom + ' Active: ' + page_active + ' Inactive: ' + page_inactive);
	}
}

function roi_debug_amount(){
	if ($("#roi-debug-amount").is(":checked")) {
		console.log('area: ' + JSON.stringify(area) + ' Leftclick: ' + roi_Leftclick + ' Rightclick: ' + roi_Rightclick + ' Middleclick: ' + roi_Middleclick + ' Mousemove: ' + roi_Mousemove + ' Keyboardtype: ' + roi_Keyboardtype + ' Scroll: ' + roi_Scrolls + ' Zoom: ' + roi_zoom + ' Active: ' + roi_active + ' Inactive: ' + roi_inactive);
	}
}
