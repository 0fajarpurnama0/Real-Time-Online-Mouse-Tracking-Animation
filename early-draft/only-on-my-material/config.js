$.getScript("mousetrail.js");
$.getScript("data.js");
$.getScript("transparency.js");
$.getScript("screenshot.js");

// This is where the checkbox html are created to activate or diactivate.
$(document).ready(function(){
  $('body').prepend('<a class="waves-effect waves-light btn modal-trigger" href="#dialog">Configuration</a> <div id="dialog" class="modal"> <div class="modal-content"> <p>Hello, please support us in our user interraction project by allowing us to record your interractions:</p> </div>    <div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a></div> </div>');
  $('.modal').modal();
  $('footer').append('<a class="waves-effect waves-light btn" id="Capture">Capture<a>');
  $('.modal-content').append('What is your name? (leave blank if you want to be anonymous) <input type="text" id="name" /> <br />');
  $('.modal-content').append('Do you have an email address? (leave blank if you want to be anonymous) <input type="text" id="email" /> <br />');
  $('.modal-content').append('Transparency Control<p class="range-field"><input type="range" min="0" max="100" value="100" id="transparency-control"/></p><br />');
  $('.modal-content').append('Fontsize Magnifyer <p class="range-field"><input type="range" min="0" max="5" value="0" id="fontsize-magnifyer"/></p><br />');
  $('.modal-content').append('Background Color <div class="switch"><label>Off<input type="checkbox" id="background-color-checkbox"> </input><span class="lever"></span>On </label></div>');
  $('.modal-content').append('<input type="color" id="background-color" value="#9effb1"> <br />');
  $('.modal-content').append('Text Color <div class="switch"><label>Off<input type="checkbox" id="color-checkbox"> </input><span class="lever"></span>On </label></div>');
  $('.modal-content').append('<input type="color" id="color" value="#0000ff"> <br />');
  $('.modal-content').append('Cursor Reminder  <input type="range" min="0" max="10" value="0" id="cursor-reminder"> <p id="cursor-reminder-text"> </p></input> <br />');
  $('.modal-content').append('Mouse Trail Recording <div class="switch"><label>Off<input type="checkbox" id="mouse-trail-recording"></input><span class="lever"></span>On </label></div>');
  $('.modal-content').append('<a class="waves-effect waves-light btn" id="generate-table">Generate Table<a>');
  $('.modal-content').append('<p>Mouse is at coordinates: <span> <table class="bordered highlight centered responsive-table" id="mousetrail"> <thead> <tr> <th>No</th> <th>Name</th> <th>Email</th> <th>Date</th> <th>Duration</th> <th>X</th> <th>Y</th> <th>IP Address</th> <th>Transparency</th> <th>Magnifyer</th> </tr></thead></table></span>.</p>');
});
