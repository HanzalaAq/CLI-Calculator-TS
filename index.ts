#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([{message: "Enter the first number", type: "number", name: "firstNumber"},
{message:"Enter second number", type:"number",name:"secondnumber" },
{message: "select one of the operators to perform action",type:"list", name:"operator",
 choices:["Addition","subtraction","multiplication","division"]},
]);

//conditional statement
if(answer.operator ==="Addition") {
    console.log( answer.firstNumber + answer.secondnumber);
} else if(answer.operator ==="subtraction") {
    console.log( answer.firstNumber - answer.secondnumber);
}
else if(answer.operator ==="multiplication") {
    console.log( answer.firstNumber * answer.secondnumber);
}else if(answer.operator ==="division") {
    console.log( answer.firstNumber / answer.secondnumber);
}else{
    console.log("your input is invalid")
}
