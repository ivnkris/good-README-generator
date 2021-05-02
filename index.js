// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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
    type: "confirm",
    name: "installation",
    message: "Are there any installation requirements?",
  },
  {
    type: "input",
    name: "installationCode",
    message: "Type in the installation code directly here:",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

// TODO: Create a function to initialize app
const init = () => {};

// Function call to initialize app
init();
