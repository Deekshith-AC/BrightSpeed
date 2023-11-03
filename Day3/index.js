let z = "";
for (var i = 0; i < 4; i++) {
    z += "*";
    console.log(z);
}

let fact = parseFloat(prompt("Enter the number to find the factorial"));
var fac = 1;
for(var i = 1; i <= fact; i++)
{
    fac *= i;
}
console.log(fac);



var op = prompt("Enter the Operation to perform (add, sub, mul, div)");
let one = parseFloat(prompt("Enter the first number"));
let two = parseFloat(prompt("Enter the second number"));
var ad = (a, b) => a+b;
var sb = (a, b) => a-b;
var ml = (a, b) => a*b;
var dv = (a, b) => a/b;
var res = 0;
if(op == "add")
{
res = ad(one, two);
}
else if(op == "sub")
{
res = sb(one, two);
}
else if(op == "mul")
{
res = ml(one, two);
}
else if(op == "div")
{
    if(two!= 0){res = dv(one, two);}
    else{console.log("Can't Divide by zero")}

}
else
{
    console.log("Wrong Input")
}
console.log(res);