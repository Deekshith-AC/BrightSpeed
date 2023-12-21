// var app = angular.module('hello', [])

// app.controller("CarController", ["$scope", "$window", function (s, w) {
//     let parent = document.querySelector("#resultDiv")
//     let HA = document.querySelector("#HistoryAdd")

//     s.result = 0
//     s.array = []
//     s.ar = []
//     s.ar.push(20)
//     s.ar.push(20)
//     s.ar.push(20)


//     class valueSet {
//         constructor(o,a,b,r) {
//             this.o = o
//             this.a = a
//             this.b = b
//             this.r = r
//         }
//     }

//     s.Add = function () {

//         console.log("Addition");
//         s.num1 = s.firstValue
//         s.num2 = s.secondValue
//         s.result = s.num1 + s.num2
//         s.array.push(new valueSet("Addition",s.num1, s.num2, s.result))
//         parent.innerHTML = s.result
//         console.log(`firstValue: ${s.num1}, secondValue: ${s.num2}, result: ${s.result}`)
//         s.firstValue = ""
//         s.secondValue = ""
//         console.log(s.array)
//     }

//     s.Mutiply = function () {
//         console.log("Mutiplication");
//         s.num1 = s.firstValue
//         s.num2 = s.secondValue
//         s.result = s.num1 * s.num2
//         s.array.push(new valueSet("Mutiplication",s.num1, s.num2, s.result))
//         parent.innerHTML = s.result
//         console.log(`firstValue: ${s.num1}, secondValue: ${s.num2}, result: ${s.result}`)
//         s.firstValue = ""
//         s.secondValue = ""
//     }

//     s.Subtract = function () {
//         console.log("Subtraction");
//         s.num1 = s.firstValue
//         s.num2 = s.secondValue
//         s.result = s.num1 - s.num2
//         s.array.push(new valueSet("Subtraction",s.num1, s.num2, s.result))
//         parent.innerHTML = s.result
//         console.log(`firstValue: ${s.num1}, secondValue: ${s.num2}, result: ${s.result}`)
//         s.firstValue = ""
//         s.secondValue = ""
//     }

//     s.Divide = function () {
//         console.log("Division");
//         s.num1 = s.firstValue
//         s.num2 = s.secondValue
//         if (s.num2 !== 0) {
//             s.result = s.num1 / s.num2
//             s.array.push(new valueSet("Division",s.num1, s.num2, s.result))
//             parent.innerHTML = s.result
//             console.log(`firstValue: ${s.num1}, secondValue: ${s.num2}, result: ${s.result}`)
//             s.firstValue = ""
//             s.secondValue = ""
//         }
//         else {
//             parent.innerHTML = "Second value cannot be Zero"
//             s.firstValue = ""
//             s.secondValue = ""
//         }
//     }




//     s.History = function () {
//         console.log(s.array);
//         s.array.forEach(element => {
//             HA.innerHTML += `<h3>Operation:${element.o}, firstValue: ${element.a}, secondValue: ${element.b}, Result: ${element.r}</h3>`
//         });
//     }





//     s.js_ppt = function () {
//         w.location.href = "https://docs.google.com/presentation/d/1CacUS2azB9demQ128ENLkQaK4rPV1ufIwrcbiVGQ1uo/edit#slide=id.g252861f7f54_0_144"
//     }
// }])





// var app = angular.module('hello', [])

// app.controller("Hide&Seek", ["$scope", "$window", function (s, w) {
//     s.decide = false
//     s.some = false
//     s.show = function (){
//         console.log(s.inputUser);
//     if(s.inputUser === "Deekshith"){
//         s.decide = true
//     }}
// }]
// )








// var app = angular.module('hello', [])

// app.controller("Toogle", ["$scope", "$window", function (s, w) {
//     s.some = true
//     s.emos = true
//     s.show = function (){
//         if(s.some){
//             s.some = false
//             s.emos = true
//         }
//         else{
//             s.some = true
//             s.emos = false
//         }
//     }
// }]
// )


// var app = angular.module('hello', [])

// app.controller("Table", ["$scope", "$window", function (s, w) {
//     s.array = [
//         {name: "abc", value: 1},
//         {name: "def", value: 2},
//         {name: "ghi", value: 3},
//         {name: "jkl", value: 4},
//         {name: "mno", value: 5},
//         {name: "pqr", value: 6},
//         {name: "stu", value: 7},
//         {name: "vwx", value: 8},
//         {name: "yz", value: 9}
//     ]
// }]
// )












// var app = angular.module('hello', [])
// app.controller("Table1", ["$scope", "$window", function (s, w) {

//     s.array = []
//     class data{
//         constructor(name, location){
//             this.name = name
//             this.location = location
//         }
//     }

//     s.add = function(){
//         s.Name = s.name
//         s.Location = s.location
//         s.array.push(new data(s.Name, s.Location))
//     }
// }]
// )