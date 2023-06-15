const add = (a, b) => {return (a + b).toFixed(8);}
const subtract = (a, b) => {return (a - b).toFixed(8);}
const multiply = (a, b) => {return (a * b).toFixed(8);}
const divide = (a, b) => {return (a / b).toFixed(8);}

let a = 0;
let b = 0;
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
        if (a !== 0) {
            b = parseInt(displayValue);
            operate();
            a = parseInt(display.textContent);
            b = 0;
            displayValue = "";
            operator = e.target.textContent;
        } else {
            a = parseInt(displayValue);
            displayValue = "";
            operator = e.target.textContent;
        }
    })
}

let equalsBtn = document.querySelector('#equals');

equalsBtn.addEventListener('click', () => {   
    b = parseInt(displayValue);
    operate();
})

let clearBtn = document.querySelector('#clearBtn')

clearBtn.addEventListener('click', () => {
    displayValue = "";
    display.textContent = "Cleared";
    a = 0;
    b = 0;
})