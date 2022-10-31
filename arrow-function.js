// old function
function add(num1, num2) {
    return num1 * num2;
}
const number = add(25, 12);
// console.log(number);

// function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

// function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

// arrow function

const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(15, 17);
console.log(sum4);


