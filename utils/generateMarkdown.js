// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  
  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  };
  
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
  };
  
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  
  return `## License

This project is licensed under the ${license} license. 

For more details, see the [${license} license](${renderLicenseLink(license)}).`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.question1}

${renderLicenseBadge(data.question7)}

## Description
${data.question2}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.question3}

## Usage
${data.question4}

## Contributing
${data.question5}

## Tests
${data.question6}

${renderLicenseSection(data.question7)}

## Questions
For any additional questions, please contact me:
- GitHub: [${data.question8}](https://github.com/${data.question8})
- Email: ${data.question9}
`;
}

export default generateMarkdown;  
