$(document).ready(function(){
  window.dancers = [];

  $(".lineUpButton").on("click", lineUp);

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $(".addMovingDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("adancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      2000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $(document).bind('mousemove', function(e){
    window.pageX = e.pageX;
    window.pageY = e.pageY;
  });

  for (var i = 0; i < 1; ++i) {
      $('.addMovingDancerButton').click();
  }

  $('.cat').on('click', function() {
    $(this).remove()
    alert('MEOW');
  });

  var width = $('body').width()-250;
  var height = $('body').height()-150;

  $('.movingDancer').each(function move() {
    var top = (Math.random() * height);
    var left = (Math.random() * width);
    var time = Math.random() * (800 - 400) + 400;

    $(this).animate({
        left: left,
        top: top
    }, time, move);
  });
});

