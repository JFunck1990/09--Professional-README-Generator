const fs = require('fs');
const inquirer = require('inquirer');
const questionsL = require('./question');
const questions = require('./question');
//console.log("This Q: "+ questions);

inquirer.prompt(questions).then((response)=> {
let readMeGen = `
# ${response.title}
### made by: ${response.name}

## Description 

${response.description}


## How to use ${response.name}

${response.howTo}

## Screenshots

`


fs.appendFileSync('README.md', readMeGen);
});



