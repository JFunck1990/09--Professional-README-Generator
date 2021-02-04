const fs = require('fs');
const inquirer = require('inquirer');
const questionsL = require('./question');
const questions = require('./question');
//console.log("This Q: "+ questions);

inquirer.prompt(questions).then((response)=> {
let readMeGen = `
# ${response.title}#### by: ${response.name}


## Table of Contents
 

## Description 

${response.description}


## How to install ${response.title}

${response.howTo}

##  Usage



##License



##Contributing



##Tests



##Questions

`


fs.appendFileSync('README.md', readMeGen);
});



