$(document).ready(function(){
    // When transparency-control slider changes.
    $('#transparency-control').change(function(){
      $('#transparency-control-text').text($('#transparency-control').val()/100);
      $("body *").css("opacity", $(this).val()/100).hover(function() {
        $(this).fadeTo( "fast", 1 );
      }, function() {
        $(this).fadeTo( "fast", $('#transparency-control').val()/100);
      });
    });
    
    // When fontsize-magnifyer slider changes.
    $('#fontsize-magnifyer').change(function(){
      $('#fontsize-magnifyer-text').text('+'+$('#fontsize-magnifyer').val()+'px');
      $("body *").hover(function() {
        $(this).css('font-size', '+='+$('#fontsize-magnifyer').val());
      }, function() {
        $(this).css('font-size', '-='+$('#fontsize-magnifyer').val());
      });
    });
  
    function background_color(){
      if ($("#background-color-checkbox").is(":checked")) {
        $("body *").hover(function() {
          $(this).css('background-color', $('#background-color').val());
        }, function() {
          $(this).css('background-color', 'transparent');
        });
      } else {
        $("body *").hover(function() {
          $(this).css('background-color', 'transparent');
        }, function() {
          $(this).css('background-color', 'transparent');
        });
      }
    }
    // When beckground-color slider changes.
    $('#background-color-checkbox').ready(function(){
      background_color();
    }).click(function(){
      background_color();
    });
  
    function color(){
      if ($("#color-checkbox").is(":checked")) {
        $default =  'black';
        $("body *").hover(function() {
          $(this).css('color', $('#color').val());
        }, function() {
          $(this).css('color', $default);
        });
      } else {
        $("body *").hover(function() {
          $(this).css('color', $default);
        }, function() {
          $(this).css('color', $default);
        });
      }
    }
    // When color slider changes.
    $('#color-checkbox').ready(function(){
      color();
    }).click(function(){
      color();
    });
  
    // When cursor-reminder slider changes.
    $('#cursor-reminder').change(function(){
      $('#cursor-reminder-text').text($('#cursor-reminder').val());
      var timeout = null;
      $(document).mousemove(function(){
        $('html').css('cursor', 'auto');
        clearTimeout(timeout);
        timeout = setTimeout(function(){
          $('html').css('cursor', 'url(look-at-me.webp), auto');
        }, $('#cursor-reminder').val()*1000);
      });
    });
});