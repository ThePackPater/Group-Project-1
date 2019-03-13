$(".btn-killer").click(function(){
  location.replace("ActionPage.html");
  });

  $("#quit").click(function(){
    location.replace("endstats.html");
      });


//action page onload function (timer buttons)
window.onload = function () {
  $("#stop").on("click", stop);
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
var Chucky = new Killer("Chucky", "15 min 3 attacks", "assets/gifs/chucky.gif", 900, "assets/sounds/chucky.mp3");
var Freddy = new Killer("Freddy Kruger", "20 min 4 attacks", "assets/gifs/freddy.gif", 1200, "assets/sounds/freddy.mp3");
var Penny = new Killer("Pennywise the Clown", "25 min 5 attacks", "assets/gifs/penny.gif", 1500, "assets/sounds/penny.mp3");
var LeatherFace = new Killer("Leather Face", "30 min 6 attack", "assets/gifs/leatherFace.gif", 1800, "assets/sounds/saw.mp3");
var Jason = new Killer("Jason Vorhees", "35 min 7 attacks", "assets/gifs/jason.gif", 2100, "assets/sounds/jason.mp3");
var Michael = new Killer("Michael Myers", "40 min 8 attacks", "assets/gifs/michael.gif", 2400, "assets/sounds/michael.mp3");


// killer display and prepend 
var killerDisplay = $("<div class='killer'>");
var killerName = $("<h1>").text("You Chose: " + Chucky.name);
killerDisplay.append(killerName);
var intensityP = $("<h2>").text(Chucky.intensity);
killerDisplay.append(intensityP);
var killerImage = $("<img>").attr("src", Chucky.image);
killerDisplay.append(killerImage);
$("#killerDiv").prepend(killerDisplay);

// Killer Survived and preprend
var killerSurvived = $("<div class='killer'>");
var killerName = $("<h1>").text("You Survived " + Chucky.name);
killerSurvived.append(killerName);
var intensityP = $("<h2>").text(Chucky.intensity);
killerSurvived.append(intensityP);
var killerImage = $("<img>").attr("src", Chucky.image);
killerSurvived.append(killerImage);
$("#surviveDiv").prepend(killerSurvived);


// timer variables
var intervalId;
var clockRunning = false;
var time = Chucky.time;
var audioInterval;

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

//this is the end countdown and it doesnt frakkin work!
function endRun() {
  if (Chucky.time <= 0) {
    clearInterval(intervalId);
    clearInterval(audioInterval);
    clockRunning = false;
    $("#display").text("YOU DID IT!");
  }
}

//slideshow JS
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = " block";  
  dots[slideIndex-1].className += " active";
} 

//end slideshow JS



var config = {
  apiKey: "AIzaSyClMUA_cxxS07psp6djaLnDvM8ISajX7-I",
  authDomain: "group-project-1-92136.firebaseapp.com",
  databaseURL: "https://group-project-1-92136.firebaseio.com",
  projectId: "group-project-1-92136",
  storageBucket: "group-project-1-92136.appspot.com",
  messagingSenderId: "830035537071"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-runner-btn").on("click", function (event) {
  event.preventDefault();

  var runnerName = $("#name-input").val().trim();

  var newRunner = {
    name: runnerName
  };

  database.ref().push(newRunner);

  //alert("Runner successfully added");

  $("#runner-name-input").val("");

  });
database.ref().on("value", function (snapshot) {
  if (snapshot.exists()) {
    $("#add-runner-btn").hide();
    $("#start-run-btn").show();
  } else {
    $("#add-runner-btn").show();
    $("#start-run-btn").hide();
    $("#")
  }

}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

