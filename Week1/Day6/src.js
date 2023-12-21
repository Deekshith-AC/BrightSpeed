// let array = ["One", "Two", "Three", "Four", "Five", "Six"]
// let UPArray = []

// // let m = array.forEach((elem, index) => {
// //     UPArray.push(elem.toUpperCase())
// // })


// // console.log(m);
// let arr = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// let median = 0
// UPArray = array.filter((elem, index) => elem.length >= 4)
// console.log(UPArray);
// UPArray = array.map((elem, index) => elem.toUpperCase())
// console.log(UPArray);
// median = arr.reduce((acc, elem, index) => acc+elem)
// console.log(median);
// console.log(median/arr.length)
// console.log(array);




// let x = document.querySelector('#divi')
function some(){
    let key = "ftchyox0mKaTDgR85FFni6sbI82W70KqXVbhDslY"
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(res => {
        console.log(typeof res);
        console.log(res);``
        return res.json()})
    .then(data => {console.log(data)})
}
some()

// function print(url){
//     let z = document.createElement("img")
//     z.src = url
//     z.height = 500
//     x.appendChild(z)
// }






// const jsonString = '{"name": "John", "age": 30}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

















// REMEMBER THAT FOREACH IN ARRAY DOES NOT RETURN ANY VALUE - UNDEFINED
// FOREACH CAN ONLY BE USED FOR ITERATING AND USING THE ELEMTS WHILE ITERATING

// INIDE THE FUNCTION OF EVENTLISTENER YOU CAN JUST add "event.target.id"  AS A PARAMETER TO THE FUNVTION IN WHICH YOU WANT TO USE THE ID






// let string = "sai charan is a good boy"
// let arrray = [...string]
// let ans = ""

// if(arrray[0] !== " "){
//     arrray[0] = arrray[0].toUpperCase()
// }

// for(let i = 0; i < arrray.length; i++){
//  if(arrray[i] === " "){
//     arrray[i+1] = arrray[i+1].toUpperCase()
//  }
// }

// console.log(arrray.toString());

// for(let i = 0; i < arrray.length; i++){
//     ans =  ans + arrray[i]
// }
// console.log(ans);
 


   