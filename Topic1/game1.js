let shape1;
let shape2;
let planets = [];
let pOrder = [0,1,2,3,4,5,6,7];
let round = -1;
let timerVal = 0;
let score = 0;
let capture;
let loaded = false;
let predictions = [];
let palm = [400,400];
let selector = [400,400];
let grabbing = false; 
let board;
let tut;
let wasgrabbing = false;
let traillist = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
let grabtime = 0;
let hints = [
  [
  "This planet is the closest to the Sun.",
  "This planet is as wide as the Atlantic Ocean on Earth.",
  "This planet has no atmosphere.",
  "This planet orbits the Sun the fastest.",
  "This planet has no water.",
  "This planet has the most craters of all planets.",
  "This planet is the smallest planet (excluding dwarf planets)."
],
[
  "This planet is the hottest planet.",
  "This planet is the brightest in the night sky.",
  "This planet is similar in size and material to Earth.",
  "This planet has yellow clouds of sulfur and sulfuric acid.",
  "This planet's year is shorter than its day.",
  "This planet rotates the wrong way!",
  "This planet was named after the Roman godess of beauty."
],
[
  "This planet has life.",
  "This planet is third closest to the Sun.",
  "This planet has a year of 365 days.",
  "This planet has an atmosphere of mostly nitrogen.",
  "This planet has one moon of considerable size.",
  "This planet has water.",
  "This planet is the 5th largest planet."
],
[
  "This planet has 2 moons.",
  "This planet may be suitable for human life.",
  "This planet has a volcano 3 times the size of Mount Everest on Earth.",
  "This planet has huge dust storms.",
  "This planet appears red, due to Iron Oxide on its surface.",
  "This planet has 2 rovers operating on its surface.",
  "This planet has water in ice form."
],
[
  "This planet is the largest of all.",
  "This planet has a storm called the Great Red Spot",
  "This planet has many of the largest moons in the solar system.",
  "This planet is a gas giant",
  "This planet has no solid surface",
  "This planet is stripy orange in appearance",
  "This planet spins faster than all others."
],
[
  "This planet is the furthest we can see without a telescope.",
  "This planet is known for its rings.",
  "This planet would float if placed in water!",
  "This planet is a gas giant.",
  "This planet is the second largest.",
  "This planet has no solid surface.",
  "This planet has 53 moons"
],
[
  "This planet is flipped on its side!",
  "This planet is the second furthest planet from the sun.",
  "This planet orbits the sun in 84 years.",
  "This planet is a gas giant.",
  "This planet's seasons last 21 years each.",
  "This planet has a thin ring.",
  "This planet appears blue."
],
[
  "This planet appears blue.",
  "This planet is furthest from the Sun",
  "This planet is named after the Roman god of the sea",
  "This planet's year takes 165 earth years",
  "This planet is a gas giant.",
  "This planet has the stronget winds of any.",
  "This planet has 14 moons."
]
];


function setup() {
  let cnv = createCanvas(800,800);
  cnv.parent('gameContainer');
  background(0);
  board = loadImage("../Images/score.png");
  tut = loadImage("../Images/instructions.png");
  setInterval(tick, 1000);
 

  planets.push(new Draggable(0, "Mercury",100,450));
  planets.push(new Draggable(1, "Venus",250,500));
  planets.push(new Draggable(2, "Earth",500,500));  
  planets.push(new Draggable(3, "Mars",650,450));
  planets.push(new Draggable(4, "Jupiter",100,600));
  planets.push(new Draggable(5, "Saturn",250,650));
  planets.push(new Draggable(6, "Uranus",500,650));
  planets.push(new Draggable(7, "Neptune",650,600));
  shuffle(pOrder, true);
  
  capture = createCapture(VIDEO, camLoad());
  capture.hide();
  handpose = ml5.handpose(capture);
  handpose.on("predict", results => {
    predictions = results;
  });
  
}


function draw() {
  textSize(15);
  background(0);
  textAlign(CENTER);
  if (loaded == false){
    text("Loading Camera...", 400, 300);
  }
  push();
  tint(255,50);
  translate(width,0);
  scale(-1, 1);
  image(capture, 0, 0, 1050, 800);
  pop();
  fill(255);
  stroke(1);
  ellipse(400,200,70,70);

  
    
  
  if (round < 8 && round > -1) {
    for (var i = 0; i<8; i++){
      planets[i].over();
      planets[i].update();
      planets[i].show();
      planets[i].check();
      fill(255);
      text("Guess the Planet!", 400, 100);
      text("Grab and drag the correct planet to the answer box!", 400, 120);
      text("Hints:", 400, 270);
    }
    showHints();
    image(board, 550, 20, 240, 370);
    stroke(1);
    fill(0);
    text(Math.floor(timerVal/60) + ":" + timerVal%60, 720, 220);
    text(score, 650, 220);

  }

  if (round == -1) {
    image(tut,80,260, 600, 570);
    textAlign(CENTER);
    textSize(50);
    text("Planet Grab!", 400, 70);
    textSize(15);
    text("Grab the white circle to start the game!", 400, 100);
  }

  if (round == 8) {
    textAlign(CENTER);
    text("You've completed the game!", 400, 100);
    text("Your score is:", 400, 270);
    textSize(30);
    text(score, 400,300);

  }
  
  

  




  if(predictions[0]){
    
    const prediction = predictions [0];

    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      
      fill(0, 255, 0);
      noStroke();
      //ellipse(800- (keypoint[0]*1.65), keypoint[1]*1.65, 7, 7);
    }

    palm = [800-((prediction.landmarks[0][0]+prediction.landmarks[9][0])*0.825),((prediction.landmarks[0][1]*1.65+prediction.landmarks[9][1]*1.65)/2)];
    //ellipse(palm[0],palm[1], 30 ,30);

   




    if( prediction.landmarks[8][1] > prediction.landmarks[6][1] && // indexFinger down
      prediction.landmarks[12][1] > prediction.landmarks[10][1] && // middleFinger down
      prediction.landmarks[16][1] > prediction.landmarks[14][1] && // ringfinger down
      prediction.landmarks[20][1] > prediction.landmarks[18][1]) { // Pinky down      
      fill(255,0,0);
      //ellipse(palm[0],palm[1], 30 ,30);
      grabbing = true;
    }
    else {grabbing = false}


    
  } 
  selector[0] -= (selector[0]- palm[0])/ 5;
  selector[1] -= (selector[1]- palm[1])/ 5;
  

  traillist = [[selector[0],selector[1]],traillist[0],traillist[1],traillist[2],traillist[3],traillist[4],traillist[5],traillist[6],traillist[7]];
  

  if (grabbing == true) {
    grabtime ++;
    if (grabtime == 10) {
      handgrab();
    }
    if (grabtime > 10) {
      strokeWeight(10);
    }
    else{
      strokeWeight(grabtime);
    }
  } else {

      if (grabtime > 10) {
        grabtime = 9;
      }else{
        if (grabtime == 5) {
          grabtime--;
          handdrop();
        }
        else if(grabtime > 1) {
          grabtime--;
          strokeWeight(grabtime);
        }
        
      }
  }

  for (i = 1; i < traillist.length; i++) {
  noFill();
  stroke(255,255,255,255/i*1.5);
  ellipse(traillist[i][0], traillist[i][1], 75-i*5, 75-i*5);

  }
  strokeWeight(1);
}

function showHints() {
  textAlign(CENTER);
  strokeWeight(1);
  fill(255);
  if (timerVal > 0){
    text(hints[pOrder[round]][0],400, 300);
  }
  if (timerVal > 5){
    text(hints[pOrder[round]][1],400, 330);
  }
  if (timerVal > 10){
    text(hints[pOrder[round]][2],400, 360);
  }
  if (timerVal > 15){
    text(hints[pOrder[round]][3],400, 390);
  }
}

function next() {
  timerVal = 0;
  round++;

  if (round < 8) {
    for (var i = 0; i<8; i++){
      planets = [];
      planets.push(new Draggable(0, "Mercury",100,450));
      planets.push(new Draggable(1, "Venus",250,500));
      planets.push(new Draggable(2, "Earth",500,500));  
      planets.push(new Draggable(3, "Mars",650,450));
      planets.push(new Draggable(4, "Jupiter",100,600));
      planets.push(new Draggable(5, "Saturn",250,650));
      planets.push(new Draggable(6, "Uranus",500,650));
      planets.push(new Draggable(7, "Neptune",650,600));
    }
    
    shuffle(hints[pOrder[round]], true);
  }
}


class Draggable {
  constructor(id, text, x, y) {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.grabbing = false;
    this.hovering = false;
    this.text = text;
    this.id = id; 
    this.img = loadImage("../Images/p" + this.id + ".png");

    this.x = x;
    this.y = y;
    // Dimensions
    this.w = 80;
    this.h = 100;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

    if (palm[0] > this.x - 30 && palm[0] < this.x + this.w && palm[1] > this.y - 30 && palm[1] < this.y + this.h){
      this.hovering = true;
    } else {
      this.hovering = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }

    if (this.grabbing) {
      this.x = selector[0] + this.AoffsetX;
      this.y = selector[1] + this.AoffsetY;
    
    }

  }

  show() {


    image(this.img, this.x , this.y, 60 , 60)
    stroke(0);
    // Different fill based on state
    if (this.dragging || this.grabbing) {
      fill(50);
    } else if (this.rollover || this.hovering) {
      fill(100);
    } else {
      fill(175, 200);
    }
    strokeWeight(1);
    text(this.text,this.x -5, this.y + 70, this.w, this.h);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  grabbed() {

    if(palm[0] > this.x && selector[0] < this.x + this.w && selector[1] > this.y && selector[1] < this.y + this.h) {
      this.grabbing = true;
      this.AoffsetX = this.x - selector[0];
      this.AoffsetY = this.y - selector[1];
    }


  }
  released() {
    // Quit dragging
    this.dragging = false;
  }

  dropped() {
    this.grabbing = false;
  }
  
  check() {
    if (this.x < 435 && this.x > 365 && this.y < 235 && this.y > 165 && this.dragging == false && pOrder[round] == this.id) {
      roundWin();
    }
  
  
  }
}

function mousePressed() {
  for (var i = 0; i<8; i++){
    planets[i].pressed();
  }
}

function mouseReleased() {
  for (var i = 0; i<8; i++){
    planets[i].released();
  }
}

function handgrab() {
  if (round < 8 && round > -1) {
    for (var i = 0; i<8; i++){
      planets[i].grabbed();
    }
    //ellipse(palm[0],palm[1], 10,10);
  }
  else {
    if (selector[0]< 435 && selector[0] > 365 && selector[1] < 235 && selector[1] > 165 ){
      next();
    }
  }
}

function handdrop() {
  if (round < 8 && round > -1) {
    for (var i = 0; i<8; i++){
      planets[i].dropped();
    }
  }
}

function tick(){
   // if (timerVal < 20) {timerVal++;}
  //else{roundLose()}
  timerVal++;
}

function roundWin() {
    score += ((30-timerVal) * 10)
    next();
}

function roundLose() {
    next();
}

function camLoad() {
  loaded = true;
}