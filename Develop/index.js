const inquirer = require('inquirer');
const fs = require('fs');
const utilityFunctions = require('./utils/utility-functions.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter a title for your project.';
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter a description for your project.';
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter installation instructions for your project.';
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage instructions for your project.',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter usage instructions for your project.';
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for your project.',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter contribution guidelines for your project.';
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter test instructions for your project.';
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project.',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please select a license for your project.';
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username.',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter your GitHub username.';
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Please enter your email address.';
                }
            }
        },
    ]).then((response) => {
        const generateMarkdown = utilityFunctions.createMarkdown;

        fs.writeFile(`./created_READMEs/${response.title}-README.md`, generateMarkdown(response), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
