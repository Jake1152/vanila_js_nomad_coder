const h1 = document.querySelector("div.hello:first-child h1");

/*
    js에서 css를 수정하는 것을 선호하지않는다고함
    원래 분리하는 것이 목적이기 떄문
*/
function handleH1Click() {
    const current_color = h1.style.color;
    let new_color;
    if (current_color === "green")
        new_color = "tomato";
    else
        new_color = "green";
    h1.style.color = new_color;
}

h1.addEventListener("click", handleH1Click);
