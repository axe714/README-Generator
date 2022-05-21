const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a link/direct path to the picture of your project:",
      name: "picture",
    },
    {
      type: "input",
      message:
        "Give a brief description of your project picture (ex: [Project Name] demo picture):",
      name: "pictureDescription",
    },
    {
      type: "input",
      message: `Give a very brief description of your project:`,
      name: "description",
    },
    {
      type: "input",
      message: `What are the steps required to install your project?`,
      name: "installation",
    },
    {
      type: "input",
      message: `What is the use of your project? Provide some functionalities it has:`,
      name: "usage",
    },
    {
      type: "input",
      message: `Who are the contributors to your project?`,
      name: "contribution",
    },
    {
      type: "list",
      name: "license",
      message: `What license is utilized by your project?`,
      choices: ['MIT', 'Apache_2.0', 'GPL', 'BSD', 'ISC'],
    },
    {
      type: "input",
      message: `What tests have you run on your project?`,
      name: "tests",
    },
    {
      type: "input",
      message: "Provide a link to the project repository:",
      name: "repo",
    },
    {
      type: "input",
      message: "Provide a link to the deployed project",
      name: "deployed",
    },
    {
      type: "input",
      message: `What is your Github username?`,
      name: "githubUsername",
    },
    {
      type: "input",
      message: `What is the link to your github profile?`,
      name: "githubProfile",
    },
    {
      type: "input",
      message: `What is your email?`,
      name: "email",
    },
  ])
  .then((response) => {
    //create readME file with responses
    fs.writeFileSync("README.md",

`# ${response.title}

![${response.license}](https://img.shields.io/badge/License-${response.license}-blue.svg)

![${response.pictureDescription}](${response.picture})

## Description
- ${response.description}

## Table Of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution)
* [Tests](#tests)
* [Deployed Link](#deployed)
* [Contact](#contact)
    * [Github](#github)
    * [Email](#email)

## Installation
- ${response.installation}

## Usage
- ${response.usage}

## License
- This project uses the following license:<br>
     ***${response.license}***

## Contributors
- ${response.contribution}

## Tests
- ${response.tests}

## ${response.title} Github Repository: 
- [${response.title}](${response.repo})

## Deployed Link:
- [${response.title}](${response.deployed})

## Contact Information:
- [Github Profile - ${response.githubUsername}](${response.githubProfile})

### Email:
- For inquiries/questions, please reach out to me at ${response.email}`,

      (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("WOOHOO YOU DID IT!");
      }
    );
  });
