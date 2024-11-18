// Variables
let player;
let obstacles = [];
let exitZone;

// Setup function
function setup() {
  createCanvas(600, 400);
  createPlayer();
  createObstacles();
  createExit();
}

// Draw function
function draw() {
  background(220);
  drawBorders();
  movePlayer();
  displayPlayer();
  displayObstacles();
  moveObstacles();
  displayExit();
}

// Function to create a player
function createPlayer() {
  player = {
    x: width / 2,
    y: height / 2,
    size: 20,
    speed: 3,
    color: 'blue',
  };
}

// Function to display the player
function displayPlayer() {
  fill(player.color);
  ellipse(player.x, player.y, player.size);
}

// Function to move the player using keyboard
function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.speed;
}

// Function to create obstacles
function createObstacles() {
  for (let i = 0; i < 5; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
      speedX: random(-2, 2),
      speedY: random(-2, 2),
    });
  }
}

// Function to display obstacles
function displayObstacles() {
  for (let obstacle of obstacles) {
    fill(obstacle.color);
    rect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
  }
}

// Function to move obstacles randomly and make them wrap around
function moveObstacles() {
  for (let obstacle of obstacles) {
    obstacle.x += obstacle.speedX;
    obstacle.y += obstacle.speedY;

    // Wrap around screen
    if (obstacle.x > width) obstacle.x = 0;
    if (obstacle.x < 0) obstacle.x = width;
    if (obstacle.y > height) obstacle.y = 0;
    if (obstacle.y < 0) obstacle.y = height;
  }
}

// Function to draw borders around the screen
function drawBorders() {
  stroke(0);
  noFill();
  rect(0, 0, width, height);
}

// Function to create the exit zone
function createExit() {
  exitZone = {
    x: random(20, width - 40),
    y: random(20, height - 40),
    size: 50,
    color: 'green',
  };
}

// Function to display the exit zone
function displayExit() {
  fill(exitZone.color);
  rect(exitZone.x, exitZone.y, exitZone.size, exitZone.size);

  // Check if player reaches the exit (ignoring collisions)
  if (
    player.x > exitZone.x &&
    player.x < exitZone.x + exitZone.size &&
    player.y > exitZone.y &&
    player.y < exitZone.y + exitZone.size
  ) {
    displayWinMessage();
  }
}

// Function to display the "You win" message
function displayWinMessage() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("You win!", width / 2, height / 2);
  noLoop(); // Stop the draw loop
}

// Function to draw an object on the screen when the mouse is pressed
function mousePressed() {
  fill('purple');
  ellipse(mouseX, mouseY, 30);
}
