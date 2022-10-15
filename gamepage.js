// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
playername=localStorage.getItem("player_name")
function submit(){
    


var guess=1;


var x = document.getElementById("guessField").value;
if(x == y)
{
    alert("CONGRADUlATIONSSSSSSSSSSS !!!!!!!!!!!!!!!"+playername+"YOU GUESSED IT RIGHT"
    + guess + "GUESS");
    guess= 1;
        
}

  
// function for number guessed by user     


else if(x > y)
{
    guess++;
    alert("OPPPPPPPPSSSSS SSSSSSOOOOOOORRRREYYYYY!!!! TRY A SMALLER NUMBER");

}
else
{
    guess++;
    alert("oops sorry try a greater number");
}
}





function playAgain(){
    y = Math.florr(math.random() * 10 + 1);
}