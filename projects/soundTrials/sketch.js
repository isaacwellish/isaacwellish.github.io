var allINeed;
var rain;
var img;
var b2;
var c1;
var c2;
var c3;
var d3;
var e2;
var g1;
var g2;
var drops = [];

var instructions;


function preload(){

	img = loadImage("rain.gif");
	allINeed = loadSound("03 - All I Need copy.mp3");
	rain = loadSound("Sound Effect - 'Rain & Thunder'.mp3");
	b2 = loadSound("B2 copy.wav");
	c1 = loadSound("C1 copy.wav");
	c2 = loadSound("C2 copy.wav");
	c3 = loadSound("C3 copy.wav");
	d3 = loadSound("D3 copy.wav");
	e2 = loadSound("E2 copy.wav");
	g1 = loadSound("G1 copy.wav");
	g2 = loadSound("G2 copy.wav");


}

function keyPressed(){



	if(keyCode == 90){//z
		c1.play();
		c1.setVolume(1.0)
		instructions.remove();
	}

	else if(keyCode == 88){ //x
		g1.play();
		instructions.remove();

	}

	else if(keyCode == 67){ //c
		c2.play();
		instructions.remove();

	}
	else if(keyCode == 86){//v
		e2.play();
		instructions.remove();

	}
	else if(keyCode == 66){//b
		g2.play();
		instructions.remove();

	}
	else if(keyCode == 78){//n
		b2.play();
		instructions.remove();

	}
	else if(keyCode == 77){//m
		c3.play();
		instructions.remove();

	}
	else if(keyCode == 188){//,
		d3.play();
		instructions.remove();

	}

	else{


	}

	return false;


}




function styleInstructions(){

	tCol = color(87, 118, 142, 200);
	bCol = color(87, 118, 142, 50);

	instructions = select('.how');
	instructions.style("font-size", "24px");
    instructions.style("color", tCol);
    instructions.style("background-color", bCol);
    instructions.style("padding", "8px");
    instructions.position(width/2.5, height/5); // name Title positioning

}


function setup() {
	createCanvas(windowWidth, windowHeight);
  	for (var i = 0; i < 500; i++) {
    	drops[i] = new Drop();
  	}

  	styleInstructions();

	rain.play();
	rain.setVolume(0.4);
	
}

function draw() {
	//background(255, 150);

	background(155, 211, 255);
  	for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  	}

  	

}