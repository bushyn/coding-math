var vector = {
  create: function() {
    return Object.create(this);
  },
  coord: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
  geom: function(length, angle) {
    this.x = length * Math.cos(angle);
    this.y = length * Math.sin(angle);
    return this;
  },
  set angle(angle) {
    this.geom(this.length, angle);
  },
  get angle() {
    return Math.atan2(this.y, this.x);
  },
  set length(length) {
    this.geom(length, this.angle);
  },
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  },
  add: function(other) {
    return vector.create(this.x + other.x, this.y + other.y);
  },
  addTo: function(other) {
    this.x += other.x;
    this.y += other.y;
  },
  subtract: function(other) {
    return vector.create(this.x - other.x, this.y - other.y);
  },
  subtractFrom: function(other) {
    this.x -= other.x;
    thix.y -= other.y;
  },
  multiply: function(scalar) {
    return vector.create(this.x * scalar, this.y * scalar);
  },
  multiplyBy: function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  },
  divide: function(scalar) {
    return vector.create(this.x / scalar, this.y / scalar);
  },
  divideBy: function(scalar) {
    this.x /= scalar;
    this.y /= scalar;
  },
  clone: function() {
    return vector.create().coord(this.x, this.y);
  }
};
