// Create a JavaScript program that manages a simple student information system. The program should have the following functionalities:
// Create an object called student with the following properties:

// Name (string) Age (number) Grade (string)

// Implement a method within the student object called displayInfo that displays the student's name, age, and grade.

// Prompt the user to enter the student's name, age, and grade, and store the values in the student object.

// Call the displayInfo method to display the student's information.


class student 
{
    constructor( name, age, grade)
    {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    display= () => 
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.grade);
    }
}

let n = prompt("Enter your name: ");
let a = prompt("Enter your age: ");
let g = prompt("Enter your grade: ");
let st1 = new student(n, a, g);
st1.display();