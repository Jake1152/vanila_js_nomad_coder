const h1 = document.querySelector("div.hello:first-child h1");

/*
    js에서 css를 수정하는 것을 선호하지않는다고함
    원래 분리하는 것이 목적이기 떄문이다.

    class name으로 확인하는 것은 에러의 확률이 있다.
    직접 타이핑 해야하므로 오타를 낼 수 있다.

    그러므로 변수로 따로 뺴어서 쓰는 것을 추천한다.
    const clickedClass = "clicked";
    변수를 오타내게 되면 JS에서 알려준다.
*/
function handleH1Click() {
    const clickedClass = "clicked";
    if (h1.className === clickedClass)
        h1.className = "";
    else
        h1.className = clickedClass;
}

h1.addEventListener("click", handleH1Click);


// js는 css와 직접적으로 대화하지는 않음
// html을 바꾸면 html에서 css와 소통한다.