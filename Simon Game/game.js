// Arrays Created
var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];






// Function to choose random number
function nextSequence(){
    var randomNumber= Math.floor(Math.random() * 4);
    var randomChosenColour= buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
// Function to play sound
function playSound(){
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}