function playcraps() {
    /*this is a function to play craps in the game.html 
    rules: sum of 7 or 11 loses even doubles wins all else is a push 
    James Mccormick
    18 Oct 2023*/
    console.log("playcraps() started")
    //logs game start
    var die1 = Math.ceil(Math.random() * 6);
    //rounds number up and keeps it between 1-6
    console.log("Die 1 result = " + die1);
    //log results of 1st roll
    document.getElementById("die1res").innerHTML = "Die 1 result = " + die1;
    //displays results

    var die2 = Math.ceil(Math.random() * 6);
    console.log("Die 2 result = " + die2);
    document.getElementById("die2res").innerHTML = "Die 2 result = " + die2;

    var sum = die1 + die2;
    console.log("Total result = " + sum);
    document.getElementById("sumres").innerHTML = "Total result = " + sum;

    //check for 7 or 11 to show a loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameres").innerHTML = "Ran out of TP and ended up with a loser's streak.";
    
        //checking for doubles and evens for the win
   } else if (die1 == die2 && die1%2 == 0){
        document.getElementById("gameres").innerHTML = "Pinched out a winner!";
        
        // all esle is a draw.
    } else { document.getElementById("gameres").innerHTML = "SPLASH! That's one way to get a wash."; }

}