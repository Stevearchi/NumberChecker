$(document).ready(function() {
    let wins = 0, losses = 0, staleGame = false;  
    // staleGame will be set to true after the user has guessed.  
    // This prevents them from continually hitting correct number button and increasing their score
    let compNum;
    let userGuess;
    let resultMessage = $("<h1>").addClass("mx-auto");
    // random number between 1 and 4
    let random = () => {
        compNum = Math.floor(Math.random()*4) +1;      
    };
    // compare user guess with randomly generated number
    let compare = () => {
        if (staleGame === false){
            $("#compNum").text(compNum)
            if (userGuess === compNum)
                win();
            else
                lose();
            staleGame = true;
        }
    };
    // Increase wins or losses and change HTML to reflect this
    // Change the message in the result section
    let win = () => {
        $("#wins").text(++wins);
        resultMessage.text("Great guess, you got it! ");
       $("#result").html(resultMessage);
    };

    let lose = () => {
        $("#losses").text(++losses);
        resultMessage.text("Loser! ")
        $("#result").html(resultMessage);
 
    };
    // Reset the game
    let reset = () => {
        staleGame = false;
        console.log("in reset function")
        $("#compNum").text("???");
        resultMessage.text("???");
        $("#result").html(resultMessage);
        random();
    }

    //click functions for number buttons
    $("#b1").on("click", function() {
        userGuess = 1;
        compare();
    });
    $("#b2").on("click", function() {
        userGuess = 2;
        compare();
    });
    $("#b3").on("click", function() { 
        userGuess = 3;
        compare();
    });
    $("#b4").on("click", function() {
        userGuess = 4;
        compare();
    });
    $("#reset").on("click", function () {
        console.log("In reset click event")
        reset();
    });

    reset(); // initiate first game
    
});


