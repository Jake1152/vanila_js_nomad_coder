const h1 = document.querySelector("div.hello:first-child h1");

/*
    - classList를 이용해서 className을 수정하는 것이 아니라
    classList에 값을 추가하고 제거할 수 있다.
    기존 값을 변경하지 않고 가능하게된다.
    새로운 것이 추가되지 않았다면 이전 것이 쓰인다.

    - toggle을 씀으로써 아래 코드가 포함된다.
*/
function handleH1Click() {
    // const clickedClass = "clicked";
    // toggle을 씀으로써 아래 코드가 포함된다.
    // if (h1.classList.contains(clickedClass))
    //     h1.classList.remove(clickedClass);
    // else
    //     h1.classList.add(clickedClass);
    h1.classList.toggle("clicked");
    // h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleH1Click);
