$(document).ready(function() {

	// Create the buttons
	$('body').prepend('<button id="roitracking-simulation">ROItracking Simulation</button><br />');
	$('body').prepend('<button id="pagetracking-simulation">Pagetracking Simulation</button><br />');
	$('body').prepend('<button id="mousetracking-simulation">Mousetracking Simulation</button><br />');
	$('body').prepend('<button id="download-data">Clean</button><br />');
	$('body').prepend('Mouse Trail Data <input type="file" id="mouse-trail-data" /><br />');

	// upload mouse trail data
	$('#mouse-trail-data').change(function(event) {
		var fileToLoad = event.target.files[0];
		if (fileToLoad) {
			var reader = new FileReader();
			reader.onload = function(fileLoadedEvent) {
				var textFromFileLoaded = fileLoadedEvent.target.result;
				json = textFromFileLoaded;
				obj = JSON.parse(json);
				obj.sort(function(a, b){return new Date(a.date) - new Date(b.date)});
				//console.log(obj);
			};
			//reader.readAsText(fileToLoad, 'UTF-8');
			reader.readAsText(fileToLoad);
		}
	})
	
	$('#pagetracking-simulation').click(function() {
		var pagetracking = [];
				pagetracking[0] = {id: obj[0].id, name: obj[0].name, email: obj[0].email, date: obj[0].date, duration: 0, current_url: obj[0].current_url, ip_address: obj[0].ip_address, leftclick: 0, rightclick: 0, middleclick: 0, mousemove: 0, scroll: 0, keyboardtype: 0};
				for (i = 0; i < obj.length; i++) {
					for (j = 0; j < pagetracking.length; j++) {
						if (obj[i].name == pagetracking[j].name) {
							pagetracking[j].date = obj[i].date;
							pagetracking[j].current_url = obj[i].current_url; 
							pagetracking[j].ip_address = obj[i].ip_address;
							pagetracking[j].duration += parseFloat(obj[i].duration);
							if (obj[i].leftclick == "true") {
								pagetracking[j].leftclick += 1;
							}
							if (obj[i].rightclick == "true") {
								pagetracking[j].rightclick += 1;
							}
							if (obj[i].middleclick == "true") {
								pagetracking[j].middleclick += 1;
							}
							if ((obj[i].x != pagetracking[j].x) || (obj[i].y != pagetracking[j].y)) {
								pagetracking[j].mousemove += 1;
								pagetracking[j].x = obj[i].x;
								pagetracking[j].y = obj[i].y;
							}
							if ((obj[i].scrollx != pagetracking[j].scrollx) || (obj[i].scrolly != pagetracking[j].scrolly)) {
								pagetracking[j].scroll += 1;
								pagetracking[j].scrollx = obj[i].scrollx;
								pagetracking[j].scrolly = obj[i].scrolly;
							}
							if (obj[i].keyboardtype != "") {
								pagetracking[j].keyboardtype += 1;
							}
							break;
						}
						
						if (j == pagetracking.length - 1) {
							j += 1;
							pagetracking[j] = {id: j, name: obj[i].name, email: obj[i].email, date: obj[i].date, duration: 0, current_url: obj[i].current_url, ip_address: obj[i].ip_address, leftclick: 0, rightclick: 0, middleclick: 0, mousemove: 0, scroll: 0, keyboardtype: 0};
						}						
					}
					

				}
		pagetracking.sort(function(a, b){return new Date(a.date) - new Date(b.date)});

async function send_data() {
		var t;
		var difference;
		console.log("started");
		for (i = 0; i < pagetracking.length; i++) {
			if (i == 0) {
				t = parseFloat(pagetracking[i].duration);
			} else {
				t = new Date(pagetracking[i].date) - new Date(pagetracking[i-1].date);
			}
			console.log("i: " + i + ", t: " + t);
			if (t > 0) {
				await sleep(t);
			}
			post_data_pagetracking("http://localhost/mouse-tracking/files/pagetrackingsimulation.php", pagetracking[i].name, pagetracking[i].email, pagetracking[i].date, pagetracking[i].duration, pagetracking[i].current_url, pagetracking[i].ip_address, pagetracking[i].mousemove, pagetracking[i].leftclick, pagetracking[i].rightclick, pagetracking[i].middleclick, pagetracking[i].keyboardtype, pagetracking[i].scroll);
		}
		console.log("finished");

}

send_data();



	});


	$('#roitracking-simulation').click(function() {
		obj.sort(function (a, b) {return ('' + a.name).localeCompare(b.name)});


		// format: [x1, x2, y1, y2] 1920x
		var areas = {quiz1flag: [384, 528, 291, 570], quiz1: [529, 1900, 291, 570], quiz2flag: [384, 528, 571, 852], quiz2: [529, 1900, 571, 852], quiz3flag: [384, 528, 853, 1133], quiz3: [529, 1900, 853, 1133], quiz4flag: [384, 528, 1134, 1441], quiz4: [529, 1900, 1134, 1441], quiz5flag: [384, 528, 1442, 1748], quiz5: [529, 1900, 1442, 1748], quiz6flag: [384, 528, 1749, 2027], quiz6: [529, 1900, 1749, 2027], quiz7flag: [384, 528, 2028, 2452], quiz7: [529, 1900, 2028, 2452], quiz8flag: [384, 528, 2453, 2730], quiz8: [529, 1900, 2453, 2730], quiz9flag: [384, 528, 2731, 3242], quiz9: [529, 1900, 2731, 3242], quiz10flag: [384, 528, 3243, 3580], quiz10: [529, 1900, 3243, 3580], quiz11flag: [384, 528, 3581, 3856], quiz11: [529, 1900, 3581, 3856], quiz12flag: [384, 528, 3857, 4169], quiz12: [529, 1900, 3857, 4169], quiz13flag: [384, 528, 4170, 4746], quiz13: [529, 1900, 4170, 4746], quiz14flag: [384, 528, 4747, 5295], quiz14: [529, 1900, 4747, 5295], quiz15flag: [384, 528, 5296, 5842], quiz15: [529, 1900, 5296, 5842], header: [0, 1920, 0, 64], title: [16, 1904, 150, 270], quiz_navigation: [18, 364, 291, 532], navigation: [16, 366, 551, 1042], administration: [18, 364, 1062, 1693], finish_attempt: [1720, 1896, 5864, 5939], footer: [0, 1920, 5939, 6116]};
		
		for (i = 0; i < obj.length; i++) {
			// Categorize x and y area
			obj[i].area = ROI(obj[i].x, obj[i].y, areas);
			// Numerize trues and falses
			if (obj[i].leftclick == "true") {
				obj[i].leftclick = 1;
			} else {
				obj[i].leftclick = 0;
			}
			if (obj[i].rightclick == "true") {
				obj[i].rightclick = 1;
			} else {
				obj[i].rightclick = 0;
			}
			if (obj[i].middleclick == "true") {
				obj[i].middleclick = 1;
			} else {
				obj[i].middleclick = 0;
			}
			// Check mouse movements
			if ((i > 0) && ((obj[i].x != obj[i-1].x) || (obj[i].y != obj[i-1].y))) {
				obj[i].mousemove = 1;
			} else {
				obj[i].mousemove = 0;
			}
			// Check scroll movements
			if ((i > 0) && ((obj[i].scrollx != obj[i-1].scrollx) || (obj[i].scrolly != obj[i-1].scrolly))) {
				obj[i].scroll = 1;
			} else {
				obj[i].scroll = 0;
			}
			// Change duration to float
			obj[i].duration = parseFloat(obj[i].duration);
		}

		var roitracking = [];
		var j = 0;
		roitracking[0] = {id: 0, name: obj[0].name, email: obj[0].email, date: obj[0].date, duration: 0, current_url: obj[0].current_url, ip_address: obj[0].ip_address, area: obj[0].area, mousemove: 0, leftclick: obj[0].leftclick, rightclick: obj[0].rightclick, middleclick: obj[0].middleclick, keyboardtype: obj[0].keyboardtype, scrollx: obj[0].scrollx, scrolly: obj[0].scrolly, scroll: 0};

		for (i = 1; i < obj.length; i++) {
			if(roitracking[j].name !== obj[i].name) {
				j += 1;
				roitracking[j] = {id: j, name: obj[i].name, email: obj[i].email, date: obj[i].date, duration: obj[i].duration, current_url: obj[i].current_url, ip_address: obj[i].ip_address, area: obj[i].area, mousemove: obj[i].mousemove, leftclick: obj[i].leftclick, rightclick: obj[i].rightclick, middleclick: obj[i].middleclick, keyboardtype: obj[i].keyboardtype, scrollx: obj[i].scrollx, scrolly: obj[i].scrolly, scroll: obj[i].scroll};
				continue;
			}
			if(String(Object.keys(roitracking[j].area)) == String(Object.keys(obj[i].area))) {
				roitracking[j].date = obj[i].date;
				roitracking[j].duration += obj[i].duration;
				roitracking[j].leftclick += obj[i].leftclick;
				roitracking[j].rightclick += obj[i].rightclick;
				roitracking[j].middleclick += obj[i].middleclick;
				roitracking[j].mousemove += obj[i].mousemove;
				roitracking[j].scrollx = obj[i].scrollx;
				roitracking[j].scrolly = obj[i].scrolly;
				roitracking[j].scroll += obj[i].scroll;
				roitracking[j].keyboardtype += obj[i].keyboardtype;
			} else {
				j += 1;
				roitracking[j] = {id: j, name: obj[i].name, email: obj[i].email, date: obj[i].date, duration: obj[i].duration, current_url: obj[i].current_url, ip_address: obj[i].ip_address, area: obj[i].area, mousemove: obj[i].mousemove, leftclick: obj[i].leftclick, rightclick: obj[i].rightclick, middleclick: obj[i].middleclick, keyboardtype: obj[i].keyboardtype, scrollx: obj[i].scrollx, scrolly: obj[i].scrolly, scroll: obj[i].scroll};
			}
		}

		roitracking.sort(function(a, b){return new Date(a.date) - new Date(b.date)});

async function send_data() {
		var t;
		var difference;
		console.log("started");
		for (i = 0; i < roitracking.length; i++) {
			if (i == 0) {
				t = roitracking[i].duration;
			} else {
				t = new Date(roitracking[i].date) - new Date(roitracking[i-1].date);
			}
			console.log("i: " + i + ", t: " + t);
			if (t > 0) {
				await sleep(t);
			}
			post_data_roitracking("http://localhost/mouse-tracking/files/roitrackingsimulation.php", roitracking[i].name, roitracking[i].email, roitracking[i].date, roitracking[i].duration, roitracking[i].current_url, roitracking[i].ip_address, roitracking[i].area, roitracking[i].mousemove, roitracking[i].leftclick, roitracking[i].rightclick, roitracking[i].middleclick, roitracking[i].keyboardtype, roitracking[i].scrollx, roitracking[i].scrolly, roitracking[i].scroll);
		}
		console.log("finished");

}

send_data();



	});

	$('#mousetracking-simulation').click(function() {

async function send_data() {
		console.log("started");
		for (i = 0; i < obj.length; i++) {
			if (i == 0) {
				t = 0;
			} else {
				t = new Date(obj[i].date) - new Date(obj[i-1].date);
			}
			console.log("i: " + i + ", t: " + t);
			if (t > 0) {
				//await sleep(t);
			}
			post_data_mousetracking("http://localhost/mouse-tracking/files/mousetrackingsimulation.php", obj[i].name, obj[i].email, obj[i].date, obj[i].duration, obj[i].current_url, obj[i].ip_address, obj[i].x, obj[i].y, obj[i].leftclick, obj[i].rightclick, obj[i].middleclick, obj[i].keyboardtype, obj[i].scrollx, obj[i].scrolly);
		}
		console.log("finished");
}

send_data();

	});

	function post_data_pagetracking(script, name, email, date, duration, current_url, ip_address, mousemove, leftclick, rightclick, middleclick, keyboardtype, scroll) {

		var mydata = {$name: name, $email: email, $date: date, $duration: duration, $current_url: current_url, $ip_address: ip_address, $mousemove: mousemove, $leftclick: leftclick, $rightclick: rightclick, $middleclick: middleclick, $keyboardtype: keyboardtype, $scroll: scroll}

		$.post(script, mydata, function(data,status){
			console.log(data);
			console.log(status);
		});
	}

	function post_data_roitracking(script, name, email, date, duration, current_url, ip_address, area, mousemove, leftclick, rightclick, middleclick, keyboardtype, scrollx, scrolly, scroll) {

		var mydata = {$name: name, $email: email, $date: date, $duration: duration, $current_url: current_url, $ip_address: ip_address, $area: area, $mousemove: mousemove, $leftclick: leftclick, $rightclick: rightclick, $middleclick: middleclick, $keyboardtype: keyboardtype, $scrollx: scrollx, $scrolly: scrolly, $scroll: scroll}

		$.post(script, mydata, function(data,status){
			console.log(data);
			console.log(status);
		});
	}

	function post_data_mousetracking(script, name, email, date, duration, current_url, ip_address, x, y, leftclick, rightclick, middleclick, keyboardtype, scrollx, scrolly) {

		var mydata = {$name: name, $email: email, $date: date, $duration: duration, $current_url: current_url, $ip_address: ip_address, $x: x, $y: y, $leftclick: leftclick, $rightclick: rightclick, $middleclick: middleclick, $keyboardtype: keyboardtype, $scrollx: scrollx, $scrolly: scrolly}

		$.post(script, mydata, function(data,status){
			console.log(data);
			console.log(status);
		});
	}

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

$('#download-data').click(function(){
	var jsonData = [];
        for (i = 232200; i < 518712; i++) {
      jsonData[i-232200] = obj[i];
    }
var minified = JSON.stringify(JSON.parse(jsonData));
 (function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)
console.save(minified, "clean.json");
	});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

});

// Merge all areas per user
/* 
var roitrackingdata = [];
for (i = 0; i < pagetracking.length; i++) {
	var roitrackingdatatemp = [];
	for (j = 0; j < roitracking.length; j++) {
		if(roitracking[j].name == pagetracking[i].name){
			if(jQuery.isEmptyObject(roitrackingdatatemp)){
				roitrackingdatatemp[0] = roitracking[j];
				roitrackingdatatemp[0].area = roitracking[j].area;
				continue;
			}
			for (k = 0; k < roitrackingdatatemp.length; k++) {
				if(String(Object.keys(roitrackingdatatemp[k].area)) == String(Object.keys(roitracking[j].area))){
					roitrackingdatatemp[k].area = roitracking[j].area;
					roitrackingdatatemp[k].date = roitracking[j].date;
					roitrackingdatatemp[k].duration += roitracking[j].duration;
					roitrackingdatatemp[k].leftclick += roitracking[j].leftclick;
					roitrackingdatatemp[k].rightclick += roitracking[j].rightclick;
					roitrackingdatatemp[k].middleclick += roitracking[j].middleclick;
					roitrackingdatatemp[k].mousemove += roitracking[j].mousemove;
					roitrackingdatatemp[k].scrollx = roitracking[j].scrollx;
					roitrackingdatatemp[k].scrolly = roitracking[j].scrolly;
					roitrackingdatatemp[k].scroll += roitracking[j].scroll;
					roitrackingdatatemp[k].keyboardtype += roitracking[j].keyboardtype;
					break;
				}
				if(k == roitrackingdatatemp.length - 1){
					k += 1;
					roitrackingdatatemp[k] = roitracking[j];
					roitrackingdatatemp[k].area = roitracking[j].area;
				}
			}
		}
	}
	roitrackingdata = roitrackingdata.concat(roitrackingdatatemp);
}
*/

//Merge all areas
/*var roitrackingdataarea = [];
for (i = 0; i < roitrackingdata.length; i++) {
	if(jQuery.isEmptyObject(roitrackingdataarea)){
		roitrackingdataarea[0] = roitrackingdata[i];
		roitrackingdataarea[0].area = roitrackingdata[i].area;
		continue;
	}
	for (j = 0; j < roitrackingdataarea.length; j++) {
		if(String(Object.keys(roitrackingdataarea[j].area)) == String(Object.keys(roitrackingdata[i].area))){
			roitrackingdataarea[j].area = roitrackingdata[i].area;
			roitrackingdataarea[j].date = roitrackingdata[i].date;
			roitrackingdataarea[j].duration += roitrackingdata[i].duration;
			roitrackingdataarea[j].leftclick += roitrackingdata[i].leftclick;
			roitrackingdataarea[j].rightclick += roitrackingdata[i].rightclick;
			roitrackingdataarea[j].middleclick += roitrackingdata[i].middleclick;
			roitrackingdataarea[j].mousemove += roitrackingdata[i].mousemove;
			roitrackingdataarea[j].scrollx = roitrackingdata[i].scrollx;
			roitrackingdataarea[j].scrolly = roitrackingdata[i].scrolly;
			roitrackingdataarea[j].scroll += roitrackingdata[i].scroll;
			roitrackingdataarea[j].keyboardtype += roitrackingdata[i].keyboardtype;
			break;
		}
		if(j == roitrackingdataarea.length - 1){
			j += 1;
			roitrackingdataarea[j] = roitrackingdata[i];
			roitrackingdataarea[j].area = roitrackingdata[i].area;
		}
	}	
}	
*/

//Flow summary
/*
var roitrackingflow = [];
roitrackingflow[0] = {Source: roitracking[0].area, Destination: roitracking[1].area, flow: 1};
for (j = 2; j < roitracking.length; j++) {
	roitrackingflow[j-1] = {Source: roitracking[j-1].area, Destination: roitracking[j].area, flow: 1};
}

var roitrackingflowsummary = [];
for (i = 0; i < roitrackingflow.length; i++) {
	if(jQuery.isEmptyObject(roitrackingflowsummary)){
		roitrackingflowsummary[0] = roitrackingflow[0];
		continue;
	}
	for (j = 0; j < roitrackingflowsummary.length; j++) {
		if(String(Object.keys(roitrackingflowsummary[j].Source)) == String(Object.keys(roitrackingflow[i].Source)) && String(Object.keys(roitrackingflowsummary[j].Destination)) == String(Object.keys(roitrackingflow[i].Destination))){
			roitrackingflowsummary[j].flow += 1;
			break;
		}
		if(j == roitrackingflowsummary.length - 1){
			j += 1;
			roitrackingflowsummary[j] = roitrackingflow[i];
		}
	}
}
*/
//Flow Summary User
/*
var roitrackingflowsummaryuser = [];
for (i = 0; i < pagetracking.length; i++) {
	var tempname = [];
	var k = 0;
	for (j = 0; j < roitracking.length; j++) {
		if(roitracking[j].name == pagetracking[i].name){
			tempname[k] = roitracking[j];
			k++;
		}
	}
	var roitrackingflow = [];
	roitrackingflow[0] = {name: tempname[0].name, Source: tempname[0].area, Destination: tempname[1].area, flow: 1};
	for (j = 2; j < tempname.length; j++) {
		roitrackingflow[j-1] = {name: tempname[j].name, Source: tempname[j-1].area, Destination: tempname[j].area, flow: 1};
	}
	var roitrackingflowsummary = [];
	for (j = 0; j < roitrackingflow.length; j++) {
		if(jQuery.isEmptyObject(roitrackingflowsummary)){
			roitrackingflowsummary[0] = roitrackingflow[0];
			continue;
		}
		for (k = 0; k < roitrackingflowsummary.length; k++) {
			if(String(Object.keys(roitrackingflowsummary[k].Source)) == String(Object.keys(roitrackingflow[j].Source)) && String(Object.keys(roitrackingflowsummary[k].Destination)) == String(Object.keys(roitrackingflow[j].Destination))){
				roitrackingflowsummary[k].flow += 1;
				break;
			}
			if(k == roitrackingflowsummary.length - 1){
				k += 1;
				roitrackingflowsummary[k] = roitrackingflow[j];
			}
		}
	}
	console.log(pagetracking[i].name);
	roitrackingflowsummaryuser = roitrackingflowsummaryuser.concat(roitrackingflowsummary);
}
*/
//stringify remove quote and comma
/*
for (i = 0; i < roitrackingdata.length; i++) {
	roitrackingdata[i]['area'] = JSON.stringify(roitrackingdata[i]['area']).replace(/,(?!["{}[\]])/g, " ").replace(/\"([^(\"),"]+)\":/g,"$1:");
	//roitrackingdata[i]['scrollx'] = parseInt(roitrackingdata[i]['scrollx']);
	//roitrackingdata[i]['scrolly'] = parseInt(roitrackingdata[i]['scrolly']);
}
*/

/* to csv

"use strict";

function parseJSONToCSVStr(jsonData) {
    if(jsonData.length == 0) {
        return '';
    }

    let keys = Object.keys(jsonData[0]);

    let columnDelimiter = ',';
    let lineDelimiter = '\n';

    let csvColumnHeader = keys.join(columnDelimiter);
    let csvStr = csvColumnHeader + lineDelimiter;

    jsonData.forEach(item => {
        keys.forEach((key, index) => {
            if( (index > 0) && (index < keys.length-1) ) {
                csvStr += columnDelimiter;
            }
            csvStr += item[key];
        });
        csvStr += lineDelimiter;
    });

    return encodeURIComponent(csvStr);;
}

function exportToCsvFile(jsonData) {
    let csvStr = parseJSONToCSVStr(jsonData);
    let csvData = new Blob([csvStr], { type: 'text/csv' }); 
    let dataUri = 'data:text/csv;charset=utf-8,'+ URL.createObjectURL(csvData);

    let exportFileDefaultName = 'data.csv';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function downloadFile(data, fileName) {
        var csvData = parseJSONToCSVStr(data);
        var blob = new Blob([ csvData ], {
            type : "application/csv;charset=utf-8;"
        });

        if (window.navigator.msSaveBlob) {
            // FOR IE BROWSER
            navigator.msSaveBlob(blob, fileName);
        } else {
            // FOR OTHER BROWSERS
            var link = document.createElement("a");
            var csvUrl = URL.createObjectURL(blob);
            link.href = csvUrl;
            link.style = "visibility:hidden";
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
}

function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

Right click on the object in console and click Store as a global variable
the output will be something like temp1
type in console copy(temp1)
paste to your favorite text editor

		var areas = {quiz1: [305, 1350, 222, 428], quiz2: [305, 1350, 429, 655], quiz3: [305, 1350, 656, 872], quiz4: [305, 1350, 873, 1156], quiz5: [305, 1350, 1157, 1433], quiz6: [305, 1350, 1434, 1658], quiz7: [305, 1350, 1659, 2141], quiz8: [305, 1350, 2142, 2345], quiz9: [305, 1350, 2346, 2916], quiz10: [305, 1350, 2917, 3215], quiz11: [305, 1350, 3216, 3439], quiz12: [305, 1350, 3440, 3720], quiz13: [305, 1350, 3721, 4234], quiz14: [305, 1350, 4235, 4738], quiz15: [305, 1350, 4739, 5227], header: [7, 1372, 17, 57], title: [5, 481, 132, 214], quiz_navigation: [2, 342, 223, 511], administration: [6, 341, 863, 1432], finish_attempt: [1205, 1366, 5256, 5312], footer: [4, 7, 5323, 5456]};
*/
