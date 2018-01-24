//Isaac Wellish
//p5.js code for a sound powered gif generator. 


//Giphy API

var api = "https://api.giphy.com/v1/gifs/random?";
var apiKey = "&api_key=5V1f5FU1zPLyus5FOhhYjxQtIpSESdUa"; //change before submitting, can get one by registering application at developers.giphy.com
var rating = "&rating=pg"
var tag = "&tag=";

//Word Association API

var apiWord = "https://api.wordassociations.net/associations/v1.0/json/search?";
var apiKeyWord = "apikey=cf60610a-ee19-4607-8b09-2807f5997414"; //change before submitting, can get one by registering application at wordassociations.net
var language = "&lang=en";
var limit = "&limit=10";
var input = "&text="//nature";
var newWord;
var word;


//variables


var gif;
var staticGif;
var giphyAttribution;
var mic;
var micLevel;
var vols = [];
var interval;
var energyLevel;

//change these variables to correspond to terms that correspond to energy levels


var highEnergy = "explosion";
var midEnergy = "chill";
var lowEnergy = "nature";

//threshold levels for microphone. Must be calibrated for different mics
//must be between 0 and 1

var highThresh = 0.1;
var midThresh = 0.05;
//low threshold value is built into else statement in 






function setup() {

  //static gif for loading
  staticGif = createImg('media/static.gif');
  staticGif.size(windowWidth, windowHeight);
  staticGif.position(0,0);
  
  //title screen
  gif = createImg('media/giphyTitle.gif');
  gif.size(windowWidth, windowHeight);
  gif.position(0,0);
  giphyAttribution = createImg('media/Poweredby_100px-White_VertText.png'); //attribution to giphy
  giphyAttribution.position(windowWidth-100,windowHeight-50);

  

  //mic input init code
  mic = new p5.AudioIn();
  mic.start();
 
  //console.log(energyLevel);
  // var button  = select('#submit');
  // button.mousePressed(giphyAsk);
  // input = select('#search');
 // giphyAsk();

  
  //createImg("media/Giphy Attribution Marks/Static Logos/Small/Light Backgrounds/Poweredby_100px-White_VertLogo.png");//attribution to giphy
}

function gotData(giphy) {
  gif = createImg(giphy.data.image_url);// .hide() will hide gif
  gif.size(windowWidth, windowHeight);
  gif.position(0,0);
  giphyAttribution = createImg('media/Poweredby_100px-White_VertText.png'); //attribution to giphy
  giphyAttribution.position(windowWidth-100,windowHeight-50);
  

}



function gotDataWord(wordy){
//word association API

  var r = floor(random(10));
  energyLevel = wordy.response[0].items[r].item; //newWord
  console.log("A word associated with " + energyLevel);

  //energyLevel = newWord; //energy level set to newWord created by word association generator


}



function giphyAsk(){
 
  gif.remove();
  giphyAttribution.remove();



  //var url = api + apiKey + tag + input.value();
  var url = api + apiKey + rating + tag + energyLevel;

  console.log(energyLevel);
  loadJSON(url, gotData);


    //word association API


  var urlWord = apiWord + apiKeyWord + language + limit + input + energyLevel; //newWord
  loadJSON(urlWord, gotDataWord);

 

}

function timeWrapper(){

  var i = 0;
  var totalSum = 0;
  var avgVol;

  interval = setInterval(timer, 16.7); // every 1/60th of a second record data  (1/60)*1000)

  function timer(){

    if (i < 180){
      vols[i] = mic.getLevel();
      totalSum = totalSum + vols[i]; // sum the vols
      i++;
    }

    else{
      clearInterval(interval);
 
      avgVol = totalSum/180;
      console.log(avgVol);

      //change threshold values to fit your microphone

      if (avgVol > highThresh){
        energyLevel = highEnergy;

      }

      else if (avgVol > midThresh){
        energyLevel = midEnergy;

      }

      else{
        energyLevel = lowEnergy;

      }

    }

  }

}

function mousePressed(){
  console.log(mic.getLevel());

  //Start program once mouse is pressed

  //static screen inbetween gifs
  staticGif.remove();
  staticGif = createImg('media/static.gif');
  staticGif.size(windowWidth, windowHeight);
  staticGif.position(0,0);



  gif.remove();
  giphyAttribution.remove();

  gif = createImg('media/gifingworld.gif');
  gif.size(windowWidth, windowHeight);
  gif.position(0,0);
  giphyAttribution = createImg('media/Poweredby_100px-White_VertText.png'); //attribution to giphy
  giphyAttribution.position(windowWidth-100,windowHeight-50);

// should only be called once so clicking more than once will casue multiple calls

  timeWrapper(); //analyze audio at start
  setInterval(timeWrapper, 60000); //analyze sound data every minute

  setInterval(giphyAsk, 8887); //change gif every 8.887 seconds (so no overlap with timeWrapper)


}


