// // Work variables
let firstNumber = "";
let operand = "";
let lastNumber = "";
let displayedValue = "";

let operandClicked = false;
let twoValueOnDisplay = false;

const displayCase = document.querySelector("#displayCase");
const display = document.createElement("p");
display.setAttribute("id", "display");
displayCase.appendChild(display);
display.innerHTML = displayedValue;

// // Primary function for math

// Add
function Add(firstNumber, lastNumber){
    return firstNumber + lastNumber;
};

// Substract
function Substract(firstNumber, lastNumber){
    return firstNumber - lastNumber;
};

// Multiply
function Multiply(firstNumber, lastNumber){
    return firstNumber * lastNumber;
};

// Divide
function Divide(firstNumber, lastNumber){
    return firstNumber / lastNumber;
};

// Operating function
function Operate(firstNumber, lastNumber, operand){
    let result;

    if (twoValueOnDisplay == true) {
        Clear();
        switch (operand) {
            case "+":
                result = Add(Number(firstNumber), Number(lastNumber));
                console.log("add");
                break;
            case "-":
                result = Substract(Number(firstNumber), Number(lastNumber));
                console.log("substract");
                break;
            case "*":
                result = Multiply(Number(firstNumber), Number(lastNumber));
                console.log("multiply");
                break;
            case "/":
                if (lastNumber = "0") {
                    console.log("tu divise par 0, débile, revoit ton calcul");
                    result = 0;
                } else {
                    result = Divide(Number(firstNumber), Number(lastNumber));
                    console.log("divide");
                }
                break;
        };

        displayedValue = String(result);
        display.innerHTML = displayedValue;
        displayedValue = "";
        firstNumber = "";
        lastNumber = "";
        operandClicked = false;
        twoValueOnDisplay = false;
    };
};


// // Buttons functions on the calculator


// il faut encore mettre en place un bloqueur de symbole si aucune valeur est entré
// après avoir fait un calcul, il faut que les touche efface le résultat

// Updating the value on a button click
function Update(value){
    if (operandClicked == false) {
        if ((value == "+" || value == "-" || value == "*" || value == "/") && (firstNumber !== "")) {
            operandClicked = true;
            operand = value;
            displayedValue = displayedValue + operand;
            display.innerHTML = displayedValue;
            console.log("symbole entré")

        } else if (value !== "+" && value !== "-" && value !== "*" && value !== "/"){
            firstNumber = firstNumber.concat(value);
            displayedValue = displayedValue.concat(value);
            display.innerHTML = displayedValue;
            console.log("valeur entré")
        }

    } else {
        if ((value == "+" || value == "-" || value == "*" || value == "/") && (twoValueOnDisplay == true)) {
            Operate(firstNumber, lastNumber, operand);
            console.log("symbole 2 entré")
        
        } else if (value !== "+" && value !== "-" && value !== "*" && value !== "/"){
            lastNumber = lastNumber.concat(value);
            displayedValue = displayedValue.concat(value);
            display.innerHTML = displayedValue;
            twoValueOnDisplay = true;
            console.log("valeur 2 entré")          
        };
    }

};

// Clearing the display
function Clear(){
    firstNumber = "";
    operand = "";
    lastNumber = "";
    displayedValue = "";
    display.innerHTML = "0";
    operandClicked = false;
    twoValueOnDisplay = false;
}