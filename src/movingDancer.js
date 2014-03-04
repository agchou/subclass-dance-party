var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="movingDancer"><img class="cat" src="img/nyan.gif"></img></span>');
  this.setPosition(top, left);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
