// TODO: Include packages needed for this application
const fs=require('fs');
const inquirer= require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// Title,Description, Installation, Usage, Contributing, and Tests, license
const questions = [ {
    type: 'input',
    message: 'What is your projects title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Describe your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How do you install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How do you use your project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Who contributed to your project?',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'How do you test your project?',
    name: 'test',
  },
  {
    type: 'list',
    message: 'What license does your project have?',
    name: 'license',
    choices: ["GPL_3.0", "BSD", "none"]
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err=>{
      if(err)throw err
      console.log("It worked!")
  });
  
  fs.open('README.md', 'w+', function (err, f) {
    if (err) {
       return console.error(err);
    }
    console.log(f);
    console.log("File opened!!");     
 });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
        .then (response=>{
            console.log(response)
            
            
            
            writeToFile("README.md", generateMarkdown(response))
        }) 
}

// Function call to initialize app
init();