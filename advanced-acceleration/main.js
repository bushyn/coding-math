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
  ship = particle.create(centerX, centerY, 0, 0),
  thrust = vector.create(0, 0),
  turningLeft = false,
  turningRight = false,
  thrusting = false,
  delta = 0.05,
  angle = 0;


var img = document.createElement('img');
img.src = 'rocket.png';

function render() {
  context.clearRect(0, 0, width, height);
  if (turningLeft) {
    angle -= 0.05;
  }
  if (turningRight) {
    angle += 0.05;
  }
  thrust.angle = angle;
  if (thrusting) {
    thrust.length = 0.05;
  } else {
    thrust.length = 0;
  }
  ship.accelerate(thrust);
  ship.update();
  context.save();
  context.translate(ship.position.x, ship.position.y)
  context.rotate(angle);
  context.drawImage(img, -43 , -21);
  context.restore();
  if (ship.position.x > width) ship.position.x = 0;
  if (ship.position.x < 0) ship.position.x = width;
  if (ship.position.y < 0) ship.position.y = height;
  if (ship.position.y > height) ship.position.y = 0;
  requestAnimationFrame(render);
}

requestAnimationFrame(render);


document.body.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
    case 37: // left
      turningLeft = true;
      break;
    case 38: // up
      thrusting = true;
      break;
    case 39: // right
      turningRight = true;
      break;
  }
});

document.body.addEventListener('keyup', function(e) {
  switch(e.keyCode) {
    case 37: // left
      turningLeft = false;
      break;
    case 38: // up
      thrusting = false;
      break;
    case 39: // right
      turningRight = false;
      break;
  }
});
