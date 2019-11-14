		function loadChanges(){
			chrome.storage.sync.get(['name', 'email', 'mouse_trail_recording', 'restricted_focus_viewer_imitation_checkbox', 'bubble_view_imitation_checkbox', 'finger_tracing_learning_system_imitation_checkbox', 'transparency_control', 'fontsize_magnifyer', 'background_color', 'background_color_checkbox', 'color', 'color_checkbox', 'cursor_reminder'], function(result) {
			
			$('#name').val(result.name);
			$('#email').val(result.email);
			
			if(result.mouse_trail_recording == 'on'){
				console.log('mouse_trail_recording currently is ' + true);
				$('#mouse-trail-recording').prop( "checked", true);
			} else {
				console.log('mouse_trail_recording currently is ' + false);
				$('#mouse-trail-recording').prop( "checked", false);
			}
			
			if(result.restricted_focus_viewer_imitation_checkbox == 'on'){
				console.log('restricted_focus_viewer_imitation_checkbox currently is ' + true);
				$('#restricted-focus-viewer-imitation-checkbox').prop( "checked", true);
			} else {
				console.log('restricted_focus_viewer_imitation_checkbox currently is ' + false);
				$('#restricted-focus-viewer-imitation-checkbox').prop( "checked", false);
			}
			
			if(result.bubble_view_imitation_checkbox == 'on'){
				console.log('bubble_view_imitation_checkbox currently is ' + true);
				$('#bubble-view-imitation-checkbox').prop( "checked", true);
			} else {
				console.log('bubble_view_imitation_checkbox currently is ' + false);
				$('#bubble-view-imitation-checkbox').prop( "checked", false);
			}
			
			if(result.finger_tracing_learning_system_imitation_checkbox == 'on'){
				console.log('finger_tracing_learning_system_imitation_checkbox currently is ' + true);
				$('#finger-tracing-learning-system-imitation-checkbox').prop( "checked", true);
			} else {
				console.log('finger_tracing_learning_system_imitation_checkbox currently is ' + false);
				$('#finger-tracing-learning-system-imitation-checkbox').prop( "checked", false);
			}
			
			$('#transparency-control').val(result.transparency_control);
			console.log('transparency_control currently is ' + result.transparency_control);
			$('#fontsize-magnifyer').val(result.fontsize_magnifyer);
			console.log('fontsize_magnifyer currently is ' + result.fontsize_magnifyer);
			
			
			$('#background-color').val(result.background_color);
			console.log('background_color currently is ' + result.background_color);
			if(result.background_color_checkbox == 'on'){
				console.log('background_color_checkbox currently is ' + true);
				$('#background-color-checkbox').prop( "checked", true);
			} else {
				console.log('background_color_checkbox currently is ' + false);
				$('#background-color-checkbox').prop( "checked", false);
			}
			
			$('#color').val(result.color);
			console.log('color currently is ' + result.color);
			if(result.color_checkbox == 'on'){
				console.log('color_checkbox currently is ' + true);
				$('#color-checkbox').prop( "checked", true);
			} else {
				console.log('color_checkbox currently is ' + false);
				$('#color-checkbox').prop( "checked", false);
			}
			
			$('#cursor-reminder').val(result.cursor_reminder);
			
			});
			
	}
	
	loadChanges();