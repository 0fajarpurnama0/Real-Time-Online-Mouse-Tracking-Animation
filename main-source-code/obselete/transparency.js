$(document).ready(function(){
    // When transparency-control slider changes.
    $('#transparency-control').change(function(){
      $('#transparency-control-text').text($('#transparency-control').val()/100);
      $("body *").css("opacity", $(this).val()/100).mouseenter(function() {
        $(this).fadeTo( "fast", 1 );
      }).mouseleave(function(){
        $(this).fadeTo( "fast", $('#transparency-control').val()/100);
      });
    });
    
    // When fontsize-magnifyer slider changes.
    $('#fontsize-magnifyer').change(function(){
      $('#fontsize-magnifyer-text').text('+'+$('#fontsize-magnifyer').val()+'px');
      $("body *").mouseenter(function() {
        $(this).css('font-size', '+='+$('#fontsize-magnifyer').val());
      }).mouseleave(function(){
        $(this).css('font-size', '-='+$('#fontsize-magnifyer').val());
      });
    });
});