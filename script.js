const add = (a, b) => {return +(a + b).toFixed(10);}
const subtract = (a, b) => {return +(a - b).toFixed(10);}
const multiply = (a, b) => {return +(a * b).toFixed(10);}
const divide = (a, b) => {return +(a / b).toFixed(10);}

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
    } else if (operator == "/" && b !== 0) {
        display.textContent = divide(a, b)
    } else if (operator == "/" && b == 0) {
        display.textContent = "No dividing by 0!";
    }
}

let displayValue = "";

let display = document.querySelector('#display');
let numberBtns = document.querySelectorAll(".num");

for (i of numberBtns) {
    i.addEventListener('click', (e) => {
        displayValue = displayValue + e.target.textContent;
        display.textContent = displayValue;
        if (displayValue.includes('.')) {
            document.querySelector('#decimal').disabled = true;
        }
    })
}

document.addEventListener('keypress', (e) => {
    if (isFinite(e.key) === true) {
        displayValue = displayValue + e.key;
    }
    if (e.key === '.' && !displayValue.includes('.')) {
        displayValue = displayValue + e.key;
        document.querySelector('#decimal').disabled = true;
    } 
    display.textContent = displayValue;
})


let operatorBtns = document.querySelectorAll('.operator');

for (j of operatorBtns) {
    j.addEventListener('click', (e) => {
        if (a !== 0) {
            b = parseFloat(displayValue);
            operate();
            a = parseFloat(display.textContent);
            b = 0;
            displayValue = "";
            operator = e.target.textContent;
        } else {
            a = parseFloat(displayValue);
            displayValue = "";
            operator = e.target.textContent;
        }
        document.querySelector('#decimal').disabled = false;
    })
}

document.addEventListener('keydown', (e) => {
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        e.preventDefault();
        if (a !== 0) {
            b = parseFloat(displayValue);
            operate();
            a = parseFloat(display.textContent);
            b = 0;
            displayValue = "";
            operator = e.key;
        } else {
            a = parseFloat(displayValue);
            displayValue = "";
            operator = e.key;
        }
        document.querySelector('#decimal').disabled = false;
    }
})

let equalsBtn = document.querySelector('#equals');

equalsBtn.addEventListener('click', () => {  
    if (displayValue == "") {
        display.textContent = "Error"
    } else {
        b = parseFloat(displayValue);
        operate();
        a = 0;
        b = 0;
        displayValue = "";
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === '=' || e.key === 'Enter') {
        e.preventDefault();
        if (displayValue == "") {
            display.textContent = "Error"
        } else {
            b = parseFloat(displayValue);
            operate();
            a = 0;
            b = 0;
            displayValue = "";
        }
    }
})

let clearBtn = document.querySelector('#clearBtn')

clearBtn.addEventListener('click', () => {
    displayValue = "";
    display.textContent = "Cleared";
    a = 0;
    b = 0;
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'c') {
        e.preventDefault();
        displayValue = "";
        display.textContent = "Cleared";
        a = 0;
        b = 0;
    }
})

let backspaceBtn = document.querySelector('#backspaceBtn');

backspaceBtn.addEventListener('click', () => {
    displayValue = displayValue.slice(-1);
    display.textContent = displayValue;
})

document.addEventListener('keydown', (e) => {
    if(e.key === "Backspace" || e.key === "Delete") {
        if (displayValue.charAt(displayValue.length -1) === '.') {
            document.querySelector('#decimal').disabled = false;
        }
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;
    }
})
