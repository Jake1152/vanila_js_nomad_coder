// const calculator = {
//     add: function(a, b){
//         // return(a + b);
//         alert (a + b);
//     },

//     minus: function(a, b){
//         alert(a - b);
//     },

//     div: function(a, b){
//         alert(a / b);
//     },

//     mul: function(a, b){
//         alert(a * b);
//     },

//     mod: function(a, b){
//         alert(a % b);
//     },

//     pow: function(a, b){
//         alert(a ** b);
//     },
// };

// console.log(calculator.add(5, 2));

// calculator.minus(5, 2);
// calculator.div(5, 2);
// calculator.mul(5, 2);
// calculator.mod(5, 2);
// calculator.pow(5, 2);
// alert();


// case1
// const age = 25;
// function calculatorKRAge(ageOfForeigner)
// {
//     // ageOfForeigner + 2;
//     return ageOfForeigner + 2;
// }

// const krAge = calculatorKRAge(age);
// // const krAge = calculatorKRAge(25);
// console.log(krAge);


// case2
const age = 25;
function calculatorKRAge(ageOfForeigner)
{
    ageOfForeigner + 2;
    return "hello";
}

const krAge = calculatorKRAge(age);
// const krAge = calculatorKRAge(25);
console.log(krAge);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function(a, b){
        return(a - b);
    },

    div: function(a, b){
        return(a / b);
    },

    mul: function(a, b){
        return(a * b);
    },

    mod: function(a, b){
        return(a % b);
    },

    pow: function(a, b){
        return(a ** b);
    },
}

const plusResult = calculator.plus(42, 4);
console.log(plusResult);
const minusResult = calculator.minus(42, 4);
console.log(minusResult);
const mulResult = calculator.mul(42, 4);
console.log(mulResult);
const divResult = calculator.div(42, 4);
console.log(divResult);
const modResult = calculator.mod(42, 4);
console.log(modResult);