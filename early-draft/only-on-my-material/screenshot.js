$(document).ready(function(){
	$( "#Capture" ).click(function() {
 		 html2canvas(document.body).then(canvas => {
    //document.body.appendChild(canvas);  
    //window.open(canvas.toDataURL("image/png"));
			var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
			window.location.href=image; // it will save locally
		});
	});
});
