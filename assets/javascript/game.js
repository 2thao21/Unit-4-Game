$( document ).ready(function(){

    //declaring random number between 19-120
    var ranNum = Math.floor(Math.random()*101+19);
    console.log(ranNum);
    $("#randomNum").html(ranNum);
    
    //declaring crystal random numbers between 1-12
    var red = Math.floor(Math.random()*11+1);
    console.log("red: ", red)
    var blue = Math.floor(Math.random()*11+1);
    console.log("blue: ", blue)
    var yellow = Math.floor(Math.random()*11+1)
    console.log("yellow: ", yellow)
    var green = Math.floor(Math.random()*11+1);
    console.log("green: ", green)
    
    //declaring counters: wins, losses, total score
    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    
    $("#numWins").html(wins);
    console.log("Your wins: ", wins)
    $("#numLosses").html(losses);
    console.log("Your losses: ", losses)
    console.log("Your score is: ", yourScore)
    
    function reset(){
        yourScore = 0;
        $("#totalScore").html(yourScore);

        ranNum = Math.floor(Math.random()*101+19);
        console.log(ranNum);
        $("#randomNum").html(ranNum);
    
        red = Math.floor(Math.random()*11+1);
        console.log("red: ", red)
        blue = Math.floor(Math.random()*11+1);
        console.log("blue: ", blue)
        yellow = Math.floor(Math.random()*11+1)
        console.log("yellow: ", yellow)
        green = Math.floor(Math.random()*11+1);
        console.log("green: ", green)
    
        }
    
    function scoreMatch(){
        wins++;
        $("#numWins").html(wins);
        reset();
        }
    
    function noMatch(){
        losses++;
        $("#numLosses").html(losses);
        reset();
        }
    
    //game play
    $("#red").on("click", function(){
        yourScore = yourScore + red;
        console.log("Your score now: ", yourScore),
        $("#scoreTotal").html(yourScore)
        if (yourScore === ranNum){
            alert("You won!")
            scoreMatch();
        } 
        else if (yourScore > ranNum){
            alert("You loss! Try Again.")
            noMatch();
        };
    })
    $("#blue").on("click", function(){
        yourScore = yourScore + blue;
        console.log("Your score now: ", yourScore),
        $("#scoreTotal").html(yourScore)
        if (yourScore === ranNum){
            alert("You won!")
            scoreMatch();
        } 
        else if (yourScore > ranNum){
            alert("You loss! Try Again.")
            noMatch();
        };
    })
    $("#yellow").on("click", function(){
        yourScore = yourScore + yellow;
        console.log("Your score now: ", yourScore),
        $("#scoreTotal").html(yourScore)
        if (yourScore === ranNum){
            alert("You won!")
            scoreMatch();
        } 
        else if (yourScore > ranNum){
            alert("You loss! Try Again.")
            noMatch();
        };
    })
    $("#green").on("click", function(){
        yourScore = yourScore + green;
        console.log("Your score now: ", yourScore),
        $("#scoreTotal").html(yourScore)
        if (yourScore === ranNum){
            alert("You won!")
            scoreMatch();
        } 
        else if (yourScore > ranNum){
            alert("You loss! Try Again.")
            noMatch();
        };
    })

    })
    
     
    