/* global $ */

var GAME = false;
var INSTRUCTED = false;

$(document).ready(function(){
  $('.startButton').on('click', function() {
    // Screen setup
    $('body').css({
      'background-image': 'url("img/bg1.gif")',
      'background-size': '20%, 20%'
    });

    if (!MUSIC) {
      MUSIC = true;
      $('body').append('<embed name="lostmojo" src="assets/music.mp3" loop="false" hidden="true" autostart="true">');
    }

    // Game start
    // Display directions
    if (!INSTRUCTED) {
      INSTRUCTED = true;
      $('body').append('' +
        '<div class="directions">' +
          'Catch all the cats!' +
        '</div>'
      );
    }
    // Create target dancer
    setTimeout(function() {
      $('.directions').hide();
      for (var i = 0; i < 3; i++) {
        $('.addMovingDancerButton').click();
      }
    }, 4500);

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

    // Winning condition
    $('.cat').on('click', function() {
      $(this).remove();
      alert('MEOW');
    });
  });
});
