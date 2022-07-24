// function that creates a badge 
function renderLicenseBadge(license) {
  if(license) {
    console.log(license)
    return `![License:${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  }


}

//function that initializes the app
function renderLicenseLink(license) {
  if(license){
    console.log(license)
    return `https://img.shields.io/badge/License-${license}-blue.svg`
  }
  }



function renderLicenseSection(license) {}

//fucntion that generates the README mardown
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Usage] ${data.usage}
  - [Credits] ${data.credits}
  - [License] ${data.license}

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  ${data.license}
  #### ${renderLicenseLink(data.license)} 

  ## Contributing
  ${data.credts}
`;
}
//exports this file 
module.exports = generateMarkdown;
