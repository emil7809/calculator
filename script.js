"use strict";

let firstNumber; 
let secondNumber;
let operator; 
let results;

window.addEventListener("load", settingUp);

function settingUp(){
    console.log("Setting up");

    document.querySelector("#calculate").addEventListener("click", readFirstNumber);
    document.querySelector("#calculate").addEventListener("click", readSecondNumber);

    document.querySelector("#clear").addEventListener("click", clearListOfResults);
};

function clearListOfResults(){
    console.log("clearListOfResults");
    results = document.querySelector("#results").value = 0;

}

function readFirstNumber(){
    console.log("readFirstNumber");                                                                                                        
    firstNumber = document.querySelector("#firstnumber").value;
    readOperator()
};

function readSecondNumber(){
    console.log("readSecondNumber");
    secondNumber = document.querySelector("#secondnumber").value;
    readOperator()
};

function readOperator(){
    console.log("readOperator");

    operator = document.querySelector("#operator").value;

    if (operator === "add"){
        calculateFirstPlusSecond();
    } else if (operator === "sub") {
        calculateFirstMinusSecond();
    } else if (operator === "div") {
        calculateFirstDevideSecond();
    } else if (operator === "mul") {
        calculateFirstTimesSecond();
    }

};

function calculateFirstPlusSecond(){
    console.log("calculatePlusFirstSecond");
    document.querySelector("#results").innerHTML = firstNumber + secondNumber;

};

function calculateFirstMinusSecond(){
    console.log("calculateFirstMinusSecond");
    document.querySelector("#results").innerHTML = firstNumber - secondNumber;
};

function calculateFirstDevideSecond(){
    console.log("calculateFirstDevideSecond");
    document.querySelector("#results").innerHTML = firstNumber / secondNumber;
};

function calculateFirstTimesSecond(){
    console.log("calculateFirstTimesSecond");
    document.querySelector("#results").innerHTML = firstNumber * secondNumber;
};

function checkIfResultShouldBeRounded(){
    console.log("checkIfResultShouldBeRounded");
};

function readNumberOfDecimals(){
    console.log("readNumberOfDecimals");
};

function roundNumberogDecimals(){
    console.log("roundNumberogDecimals");
};

function writeResultIntoFirstNumberField(){
    console.log("writeResultIntoFirstNumberField");
};

function appendResultToEndOfList(){
    console.log("appendResultToEndOfList");
};

function ScrollListToTheBottom(){
    console.log("ScrollListToTheBottom");
};