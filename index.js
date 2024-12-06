// TODO: Include packages needed for this application
import inquirer from 'inquirer';
//const fs = require('fs');
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
                "Project title", 
                "Give me a description", 
                "Give me installation instructions", 
                "Give me usage information", 
                "Give me contribution guidelines", 
                "Give me test instructions", 
                "What is your license choice?",
                "What is your github username?", 
                "What is your email?"
            ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(data, textToWrite, (err) => {
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

    const textToWrite = questions.map((question, index) => 
      `${question}: ${answers[`question${index + 1}`]}`
  ).join('\n');

  return textToWrite;

  }



// TODO: Create a function to initialize app
function init() {
const myfilename = "GavinReadme.md";
const results = askTheQuestions(questions);
//console.log (Object.entries);
writeToFile(myfilename, results);
}

// Function call to initialize app
init();
