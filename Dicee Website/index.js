// 1st player

var randNum1=Math.floor(Math.random()*6)+1;
var ranDiceImage="dice" + randNum1 + ".png";
var randImageSource= "images/" + ranDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImageSource);

// 2nd player

var randNum2=Math.floor(Math.random()*6)+1;
var randImageSource2 = "images/dice" + randNum2 + ".png"; ;
document.querySelectorAll("img")[1].setAttribute("src", randImageSource2);

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins"

}
else if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩"

}
else{
    document.querySelector("h1").innerHTML="It's a Draw"

}
