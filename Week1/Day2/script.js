class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
     BirthDate = function(...n){

        let DateOfBirth = new Date(...n)

       return DateOfBirth
        
        
     }
}

let p1 = new Person("Deekshi", 21);



let z = p1.BirthDate(2002,0,20,4, 35, 0)
console.log(z) 