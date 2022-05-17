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
      type: "input",
      message: `What are the license terms for your project?`,
      name: "license",
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
  .then(function (response) {
    //creat readME file with responses
    fs.writeFile(
      "README.md",

      `# ${response.title}

      
![${response.pictureDescription}](${response.picture})


## Description
${response.description}


## Table Of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution)
* [Tests](#tests)
* [Github](#github)
* [Deployed Link](#deployed)
* [Contact](#contact)


## Installation
${response.installation}


## Usage
${response.usage}


## License
${response.license}


## Contribution Guidelines
${response.contribution}


## Tests
${response.tests}


## ${response.title} Github Repository: 
[${response.title}](${response.repo})


## Deployed Link:
[${response.title}](${response.deployed})


## Contact:
Github Profile: [${response.githubUsername}](${response.githubProfile})

### Email:
For inquiries, please reach out to me at ${response.email}`,

      (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("WOOHOO YOU DID IT!");
      }
    );
  });