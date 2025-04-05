class Player {
  dampening = 0.1;
  maxSpeed = 4;
  acceleration = {x: 0, y: 0};
  velocity = {x: 0, y: 0};
  position = {x: 0, y: 0};
  width  =0;
  height = 0;
  id = 0;  
  constructor(id, x, y) {
    this.id = id;
    this.position.x = x;
    this.position.y = y;  
    this.width = x * 2;
    this.height = y * 2;
  }
  updateAcceleration(xdiff, ydiff) {
    this.acceleration.x = xdiff;
    this.acceleration.y = ydiff;
  }
  updateVelocity() {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    // Apply damping to velocity
    this.velocity.x *= 1 - this.dampening;
    this.velocity.y *= 1 - this.dampening;
  }
  speed() {
    return Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
  }
  update(xdiff, ydiff) {
    this.updateAcceleration(xdiff, ydiff);
    this.updateVelocity();
    // Limit velocity to max speed vector
    let speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
    if (speed > this.maxSpeed) {
      this.velocity.x = (this.velocity.x / speed) * this.maxSpeed;
      this.velocity.y = (this.velocity.y / speed) * this.maxSpeed;
    }
    // Apply damping to position
    this.position.x += this.velocity.x 
    this.position.y -= this.velocity.y;
    // Keep player within bounds of the canvas
    if (this.position.x < 0) this.position.x = this.width;
    if (this.position.x > this.width) this.position.x = 0;
    if (this.position.y < 0) this.position.y = this.height; 
    if (this.position.y > this.height) this.position.y = 0;
  }
}

export { Player };