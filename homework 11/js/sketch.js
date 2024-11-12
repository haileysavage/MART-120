// Player starting position
var playerX = 50;
var playerY = 50;

// Key codes for movement
var upKey = 87; // W
var downKey = 83; // S
var leftKey = 65; // A
var rightKey = 68; // D

// Random obstacles
var obstacle1 = { x: 100, y: 150, size: 30, speedX: 2, speedY: 3, color: 'red' };
var obstacle2 = { x: 300, y: 400, size: 50, speedX: 3, speedY: 2, color: 'blue' };

// Non-moving obstacle created by mouse click
var mouseObstacle = { x: null, y: null, size: 25, color: 'green' };

// Exit location
var exitX = 450;
var exitY = 550;
var exitSize = 50;

function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(220);

    // Draw exit area
    fill(255, 215, 0);
    rect(exitX, exitY, exitSize, exitSize);
    textSize(16);
    fill(0);
    text("EXIT", exitX + 10, exitY + 30);

    // Draw player
    fill(0, 0, 255);
    circle(playerX, playerY, 20);

    // Move player with keyboard
    movePlayer();

    // Draw and move obstacles
    drawAndMoveObstacle(obstacle1);
    drawAndMoveObstacle(obstacle2);

    // Draw the non-moving obstacle if it exists
    if (mouseObstacle.x !== null && mouseObstacle.y !== null) {
        fill(mouseObstacle.color);
        circle(mouseObstacle.x, mouseObstacle.y, mouseObstacle.size);
    }

    // Check for win condition
    if (playerX > exitX && playerX < exitX + exitSize && playerY > exitY && playerY < exitY + exitSize) {
        fill(0);
        textSize(32);
        text("You Win!", width / 2 - 50, height / 2);
    }
}

// Function to move the player
function movePlayer() {
    if (keyIsDown(upKey)) {
        playerY -= 5;
    } else if (keyIsDown(downKey)) {
        playerY += 5;
    }
    if (keyIsDown(leftKey)) {
        playerX -= 5;
    } else if (keyIsDown(rightKey)) {
        playerX += 5;
    }
}

// Function to draw and move obstacles
function drawAndMoveObstacle(obstacle) {
    fill(obstacle.color);
    circle(obstacle.x, obstacle.y, obstacle.size);

    // Move obstacle
    obstacle.x += obstacle.speedX;
    obstacle.y += obstacle.speedY;

    // Check if the obstacle has gone out of bounds and reset its position
    if (obstacle.x > width || obstacle.x < 0) {
        obstacle.speedX *= -1;
    }
    if (obstacle.y > height || obstacle.y < 0) {
        obstacle.speedY *= -1;
    }
}

// Mouse click to create a non-moving obstacle
function mouseClicked() {
    mouseObstacle.x = mouseX;
    mouseObstacle.y = mouseY;
}
