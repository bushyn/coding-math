'use strict';

var pi = Math.PI,
    sin = Math.sin,
    canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = document.documentElement.clientWidth,
    height = canvas.height = document.documentElement.clientHeight,
    centerY = height / 2,
    centerX = width / 2,
    xRadius = width / 3,
    yRadius = height / 3,
    xAngle = 0,
    yAngle = 0,
    numObjects = 4,
    slice = pi * 2 / numObjects,
    t = 0.008,
    x = 0,
    y = 0;

context.fillStyle = '#2D4762';

function  render() {
    context.clearRect(0, 0, width, height);
    for (var i = 0; i < numObjects; i++) {
        x = centerX + sin(xAngle + i * slice + pi/2) * xRadius;
        y = centerY + sin(yAngle + i * slice) * yRadius;
        context.beginPath();
        context.arc(x, y, 10, 0, 2 * pi, false);
        context.fill();
    }
    xAngle += 3 * t;
    yAngle += 2 * t;
    requestAnimationFrame(render);
}

requestAnimationFrame(render);
