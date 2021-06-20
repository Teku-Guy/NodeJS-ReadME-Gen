// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === null){
    return ``;
  } else {
    return `![badge](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === null){
    return ``;
  } else {
    return `https://img.shields.io/badge/license-${license}-brightgreen`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === null){
    return ``;
  } else {
    return `${renderLicenseBadge(license)}
    <br />
    This application is covered by the ${license} license. 
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}<br />

  ## Description
  🔍 ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  💾 ${data.installation}

  ## Usage
  💻 ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  👪 ${data.contributing}

  ## Tests
  ✏️ ${data.tests}

  ## Questions
  ✋ ${data.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />

  `;
}

module.exports = generateMarkdown;
