<?php

	$servername = "localhost";
	$username = "username";
	$password = "password";
	$dbname = "database";
	
	$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
	if ($conn->connect_error) {     // Check connection
		die("Connection failed: " . $conn->connect_error);
	}
	
		$name = $_POST['$name'];
		$email = $_POST['$email'];
		$date = $_POST['$date'];
		$x = $_POST['$x'];
		$y = $_POST['$y'];
		$active = $_POST['$active'];
		$duration = $_POST['$duration'];
		$current_url = $_POST['$current_url'];
		$ip_address = $_POST['$ip_address'];
		$samplingmode = $_POST['$samplingmode'];
		$leftclick = $_POST['$leftclick'];
		$rightclick = $_POST['$rightclick'];
		$middleclick = $_POST['$middleclick'];
		$mTouch = $_POST['$mTouch'];
		$keyboardtype = $_POST['$keyboardtype'];
		$scrollleft = $_POST['$scrollleft'];
		$scrolltop = $_POST['$scrolltop'];
		$windowwidth = $_POST['$windowwidth'];
		$windowheight = $_POST['$windowheight'];
		$screenwidth = $_POST['$screenwidth'];
		$screenheight = $_POST['$screenheight'];
		$zoom = $_POST['$zoom'];
		$event_type = $_POST['$event_type'];

	$check_table_exist = mysqli_query($conn, "SELECT id FROM mcmskdefault");
	if(empty($check_table_exist)) {
                $create_table = "CREATE TABLE mcmskdefault (
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
                          PRIMARY KEY  (id)
                          )";
                if ($conn->query($create_table) === TRUE) {
					echo "Table mcmskdefault created successfully";
				} else {
					echo "Error creating table: " . $conn->error;
				}
	}
	
	for($i = 0; $i < count($name); $i++){
		$sql = "INSERT INTO mcmskdefault (name,email,date,x,y,tab,duration,current_url,ip_address,samplingmode,leftclick,rightclick,middleclick,Touch,keyboardtype,scrollx,scrolly,windowwidth,windowheight,screenwidth,screenheight,zoom,event_type) VALUES ('$name[$i]', '$email[$i]', '$date[$i]', '$x[$i]', '$y[$i]', '$active[$i]', '$duration[$i]', '$current_url[$i]', '$ip_address[$i]', '$samplingmode[$i]', '$leftclick[$i]', '$rightclick[$i]', '$middleclick[$i]', '$mTouch[$i]', '$keyboardtype[$i]', '$scrollleft[$i]', '$scrolltop[$i]', '$windowwidth[$i]', '$windowheight[$i]', '$screenwidth[$i]', '$screenheight[$i]', '$zoom[$i]', '$event_type[$i]')";
		if ($conn->query($sql) === TRUE) {
			echo "Page saved!";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	$conn->close();
?>
