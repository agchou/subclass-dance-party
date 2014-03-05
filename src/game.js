/* global $ */

var CATCOUNT = 3;
var MUSIC = false;

$(document).ready(function(){
  $('.startButton').on('click', function() {
    // Screen setup
    $('body').css({
      'background-image': 'url("img/bg1.gif")',
      'background-size': '20%, 20%'
    });

    $('.startButton').toggle();

    if (MUSIC) {
      $('.music').remove();
    }

    $('body').append('<embed name="music" class="music" src="assets/music.mp3" loop="false" hidden="true" autostart="true">');
    MUSIC = true;

    // Game start
    // Display directions
    $('body').append('' +
      '<div class="directions">' +
        '<div>Catch all the cats!</div>' +
      '</div>'
      );
    // Create target dancer
    setTimeout(function() {
      $('.directions').hide();
      for (var i = 0; i < CATCOUNT; i++) {
        $('.addMovingDancerButton').click();
      }
      // Make cat run from mouse
      $(function($) {
        $('.movingDancer').mouseover(function() {
          var dWidth = $('body').width() - 250, // 100 = image width
              dHeight = $('body').height() - 100, // 100 = image height
              nextX = Math.floor(Math.random() * dWidth),
              nextY = Math.floor(Math.random() * dHeight);
          $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
        });
      });

      // Run on
      $('.cat').on('click', function() {
        $(this).remove();
        if (--CATCOUNT === 0) {
          alert('YOU WIN!');
          CATCOUNT = 3;
          $('.startButton').toggle();
        }
      });
    }, 4100);
  });
});
