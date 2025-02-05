let firstNumber = "";
let secondNumber = "";
let operator = "";
let isThereOperator = false;
let maxNumberLenght = 7;
const calculatorOutput = document.querySelector("#calculator-output");
const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.querySelector(".clear-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const operateButton = document.querySelector(".operate-button");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!isThereOperator) {
            if (firstNumber.length < 24){
                firstNumber += button.textContent;
                calculatorOutput.textContent += button.textContent;
            }
        }
        else{
            if (secondNumber.length < 24){
                secondNumber += button.textContent;
                calculatorOutput.textContent += button.textContent
            }
        }
    });
});
clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isThereOperator = false;
    calculatorOutput.textContent = "";
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!isThereOperator && firstNumber != ""){
            operator = button.textContent;
            console.log("operator pressed")
            calculatorOutput.textContent += operator;
            calculatorOutput.textContent = ""
            isThereOperator = true;
        }
    });
})
operateButton.addEventListener("click", () => {
    if (firstNumber != "" && secondNumber != "" && operator != ""){
        console.log("operate");
        console.log(firstNumber, operator, secondNumber); // Check their values
        operate(firstNumber, operator, secondNumber);
    }
    else{
        console.log("not enough value is given to operate");
    }
});

function operate(number1,operator,number2){
    number1 = Number(number1);
    number2 = Number(secondNumber);
    console.log("operting")
    if (operator == "+"){
        output = add(number1, number2);
    }
    else if (operator == "-") {
        output = subtract(number1, number2);
    }
    else if (operator == "x") {
        output = multiply(number1, number2);
    }
    else if (operator == "/") {
        output = divide(number1, number2);
    }
    if (output.toString().length > 8){
        output = output.toPrecision(8)
    }
    calculatorOutput.textContent = output
    firstNumber = output.toString();
    secondNumber = "";
    operator = "";
    isThereOperator = false;
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b
}

