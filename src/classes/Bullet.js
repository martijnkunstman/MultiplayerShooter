class Bullet {
  constructor(x, y, speed, angle) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.remove = false; // Flag to mark the bullet for removal
  }

  move() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
  }
}
export { Bullet };