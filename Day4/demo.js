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

let s1 = new student("Deekshith", 10);
let s2 = new student("Pavan", 15);
let s3 = new student("Yashwanth", 20);
let s4 = new student("Rajesh", 25);
let s5 = new student("Girish", 30);

let stu = [s1, s2, s3, s4, s5];
let new_s = stu.filter((s) => s.age > 20);
console.log(new_s);