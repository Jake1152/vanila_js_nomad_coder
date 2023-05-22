// const hellos = document.getElementsByClassName("hello");
// // console.log(title.id)
// console.log(hellos);
// const title = document.getElementsByTagName("h1");
// // getElementsByTagName는 tag의 이름을 말한다. div, h1, form 등등
// console.log(title);

// # 3 query, querySelector, querySelectorAll
// querySelector는 element를 CSS방식으로 검색할 수 있다.
// const title = document.querySelector("h1");
// const title = document.querySelector(".hello h1");

// 다른 같은 tag구조와 class를 가져오지만 h1 태그 정보만 가져오는 것이 아니라 모든 object 정보를 가져온다.
// querySelectorAll은 selector안의 조건에 부합하는 모든 element를 가져온다.
// const title = document.querySelectorAll(".hello h1");
// console.log(title);

// const title = document.querySelector(".hello h1:first-child");
// console.log(title);

// # 3-1 querySelector는 id로도 검색가능
// const title = document.querySelector("#grab1");
// 아래 코드와 동일한 동작을 함
// const title = document.getElementById("grab1");
// 하지만 해당 id의 다른 tag나 class등을 가져오는 것은 getElement로는 불가능
// const title = document.querySelector("#grab1 h1");
// const title = document.querySelector("#grab1 form");
// console.log(title);

// # 3-2 change innerText using querySelector
const title = document.querySelector(".hello h1");
title.innerText = "hi";