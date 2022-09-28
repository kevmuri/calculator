let num1 = null;
let num2 = null;
let result = null;
let operator = null;
const display = document.getElementById("display");
const numButtons = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const buttons = document.querySelectorAll("button");

document.getElementById("clear").addEventListener("click", function(){clear()});
document.getElementById("operate").addEventListener("click", function(){operate()});

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(){setOperator(this.innerHTML)});
}

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", function(){appendNumber(this.innerHTML)});
}

function appendNumber(value) {
    if (display.innerHTML == "0") {
        display.innerHTML= "";
    }

    if (display.innerHTML.length < 18) {
        display.innerHTML += value;
    }
}

function clear() {
    display.innerHTML = "0";
    num1 = null;
    num2 = null;
    result = null;
    operator = null;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

function setOperator(value) {
    if (operator != null) {
        num2 = Number(display.innerHTML);    
        operate();
    }
    switch (value) {
        case "+":
            operator = "add";
            break;
        case "-":
            operator = "subtract";
            break;
        case "*":
            operator = "multiply";
            break;
        case "/":
            operator = "divide";
            break;
    }
    num1 = Number(display.innerHTML);
    display.innerHTML = "0";
}

function operate() {
    console.log(operator)
    num2 = Number(display.innerHTML);
    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 == "0") {
                error();
                return;
            }
            result = num1 / num2;
            break;
    }
    display.innerHTML = result;
    num1 = result;
    operator = null;
}

function error() {
    display.innerHTML = "DIV 0 ERROR!"
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    document.getElementById("clear").disabled = false;
}