const inquirer = require('inquirer');
const genMark = require("./utils/generateMarkdown")
const fs = require('fs');
console.log("was goood");

// my array of questions for the user
const questions =
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a short description of your project.',
        },
        {
            type: 'input',
            name: 'instal',
            message: 'Any installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Tests?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license?',
            choices: ['MIT', 'ICS', 'Apache 2.0', 'The_Unlicense']

        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email plz.',
        },
    ];


// parameter for generateMarkdown.js
// parameter to pass through: questions,filename?, generateMarkdown.js
function writeToFile(filename, data) {

    fs.writeFile(filename, data, (error) => { if (error) throw error; console.log("success!") });
}


// able to grab the data and return it
function init() {
    return inquirer.prompt(questions)
        .then((data) => {
            // we call genMark and are passing the answers-and the function that contains the 
            const markDown = genMark(data)
            writeToFile("./dis/readme.md", markDown)
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();
