// imports
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
//Array of questions
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
    
    
    





// function that initiallizes the app 
function init() {
    inquirer.prompt(questions).then(data => {
    console.log(data)
    const markdown = generateMarkdown(data)
    fs.writeFile('README.md', markdown,(err) => {
        err ? console.log(err):console.log('its working')
    })
});
}
// calling the function 
init();
