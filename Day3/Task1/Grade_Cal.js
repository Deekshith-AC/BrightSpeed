// 2. Grade Calculation: Write a JavaScript program that takes a student's numerical grade as input (ranging from 0 to 100) and outputs their corresponding letter grade based on the following scale:
// 90 or above: A 80-89: B 70-79: C 60-69: D Below 60:F


let res = (ng) => 
{
    if(ng >= 90){return A;}
    else if(ng <= 89 && ng >= 80){return B;}
    else if(ng <= 79 && ng >= 70){return B;}
    else if(ng <= 69 && ng >= 60){return C;}
    else if(ng < 60){return D;}
}

let grade = parseInt(prompt("Enter the  to Numerical Grade"));
 let b = res(grade)

console.log("Your Grade : " + b);