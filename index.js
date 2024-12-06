// TODO: Include packages needed for this application
import inquirer from 'inquirer';
//const fs = require('fs');
import fs from 'fs';

import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
                "Project title", 
                "Give me a description", 
                "Give me installation instructions", 
                "Give me usage information", 
                "Give me contributors", 
                "Give me test instructions", 
                "What is your license choice?",
                "What is your github username?", 
                "What is your email?"
            ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => {
    if (err) console.error('Writing error:', err);
});


}

async function askTheQuestions(questions) {
    const answers = await inquirer.prompt(
      questions.map((question, index) => ({
        type: 'input',
        name: `question${index + 1}`,
        message: question,
      }))
    );
console.log (answers)
  return answers;

  }



// TODO: Create a function to initialize app
async function init() {
const myfilename = "README.md";
const results = await askTheQuestions(questions);
//console.log (Object.entries);
writeToFile(myfilename, generateMarkdown(results));
}

// Function call to initialize app
init();
