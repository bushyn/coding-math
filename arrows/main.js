'use strict';

var canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = document.documentElement.clientWidth,
    height = canvas.height = document.documentElement.clientHeight,
    centerX = width / 2,
    centerY = height / 2,
    amplitudeX = width * .3,
    amplitudeY = height * .3,
    rotation = 0,
    angleX = 0,
    angleY = 0,
    mouseX = 0,
    mouseY = 0,
    numObjects = 3,
    slice = Math.PI * 2 / numObjects,
    t = 0.003,
    x = 0,
    y = 0,
    colors = ['#3A98C8', '#CF5530', '#35BD7F'];

context.lineWidth = 6;
context.lineCap = 'round';


function  render() {
    context.clearRect(0, 0, width, height);
    for (var i = 0; i < numObjects; i++) {
        context.strokeStyle = colors[i] || '#767DBD';
        x = centerX + Math.sin(angleX + i * slice + Math.PI/2) * amplitudeX;
        y = centerY + Math.sin(angleY + i * slice) * amplitudeY;
        rotation = Math.atan2((mouseY - y), (mouseX - x));
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(5, -10);
        context.moveTo(20, 0);
        context.lineTo(5, 10);
        context.stroke();
        context.restore();
    }
    angleX += 1 * t;
    angleY += 3 * t;
    requestAnimationFrame(render);
}

requestAnimationFrame(render);

document.body.addEventListener('mousemove', function(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
});
