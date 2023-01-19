// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your name to get credit for your work!');
            return false;
        }
    }
  },{
    type: 'input',
    name: 'title',
    message: 'What would you like your README Title to be?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please include a title for your README');
            return false;
        }
    }
  },
  
  {
    type: 'input',
    message: 'Please include a description of your Readme',
    name: 'description',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please include a description of your work');
            return false;
        }
    }
  },
  {
    type: 'input',
    message: 'Please include a guide on how to install ',
    name: 'installation',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please include instructions on how to install your project');
            return false;
        }
    }
  },
  {
    type: 'input',
    message: 'What is your Github Username?',
    name: 'github',
    
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please give instructions on how to use/navigate your project',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please give instructions on how to contribute to your project',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please give a guide on your test guidelines',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your Email Address',
  },
  {
    type: 'confirm',
    name: 'licenseConfirm',
    message: 'Do you have a license for your Project?',
    default: false
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a License for your project',
    choices:['MIT', 'isc','ncsa','zlib','gpl','cc'],
    when: ({licenseConfirm}) => {
        if (licenseConfirm) {
            return true;
        } else {
            return false;
        }
    }
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    {if(err){return console.log(err)}})
    console.log("Congratulations! Your README has successfully been created")
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init()
