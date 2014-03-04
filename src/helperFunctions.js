var lineUp = function() {
  var dancers = window.dancers;

  for (var i = 0; i < dancers.length; i++) {
    dancers[i].css({
      left: '10px'
    });
  }
};
