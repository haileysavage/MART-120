function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Head
  fill(255, 224, 189); // skin color
  ellipse(200, 200, 150, 180); // head shape
  
   // Eyes
  fill(255); // white color
  ellipse(175, 180, 30, 20); // left eye
  ellipse(225, 180, 30, 20); // right eye
  fill(0, 0, 255); // blue color for pupils
  ellipse(175, 180, 10, 10); // left pupil
  ellipse(225, 180, 10, 10); // right pupil
  
  // Nose
  fill(255, 204, 153); // slightly darker for contrast
  triangle(200, 190, 195, 210, 205, 210); // simple triangle nose
  
  // Mouth (smiling)
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(200, 240, 40, 20, 0, PI); // smiling mouth arc
  
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
  
  // Hair
  fill(255, 215, 0); // blonde hair
  rect(140, 110, 120, 30); // top hair
  rect(130, 140, 20, 200); // left side hair
  rect(250, 140, 20, 200); // right side hair
  
  // Title
  fill(0);
  textSize(16);
  text("Self-Portrait of Hailey", 120, 50); // title
  
  // Signature
  textSize(12);
  text("Hailey Savage", 300, 380); // signature in bottom corner
}
