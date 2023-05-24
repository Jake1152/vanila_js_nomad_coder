const clock = document.querySelector("h2#clock");

clock.innerText = "blahs"

function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 1000);