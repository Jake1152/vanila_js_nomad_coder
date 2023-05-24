// const title = document.querySelector(".hello:first-child h1");
// console.log(title);
// console.dir(title);

// title.innerText = "Hello .hello:first-child h1";
// title.style.color = "red"


const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    // console.log("title was clicked!");
    // title.style.color = ""
    title.style.background = "linear-gradient(to right, red, blue)";
}


// ()를 붙여주어야 호출되지만 바로 실행할 마음이 없고 event가 발생하면 실행하게 하고자할때
// 비동기로 handleTitleClick함수를 넘기고 이벤트가 발생했을때 넘겨준 handleTitleClick함수가 실행되게 한다.
title.addEventListener("click", handleTitleClick)
// handlerTitleClick();