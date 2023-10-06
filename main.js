

const add = function (a, b) {
    return a + b;
}

const substract = function (a, b) {

    return a - b;
}

const multiply = function (a, b) {

    return a * b;
}

const divide = function (a, b) {

    return a / b;
}

const operate = function (operator, num1, num2) {

    a = Number(num1);
    b = Number(num2);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}


let firstNumber = '';
let previousNumber = '';
let theOperator = null;


const current = document.querySelector('.current');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const buttons = document.querySelectorAll('.btn');
const previous = document.querySelector('.previous');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        btnNumber(e.target.textContent);
    });
});

function btnNumber(num) {
    firstNumber += num;
    current.textContent = firstNumber;
}

operators.forEach(button => {
    button.addEventListener('click', function (e) {
        op(e.target.textContent);
    });
});

function op(op) {
    previousNumber = `${firstNumber} ${op} `;
    theOperator = op;
    previous.textContent = previousNumber;
    current.textContent = ' ';
}


equal.addEventListener('click', function () {

    output();
});

function output() {

    if (theOperator && previousNumber) {
        firstNumber = operate(theOperator, current.textContent, firstNumber);
        current.textContent = firstNumber;
        previousNumber = '';
        theOperator = null;
    }
}