// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = () => {};

// Function call to initialize app
init();
