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
        $("#add-runner-btn").hide();git 
        $("#start-run-btn").show();
      }else{
        $("#add-runner-btn").show();
        $("#start-run-btn").hide();
        $("#")
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