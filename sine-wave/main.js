'use strict';

var random = Math.random, floor = Math.floor, pi = Math.PI, sin = Math.sin;

function rgba(r,g,b,a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function randomColor() {
    return rgba(floor(random() * 255), floor(random() * 255), floor(random() * 255), 0.9);
}

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var width = canvas.width = document.documentElement.clientWidth;
var height = canvas.height = document.documentElement.clientHeight;
context.translate(0, height/2);
context.scale(1, -1);
for (var angle = 0; angle < 4 * pi; angle += 0.2) {
  var x = angle * width / (4 * pi);
  var y = sin(angle) * height / 3;
  context.fillStyle = randomColor();
  context.fillRect(x, y, 10, 10);
}




