
function renderLicenseBadge(license) {
  const badges = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    ICS: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    Apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    The_Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`

  }
  return badges[license]
}

function renderLicenseLink(license) {
  const link = {
    MIT: `[License: MIT](https://opensource.org/licenses/MIT)`,
    ICS: `[License: ISC](https://opensource.org/licenses/ISC)`,
    Apache: `[License](https://opensource.org/licenses/Apache-2.0)`,
    The_Unlicense: `[License: Unlicense](http://unlicense.org/)`

  }
  return link[license]
}

function renderLicenseSection(license) {

  const link = {
    MIT: `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`,
    ICS: `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.`,
    Apache: `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`,
    The_Unlicense: `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`

  }
  return link[license]
}

// template expression to handover our function for the license section
function generateMarkdown(questions) {
  return `
# ${questions.title}                        
## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Description
${questions.description}

## Installation
${questions.instal}

## Usage
${questions.usage}

## Contributions
${questions.contribution}

## Tests
${questions.test}

## License
${renderLicenseBadge(questions.license)}

${renderLicenseLink(questions.license)}

${renderLicenseSection(questions.license)}

## Contact
My Github profile [${questions.github}](https://github.com/${questions.github})

${questions.email}

`
};

module.exports = generateMarkdown;
