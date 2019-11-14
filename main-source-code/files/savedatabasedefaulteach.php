<?php

	$servername = "localhost";
	$username = "username";
	$password = "password";
	$dbname = "database";
	
	$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
	if ($conn->connect_error) {     // Check connection
		die("Connection failed: " . $conn->connect_error);
	}
	
	if( isset($_POST['$name']) ) {
		$name = $_POST['$name'];
	} else {
		$name = '';
	}
	if( isset($_POST['$email']) ) {
		$email = $_POST['$email'];
	} else {
		$email = '';
	}
	if( isset($_POST['$date']) ) {
		$date = $_POST['$date'];
	} else {
		$date = '';
	}
	if( isset($_POST['$x']) ) {
		$x = $_POST['$x'];
	} else {
		$x = '';
	}
	if( isset($_POST['$y']) ) {
		$y = $_POST['$y'];
	} else {
		$y = '';
	}
	if( isset($_POST['$active']) ) {
		$active = $_POST['$active'];
	} else {
		$active = '';
	}
	if( isset($_POST['$duration']) ) {
		$duration = $_POST['$duration'];
	} else {
		$current_url = '';
	}
	if( isset($_POST['$current_url']) ) {
		$current_url = $_POST['$current_url'];
	} else {
		$current_url = '';
	}
	if( isset($_POST['$ip_address'] ) ) {
		$ip_address = $_POST['$ip_address'];
	} else {
		$ip_address = '';
	}
	if( isset($_POST['$samplingmode']) ) {
		$samplingmode = $_POST['$samplingmode'];
	} else {
		$samplingmode = '';
	}
	if( isset($_POST['$leftclick']) ) {
		$leftclick = $_POST['$leftclick'];
	} else {
		$leftclick = '';
	}
	if( isset($_POST['$rightclick']) ) {
		$rightclick = $_POST['$rightclick'];
	} else {
		$rightclick = '';
	}
	if( isset($_POST['$middleclick']) ) {
		$middleclick = $_POST['$middleclick'];
	} else {
		$middleclick = '';
	}
	if( isset($_POST['$mTouch']) ) {
		$mTouch = $_POST['$mTouch'];
	} else {
		$mTouch = '';
	}
	if( isset($_POST['$keyboardtype']) ) {
		$keyboardtype = $_POST['$keyboardtype'];
	} else {
		$keyboardtype = '';
	}
	if( isset($_POST['$scrollleft']) ) {
		$scrollleft = $_POST['$scrollleft'];
	} else {
		$scrollleft = '';
	}
	if( isset($_POST['$scrolltop']) ) {
		$scrolltop = $_POST['$scrolltop'];
	} else {
		$scrolltop = '';
	}
	if( isset($_POST['$windowwidth']) ) {
		$windowwidth = $_POST['$windowwidth'];
	} else {
		$windowwidth = '';
	}
	if( isset($_POST['$windowheight']) ) {
		$windowheight = $_POST['$windowheight'];
	} else {
		$windowheight = '';
	}
	if( isset($_POST['$screenwidth']) ) {
		$screenwidth = $_POST['$screenwidth'];
	} else {
		$screenwidth = '';
	}
	if( isset($_POST['$screenheight']) ) {
		$screenheight = $_POST['$screenheight'];
	} else {
		$screenheight = '';
	}
	if( isset($_POST['$zoom']) ) {
		$zoom = $_POST['$zoom'];
	} else {
		$zoom = '';
	}
	if( isset($_POST['$event_type']) ) {
		$event_type = $_POST['$event_type'];
	} else {
		$event_type = '';
	}
	if( isset($_POST['$restrictedfocusviewer']) ) {
		$restrictedfocusviewer = $_POST['$restrictedfocusviewer'];
	} else {
		$restrictedfocusviewer = '';
	}
	if( isset($_POST['$bubbleview']) ) {
		$bubbleview = $_POST['$bubbleview'];
	} else {
		$bubbleview = '';
	}
	if( isset($_POST['$fingertracinglearningsystem']) ) {
		$fingertracinglearningsystem = $_POST['$fingertracinglearningsystem'];
	} else {
		$fingertracinglearningsystem = '';
	}
	if( isset($_POST['$cursorreminder']) ) {
		$cursorreminder = $_POST['$cursorreminder'];
	} else {
		$cursorreminder = '';
	}
	if( isset($_POST['$transparency']) ) {
		$transparency = $_POST['$transparency'];
	} else {
		$transparency = '';
	}
	if( isset($_POST['$magnifier']) ) {
		$magnifier = $_POST['$magnifier'];
	} else {
		$magnifier = '';
	}
	if( isset($_POST['$textcolor']) ) {
		$textcolor = $_POST['$textcolor'];
	} else {
		$textcolor = '';
	}
	if( isset($_POST['$backgroundcolor']) ) {
		$backgroundcolor = $_POST['$backgroundcolor'];
	} else {
		$backgroundcolor = '';
	}
	
	$check_table_exist = mysqli_query($conn, "SELECT id FROM 0fajarpurnama0");
	if(empty($check_table_exist)) {
                $create_table = "CREATE TABLE mcmskadefault (
                          id int AUTO_INCREMENT,
						  name text,
                          email varchar(255),
                          date varchar(255),
                          x varchar(255),
                          y varchar(255),
						  tab text,
                          duration varchar(255), 
						  current_url varchar(255), 
						  ip_address varchar(255),
						  samplingmode text,
						  leftclick text, 
						  rightclick text, 
						  middleclick text,
						  touch text,
						  keyboardtype varchar(255),
						  scrollx varchar(255),
						  scrolly varchar(255),
						  windowwidth varchar(255),
						  windowheight varchar(255),
						  screenwidth varchar(255),
						  screenheight varchar(255),
						  zoom varchar(255),
						  event_type text,
						  restrictedfocusviewer text,
						  bubbleview text,
						  fingertracinglearningsystem text,
						  cursorreminder text,
						  transparency text,
						  magnifier varchar(255),
						  textcolor varchar(255),
						  backgroundcolor varchar(255),
                          PRIMARY KEY  (id)
                          )";
                if ($conn->query($create_table) === TRUE) {
					echo "Table mcmskadefault created successfully";
				} else {
					echo "Error creating table: " . $conn->error;
				}
	}
	
	$sql = "INSERT INTO mcmskadefault (name,email,date,x,y,tab,duration,current_url,ip_address,samplingmode,leftclick,rightclick,middleclick,touch,keyboardtype,scrollx,scrolly,windowwidth,windowheight,screenwidth,screenheight,zoom,event_type,restrictedfocusviewer,bubbleview,fingertracinglearningsystem,cursorreminder,transparency,magnifier,textcolor,backgroundcolor) VALUES ('$name', '$email', '$date', '$x', '$y', '$active', '$duration', '$current_url', '$ip_address', '$samplingmode', '$leftclick', '$rightclick', '$middleclick', '$mTouch', '$keyboardtype', '$scrollleft', '$scrolltop', '$windowwidth', '$windowheight', '$screenwidth', '$screenheight', '$zoom', '$event_type', '$restrictedfocusviewer', '$bubbleview', '$fingertracinglearningsystem', '$cursorreminder', '$transparency', '$magnifier', '$textcolor', '$backgroundcolor')";
	if ($conn->query($sql) === TRUE) {
		echo "Page saved!";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
?>
