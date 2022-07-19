// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
   {
        type: 'input',
        name: 'title', 
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what your project is about:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'input',
        name: 'credts',
        message: 'List any collaborators that helped work on this project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter your license:',
        choices: ['MIT','MPL_2.0']

    }
    
    ];
    
    
    


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
    console.log(data)
    const markdown = generateMarkdown(data)
    fs.writeFile('README.md', markdown,(err) => {
        err ? console.log(err):console.log('its working')
    })
});
}
// Function call to initialize app
init();
