// Basic Arithmetic calculator 

// ask users for operation they would like to perform 
const operation = prompt(`Please type in the symbol of the math operation you want to perform:
  + for addition
  - for subtraction
  * for multiplication
  / for division`);

/* ask user for the two numbers, convert them to intergers and store each to a variable. */

let firstNumber = Number(prompt("Enter your first number: "));
let secondNumber = Number(prompt("Enter your second number: "))

// check and perform calculation base on user choice of operation 

let result;

switch (true) {
  case operation == "+":
    result = firstNumber + secondNumber;
    console.log("Result : " + result);
    break;
  case operation == "-":
    result = firstNumber - secondNumber;
    console.log("Result : " + result);
    break;
  case operation == "/":
    result = firstNumber / secondNumber;
    console.log("Result : " + result);
    break;
  case operation == "*":
    result = firstNumber * secondNumber;
    console.log("Result : " + result);
    break;
  default:
    console.log(`You did not typed a valid operator,
    please run the program again
    and type a valid operator`);
}