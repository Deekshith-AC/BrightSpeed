// let d1  = document.getElementById('d1')
// let d2  = document.getElementById('d2')
// let d3  = document.getElementById('d3')

// d1.onclick = () => {
// console.log("D1 got Clicked");

// }

// d2.onclick = () => {
//     event.stopPropagation()
//     console.log("D2 got Clicked");
//     }

// d3.onclick = () => {
//     console.log("D3 got Clicked");
//     }

// d1.addEventListener('click',d1fun,true)
// d2.addEventListener('click',d2fun,true)
// d3.addEventListener('click',d3fun)

// function d1fun()
// {
//     console.log("D1 got Clicked");
// }

// function d2fun()
// {
//     console.log("D2 got Clicked");
// }

// function d3fun()
// {
//     console.log("D3 got Clicked");
// }






// function ajaxRequest(){
//     let dataXHR = new XMLHttpRequest();
//     dataXHR.open('GET', "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=ftchyox0mKaTDgR85FFni6sbI82W70KqXVbhDslY", true)
//     dataXHR.send()
//     dataXHR.onprogress = function () {console.log("On Progress");}
//     dataXHR.onload = function () {console.log(JSON.parse(this.responseText))}
    
// }
// ajaxRequest()



























// function FETCH_GET(){
//     fetch("https://api.imgflip.com/get_memes")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// }


// let val = {"title": "Something",
// "author": "I Typed"}

// function FETCH_POST(){
//     fetch("http://localhost:3000/posts/",{
//         method: "POST",
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(val)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// }

// let val2 = {"title": "################3#########",
// "author": "I Typed"}
// let id = 3
// function FETCH_PUT(){
//     fetch(`http://localhost:3000/posts/${id}`,{
//         method: "PUT",
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(val2)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// }



// var id2 = 3
// function FETCH_DELETE(){
//     console.log(id2)
//     id2++
//     console.log(id2)
//     fetch(`http://localhost:3000/posts/${id2}`,{
//         method: "DELETE",
//         headers: {'Content-type': 'application/json'},
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// }



















// function fun1() {
//     fetch("https://api.imgflip.com/get_memes")
//       .then(res => {
//         return res.json();
//       })
//       .then(data => console.log(data))
//   }
  
//   fun1();  









