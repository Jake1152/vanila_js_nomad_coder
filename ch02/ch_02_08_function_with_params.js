
// # case1
// function sayHello(nameOfPerson, ageOfPerson)
// {
// 	console.log("Hello my name is " + nameOfPerson + " and I'm " + ageOfPerson + "years old");
// }

// sayHello("Jinho", 12);
// sayHello("Jake", 24);
// sayHello("Jim", 42);

// # case2
// function plus(a, b)
// {
// 	console.log(a + b);
// }

// function divide(a, b)
// {
// 	console.log(a / b);
// }

// plus(42, 2);
// divide(42, 2);

// # case3
// function sayHello() {

// }

const player = {
	name: "Jinho",
	sayHello: function(otherPersonName) {
		console.log("Hello " + otherPersonName + " nice to meet you");
		console.log("My name is " + this.name);
	},
}

console.log(player.name);
player.sayHello("Jake");

