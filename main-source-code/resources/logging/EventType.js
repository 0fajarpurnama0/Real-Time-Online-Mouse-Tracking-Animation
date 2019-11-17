var sevent;
var event_type = [];

function EventType() {
	if($("#event-type").is(":checked")){
		$(window).on("auxclick", function(event) {
			default_event_type();
		}).on("contextmenu", function(event) {
			default_event_type();
		}).on("dblclick", function(event) {
			default_event_type();
		}).on("select", function(event) {
			default_event_type();
		}).on("wheel", function(event) {
			default_event_type();
		}).on("copy", function(event) {
			default_event_type();
		}).on("cut", function(event) {
			default_event_type();
		}).on("paste", function(event) {
			default_event_type();
		});
	}
}

function default_event_type(){
	if($("#default").is(":checked")){
		i ++;
		default_sync_other_logs();
		sevent = event.type;
		// post to database
		if ($("#data-to-database-on-fly-checkbox").is(":checked")) {
			post_data_fly($('#data-to-database-on-fly').val());
		}
		/*
		// post to file
		if ($("#data-to-file-on-fly-checkbox").is(":checked")) {
			post_data_fly("files/savedatafiledefaulteach.php");
		}
		*/
		demo();
	}
}
