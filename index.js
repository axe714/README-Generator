const inquirer = require('inquirer');
const fs = require("fs")


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a link to the picture of your project',
            name: 'demo',
        },
        {
            type: 'input',
            message: `Give a brief description of your project and what it's for`,
            name: 'description',
        },
        {
            type: 'input',
            message: 'Provide a link to the project repository',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'Provide a link to the deployed project',
            name: 'deployed',
        }
    ])
    .then(function(response) {
        console.log(response)
    }) 