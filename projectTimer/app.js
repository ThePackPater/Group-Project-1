
//action page onload function (timer buttons)
window.onload = function () {
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#start").on("click", start);
};

// Constructor function for Killer objects
class Killer {
  constructor(name, intensity, image, time) {
    this.name = name;
    this.intensity = intensity;
    this.image = image;
    this.time = time;
  }
}

// new killer objects
var Chucky = new Killer("Chucky", "15 min 3 attacks", "chucky.gif", 900);
var Freddy = new Killer("Freddy Kruger", "25 min 4 attacks", "freddy.gif", 1500);

//NEED TO CREATE a var to make the killer object var name (i.e. Chucky, Freddy) = chooseKiller btn click "click"

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
  time = Chucky.time;
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
      var audio = new Audio("http://soundfxcenter.com/holiday-and-festive/halloween/8d82b5_Chucky_Laugh_Sound_Effect.mp3");
      //play the audio file above every 3 (time=300) min
      audio.play();
      console.log("success");
    }, 10000);
  }
}

//NEED A FUNCTION TO PAUSE THE AUDIO INTERVAL!!!

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


