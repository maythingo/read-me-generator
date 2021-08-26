// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return ""
  } else {
    return "* [License](#license)"
  }
}
function renderQuestionsLink(data) {
  if (data.github==="" && data.email==="") {
    return ""
  }
  return "* [Questions](#questions)"
}
function renderQuestionsContent(data) {
  let questionsContent= "";
  if (!(data.github==="")) {
    questionsContent =  "GitHub Username: " + data.github + '\n';
  }
  if(!(data.email==="")) {
    questionsContent = questionsContent + "Email Address:" + data.email
  }
  if (!(questionsContent==="")) {
    questionsContent = "## Questions \n " + questionsContent;
  }


  return questionsContent;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Generated ReadMe: ", data);
  return ` 
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors) 
* [Test](#test)
${renderLicenseLink(data.license)}
${renderQuestionsLink(data)}
## Installation
${data.installation}
## Usage 
${data.usage}
## Contributors
${data.contributors}
## Test
${data.test}
## License
${data.license}
${renderQuestionsContent(data)}
`;
}

module.exports = generateMarkdown;