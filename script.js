"use strict";

let firstNumber = document.querySelector("#firstnumber").value;
let secondNumber = document.querySelector("#secondnumber").value;

let operator = document.querySelector("#operator").value;

let results = document.querySelector("#results").value;

window.addEventListener("load", settingUp);

function settingUp(){
    console.log("Setting up");

    document.querySelector("#calculate").addEventListener("click", readFirstNumber);
    document.querySelector("#calculate").addEventListener("click", readSecondNumber);
};

function readFirstNumber(){
    console.log("readFirstNumber");                                                                                                        

};

function readSecondNumber(){
    console.log("readSecondNumber");
};

function readOperator(){
    console.log("readOperator");

    if (operator === "+"){
        document.querySelector("#calculate").addEventListener("click", calculateFirstPlusSecond);
    } else if (operator === "-") {
        document.querySelector("#calculate").addEventListener("click", calculateFirstMinusSecond);
    } else if (operator === "/") {
        document.querySelector("#calculate").addEventListener("click", calculateFirstDevideSecond);
    } else if (operator === "*") {
        document.querySelector("#calculate").addEventListener("click", calculateFirstTimesSecond);
    }

};

function calculateFirstPlusSecond(){
    console.log("calculateFirstSecond");
};

function calculateFirstMinusSecond(){
    console.log("calculateFirstSecond");
};

function calculateFirstDevideSecond(){
    console.log("calculateFirstSecond");
};

function calculateFirstTimesSecond(){
    console.log("calculateFirstSecond");
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
