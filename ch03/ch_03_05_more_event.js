// const title = document.querySelector(".hello:first-child h1");
// console.log(title);
// console.dir(title);

// title.innerText = "Hello .hello:first-child h1";
// title.style.color = "red"


const title = document.querySelector(".hello:first-child h1");
console.dir(title);

function handleTitleClick() {
    title.innerText = "mouse click!";
}

function handleMouseEnter() {
    title.innerText = "mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "mouse is gone!";
}

// event 변경가능
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);


