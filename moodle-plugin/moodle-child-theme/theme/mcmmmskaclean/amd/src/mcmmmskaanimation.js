define(['jquery', 'jqueryui'], function($, jqui) {
 
    return {
        init: function() {

		// All non moodle codes starts here
$(document).ready(function(){
    // When transparency-control slider changes.
    
    function transparency_control(){
      $('#transparency-control-text').text($('#transparency-control').val()/100);
      $("body *").css("opacity", $('#transparency-control').val()/100).hover(function() {
        $(this).fadeTo( "fast", 1 );
      }, function() {
        $(this).fadeTo( "fast", $('#transparency-control').val()/100);
      });
    }
    $('#transparency-control').change(function(){
        transparency_control();
    });
    $(document).ready(function(){
    	transparency_control();
    });
    
    // When fontsize-magnifier slider changes.
    function fontsize_magnifier(){
      $('#fontsize-magnifier-text').text('Increase Element Font Size Smaller Than '+$('#fontsize-magnifier').val()+'px');
      $("*").not('[role="dialog"]').hover(function() {
        $(this).parents().css('font-size', '');
	if(parseInt($(this).css('font-size')) <= $('#fontsize-magnifier').val()){
        	$(this).css('font-size', $('#fontsize-magnifier').val()+'px');
	}
      }, function() {
        $(this).css('font-size', '');
      });
    }
    $('#fontsize-magnifier').change(function(){
	fontsize_magnifier();
    });
    $(document).ready(function(){
    	fontsize_magnifier();
    });
  
    function background_color(){
      if ($("#background-color-checkbox").is(":checked")) {
        $("*").hover(function() {
		  $(this).parents().css('background-color', '');
          $(this).css('background-color', $('#background-color').val());
        }, function() {
          $(this).css('background-color', '');
        });
      } else {
        $("*").hover(function() {
          $(this).css('background-color', '');
        }, function() {
          $(this).css('background-color', '');
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
        $("*").hover(function() {
		  $(this).parents().css('color', '');
          $(this).css('color', $('#color').val());
        }, function() {
          $(this).css('color', '');
        });
      } else {
        $("body *").hover(function() {
          $(this).css('color', '');
        }, function() {
          $(this).css('color', '');
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
	function cursorreminder(){
      $('#cursor-reminder-text').text($('#cursor-reminder').val() + ' seconds');
      var timeout = null;
      $(document).mousemove(function(){
        $('html').css('cursor', 'auto').css('filter', 'blur(0px)');
        clearTimeout(timeout);
        if($('#cursor-reminder').val() > 0){
          timeout = setTimeout(function(){
            $('html').css('cursor', 'url(data:image/png;base64,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), auto').css('filter', 'blur(5px)');
          }, $('#cursor-reminder').val()*1000);
        }
      });
	}
	$('#cursor-reminder').ready(function(){
		cursorreminder();
	}).change(function(){
		cursorreminder();
	});
	
	// Restricted Focus Viewer Imitation
	function rfv(){
	  $('body').prepend('<span class="dot"></span>');
    if ($("#restricted-focus-viewer-imitation-checkbox").is(":checked")) {
			$('body > *').not('.dot, [role="dialog"]').css('filter', 'blur(2px)');
			html2canvas(document.body).then(function(canvas) {
    		var base64image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        $(".dot").css('display', 'block').css('z-index', '1').css('background-image', 'url('+base64image+')');
			});
      $(window).mousemove(function(event){
		    $('.dot').css('left', (event.pageX - 75) + 'px').css('top', (event.pageY - 75) + 'px').css('background-position', '-' + (event.pageX -75) + 'px ' + '-' + (event.pageY -75) + 'px');
	   	})
    } else {
			$('body > *').css('filter', '');
      $(".dot").css('display', 'none');
    }
	}
    $('#restricted-focus-viewer-imitation-checkbox').ready(function(){
      rfv();
    }).click(function(){
      rfv();
    });
    
    // Bubble View Imitation

	function bubbleview(){
    if ($("#bubble-view-imitation-checkbox").is(":checked")) {
      	$('body > *').not('.dot, [role="dialog"]').css('filter', 'blur(2px)');
        html2canvas(document.body).then(function(canvas) {
        var base64image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      $(window).click(function(event){

					$(".bubble").css('display', 'block');
		
        $('body').prepend('<span class="bubble" style="z-index: 1; background-image: url('+base64image+'); left: '+(event.pageX - 75)+'px; top: '+(event.pageY - 75)+'px; background-position: -' + (event.pageX -75) + 'px -' + (event.pageY -75) + 'px"></span>');
	    })
        });
    } else {
			$('body > *').css('filter', '');
      $(".bubble").css('display', 'none');
    }
	}
    $('#bubble-view-imitation-checkbox').ready(function(){
      bubbleview();
    }).click(function(){
      bubbleview();
    });
	
	// Finger Tracing Learning System Imitation
	function ftls(){
		if ($("#finger-tracing-learning-system-imitation-checkbox").is(":checked")) {
            $('body > *').not('[role="dialog"]').each(function (index) {
                var characters = $(this).html().split("");
 								var proceed = true;
								var string = '';
                $.each(characters, function (i, el) {
                	if(el == "<"){proceed = false}
    							if(proceed){
    								string += '<span>' + el + '</span>';
    							} else {
    								string += el;
    							}
    							if(el == ">"){proceed = true}
                });
				$(this).html(string);
						})
			$("span").css("opacity", 0.25).mouseenter(function() {
				$(this).fadeTo( "fast", 1 );
			});
		} else {
		    $("span").css("opacity", 1);
		}
	}
	$('#finger-tracing-learning-system-imitation-checkbox').ready(function(){
      ftls();
    }).click(function(){
      ftls();
    });
});
		// All non moodle codes ends here
		
        }
    };
});

