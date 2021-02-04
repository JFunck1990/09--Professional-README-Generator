const fs = require('fs');
const inquirer = require('inquirer');
const questionsL = require('./question');
const questions = require('./question');
//console.log("This Q: "+ questions);

inquirer.prompt(questions).then((response)=> {
let readMeGen = `
# ${response.title}#### by: ${response.name}
## Table of Content:

1. [ Description. ](#desc)

<a name="desc"></a>
## Description 

${response.description}


## How to install ${response.title}

${response.install}

##  Usage

${response.usage}

## License

![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

${response.license}

## Contributing

${response.contribution}

## Tests

${response.test}

## Video



## Screen Shots



## Questions
> Email:${response.emil}
> Github:${response.githubName}

`


fs.appendFileSync('sampleREADME.md', readMeGen);
});



