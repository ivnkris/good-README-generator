// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  ![mit license](https://img.shields.io/badge/license-MIT-green) (question 2 - choices)
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [${data.title}](#${data.title})
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation
  
  \`\`\`
  ${data.installationData}
  \`\`\`
  
  ## Usage
  
  ${data.usageData}
  
  ## License
  
  ${data.license}
  
  ## Contributing
  
 ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  - View my [GitHub](https://github.com/${data.gitHub}) profile
  - Email me at ${data.email}
  `;
};

module.exports = generateMarkdown;
