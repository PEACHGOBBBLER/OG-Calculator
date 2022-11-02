let output = document.getElementById("output");
let buttonsValue = document.querySelector(".buttons");



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
    num1 = Number(numbers[0]);
    num2 = Number(numbers[1]);
    num3 = Number(numbers[2]);
    num4 = Number(numbers[3]);
    num5 = Number(numbers[4]);

}

function operate(num1, op, num2) {
    if (op == "+") {
        output.textContent = num1 + num2;
    }
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

