// Catch the Falling Stars Game
let stars = [];
let basketX, basketY, basketWidth;
let score = 0;
let missedYellowStars = 0;
let maxMissedYellowStars = 3;
let gameOver = false;

function setup() {
  createCanvas(400, 600);
  basketX = width / 2;
  basketY = height - 50;
  basketWidth = 100;
  // Initialize a limited number of stars
  for (let i = 0; i < 3; i++) {
    stars.push(createStar());
  }
}

function draw() {
  background(30, 30, 80);

  if (!gameOver) {
    // Draw and move each star
    for (let star of stars) {
      fill(star.color);
      ellipse(star.x, star.y, 20);
      star.y += 3; 

      // Check if the star is caught
      if (
        star.y >= basketY &&
        star.x >= basketX - basketWidth / 2 &&
        star.x <= basketX + basketWidth / 2
      ) {
        if (star.color[0] === 255 && star.color[1] === 255 && star.color[2] === 0) {
          score++;
        }
        resetStar(star);
      }

      // Check if the star hits the bottom
      if (star.y > height) {
        if (star.color[0] === 255 && star.color[1] === 255 && star.color[2] === 0) {
          missedYellowStars++;
          if (missedYellowStars >= maxMissedYellowStars) {
            gameOver = true;
          }
        }
        resetStar(star);
      }
    }

    // Draw the basket
    fill(200, 50, 50);
    rect(basketX - basketWidth / 2, basketY, basketWidth, 10);

    // Move the basket with the mouse
    basketX = mouseX;

    // Display the score and missed yellow stars
    fill(255);
    textSize(20);
    text(`Score: ${score}`, 10, 30);
    text(`Missed Yellow: ${missedYellowStars}/${maxMissedYellowStars}`, 10, 60);
  } else {
    // Game Over screen
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2 - 20);
    textSize(20);
    text(`Final Score: ${score}`, width / 2, height / 2 + 20);
    text("Press R to Restart", width / 2, height / 2 + 50);
  }
}

function createStar() {
  return {
    x: random(width),
    y: random(-200, 0), // Start above the canvas
    color: random(1) < 0.5 ? [255, 255, 0] : [random(255), random(255), random(255)],
  };
}

function resetStar(star) {
  star.x = random(width);
  star.y = random(-200, 0);
  star.color = random(1) < 0.5 ? [255, 255, 0] : [random(255), random(255), random(255)];
}

function keyPressed() {
  if (gameOver && key === 'r') {
    gameOver = false;
    score = 0;
    missedYellowStars = 0;
    stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(createStar());
    }
  }
}



