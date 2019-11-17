var i = 0;
var now = [new Date()];
var duration = [0];
var x = [0];
var y = [0];
var events = 0;
var eps = 0;

if($("#duration-checkbox").is(":checked")){
	var page_duration = (new Date() - page_date) / 1000;
} else {
	var page_duration = 'disabled';
}

if($("#duration-checkbox").is(":checked")){
	var roi_duration = (new Date() - roi_date) / 1000;
} else {
	var roi_duration = 'disabled';
}

// format: [x1, x2, y1, y2] 1920x
var areas = {quiz1flag: [384, 528, 291, 570], quiz1: [529, 1900, 291, 570], quiz2flag: [384, 528, 571, 852], quiz2: [529, 1900, 571, 852], quiz3flag: [384, 528, 853, 1133], quiz3: [529, 1900, 853, 1133], quiz4flag: [384, 528, 1134, 1441], quiz4: [529, 1900, 1134, 1441], quiz5flag: [384, 528, 1442, 1748], quiz5: [529, 1900, 1442, 1748], quiz6flag: [384, 528, 1749, 2027], quiz6: [529, 1900, 1749, 2027], quiz7flag: [384, 528, 2028, 2452], quiz7: [529, 1900, 2028, 2452], quiz8flag: [384, 528, 2453, 2730], quiz8: [529, 1900, 2453, 2730], quiz9flag: [384, 528, 2731, 3242], quiz9: [529, 1900, 2731, 3242], quiz10flag: [384, 528, 3243, 3580], quiz10: [529, 1900, 3243, 3580], quiz11flag: [384, 528, 3581, 3856], quiz11: [529, 1900, 3581, 3856], quiz12flag: [384, 528, 3857, 4169], quiz12: [529, 1900, 3857, 4169], quiz13flag: [384, 528, 4170, 4746], quiz13: [529, 1900, 4170, 4746], quiz14flag: [384, 528, 4747, 5295], quiz14: [529, 1900, 4747, 5295], quiz15flag: [384, 528, 5296, 5842], quiz15: [529, 1900, 5296, 5842], header: [0, 1920, 0, 64], title: [16, 1904, 150, 270], quiz_navigation: [18, 364, 291, 532], navigation: [16, 366, 551, 1042], administration: [18, 364, 1062, 1693], finish_attempt: [1720, 1896, 5864, 5939], footer: [0, 1920, 5939, 6116]};

var area = {};
var prev_area = {};

function ROI(x, y, areas) {
	var output = {};
	for (var i in areas) {
		if(x >= areas[i][0] && x <= areas[i][1] && y >= areas[i][2] && y <= areas[i][3]) {
			output[i] = areas[i];
			break;
		}
	}
	if(jQuery.isEmptyObject(output)){
		output = {other: [0, 0, 0, 0]};
	}
	return output;
}

