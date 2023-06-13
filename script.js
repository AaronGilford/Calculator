const add = (a, b) => {return a + b;}
const subtract = (a, b) => {return a - b;}
const multiply = (a, b) => {return a * b;}
const divide = (a, b) => {return a / b;}

let a;
let b;
let operator;

const operate = function(a, b, operator) {
    if (operator == "+") {add(a, b);}
    else if (operator == "-") {subtract(a, b);}
    else if (operator == "*") {multiply(a, b);}
    else if (operator == "/") {divide(a, b)};
}