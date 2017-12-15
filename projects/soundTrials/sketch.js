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




 


/*
function preload(){


	//img = loadImage("web back blur.png");
	//allINeed = loadSound("03 - All I Need copy.mp3");
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

*/

function keyPressed(){



	if(keyCode == 90){//z
		c1 = loadSound("C1 copy.wav", tone1Loaded);
		instructions.remove();
		image(img, 0, 0, windowWidth, windowHeight);
		//tint(255, 127);
	 	//filter(BLUR,5);
	}

	else if(keyCode == 88){ //x
		g1 = loadSound("G1 copy.wav", tone2Loaded);
		instructions.remove();

	}

	else if(keyCode == 67){ //c
		c2 = loadSound("C2 copy.wav", tone3Loaded);
		instructions.remove();

	}
	else if(keyCode == 86){//v
		e2 = loadSound("E2 copy.wav", tone4Loaded);
		instructions.remove();

	}
	else if(keyCode == 66){//b
		g2 = loadSound("G2 copy.wav", tone5Loaded);
		instructions.remove();

	}
	else if(keyCode == 78){//n
		b2 = loadSound("B2 copy.wav", tone6Loaded);
		instructions.remove();

	}
	else if(keyCode == 77){//m
		c3 = loadSound("C3 copy.wav", tone7Loaded);
		instructions.remove();

	}
	else if(keyCode == 188){//,
		d3 = loadSound("D3 copy.wav", tone8Loaded);
		instructions.remove();

	}

	else{


	}

	return false;


}


function rainLoaded(){

	rain.loop();
	rain.setVolume(0.4);

}

function tone1Loaded(){
	c1.play();
	
}

function tone2Loaded(){
	g1.play()
	
}
function tone3Loaded(){
	c2.play();
	
}
function tone4Loaded(){
	e2.play();
	
}
function tone5Loaded(){
	g2.play();
	
}
function tone6Loaded(){
	b2.play();
	
}
function tone7Loaded(){
	c3.play();
	
}
function tone8Loaded(){
	d3.play();
	
}
function blurLoaded(){


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



  	
  	rain = loadSound("Sound Effect - 'Rain & Thunder'.mp3", rainLoaded);






	styleInstructions();

	img = loadImage("web back blur.png");

	//make a blur effect for rain
		//image(img, 0, 0, windowWidth, windowHeight);
		//tint(255, 127);
	 	//filter(BLUR,5);


	
	
}

function draw() {
	//background(255, 150);

	background(155, 211, 255);
  



 	for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  	}
  	

}