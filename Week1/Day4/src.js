// let in1 = document.querySelector("#input1")
// let in2 = document.querySelector("#input2")
// let h3 = document.querySelector("#h33")
// function showInput(){
//     h3.textContent = in1.value + " and " + in2.value 
// }



let parent = document.querySelectorAll("#parent")
let btn = document.querySelector("#btn")

class Person{
    constructor(name, age, city){
        this.name = name
        this.age = age
        this.city = city
    }
}


let p1 = new Person("Deekshith A C", 21, "Chrompet")
let p2 = new Person("Durga Prasad", 22, "Saidapet")
let p3 = new Person("Vishnu", 22, "Allandur")


let p = [p1, p2, p3]

let i = 0;

function show(){
    let m = document.createElement('h1')
    let a = p[i]
    m.innerText =`Name: ${a.name}, Age: ${a.age}, City: ${a.city}`
    m.addEventListener('click',()=>{
        deleteObj(a.name)
    })
    parent.appendChild(m)
    i++ 
    if( i == p.length ){
        btn.disabled = true
    }
}



function deleteObj(name){
     for( let j = 0; j < p.length; j++ ){
        if( p[j].name == name )
        {
            p.splice(j, 1)
        }
    }
    parent.innerText = ""
    if( p.length > 0 ){btn.disabled = false}    
    i = 0;
}

 





// let parent = document.querySelector("#parent")
// let username = document.querySelector("#username")
// let password = document.querySelector("#password")


// function show(){
//     event.preventDefault()

//     if(username.value !== "" && password.value !== ""){
//     let m = document.createElement('h1')
//     m.innerText =`Name: ${username.value}, Password: ${password.value}`
//     let x = m
//     parent.appendChild(x)
//     password.value = ""
//     username.value = ""
//     }
// }
