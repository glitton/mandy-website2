"use strict"

$(document).ready(function(){
    // Back to top js
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

    // Stops YouTube video when modal window is closed
    $('.close-youtube').on('click', function(){
        var video = $('.you-tube').attr('src');
          $('.you-tube').attr('src','');
          $('.you-tube').attr('src', video);
        }
      )
  });    
  

});