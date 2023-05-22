// document는 js에서 html로 접근하는 방법 
// document.getElementById("title")
// null
{/* <h1 id="title">

// const title = d*/}
const title = document.getElementById("title");
title.innerHTML = "Got cha";

// console.log(title)
// console.dir(title)

console.log(title.id)
console.log(title.className)