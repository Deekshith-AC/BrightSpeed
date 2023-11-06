class Animal{

speak(){
console. log("Animal makes sound");

}
}
class Dog extends Animal{
constructor (name, age){
super();

this. name=name;
this.age=age;

}
speak(){

console. log("Dog barks");
}

}

let di=new Dog("Doggy",12);
// console. log(di.name);
// di.speak();



class student 
{
    constructor( name, age)
    {
        this.name = name;
        this.age = age;
    }

    getName = () => 
    {
        console.log(this.name);
    }
}

let s1 = new student("Deekshith", 21);
s1.getName();
let s2 = new student("Pavan", 20);
s2.getName();