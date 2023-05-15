#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

async function delay() {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });

}
async function welcome() {
    const play = chalkAnimation.rainbow("LET START THE GAME");
    await delay();
    play.stop()
}
//await welcome();


let playerChance = 3;

async function askQuestion() {
    let ranNum = Math.floor(Math.random() * 10 + 1);

    do {

        playerChance--
        console.log(`player remaing chance ${playerChance}`);
        var UserInput = await inquirer.prompt([{
            type: "number",
            name: "user_input",
            message: "Please, Enter the number between 1 to 10!"
        }]);

        if (UserInput.user_input == ranNum) {
            console.log(chalk.green("Congrats! You guess is right"))
        }
        else if (UserInput.user_input > ranNum) {
            console.log(chalk.blue("Your number is greater than guess number"))
        }
        else if (UserInput.user_input < ranNum) {
            console.log(chalk.blackBright("Your number is less than guess number"))
        }
    } while (playerChance > 0 && ranNum !== UserInput.user_input);
    if (playerChance == 0 && ranNum !== UserInput.user_input) {
        console.log(chalk.yellow("Game is Over"))
    }

}
//askQuestion()


async function startAgain() {

    do {
        console.clear();
        await welcome();
        playerChance = 3;
        await askQuestion()
        var resumeGame = await inquirer.prompt([
            {
                type: "input",
                name: "startOver",
                message: "Do you want to play again Y or N ?"
            }
        ])
    } while (resumeGame.startOver == "y")

};
startAgain()