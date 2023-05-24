const loginForm = document.querySelector();
const loginInput = document.querySelector();
const greeting = document.querySelector();

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLonginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setIntem(USERNAME_KEY, user__);
    paintGreetings(username)l
}

