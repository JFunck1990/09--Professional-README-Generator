const fs = require('fs');
const inquirer = require('inquirer');
const questionsL = require('./question');
const questions = require('./question');
//console.log("This Q: "+ questions);

inquirer.prompt(questions).then((response)=> {
let readMeGen = `
# ${response.title}\n
 by: ${response.name}

 ![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)
## Table of Contents:

1. [ Description. ](#desc)
2. [How to install.](#install)
3. [Usage.](#usage)
4. [License.](#license)
5. [Contributing.](#con)
6. [Tests.](#tests)
8. [Questions.](#questions)

<a name="desc"></a>
## Description 

${response.description}

<a name="install"></a>
## How to install ${response.title}

${response.install}
<a name="usage"></a>
##  Usage

${response.usage}
<a name="license"></a>
## License

![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)


<a name="con"></a>
## Contributing

${response.contribution}
<a name="tests"></a>
## Tests

${response.test}






<a name="questions"><a>
## Questions
> Email: ${response.email}\n
> Github: ${response.githubName}

`


fs.appendFileSync('sampleREADME.md', readMeGen);
});



