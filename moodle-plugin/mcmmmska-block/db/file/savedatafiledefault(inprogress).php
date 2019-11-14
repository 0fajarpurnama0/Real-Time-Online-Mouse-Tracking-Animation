<?php
require_once('../../../../config.php');
	$data = array(
		'$name' => optional_param('$name', '', PARAM_TEXT),
		'$email' => optional_param('$email', '', PARAM_EMAIL),
		'$now' => optional_param('$now', '', PARAM_TEXT),
		'$x' => optional_param('$x', 0, PARAM_INT),
		'$y' => optional_param('$y', 0, PARAM_INT),
		'$active' => optional_param('$active', '', PARAM_TEXT),
		'$duration' => optional_param('$duration', 0, PARAM_FLOAT),
		'$current_url' => optional_param('$current_url', '', PARAM_URL),
		'$ip_address' => optional_param('$ip_address', '', PARAM_HOST),
		'$samplingmode' => optional_param('$samplingmode', '', PARAM_TEXT),
		'$leftclick' => optional_param('$leftclick', '', PARAM_TEXT),
		'$rightclick' => optional_param('$rightclick', '', PARAM_TEXT),
		'$middleclick' => optional_param('$middleclick', '', PARAM_TEXT),
		'$keyboardtype' => optional_param('$keyboardtype', '', PARAM_TEXT),
		'$scrollleft' => optional_param('$scrollleft', '', PARAM_INT),
		'$scrolltop' => optional_param('$scrolltop', '', PARAM_INT),
		'$windowwidth' => optional_param('$windowwidth', 0, PARAM_INT),
		'$windowheight' => optional_param('$windowheight', 0, PARAM_INT),
		'$restrictedfocusviewer' => optional_param('$restrictedfocusviewer', '', PARAM_TEXT),
		'$bubbleview' => optional_param('$bubbleview', '', PARAM_TEXT),
		'$fingertracinglearningsystem' => optional_param('$fingertracinglearningsystem', '', PARAM_TEXT),
		'$cursorreminder' => optional_param('$cursorreminder', '', PARAM_TEXT),
		'$transparency' => optional_param('$transparency', '', PARAM_TEXT),
		'$magnifier' => optional_param('$magnifier', '', PARAM_TEXT),
		'$textcolor' => optional_param('$textcolor', '', PARAM_TEXT),
		'$backgroundcolor' => optional_param('$backgroundcolor', '', PARAM_TEXT)
	);
	$file = optional_param('$file', '', PARAM_TEXT);
	//$file = 'testfile.json';
	//file_put_contents($file, json_encode($data));

$context = context_system::instance();
$fs = get_file_storage();
 
// Prepare file record object
$fileinfo = array(
    'contextid' => $context->id, // ID of context
    'component' => 'theme_mcmmmskaclean',     // usually = table name
    'filearea' => 'mcmmmskaclean',     // usually = table name
    'itemid' => 0,               // usually = ID of row in table
    'filepath' => '/',           // any path beginning and ending in /
    'filename' => 'myfile.txt'); // any filename
 
// Create file containing text 'hello world'
$fs->create_file_from_string($fileinfo, 'hello world');
