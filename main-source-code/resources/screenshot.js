$(document).ready(function(){
	$( "#Capture" ).click(function() {
 		html2canvas(document.querySelector('*')).then(canvas => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        a.download = 'webpage.png';
        a.click();
		});
	});
});