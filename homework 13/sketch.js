let obstacles = [];
let player;
let exit;
let newObstacles = [];

function setup() {
  createCanvas(600, 400);
  
  // Create player
  player = createVector(50, height / 2);

  // Create exit
  exit = { x: width - 50, y: height / 2, size: 40 };

  // Initialize random obstacles
  for (let i = 0; i < 5; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
      xSpeed: random(-2, 2),
      ySpeed: random(-2, 2)
    });
  }
}

function draw() {
  background(30);
  
  // Draw player
  fill(0, 255, 0);
  ellipse(player.x, player.y, 20);

  // Draw exit
  fill(255, 215, 0);
  rect(exit.x, exit.y, exit.size, exit.size);
  textSize(14);
  fill(0);
  text("EXIT", exit.x + 4, exit.y + 25);

  // Draw and update obstacles
  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
    obs.x += obs.xSpeed;
    obs.y += obs.ySpeed;

    // Wrap around screen
    if (obs.x < 0) obs.x = width;
    if (obs.x > width) obs.x = 0;
    if (obs.y < 0) obs.y = height;
    if (obs.y > height) obs.y = 0;
  }

  // Draw non-moving obstacles
  for (let obs of newObstacles) {
    fill(150);
    rect(obs.x, obs.y, obs.size, obs.size);
  }

  // Check if player reached the exit
  if (
    player.x > exit.x &&
    player.x < exit.x + exit.size &&
    player.y > exit.y &&
    player.y < exit.y + exit.size
  ) {
    textSize(32);
    fill(255);
    text("You Win!", width / 2 - 70, height / 2);
    noLoop();
  }
}

function mousePressed() {
  newObstacles.push({
    x: mouseX,
    y: mouseY,
    size: random(30, 50)
  });
}

function keyPressed() {
  // Move player with arrow keys
  if (keyCode === UP_ARROW) player.y -= 10;
  if (keyCode === DOWN_ARROW) player.y += 10;
  if (keyCode === LEFT_ARROW) player.x -= 10;
  if (keyCode === RIGHT_ARROW) player.x += 10;
}
