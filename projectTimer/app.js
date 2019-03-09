window.onload = function () {
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#start").on("click", start);
};

var intervalId;

var clockRunning = false;
var time = 900;

function reset() {
  //set's time equal to 15:00
  time = 900;

  // "display" div
  $("#display").text("15:00");

}
function start() {
  //start the count
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
function stop() {
  //stop the countdown
  clearInterval(intervalId);
  clockRunning = false;
}

function count() {
  //time increment
  time--;
  console.log(time);
  //current time, timeConverter function, converted var
  var converted = timeConverter(time);
  console.log(converted);

  // write to "display" div.
  $("#display").text(converted);
}
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

/* //set interval function to trigger 1 min chase mp3
var audio = new Audio("chucky-chase.mp3");
// The following line will play the audio file above
  audio.play();*/

