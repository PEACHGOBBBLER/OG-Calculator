var output = document.getElementById("output");

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