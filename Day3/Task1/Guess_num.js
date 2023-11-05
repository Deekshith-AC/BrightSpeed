// Number Guessing Game: Write a JavaScript program that generates a random number between 1 and 100. Prompt the user to guess the number, and provide feedback (higher, lower, or correct) until they guess it correctly. Use a while loop and if-else statements to control the flow of the game.



let res = () => 
{
    let a = Math.random() * 100;
    a += 1;
    return a;
}

let grade = parseInt(prompt("Enter a number that you can guess :"));
if(res === grade)
{
    console.log("Congo, The number you guessed is correct");
}
else
{
    console.log("Sorry, The number you guessed is incorrect");
}