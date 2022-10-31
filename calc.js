let output = document.getElementById("output");
let buttonsValue = document.querySelector(".buttons");
var maxlength = 12;


$('p.clacText').text(function (_, text) {
    return $.trim(text).substring(0, maxlength);
});

function display(value) {
    if (output.textContent == "|") {
    output.textContent = "";
    }

    output.textContent += value;
}

function back() {
    let str = output.textContent;
    str = str.slice(0, -1);
    output.textContent = str;

    if (output.textContent == "") {
        output.textContent = "|";
    }
}

function removeAll() {
    output.textContent = "|";
    return output;
}

function addition(num1, num2) {
    sum = num1 + num2;
    return sum;
}

function subtraction(num1, num2) {
    sum = num1 - num2;
    return sum;
}

function multiplication(num1, num2) {
    sum = num1 * num2;
    return sum;
}

function division(num1, num2) {
    sum = num1 / num2;
    return sum;
}

function operate(num1, opChosen, num2) {
    if (opChosen == "+") {
        addition(num1, num2);
    } else if (opChosen == "-") {
        subtraction(num1, num2);
    } else if (opChosen == "*") {
        multiplication(num1, num2);
    } else {
        division(num1, num2);
    }
}