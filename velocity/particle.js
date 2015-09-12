var particle = {
  create: function(x, y, speed, direction) {
    var obj = Object.create(this);
    obj.initialX = x;
    obj.initialY = y;
    obj.position = vector.create().coord(x, y);
    obj.velocity = vector.create().geom(speed, direction);
    return obj;
  },
  update: function() {
    this.position.addTo(this.velocity);
  },
  outside: function(minX, minY, maxX, maxY) {
    return this.position.x < minX ||
           this.position.y < minY ||
           this.position.x > maxX ||
           this.position.y > maxY;
  },
  comeBack: function() {
    this.position.coord(this.initialX, this.initialY);
  }
}
