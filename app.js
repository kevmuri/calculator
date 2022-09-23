let num1 = null;
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

    if (display.innerHTML.length < 20) {
        display.innerHTML += value;
    }
}

function clear() {
    display.innerHTML = "0";
    num1 = null;
    operator = null;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

function setOperator(value) {
    switch (value) {
        case "+":
            operator = "add";
            num1 = Number(display.innerHTML);
            display.innerHTML = "0";
            break;
        case "-":
            operator = "subtract";
            num1 = Number(display.innerHTML);
            display.innerHTML = "0";
            break;
        case "*":
            operator = "multiply";
            num1 = Number(display.innerHTML);
            display.innerHTML = "0";
            break;
        case "/":
            operator = "divide";
            num1 = Number(display.innerHTML);
            display.innerHTML = "0";
            break;
    }
}

function operate() {
    console.log(operator)
    switch (operator) {
        case "add":
            display.innerHTML = num1 + Number(display.innerHTML);
            break;
        case "subtract":
            display.innerHTML = num1 - Number(display.innerHTML);
            break;
        case "multiply":
            display.innerHTML = num1 * Number(display.innerHTML);
            break;
        case "divide":
            if (display.innerHTML == "0") {
                error();
                break;
            }
            display.innerHTML = num1 / Number(display.innerHTML);
            break;
    }
}

function error() {
    display.innerHTML = "Error! Press Clear, doofus."
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    document.getElementById("clear").disabled = false;
}