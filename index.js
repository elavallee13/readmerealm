const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'reason',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'learnings',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license does your project use?',
  },
  {
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here.',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'If you would like other developers to contribute it, provide guidelines on how to do so.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples on how to run tests for your application.',
  },
];

inquirer.prompt(questions).then((answers) => {
  const readmeContent = `# ${answers.title}

## Description

${answers.motivation}
${answers.reason}
${answers.problem}
${answers.learnings}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage 

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}

## Features

${answers.features}

## How to Contribute

${answers.contribute}

## Tests

${answers.tests}
`;

  require('fs').writeFileSync('README.md', readmeContent);
});
