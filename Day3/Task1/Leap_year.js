//Check if a year is leap year or not.

let res = (yr) => 
{
    if((yr % 4 === 0 && yr % 100 !==0) && yr % 400 === 0)
    {
        return true;
    }
    return false;
}

let year = parseInt(prompt("Enter the Year to check Leap Year"));
if(res(year))
{
    console.log("Leap Year");
}
else
{
    console.log("Not a Leap Year");
}