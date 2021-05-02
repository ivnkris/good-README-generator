// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questionsBasicProjectInfo = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "list",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"],
    name: "license",
    message: "Select a license for your project",
  },
  {
    type: "input",
    name: "description",
    message: "What is the project's description?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can people contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Are there any tests for this project?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your e-mail address?",
  },
];

const questionsInstallationRequirements = [
  {
    type: "confirm",
    name: "installation",
    message: "Are there any installation requirements?",
  },
];

const questionsInstallationCode = [
  {
    type: "input",
    name: "installationCode",
    message: "Type your installation code directly below:",
  },
];

const questionsFurtherInstallationRequirements = [
  {
    type: "confirm",
    name: "furtherInstallation",
    message: "Are there any further installation requirements?",
  },
];

const questionsUsageRequirements = [
  {
    type: "confirm",
    name: "usage",
    message: "Are there any usage information?",
  },
];

const questionsUsageInfo = [
  {
    type: "input",
    name: "usageInfo",
    message: "Type your usage information below:",
  },
];

const questionsFurtherUsageInfo = [
  {
    type: "confirm",
    name: "furtherUsage",
    message: "Are there any further usage information?",
  },
];

// Create a function to write README file
const writeToFile = (fileName, data) => {
  const errorHandling = (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Readme file generated!");
    }
  };

  fs.writeFile(fileName, data, errorHandling);
};

const inquirerData = async () => {
  return await inquirer.prompt(questionsBasicProjectInfo);
};

// Create a function to initialize app
const init = async () => {
  const data = await inquirerData();
  console.log(data);
  const generatedMarkdown = generateMarkdown(data);
  writeToFile("GENERATED_README.md", generatedMarkdown);
};

// Function call to initialize app
init();
