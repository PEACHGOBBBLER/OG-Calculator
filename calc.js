let output = document.getElementById("output");
let buttonsValue = document.querySelector(".buttons");
var numbers = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var ops = "";
var op1 = "";
var op2 = "";
var op3 = "";

if (output.textContent.length > 12) {
    output.textContent = output.textContent.substring(0, 12);
}

function display(value) {
    if (output.textContent == "|") {
    output.textContent = "";
    }

    output.textContent += value;

    op = output.textContent.match(/\*|\/|\+|\-/);

    numbers = output.textContent;
    numbers = numbers.split("+").join(",").split("-").join(",").split("*").join(",").split("/").join(",").split(",");
    num1 = numbers[0];
    num2 = numbers[1];
    num3 = numbers[2];
    num4 = numbers[3];
    num5 = numbers[4];

 
    
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

function operate(num1, op, num2) {
    if (op == "+") {
        addition(num1, num2);
        output.textContent = sum;
    } else if (op == "-") {
        subtraction(num1, num2);
        output.textContent = sum;
    } else if (op == "*") {
        multiplication(num1, num2);
        output.textContent = sum;
    } else if (op == "/") {
        division(num1, num2);
        output.textContent = sum; 
    }
}