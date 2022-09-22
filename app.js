let num1 = null;
let num2 = null;
const numButtons = document.getElementsByClassName("number");

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", function(){appendNumber(this.innerHTML)});
}

function appendNumber (value) {
    let display = document.getElementById("display")
    if (display.innerHTML == "0") {
        display.innerHTML= "";
    }
    display.innerHTML += value;
}