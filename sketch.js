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
	}

	else if(keyCode == 88){ //x
		g1.play();

	}

	else if(keyCode == 67){ //c
		c2.play();

	}
	else if(keyCode == 86){//v
		e2.play();

	}
	else if(keyCode == 66){//b
		g2.play();

	}
	else if(keyCode == 78){//n
		b2.play();

	}
	else if(keyCode == 77){//m
		c3.play();

	}
	else if(keyCode == 188){//,
		d3.play();

	}

	else{


	}

	return false;


}

function setup() {
	createCanvas(2880, 1800);
	image(img, 0, 0);
	//allINeed.play();

	rain.play();
	rain.setVolume(0.4);
	
}

function draw() {
	//background(255, 150);

	fill(0);
	noStroke();
	rect(1280, 0, 160, 1800);
	rect(0,720,1280,100);

}