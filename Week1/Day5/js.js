let d1  = document.getElementById('d1')
let d2  = document.getElementById('d2')
let d3  = document.getElementById('d3')

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

d1.addEventListener('click',d1fun,true)
d2.addEventListener('click',d2fun,true)
d3.addEventListener('click',d3fun)

function d1fun()
{
    console.log("D1 got Clicked");
}

function d2fun()
{
    console.log("D2 got Clicked");
}

function d3fun()
{
    console.log("D3 got Clicked");
}