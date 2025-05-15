let gameResult=document.getElementById('gameResult');
let userInput=document.getElementById('userInput');
let rand=Math.ceil(Math.random()*100);
console.log(rand);

function checkGuess()
{
 let guessnumber=parseInt(userInput.value);
 if (guessnumber > rand)
 {
    gameResult.textContent="too high try again";
    gameResult.style.backgroundColor="violet";
 }
 else if (guessnumber < rand)
 {
    gameResult.textContent="too less try again";
    gameResult.style.backgroundColor="purple";
 }
 else if (gamenumber = rand)
 {
    gameResult.textContent="congrats its correct";
    gameResult.style.backgroundColor="green";
 }
 else
 {
    gameResult.textContent="invalid input try it again";
    gameResult.style.backgroundColor="red";
 }
}