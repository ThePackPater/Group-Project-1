





//action page onload function (timer buttons)
window.onload = function () {
  $("#stop").on("click", stop);
  //$("#quit").on("click", endRun);
  $("#start").on("click", start);
};

//NEED TO CREATE an onClick to make the killer object var name 

//var killerChose = $(".killerchose").on("click").val();
//console.log(killerChose);

// Constructor function for Killer objects
class Killer {
  constructor(name, intensity, image, time, audio) {
    this.name = name;
    this.intensity = intensity;
    this.image = image;
    this.time = time;
    this.audio = audio;
  }
}


// new killer objects
var Chucky = new Killer("Chucky", "15 min 3 attacks", "assets/gifs/chucky.gif", 50, "assets/sounds/chucky.mp3");
var Freddy = new Killer("Freddy Kruger", "20 min 4 attacks", "assets/gifs/freddy.gif", 1200, "assets/sounds/freddy.mp3");
var Penny = new Killer("Pennywise the Clown", "25 min 5 attacks", "assets/gifs/penny.gif", 1500, "assets/sounds/penny.mp3");
var LeatherFace = new Killer("Leather Face", "30 min 6 attack", "assets/gifs/leatherFace.gif", 1800, "assets/sounds/saw.mp3");
var Jason = new Killer("Jason Vorhees", "35 min 7 attacks", "assets/gifs/jason.gif", 2100, "assets/sounds/jason.mp3");
var Michael = new Killer("Michael Myers", "40 min 8 attacks", "assets/gifs/michael.gif", 2400, "assets/sounds/michael.mp3");


// killer display and append 
var killerDisplay = $("<div class='killer'>");
var killerName = $("<h1>").text("You Chose: " + Chucky.name);
killerDisplay.append(killerName);
var intensityP = $("<h2>").text(Chucky.intensity);
killerDisplay.append(intensityP);
var killerImage = $("<img>").attr("src", Chucky.image);
killerDisplay.append(killerImage);
$("#killerDiv").append(killerDisplay);


// timer variables
var intervalId;
var clockRunning = false;
var time = Chucky.time;
var audioInterval;

function reset() {
  //set's time equal to killer selection duration
  time = Penny.time;
  // "display" div
  $("#display").text("00:00");

}

//start the count
function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    audioInterval = setInterval(function () {
      //setInterval to triggger audio mp3
      var audio = new Audio(Chucky.audio);
      //play the audio file above every 3 min
      audio.play();
      console.log("success");
      //60000*5
    }, 15000);
  }
 }

//stop/pause the count
function stop() {
  clearInterval(intervalId);
  clearInterval(audioInterval);
  clockRunning = false;
}

//time increment
function count() {
  time--;
  console.log(time);
  //current time, timeConverter function, converted var
  var converted = timeConverter(time);
  console.log(converted);
  // write to "display" div.
  $("#display").text(converted);
}
// time conversion
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  console.log(t);
  return minutes + ":" + seconds;
}


