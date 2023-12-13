//Function OverRiding
// class Person{

//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//      BirthDate = function(...n){

//         let DateOfBirth = new Date(...n)
//        return DateOfBirth
//      }
// }

// class Man extends Person{
//     constructor(name, age, salary){
//     super(name, age)
//     this.salary = salary
//     }

//     displaySalary = function(n){
//         console.log(n)
//     }

//     BirthDate = function(...m){
//         let DateOfBirth = new Date(...m)
//         return DateOfBirth
//     }
// }

// let p1 = new Person("Deekshith", 21)
// console.log(p1.BirthDate(2002, 0, 20, 5, 35, 0))
// let m1 = new Man("Deekshith A C",21, 7500)
// m1.displaySalary(m1.salary)
// console.log(p1.BirthDate(2002, 0, 23, 5, 35, 0))


//function

// function Div(a,b){
//     if(b != 0){return a/b}
//         console.log("Cannot divide by zero");
//         }

// function Mul(a,b){
//     return a*b
//     }

// let Sub = function(a,b){ return a-b}
// let Add = (a,b) => a+b

// let num1 = parseInt(prompt("Enter First Value"))
// let num2 = parseInt(prompt("Enter Second Value"))
// let k = prompt("Enter the Operator (+, -, /, *)")

// if(k == "+"){alert(Add(num1,num2))}
// else if(k == "-"){ alert(Sub(num1,num2))}
// else if(k == "*"){ alert(Mul(num1,num2))}
// else if(k == "/"){ alert(Div(num1,num2))}
// else { alert("Invalid operator")}



//rest and spread


// function sum(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//       total += number;
//     }
//     return total;
//   }
  
//   const result1 = sum(1, 2, 3);
//   const result2 = sum(5, 10);
  
//   console.log(result1, result2);
  
// const fruits = ["apple", "banana"];
// const citrus = ["orange", "grapefruit"];

// const allFruits = [...fruits, ...citrus];




//average of marks
// let z = []
// let m = 1;
// while(m){
//     m = parseInt(prompt("Enter the marks of next student: (Enter zero if all marks enetered): "))
//     z.push(m)
// }
// let l = z.length
// let sum = 0;
// for(let m of z){
//     sum += m
// }
// let avg = sum / l
// alert(`The total Average is ${avg}`)

//reduce the each value of the elements in an array by 10%


let prices = [350, 450, 850, 900]
for(let p = 0; p < prices.length; p++) {
    prices[p] = prices[p] - prices[p]*0.1
}
console.log(prices);





