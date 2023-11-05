// write arrow function to add 2 numbers and return the sum.

let num1 = parseInt(prompt("Enter 1st number to add: "));
let num2 = parseInt(prompt("Enter 2nd number to add: "));
let sum = () => num1 + num2;
console.log(sum());



// print the location of "my" in a string "I am enjoying my training".
let s = "I am enjoying my training";
let check = () => 
{
    for (let i = 0; i < s.length; i++)
{
    if(s.charAt(i) == 'm' && s.charAt(i+1) == 'y')
    {
        return i;
    }
}
}

if(check() != s.length)
{
    console.log("my word is presnt in the location " + check()  + " and " + (check() + 1));
}
else
{
    console.log(" my word is  not presnt ")
}

// print the location of "m" in a string "I am enjoying my training".
let si = "I am enjoying my training";
let check1 = () => 
{
    for (let i = 0; i < si.length; i++)
{
    if(si.charAt(i) == 'm')
    {
        return i;
    }
}
}

if(check1() != si.length)
{
    console.log("m letter is presnt in the location " + check1());
}
else
{
    console.log(" m letter is  not presnt ")
}


// extract complete string from index 3 of the string "I am enjoying my training". and store in a variable
let sis = "I am enjoying my training";

   let rr = sis.slice(4, sis.length+1);
    console.log(rr);


// extract strig from index 0 to 4 from the string "I am enjoying my training". and store in a variable.
let si1 = "I am enjoying my training";

let r1 = si1.slice(0, 5);
 console.log(r1);


// replace "training" with "journey" in "I am enjoying my training". and store in a variable.
let  r2 = "I am enjoying my training";
let check3 = () => 
{
    for (let i = 0; i < r2.length; i++)
{
    if(r2.charAt(i) == 't' && r2.charAt(i+1) == 'r' && r2.charAt(i+2) == 'a')
    {
        return i;
    }
}
}

if(check() != s.length)
{
    let ne = r2.slice(0, check3());
    ne += "journey";
    console.log(ne);
}
else
{
    console.log(" my word is training presnt ")
}




// Print all the characters of a string using for loop. can use charAt() or str[];
let  m1 = "I am enjoying my training";
for (let i = 0; i < m1.length; i++)
{
    console.log(m1.charAt(i));
}


// store string str="a,b,c" into an array.
// let str  = {a, b, c};



// remove white spaces from the string str=" abc ".
let  m2 = " abc ";
let m3 = "";
for (let i = 0; i < m2.length; i++)
{
    if(m2[i] !== " "){m3 += m2.slice(i, i+1);}
}
console.log(m3);




// add two string using concat() function. and pring them. make sure there is space between concatinated elements.
let k = "con";
let o = "cat";
k += o;
console.log(k);