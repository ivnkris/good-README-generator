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
  const basicData = await inquirer.prompt(questionsBasicProjectInfo);

  const installationData = async () => {
    let installationDataString = "";
    const isRequired = await inquirer.prompt(questionsInstallationRequirements);
    if (isRequired.installation) {
      let isLooping = { furtherInstallation: true };
      while (isLooping.furtherInstallation) {
        const newString = await inquirer.prompt(questionsInstallationCode);
        installationDataString =
          installationDataString + `${newString.installationCode}\n`;
        isLooping = await inquirer.prompt(
          questionsFurtherInstallationRequirements
        );
      }
    } else {
      installationDataString = "No installation requirements ";
    }
    const installationDataObject = {
      installationData: installationDataString,
    };
    return installationDataObject;
  };

  const usageData = async () => {
    let usageDataString = "";
    const isRequired = await inquirer.prompt(questionsUsageRequirements);
    if (isRequired.usage) {
      let isLooping = { furtherUsage: true };
      while (isLooping.furtherUsage) {
        const newString = await inquirer.prompt(questionsUsageInfo);
        usageDataString = usageDataString + `- ${newString.usageInfo}\n`;
        isLooping = await inquirer.prompt(questionsFurtherUsageInfo);
      }
    } else {
      usageDataString = "No usage information";
    }
    const usageDataObject = {
      usageData: usageDataString,
    };
    return usageDataObject;
  };

  const installationDataObject = await installationData();
  const usageDataObject = await usageData();

  return { ...basicData, ...installationDataObject, ...usageDataObject };
};

// Create a function to initialize app
const init = async () => {
  const data = await inquirerData();
  const generatedMarkdown = generateMarkdown(data);
  writeToFile("GENERATED_README.md", generatedMarkdown);
};

// Function call to initialize app
init();
