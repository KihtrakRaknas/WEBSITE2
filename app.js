
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCIizIJZ0QAWbbTH2l2yGiPEnra-dprHYk",
    authDomain: "gov-project-sound-trigger.firebaseapp.com",
    databaseURL: "https://gov-project-sound-trigger.firebaseio.com",
    projectId: "gov-project-sound-trigger",
    storageBucket: "",
    messagingSenderId: "386526948708"
  };
  firebase.initializeApp(config);

var veiwCount=0;
var first = true;

var sound = document.createElement("audio");
window.onload = function(){
    sound.src = "Explosion+3.mp3";
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    firebase.database().ref().set({
            veiwCount: (veiwCount+1)
        });  
}


    firebase.database().ref().on('value', function(snap){
        if(!first){
                   soundTrigger(); 
        console.log(snap.val().veiwCount);
        veiwCount = snap.val().veiwCount;
        }
        first=false;
    });



function soundTrigger(){
    sound.currentTime = 0;
    sound.play();
    console.log("PLAYED");
}