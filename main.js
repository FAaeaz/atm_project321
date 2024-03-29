#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let fastCash = 1000;
2500;
5000;
10000;
25000;
let myAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    }
]);
if (myAnswer.pin === myPin) {
    console.log("Corrcet your code!!!");
    let operationAn = await inquirer.prompt([
        {
            name: "operation",
            message: "please select opation",
            type: "list",
            choices: ["Withdraw", "Check balance", "fast cash",]
        }
    ]);
    if (operationAn.operation === "Withdraw") {
        let operationA = await inquirer.prompt([{
                name: "amount",
                message: "Enter amount",
                type: "number"
            }
        ]);
        if (operationA.amount < myBalance) {
            myBalance -= operationA.amount;
            console.log("Your remainig balance is:" + myBalance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAn.operation === "Check balance") {
        console.log("your current balance:" + myBalance);
    }
    else if (operationAn.operation === "fast cash") {
        let operationAn = await inquirer.prompt([
            {
                name: "select",
                message: "select one 1000,2500,5000,10000,25000",
                type: "number"
            }
        ]);
        fastCash = operationAn.select;
        myBalance -= operationAn.select;
        console.log("your remainig balacen is:" + myBalance);
    }
}
else {
    console.log("pin is not corrcet");
}
