
/*
p5.js javascript code for personal website of Isaac Wellish
Created November 30th, 2017 with p5.js
Property of Isaac Wellish
Copyright Isaac Wellish 2017
code adapted from p5.js example given on processing.org



Anyone may take what they wish with the request of attribution 

This website is meant ot be a fun interactive way for others to learn more about me but also for me to learn more about myself

This is the first website I've build completely from scratch!

Enjoy!




*/
//var nameTitle;
//var projectsTitle;
//var aboutMeTitle;
//var contactTitle;

var a0;
var a1;
var a2;
var a3;
var aLinkedIn;
var aGitHub;

var pageTitles;
var pageSubTitles;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(0);


styleElements();

styleContactAnchors();

directory();





}

//mouse over and out functions
//hlighlight text in black or white when moused over or out
function titleChangeBlack(){
  this.style("color", "#000000");
  this.style("background-color", "#ffffff");

}

function titleChangeWhite(){
  this.style("color", "#ffffff");
  this.style("background-color", "#000000");

}



//automatically resizes canvas to window when called in draw()


function windowResized(){
 createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  //send canvas to back of page
  canvas.style('z-index', '-1');
  background(0);
  //change position of elements;
  styleElements();

}


function styleContactAnchors(){

    aLinkedIn = createA('https://www.linkedin.com/in/isaac-wellish-8177a6b6/', 'LinkedIn');
    aLinkedIn.style("font-size", "18px");
    aLinkedIn.style("color", "#ffffff");
    aLinkedIn.style("background-color", "#000000");
    aLinkedIn.style("padding", "8px");
    aLinkedIn.style("text-decoration", "none");
    aLinkedIn.mouseOver(titleChangeBlack);
    aLinkedIn.mouseOut(titleChangeWhite);
    aLinkedIn.position(width/4, height/2.4); // projects subtitle positioning



    aGitHub = createA('https://github.com/isaacwellish', 'GitHub');
    aGitHub.style("font-size", "18px");
    aGitHub.style("color", "#ffffff");
    aGitHub.style("background-color", "#000000");
    aGitHub.style("padding", "8px");
    aGitHub.style("text-decoration", "none");
    aGitHub.mouseOver(titleChangeBlack);
    aGitHub.mouseOut(titleChangeWhite);
    aGitHub.position(width/4, height/1.7); // contact subtitle positioning


  }


function styleElements(){
//styling loop for name title
pageTitles = selectAll('.pageTitle');
  for(var i = 0; i< pageTitles.length; i++){
    pageTitles[i].style("font-size", "24px");
    pageTitles[i].style("color", "#000000");
    pageTitles[i].style("background-color", "#ffffff");
    pageTitles[i].style("padding", "8px");
    pageTitles[i].position(width/1.3, height/10); // name Title positioning
    pageTitles[i].mouseOver(titleChangeWhite);
    pageTitles[i].mouseOut(titleChangeBlack);
  } 

//styling loop for sub titles
pageSubTitles = selectAll('.pageSubTitle');
  for(var i = 0; i< pageSubTitles.length; i++){
    pageSubTitles[i].style("font-size", "18px");
    pageSubTitles[i].style("color", "#ffffff");
    pageSubTitles[i].style("background-color", "#000000");
    pageSubTitles[i].style("padding", "8px");
    pageSubTitles[i].mouseOver(titleChangeBlack);
    pageSubTitles[i].mouseOut(titleChangeWhite);
  } 

//positioning for sub titles
pageSubTitles[0].position(width/4, height/4); // projects subtitle positioning
//pageSubTitles[1].position(width/1.45, height/2.3); // about me subtitle positioning
//pageSubTitles[2].position(width/4, height/1.7); // contact subtitle positioning


}


function directory(){
    a0 = createA('../index.html', 'home');
    a0.style("font-size", "18px");
    a0.style("color", "#ffffff");
    a0.style("background-color", "#000000");
    a0.style("padding", "10px");
    a0.style("text-decoration", "none");
    a0.mouseOver(titleChangeBlack);
    a0.mouseOut(titleChangeWhite);
    a0.position(0, height/1.4); // name Title positioning

    a1 = createA('../projects/projects.html', 'projects');
    a1.style("font-size", "18px");
    a1.style("color", "#ffffff");
    a1.style("background-color", "#000000");
    a1.style("padding", "10px");
    a1.style("text-decoration", "none");
    a1.mouseOver(titleChangeBlack);
    a1.mouseOut(titleChangeWhite);
    a1.position(0, height/1.3); // projects subtitle positioning

    a2 = createA('../aboutMe/aboutMe.html', 'about me');
    a2.style("font-size", "18px");
    a2.style("color", "#ffffff");
    a2.style("background-color", "#000000");
    a2.style("padding", "10px");
    a2.style("text-decoration", "none");
    a2.mouseOver(titleChangeBlack);
    a2.mouseOut(titleChangeWhite);
    a2.position(0, height/1.2);// about me subtitle positioning
  

    a3 = createA('#', 'contact');
    a3.style("font-size", "18px");
    a3.style("color", "#ffffff");
    a3.style("background-color", "#000000");
    a3.style("padding", "10px");
    a3.style("text-decoration", "none");
    a3.position(0, height/1.125); // contact subtitle positioning


}


function draw() {


  //background(200);
  stroke(20,200,100)

  //if mouse is pressed clear the current sketch!
  if (mouseIsPressed) {
  canvas.clear();
  canvas.position(0,0);
  //send canvas to back of page
  canvas.style('z-index', '-1');
  background(0);
  } else {
    fill(0);
  }

  translate(0,0);

//draw an elipse at the center of the page
//The dimensions of the ellipse change based on mouse position
  line(width/2, height/2, mouseY*2, mouseX)*2;


}


