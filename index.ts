import inquirer from "inquirer";

// steps: 
//     1) generate a random number by machine
//     2) enter your guessed number
//     3) compare your number with random number and show the result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const awnswer = await inquirer.prompt(
    [
        {message: "Please Guess a Number", name: "userguessedNumber", type: "number",},
    ]
    );
    
    if( awnswer.userguessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed the Right Number");
}

else{ console.log("Oops! You Guessed the Wrong Number");
}
console.log(randomNumber); 
// console.log(awnswer);
