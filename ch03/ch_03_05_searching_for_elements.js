const h1 = document.querySelector("div.hello:first-child h1");

function handleH1Click() {
	h1.style.color = "green";
    h1.innerText = "Click me!";
}

function handleMouseEnter() {
	h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
	h1.innerText = "Mouse is gone!"
}

function handlerWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}


function handleWindowOffline() {
    alert("wifi off-line");
}

function handleWindowOnline() {
    alert("wifi off-line");
}

h1.addEventListener("click", handleH1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handlerWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);