let num1 = null;
let operator = null;
const display = document.getElementById("display")
const numButtons = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");

document.getElementById("clear").addEventListener("click", function(){clear()});
document.getElementById("operate").addEventListener("click", function(){operate()});

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(){setOperator(this.innerHTML)});
}

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", function(){appendNumber(this.innerHTML)});
}

function appendNumber (value) {
    if (display.innerHTML == "0") {
        display.innerHTML= "";
    }
    display.innerHTML += value;
}

function clear () {
    document.getElementById("display").innerHTML = "0";
    num1 = null;
    operator = null;
}

function setOperator (value) {
    switch (value) {
        case "+":
            operator = "add";
            num1 = Number(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "0";
            break;
        case "-":
            operator = "subtract";
            num1 = Number(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "0";
            break;
        case "x":
            operator = "multiply";
            num1 = Number(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "0";
            break;
        case "/":
            operator = "divide";
            num1 = Number(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "0";
            break;
    }
}

function operate () {
    console.log(operator)
    switch (operator) {
        case "add":
            document.getElementById("display").innerHTML = num1 + Number(document.getElementById("display").innerHTML);
            break;
        case "subtract":
            document.getElementById("display").innerHTML = num1 - Number(document.getElementById("display").innerHTML);
            break;
        case "multiply":
            document.getElementById("display").innerHTML = num1 * Number(document.getElementById("display").innerHTML);
            break;
        case "divide":


            document.getElementById("display").innerHTML = num1 / Number(document.getElementById("display").innerHTML);
            break;
    }
}