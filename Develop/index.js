const inquirer = require('inquirer');
const fs = require('fs');
const utilityFunctions = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => { if (value) { return true } else { return 'Please provide a title for your project.' } }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: (value) => { if (value) { return true } else { return 'Please provide a description for your project.' } }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
        validate: (value) => { if (value) { return true } else { return 'Please provide installation instructions for your project.' } }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
        validate: (value) => { if (value) { return true } else { return 'Please provide usage information for your project.' } }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
        validate: (value) => { if (value) { return true } else { return 'Please provide contribution guidelines for your project.' } }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
        validate: (value) => { if (value) { return true } else { return 'Please provide test instructions for your project.' } }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        validate: (value) => { if (value) { return true } else { return 'Please select a license for your project.' } }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
        validate: (value) => { if (value) { return true } else { return 'Please provide your GitHub username.' } }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
        validate: (value) => { if (value) { return true } else { return 'Please provide your email address.' } }
    }
];

// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Your README file has been generated!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// function call to initialize program
init(); 

