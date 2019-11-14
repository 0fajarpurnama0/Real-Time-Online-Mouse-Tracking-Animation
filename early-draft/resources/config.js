$.getScript("resources/screenshot.js");
$.getScript("resources/animation.js");
$.getScript("resources/data.js");

// This is where the checkbox html are created to activate or diactivate.
$(document).ready(function(){
  $('body').prepend(' <div id="dialog" title="Configuration"> <p>Hello, please support us in our user interraction project by allowing us to record your interractions:</p> </div>');
  $('#dialog').append('What is your name? (leave blank if you want to be anonymous) <input type="text" id="name" /> <br />');
  $('#dialog').append('Do you have an email address? (leave blank if you want to be anonymous) <input type="text" id="email" /> <br />');
  $( function() {
    $('#dialog').dialog();
  });
  $('#dialog').append('Transparency Control  <input type="range" min="0" max="100" value="100" id="transparency-control"> <p id="transparency-control-text"> </p></input> <br />');
  $('#dialog').append('Fontsize Magnifyer <input type="range" min="0" max="10" value="0" id="fontsize-magnifyer"> <p id="fontsize-magnifyer-text"> </p> </input> <br />');
  $('#dialog').append('<input type="checkbox" id="background-color-checkbox" checked> Background Color </input>');
  $('#dialog').append('<input type="color" id="background-color" value="#9effb1"> <br />');
  $('#dialog').append('<input type="checkbox" id="color-checkbox" checked> Text Color </input>');
  $('#dialog').append('<input type="color" id="color" value="#0000ff"> <br />');
  //$('#dialog').append('<input type="range" min="0" max="100" value="0" id="background-color-opacity"> <p id="background-color-opacity-text"> </p></input> <br />');
  $('#dialog').append('Cursor Reminder  <input type="range" min="0" max="10" value="0" id="cursor-reminder"> <p id="cursor-reminder-text"> </p></input> <br />');
  $('#dialog').append('<input type="checkbox" id="mouse-trail-recording" checked> Mouse Trail Recording</input> <br />');
  $('#dialog').append('<button id="Capture">Capture</button>');
  $('#dialog').append('<button id="generate-table">Generate Table</button>');
  $('#dialog').append('<p>Mouse is at coordinates: <span> <table id="mousetrail"> <tr> <th>No</th> <th>Name</th> <th>Email</th> <th>Date</th> <th>Duration</th> <th>X</th> <th>Y</th> <th>IP Address</th> <th>Transparency</th> <th>Magnifyer</th> </tr></table></span>.</p>');
});