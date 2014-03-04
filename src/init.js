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

});

