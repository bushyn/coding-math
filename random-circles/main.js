'use strict';

var random = Math.random, floor = Math.floor;

function rgba(r,g,b,a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function randomColor() {
    return rgba(floor(random() * 255), floor(random() * 255), floor(random() * 255), 0.4);
}

document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    var width = canvas.width = document.documentElement.clientWidth;
    var height = canvas.height = document.documentElement.clientHeight;
    for (var i = 0; i < width/50; i++) {
      context.beginPath();
      var radius =  random() * 100 + 20;
      var minOffset = radius;
      var maxOffset = 2 * minOffset;
      var x = random() * (width - maxOffset) + minOffset;
      var y = random() * (height - maxOffset) + minOffset;
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = randomColor();
      context.fill();
    }
});
