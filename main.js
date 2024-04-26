#! /usr/bin/env node
import inquirer from "inquirer";
const myPin = 1234;
let myBalance = 10000; //Dollar 
let answer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number"
});
if (answer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select an operation",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amout",
                type: "number"
            }
        ]);
        if (myBalance < amountAns.amount) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaing balance is:" + `${myBalance}`);
        }
    }
    if (operationAns.operation === "fast cash") {
        let fashcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select your amount",
                type: "list",
                choices: [500, 1000, 2000, 5000]
            }
        ]);
        myBalance -= fashcashAns.fastcash;
        console.log("Your remaing balance is:" + `${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is:" + `${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
