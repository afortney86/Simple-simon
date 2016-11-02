/**
 * Created by anthonyfortney on 11/2/16.
 */

"use strict";
// "game state" diagrams, are basically flow charts which have every "state" of the game.
//initial game state
var playerPressCount = 0;
var simonSequence = [];
var userSequence = [];

//Starting the game.
// "displaying" the pattern
$("#btn-start").click(function () { //resets the count and array, calls simon's turn.
    playerPressCount = 0;
    simonSequence.length = 0;
    userSequence.length = 0;
    simonsTurn();
    console.log(simonSequence);
});

function simonsTurn() { //Calls pushTo simonSequence and animateSequence to display on game board.
    userSequence = [];
    pushToSimonSequence();
    var i = 0;
    var intervalId = setInterval(function () {
        animateSequence(i);
        i++;
        if (i >= simonSequence.length) {
            clearInterval(intervalId);
        }
    }, 1000)
}

// gathering user input (button press)
// checking if button press is correct
$(".big-button").click(function () {
    userSequence.push($(this).attr("id"));
    compareUserToSimon()

});

function compareUserToSimon() { //
    for (var i = 0; i < userSequence.length; i++) {
//            console.info(userSequence);
//            console.info(simonSequence);
//            console.info(i);
        if (userSequence[i] != simonSequence[i]) {
            gameOver();
            return;
        }
    } //end for

    if (userSequence.length == simonSequence.length) {

        simonsTurn();
    }
}


// game over
function gameOver() {
    alert("Game Over")
}

// game won


function pushToSimonSequence() { //function to push to Simon sequence array
    var buttonElements = ["red", "green", "blue", "yellow"];
    var btnColors = buttonElements[Math.floor(Math.random() * buttonElements.length)];
    simonSequence.push(btnColors);
}

function animate(divId) { //function for animating buttons
    if (divId == "red") {
        $("#red").css("opacity", "1");
        setTimeout(function () {
            $("#red").css("opacity", "0.6");
        }, 200);
    } else if (divId == "green") {
        $("#green").css("opacity", "1");
        setTimeout(function () {
            $("#green").css("opacity", "0.6");
        }, 200);
    } else if (divId == "blue") {
        $("#blue").css("opacity", "1");
        setTimeout(function () {
            $("#blue").css("opacity", "0.6");
        }, 200);
    } else if (divId == "yellow") {
        $("#yellow").css("opacity", "1");
        setTimeout(function () {
            $("#yellow").css("opacity", "0.6");
        }, 200);
    }
}

function animateSequence(i) { //function that looks at simonSequence array.
    if (simonSequence[i] == "red") {
        animate("red");
    } else if (simonSequence[i] == "green") {
        animate("green");
    } else if (simonSequence[i] == "blue") {
        animate("blue");
    } else if (simonSequence[i] == "yellow") {
        animate("yellow");
    }
}

