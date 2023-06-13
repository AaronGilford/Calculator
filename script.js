const add = (a, b) => {return a + b;}
const subtract = (a, b) => {return a - b;}
const multiply = (a, b) => {return a * b;}
const divide = (a, b) => {return a / b;}

let a;
let b;
let operator;

const operate = function() {
    if (operator == "+") {
        display.textContent = add(a, b);
    } else if (operator == "-") {
        display.textContent = subtract(a, b); 
    } else if (operator == "*") {
        display.textContent = multiply(a, b);
    } else if (operator == "/") {
        display.textContent = divide(a, b)};
}

let displayValue = "";

let display = document.querySelector('#display');
let numberBtns = document.querySelectorAll(".num");

for (i of numberBtns) {
    i.addEventListener('click', (e) => {
        displayValue = displayValue + e.target.textContent;
        display.textContent = displayValue;
    })
}

let operatorBtns = document.querySelectorAll('.operator');

for (j of operatorBtns) {
    j.addEventListener('click', (e) => {
        a = parseInt(displayValue);
        displayValue = "";
        operator = e.target.textContent;
    })
}

let equalsBtn = document.querySelector('#equals');

equalsBtn.addEventListener('click', () => {   
    b = parseInt(displayValue);
    operate();
    displayValue = "";
})

let clearBtn = document.querySelector('#clearBtn')

clearBtn.addEventListener('click', () => {
    displayValue = "";
    display.textContent = "Cleared";
})