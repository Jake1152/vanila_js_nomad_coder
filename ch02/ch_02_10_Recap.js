const days = ["mon", "Tue", "Wed"];
// meaning이 필요할때
// group으로 해야할떄
// Object를 쓴다.Object를

/*
    our obejct 
*/
const player = {
    name: "Jake",
    age: 4242,
};

// player.name;
// console.log();

console.log(player, console);
player.name = "nocolas";
console.log(player.name);
console.log(player);
player.sexy = true;
console.log(player);

// a, b are placeholder
// function plus(a, b)
function plus(pork, salmon)
{
    console.log(pork + salmon);
}

plus(1, 2);
plus(4, 42);
plus(5, 42);
// alert("lalalla");

/*
- potato

*/
function minusFive(potato)
{
    console.log(potato - 5);
}
minusFive(1,2,3,4,5);
// It does not matter.

// Does not work, cause have not defined potato variable in thie scope.
minusFive(potato);


const calculator = {
    add: function(a, b){
        console.log(a + b);
    },

    minus: function(a, b){
        console.log(a - b);
    },

    div: function(a, b){
        console.log(a / b);
    },

    mul: function(a, b){
        console.log(a * b);
    },

    mod: function(a, b){
        console.log(a % b);
    },

    pow: function(a, b){
        console.log(a ** b);
    },
};

calculator.add(5, 2);
calculator.minus(5, 2);
calculator.div(5, 2);
calculator.mul(5, 2);
calculator.mod(5, 2);
calculator.pow(5, 2);
// console.log();