import io from "socket.io-client";
import nipplejs from 'nipplejs';

var options = {
  zone: document.getElementById('zone_joystick'),
  mode: 'static',
  position: { left: '50%', bottom: '50%' },
  color: 'blue',
  size: 200,
  restOpacity: 0.5,
  dynamic: true,
  catchDistance: 50,
  fadeTime: 100,
  fadeDuration: 200,
};
var manager = nipplejs.create(options);
//create canvas
let mycanvas = document.createElement("canvas");
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;
document.body.appendChild(mycanvas);
mycanvas.style.position = "absolute";
mycanvas.style.top = "0px";
mycanvas.style.left = "0px";
mycanvas.style.zIndex = "1";
mycanvas.style.pointerEvents = "none"; // Disable pointer events on the canvas
mycanvas.id = "mycanvas";
var ctx = mycanvas.getContext("2d");

let xdiff = 0;
let ydiff = 0;

manager.on('move', function (evt, data) {
  xdiff = data.vector.x;
  ydiff = data.vector.y;
});
manager.on('end', function () {
  xdiff = 0;
  ydiff = 0;
});

class Player {
  dampening = 0.07;
  maxSpeed = 4;
  acceleration = {x: 0, y: 0};
  velocity = {x: 0, y: 0};
  position = {x: 0, y: 0};
  id = 0;  
  constructor(id, x, y) {
    this.id = id;
    this.position.x = x;
    this.position.y = y;    
  }
  updateAcceleration() {
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
  update() {
    this.updateAcceleration();
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
  }
}

let player = new Player(1, mycanvas.width/2, mycanvas.height/2);
let nippleXY = document.getElementById("nippleXY");
nippleXY.style.position = "absolute";
nippleXY.style.top = "0px";
nippleXY.style.left = "0px";
nippleXY.style.zIndex = "1";
nippleXY.style.pointerEvents = "none"; // Disable pointer events on the canvas


//game loop
function gameLoop() { 
  nippleXY.innerHTML = "x: " + xdiff + " y: " + ydiff; 
  player.update();
  ctx.clearRect(0, 0, mycanvas.width, mycanvas.height); // Clear the canvas
  ctx.fillStyle = "black";
  ctx.fillRect(player.position.x, player.position.y, 10, 10); // Draw a rectangle at the new position
  requestAnimationFrame(gameLoop);
}
gameLoop(); // Start the game loop




// var socket = io();
// //socket connects
// var canvas = document.getElementsByClassName("whiteboard")[0];
// var colors = document.getElementsByClassName("color");
// var context = canvas.getContext("2d");

// var current = {
//   color: "black",
// };
// var drawing = false;

// canvas.addEventListener("mousedown", onMouseDown, false);
// canvas.addEventListener("mouseup", onMouseUp, false);
// canvas.addEventListener("mouseout", onMouseUp, false);
// canvas.addEventListener("mousemove", throttle(onMouseMove, 10), false);

// //Touch support for mobile devices
// canvas.addEventListener("touchstart", onMouseDown, false);
// canvas.addEventListener("touchend", onMouseUp, false);
// canvas.addEventListener("touchcancel", onMouseUp, false);
// canvas.addEventListener("touchmove", throttle(onMouseMove, 10), false);

// for (var i = 0; i < colors.length; i++) {
//   colors[i].addEventListener("click", onColorUpdate, false);
// }

// socket.on("drawing", onDrawingEvent);

// window.addEventListener("resize", onResize, false);
// onResize();

// function drawLine(x0, y0, x1, y1, color, emit) {
//   context.beginPath();
//   context.moveTo(x0, y0);
//   context.lineTo(x1, y1);
//   context.strokeStyle = color;
//   context.lineWidth = 2;
//   context.stroke();
//   context.closePath();

//   if (!emit) {
//     return;
//   }
//   var w = canvas.width;
//   var h = canvas.height;

//   socket.emit("drawing", {
//     x0: x0 / w,
//     y0: y0 / h,
//     x1: x1 / w,
//     y1: y1 / h,
//     color: color,
//   });
// }

// function onMouseDown(e) {
//   drawing = true;
//   current.x = e.clientX || e.touches[0].clientX;
//   current.y = e.clientY || e.touches[0].clientY;
// }

// function onMouseUp(e) {
//   if (!drawing) {
//     return;
//   }
//   drawing = false;
//   drawLine(
//     current.x,
//     current.y,
//     e.clientX || e.touches[0].clientX,
//     e.clientY || e.touches[0].clientY,
//     current.color,
//     true
//   );
// }

// function onMouseMove(e) {
//   if (!drawing) {
//     return;
//   }
//   drawLine(
//     current.x,
//     current.y,
//     e.clientX || e.touches[0].clientX,
//     e.clientY || e.touches[0].clientY,
//     current.color,
//     true
//   );
//   current.x = e.clientX || e.touches[0].clientX;
//   current.y = e.clientY || e.touches[0].clientY;
// }

// function onColorUpdate(e) {
//   current.color = e.target.className.split(" ")[1];
// }

// // limit the number of events per second
// function throttle(callback, delay) {
//   var previousCall = new Date().getTime();
//   return function () {
//     var time = new Date().getTime();

//     if (time - previousCall >= delay) {
//       previousCall = time;
//       callback.apply(null, arguments);
//     }
//   };
// }

// function onDrawingEvent(data) {
//   var w = canvas.width;
//   var h = canvas.height;
//   drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
// }

// // make the canvas fill its parent
// function onResize() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }

// //---------------------------

// var grid = document.getElementsByClassName("grid")[0];

// fetch("/imagedata")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     //console.log(data);
//     for (let i = 0; i < 100; i++) {
//       var cell = document.createElement("div");
//       cell.className = "gridItem";
//       cell.id = "cell" + i;
//       if (data[i] == 1) {
//         cell.style.backgroundColor = "black";
//       } else {
//         cell.style.backgroundColor = "white";
//       }
//       cell.addEventListener("click", function (e) {
//         if (e.target.style.backgroundColor === "black") {
//           e.target.style.backgroundColor = "white";
//           socket.emit("gridUpdate", { cell: i, color: 0 });
//         } else {
//           e.target.style.backgroundColor = "black";
//           socket.emit("gridUpdate", { cell: i, color: 1 });
//         }
//       });
//       grid.appendChild(cell);
//     }
//   });

// socket.on("gridUpdate", gridUpdate);

// function gridUpdate(data) {
//   //console.log("gridUpdate");
//   //console.log(data.imageData);
//   for (let i = 0; i < 100; i++) {
//     if (data.imageData[i] == 1) {
//       document.getElementById("cell" + i).style.backgroundColor = "black";
//     } else {
//       document.getElementById("cell" + i).style.backgroundColor = "white";
//     }
//   }
// }