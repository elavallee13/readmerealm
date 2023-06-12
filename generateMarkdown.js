// License badge based on the license
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// The license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `\n* [License](#license)\n`
    );
  }
  return '';
}

// The license part of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License
      
This project is licensed under the ${license} license.`
    );
  }
  return '';
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
