"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var number1 = parseInt(prompt('Enter First Number '));
var number2 = parseInt(prompt('Enter Second Number '));
var Operator = prompt('Choose an operator from list?( +, -, *, /, Power, sqrt) ');
if (Operator == "+") {
    console.log(number1, "+", number2, "=", number1 + number2);
}
else if (Operator == "-") {
    console.log(number1 - number2);
}
else if (Operator == "*") {
    console.log(number1 * number2);
}
else if (Operator == "/") {
    console.log(number1 / number2);
}
else {
    console.log("enter valid operator");
}
