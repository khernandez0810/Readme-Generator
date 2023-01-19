// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return "";
  } else{
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ""
  }
return `https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return "";
  } else{
    return ` ## License \n ${renderLicenseBadge(license)}`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
 If you have any questions regarding this project, Please contact me at: 
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;
