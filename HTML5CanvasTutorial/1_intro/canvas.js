const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//context - pass in functions and methods used to draw with
let c = canvas.getContext("2d");

// fillStyle -> color that rectangle will be
c.fillStyle = "rgba(255,0 , 0, 0.5)";
// Rectangle with params: (x, y, width, height)
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,255 , 0, 0.5)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0,0 , 255, 0.5)";
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath();
// moveTo(x, y)
c.moveTo(50, 300);
// lineTo(x, y)
c.lineTo(300, 100);
c.lineTo(400, 300);

c.strokeStyle = "#fa34a3";
c.stroke();

//Arc /Circle
// c.beginPath(); // seperates this path/line from previous so they aren't connected
// //arc(x,y,radius, startAngle, endAngle, drawCounterClockwise)
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();


// create multiple circles
for(let i = 0; i< 5; i++){
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;

  // generate random Color
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  c.beginPath()
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = color;
  c.stroke();

}