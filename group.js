$(".btn-killer").click(function () {
  location.replace("ActionPage.html");
});

$("#quit").click(function () {
  location.replace("endstats.html");
});

//action page onload function (timer buttons)
window.onload = function () {
  $("#pause").on("click", pause);
  $("#start").on("click", start);
};

// Constructor function for Killer objects
class Killer {
  constructor(name, intensity, image, time, audio, pic) {
    this.name = name;
    this.intensity = intensity;
    this.image = image;
    this.time = time;
    this.audio = audio;
    this.pic = pic;
  }
}

// new killer objects
var Chucky = new Killer("Chucky", "15 min 3 attacks", "assets/gifs/chucky.gif", 30, "assets/sounds/chucky.mp3", "assets/images/chucky.jpg");
var Freddy = new Killer("Freddy Kruger", "20 min 4 attacks", "assets/gifs/freddy.gif", 1200, "assets/sounds/freddy.mp3","assets/images/freddy.jpg");
var Penny = new Killer("Pennywise the Clown", "25 min 5 attacks", "assets/gifs/penny.gif", 1500, "assets/sounds/penny.mp3","assets/images/penny.jpg");
var LeatherFace = new Killer("Leather Face", "30 min 6 attack", "assets/gifs/leatherFace.gif", 1800, "assets/sounds/saw.mp3","assets/images/leatherface.jpg");
var Jason = new Killer("Jason Vorhees", "35 min 7 attacks", "assets/gifs/jason.gif", 2100, "assets/sounds/jason.mp3","assets/images/jason.jpg");
var Michael = new Killer("Michael Myers", "40 min 8 attacks", "assets/gifs/michael.gif", 2400, "assets/sounds/michael.mp3","assets/images/michaelAsset 1.png");


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
var killerImage = $("<img>").attr("src", Chucky.pic);
killerSurvived.append(killerImage);
var ominus = $("<h2>").text("UNTIL NEXT TIME!");
killerSurvived.append(ominus);
$("#surviveDiv").append(killerSurvived);


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
function pause() {
  clearInterval(intervalId);
  clearInterval(audioInterval);
  clockRunning = false;
}

//time increment
function count() {
  time--;
  console.log(time);
  if (time === 0) {
    clearInterval(intervalId);
    clearInterval(audioInterval);
    clockRunning = false;
    
  }
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

//slideshow JS
var slideIndex = 1;

showSlides();

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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display =  "block";
  dots[slideIndex - 1].className += " active";
}
//end slideshow JS


//add runner//
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

  $("#name-input").val("");

  database.ref().on("value", function (snapshot) {

    console.log(snapshot);
  
    $("#userInfo").append(snapshot).val();
  
    $("#add-runner-btn").on("click").hide();
  
  
  });


});





