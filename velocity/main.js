'use strict';

function rgba(r,g,b,a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function randomColor() {
    var random = Math.random, floor = Math.floor;
    return rgba(floor(random() * 255), floor(random() * 255), floor(random() * 255), 0.9);
}

var canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = document.documentElement.clientWidth,
    height = canvas.height = document.documentElement.clientHeight,
    centerX = width / 2,
    centerY = height / 2,
    particles = [],
    numOfParticles = 300;

while(numOfParticles--) {
    var p = particle.create(centerX, centerY, Math.random() * 1 + 1, Math.random() * Math.PI * 2);
    p.color = randomColor();
    p.size = Math.random()*10 + 5;
    particles[numOfParticles] = p;
}

function render() {
    context.clearRect(0, 0, width, height);
    particles.forEach(function(p, i) {
        context.fillStyle = p.color;
        context.beginPath();
        context.arc(p.position.x, p.position.y, p.size, 0, Math.PI*2 , false);
        context.fill();
        p.update();
        if (p.outside(-p.size, -p.size, width+p.size, height+p.size)) p.comeBack();
    });
    requestAnimationFrame(render);
}

requestAnimationFrame(render);



