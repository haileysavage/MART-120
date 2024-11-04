let x1 = 175; // Left eye x position
let x2 = 225; // Right eye x position
let y1 = 240; // Mouth y position
let y2 = 140; // Left side hair y position
let diagX = 250; // Diagonal hair x position
let diagY = 140; // Diagonal hair y position
let titleSize = 16; // Initial title size
let titleGrowing = true; // Controls title size growth

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);
  
  // Head
  fill(255, 224, 189); // skin color
  ellipse(200, 200, 150, 180); // head shape
  
  // Eyes (moving along x-axis)
  fill(255); // white color
  ellipse(x1, 180, 30, 20); // left eye
  ellipse(x2, 180, 30, 20); // right eye
  fill(0, 0, 255); // blue color for pupils
  ellipse(x1, 180, 10, 10); // left pupil
  ellipse(x2, 180, 10, 10); // right pupil
  
  // Nose
  fill(255, 204, 153); // slightly darker for contrast
  triangle(200, 190, 195, 210, 205, 210); // simple triangle nose
  
  // Mouth (moving along y-axis, smiling)
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(200, y1, 40, 20, 0, PI); // smiling mouth arc
  
  // Eyebrows (arched and brown)
  stroke(101, 67, 33); // brown color
  strokeWeight(3);
  noFill();
  arc(175, 165, 40, 15, PI, TWO_PI); // left eyebrow with arch
  arc(225, 165, 40, 15, PI, TWO_PI); // right eyebrow with arch
  
  // Ears
  fill(255, 224, 189);
  ellipse(135, 200, 20, 30); // left ear
  ellipse(265, 200, 20, 30); // right ear
  
  // Hair (one side moving along y-axis, one rectangle moving diagonally on the right)
  fill(255, 215, 0); // blonde hair
  rect(140, 110, 120, 30); // top hair
  rect(130, y2, 20, 100); // left side hair
  rect(diagX, diagY, 20, 100); // right side hair
  
  // Title (grows and shrinks)
  fill(0);
  textSize(titleSize);
  text("Self-Portrait of Hailey", 120, 50); // title
  
  // Signature
  textSize(12);
  text("Hailey Savage", 300, 380); // signature in bottom corner
  
  // X-axis movement for eyes
  x1 += random(-1, 1); // left eye moving randomly on x-axis
  x2 += random(-1, 1); // right eye moving randomly on x-axis
  
  // Y-axis movement for mouth and left side hair
  y1 += random(-0.5, 0.5); // mouth moving randomly on y-axis
  y2 += random(-1, 1); // left side hair moving randomly on y-axis
  
  // Diagonal movement for right side hair
  diagX += random(-0.5, 0.5); // random movement on x-axis
  diagY += random(-0.5, 0.5); // random movement on y-axis
  
  // Title size animation
  if (titleGrowing) {
    titleSize += 0.5;
    if (titleSize > 24) {
      titleGrowing = false;
    }
  } else {
    titleSize -= 0.5;
    if (titleSize < 16) {
      titleGrowing = true;
    }
  }
}
