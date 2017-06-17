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

     // Modals   
    $('.launch-modal').on('click', function(e){
        e.preventDefault();
        $( '#' + $(this).data('modal-id') ).modal();
    });  

    // Stops YouTube video when modal window is closed
    $('.close-youtube').on('click', function(){
        var video = $('.you-tube').attr('src');
          $('.you-tube').attr('src','');
          $('.you-tube').attr('src', video);
        }
      )

    // Stops audio when modal window is closed
    $('.audio-off').on('click', function(){
        var audio = $('.audio-clips').attr('src');
          $('.audio-clips').attr('src','');
          $('.audio-clips').attr('src', audio);
        }
      )


    // Main Carousel
    $('.carousel').carousel({
      interval: 5000 //changes the speed
    });
  
});