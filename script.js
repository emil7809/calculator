"use strict";

let firstNumber; 
let secondNumber;
let operator; 
let results;
let result;

window.addEventListener("load", settingUp);

function settingUp(){
    console.log("Setting up");

    document.querySelector("#calculate").addEventListener("click", readNumber);
    document.querySelector("#calculate").addEventListener("click", readNumber);
    document.querySelector("#clear").addEventListener("click", clearListOfResults);
};

function clearListOfResults(){
    console.log("clearListOfResults");
    document.querySelector("#results").innerHTML = "0";
}

function readNumber(){
    console.log("readFirstNumber");                                                                                                        
    firstNumber = Number(document.querySelector("#firstnumber").value);
    secondNumber = Number(document.querySelector("#secondnumber").value);
    readOperator()
};

function readOperator(){
    console.log("readOperator");

    operator = document.querySelector("#operator").value;

    if (operator === "add"){
        results = Number(firstNumber + secondNumber);
    } else if (operator === "sub") {
        results = Number(firstNumber - secondNumber);
    } else if (operator === "div") {
        results = Number(firstNumber / secondNumber);
    } else if (operator === "mul") {
        results = Number(firstNumber * secondNumber);
    }

    showResults();

};

function showResults() {
    //I DONT UNDERSTAND THIS AND NEED HELP
    document.querySelector("#firstnumber").value = results;
    let li = document.createElement("li");
    const resultNode = document.createTextNode(results.toString());
    li.appendChild(resultNode);
    document.querySelector("#results").appendChild(li);
    document.querySelector("#results").scrollTo(0, 10000000);
     //I DONT UNDERSTAND THIS AND NEED HELP

}

function checkIfResultShouldBeRounded(){
   
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

