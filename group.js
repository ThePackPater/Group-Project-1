var killers = 

var Chucky = new Killer("Chucky", "15 min 3 attacks", "assets/gifs/chucky.gif", 900, "assets/sounds/chucky.mp3");
var Freddy = new Killer("Freddy Kruger", "20 min 4 attacks", "assets/gifs/freddy.gif", 1200, "assets/sounds/freddy.mp3");
var Penny = new Killer("Pennywise the Clown", "25 min 5 attacks", "assets/gifs/penny.gif", 1500, "assets/sounds/penny.mp3");
var LeatherFace = new Killer("Leather Face", "30 min 6 attack", "assets/gifs/leatherFace.gif", 1800, "assets/sounds/saw.mp3");
var Jason = new Killer("Jason Vorhees", "35 min 7 attacks", "assets/gifs/jason.gif", 2100, "assets/sounds/jason.mp3");
var Michael = new Killer("Michael Myers", "40 min 8 attacks", "assets/gifs/michael.gif", 2400, "assets/sounds/michael.mp3");

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

  database.ref().on("value", function(snapshot) {
    if (snapshot.exists()) {
        $("#add-runner-btn").hide(); 
        $("#start-run-btn").show();
        $("#new-runner").hide();        
      }else{
        $("#add-runner-btn").show();
        $("#start-run-btn").hide();
    
      }

  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


  $("#add-runner-btn").on("click", function(event){
    event.preventDefault();
  
    var runnerName = $("#name-input").val().trim();    
  
    var newRunner = {
      name: runnerName      
    };
  
    database.ref().push(newRunner);  
  
    //git aalert("Runner successfully added");
  
    $("#runner-name-input").val("");
  
  });