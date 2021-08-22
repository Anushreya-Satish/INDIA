const accessCode1 = "NEW DELHI";
const accessCode2 = "HINDUSTAN";
const accessCode3 = "BANGALORE";
const accessCode4 = "28";
const accessCode5 = "8";
const accessCode6 = "JAIPUR";
const accessCode7 = "VANDE MATARAM";

function clues() {
  fill("red");
  textSize(20);
  text("W N E  L E D I H ", 30, 70);
  fill("black");
  text("Question 1: What is the capital of India ?", 30,100);

  // add code for displaying rest of the names and the hints.
  fill("red");
  textSize(20);
  text("H D A I N S U N T", 30, 220);
  fill("black");
  text("Question 2: What is the other name of India according to the hint ?", 30, 250);

  fill("red");
  textSize(20);
  text("O R E A N A B G L", 30, 370);
  fill("black");
  text("Question 3: Which city is the Silicon Valley of India ?", 30, 400);

  textSize(20);
  fill("black");
  text("Question 4: How many states are there in India ?", 30, 530);

  textSize(20);
  fill("black");
  text("Question 5: How many union territories are there in India ?", 30, 630);

  fill("red");
  textSize(20);
  text("A I J U P R", 500, 70);
  fill("black");
  text("Question 6: Which city is the Pink City of India ?", 500, 100);

  fill("red");
  textSize(20);
  text("E N D A V  M T R A A M A", 700, 370);
  fill("black");
  text("Question 7: What is the name of our National song ?", 700, 400);
}