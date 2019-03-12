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
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} //end slideshow JS

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

