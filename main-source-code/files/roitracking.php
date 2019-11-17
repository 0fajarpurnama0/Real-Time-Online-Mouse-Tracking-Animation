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
	if( isset($_POST['$area']) ) {
		$area = $_POST['$area'];
	} else {
		$area = '';
	}
	if( isset($_POST['$mousemove']) ) {
		$mousemove = $_POST['$mousemove'];
	} else {
		$mousemove = '';
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
	if( isset($_POST['$keyboardtype']) ) {
		$keyboardtype = $_POST['$keyboardtype'];
	} else {
		$keyboardtype = '';
	}
	if( isset($_POST['$scroll']) ) {
		$scroll = $_POST['$scroll'];
	} else {
		$scroll = '';
	}
	if( isset($_POST['$zoom']) ) {
		$zoom = $_POST['$zoom'];
	} else {
		$zoom = '';
	}
	if( isset($_POST['$active']) ) {
		$active = $_POST['$active'];
	} else {
		$active = '';
	}
	if( isset($_POST['$inactive']) ) {
		$inactive = $_POST['$inactive'];
	} else {
		$inactive = '';
	}
		

	$check_table_exist = mysqli_query($conn, "SELECT id FROM roitracking");
	if(empty($check_table_exist)) {
                $create_table = "CREATE TABLE roitracking (
                          			  id int AUTO_INCREMENT,
			  			  name text,
                          			  email varchar(255),
                          			  date varchar(255),
                          			  area varchar(255),
                          			  mousemove varchar(255),
                          			  duration varchar(255), 
						  current_url varchar(255), 
						  ip_address varchar(255),
						  leftclick varchar(255), 
						  rightclick varchar(255), 
						  middleclick varchar(255),
						  keyboardtype varchar(255),
						  scroll varchar(255),
						  zoom varchar(255),
						  active varchar(255),
						  inactive varchar(255),
                          			  PRIMARY KEY  (id)
                          )";
                if ($conn->query($create_table) === TRUE) {
					echo "Table roitracking created successfully";
				} else {
					echo "Error creating table: " . $conn->error;
				}
	}
	
	$sql = "INSERT INTO roitracking (name,email,date,area,mousemove,duration,current_url,ip_address,leftclick,rightclick,middleclick,keyboardtype,scroll,zoom,active,inactive) VALUES ('$name', '$email', '$date', '$area', '$mousemove', '$duration', '$current_url', '$ip_address', '$leftclick', '$rightclick', '$middleclick', '$keyboardtype', '$scroll', '$zoom', '$active', '$inactive')";
	if ($conn->query($sql) === TRUE) {
		echo "Page saved!";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
?>
