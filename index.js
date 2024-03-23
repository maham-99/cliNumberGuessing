#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please inert a number between 1-10",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("yes you are correct!");
}
else if (answers.userGuessedNumber > randomNumber) {
    console.log("opss your guess is too high");
}
else if (answers.userGuessedNumber < randomNumber) {
    console.log("your guess is too low!");
}
else {
    console.log("invalid information");
}
