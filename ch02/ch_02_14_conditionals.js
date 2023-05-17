
// const age = prompt("How old are you?")

// console.log(age);

// 변수의 type을 확인하게 하는 typeof
// console.log(typeof age);

// console.log(parseInt(age));
// console.log(typeof parseInt(age));
// console.log(typeof age, typeof (age));

const age = parseInt(prompt("How old are you?"))
console.log(age)
if (isNaN(age))
	console.log("age is NaN")
else
	console.log("age is number")