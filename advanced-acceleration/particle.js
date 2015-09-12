var particle = {
  create: function(x, y, speed, direction, gravity) {
    var obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create().geom(speed, direction);
    obj.initialPosition = obj.position.clone();
    obj.initialVelocity = obj.velocity.clone();
    obj.gravity = vector.create(0, gravity || 0);
    return obj;
  },
  update: function() {
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  },
  outside: function(minX, minY, maxX, maxY) {
    return this.position.x < minX ||
           this.position.y < minY ||
           this.position.x > maxX ||
           this.position.y > maxY;
  },
  reset: function() {
    this.position = this.initialPosition.clone();
    this.velocity = this.initialVelocity.clone();
  },
  accelerate: function(acceleration) {
    this.velocity.addTo(acceleration);
  },
}
