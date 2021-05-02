// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseBadge;
  switch (license) {
    case "MIT":
      licenseLink = "https://img.shields.io/apm/l/vim-mode";
      break;
    case "APACHE_2.0":
      licenseLink = "https://img.shields.io/crates/l/rustc-serialize/0.3.24";
      break;
    case "GPL_3.0":
      licenseLink =
        "https://img.shields.io/eclipse-marketplace/l/notepad4e?label=GPL%203.0";
      break;
    case "BSD_3":
      licenseLink = "https://img.shields.io/pypi/l/Django";
      break;
    case "None":
      licenseLink = "";
      break;
  }
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// Create a function that returns the license section of README
// If there is no license, return 'No'
const renderLicenseSection = (license) => {
  if (license === "none") {
    return "No";
  } else {
    return license;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  ![${renderLicenseSection(data.license)} license](${renderLicenseBadge(
    data.license
  )})
  
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
  
  ${renderLicenseSection(data.license)} license
  
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
