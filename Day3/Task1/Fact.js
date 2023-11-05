let fact = parseInt(prompt("Enter the number to find the factorial"));
if(fact > 0)
{
    var fac = 1;
    for(var i = 1; i <= fact; i++)
    {
        fac *= i;
    }
    console.log(fac);
}
else
{
    console.log("Please positive number only");
}