function setup() {
  createCanvas(400, 400);
   noLoop();
}

function draw() {
  var xloc = randomGaussian();

  var sd = 60;                // Define a standard deviation
  var mean = width/2;         // Define a mean value (middle of the screen along the x-axis)
  xloc = ( xloc * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean

  drawEyes(xloc, height/2);
  drawEyebrows(xloc, height/2 - 30);
  drawMouth(xloc, height/2 +ke 30);
}

function drawEyes(posX, posY) {
  var xloc1 = randomGaussian();
  var xloc2 = randomGaussian();

  // Determine size and shape of ellipse (eye)
  var sd = 8;                // Define a standard deviation
  var mean = 20;         // Define a mean value (middle of the screen along the x-axis)
  xloc1 = ( xloc1 * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean
   xloc2 = ( xloc2 * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean
  
  
  fill(0);
  noStroke();
  ellipse(posX - xloc1*1.5, posY, xloc1, xloc2);
  ellipse(posX + xloc1*1.5, posY, xloc1, xloc2);
}

function drawEyebrows(posX, posY) {
  var xloc1 = randomGaussian();
  var xloc2 = randomGaussian();

  // Determine size and shape of eyebrow
  var sd = 12;                // Define a standard deviation
  var mean = 0;         // Define a mean value (middle of the screen along the x-axis)
  xloc1 = ( xloc1 * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean
   xloc2 = ( xloc2 * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean
  
  stroke(0);
  line(posX - xloc1*1.5, posY + xloc2, posX - xloc1*3, posY - xloc2);
  line(posX + xloc1*1.5, posY + xloc2, posX + xloc1*3, posY - xloc2);
}

function drawMouth(posX, posY){
var xloc1 = randomGaussian();
  var xloc2 = randomGaussian();
  
  var sd = 4;                // Define a standard deviation
  var mean = 5;         // Define a mean value (middle of the screen along the x-axis)
  xloc1 = (( xloc1 * sd ) + mean);  // Scale the gaussian random number by standard deviation and mean
   xloc2 = (( xloc2 * sd ) + mean) * 5;  // Scale the gaussian random number by standard deviation and mean
  
  stroke(0);
curve(posX - xloc1, posY, posX + xloc2, posY + xloc2, posX + xloc1, posY + xloc2, posX + xloc2, posY)
}