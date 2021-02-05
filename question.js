//Questions

const questionsL = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name/title of the application?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Who made this project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'write a description of the application',
      },
      {
        type: 'input',
        name: 'install',
        message: 'how to install the application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'please input the usage for your application',
      },
      {
          //Need to figure out what licenses to put in the array
        type: 'list',
        name: 'license',
        message: 'how to install the application?',
        choices:["ISC", "MIT"]
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Do you have instructions for contributing?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Do you have any test for useres to run?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your eamil?',
      },
      {
        type: 'input',
        name: 'githubName',
        message: 'What is your Github user name?',
       }

    ];

module.exports = questionsL;