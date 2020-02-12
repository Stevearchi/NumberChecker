$(document).ready(function() {
    let wins = 0, losses = 0, staleGame = false;
    let compNum;
    let userGuess;
    let resultMessage = $("<h1>").addClass("mx-auto");
    let random = () => {
        compNum = Math.floor(Math.random()*4) +1;      
    };

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


