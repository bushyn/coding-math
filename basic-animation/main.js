'use strict';

var random = Math.random, floor = Math.floor, pi = Math.PI, sin = Math.sin;

function rgba(r,g,b,a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var width = canvas.width = document.documentElement.clientWidth;
var height = canvas.height = document.documentElement.clientHeight;

var centerY = height / 2;
var centerX = width / 2;
var speed = .03;
var angle = 0;
var secondAngle = 0;


function  render() {
    context.clearRect(0, 0, width, height);

    context.beginPath();
    var radius = 100 + sin(angle) * 50;
    context.arc(centerX, centerY, radius, 0, 2* pi, false);
    context.fillStyle = rgba(36, 200, 236, 1);
    context.fill();

    context.beginPath();
    var y = centerY + sin(secondAngle) * height * .3;
    context.arc(centerX, y, 50, 0, 2* pi, false);
    context.fillStyle = rgba(150, 80, 200, 1);
    context.fill();

    angle += speed;
    secondAngle += 1.5 *speed;
    requestAnimationFrame(render);
}

 requestAnimationFrame(render);
