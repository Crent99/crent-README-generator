 // If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'GPL') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    ${license}
    ${renderLicenseBadge(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  
  ## Description
  ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing Guidelines](#contributing-guidelines)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing Guidelines
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to reach out to me.

## Contact
* GitHub: [${data.github}](${data.github})
* Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseSection
}

