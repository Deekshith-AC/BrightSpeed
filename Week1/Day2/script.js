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

// let p1 = new Person("Deekshi", 21);



// let z = p1.BirthDate(2002,0,20,4, 35, 0)
// console.log(z) 



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