const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "City of Pawnee" }).render();

  console.log(logoText);

  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'firstQuestion',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Update Employee Role' ],
    }
  ]).then((res) => {
    const firstChoice = `${res.firstChoice.toLowerCase().split(' ').join('')}.json`;
    // TODO- Create a variable to store the user's choice
    // TODO- Create a switch statement to call the appropriate function depending on what the user chose
  });
}

// TODO- Create a function to View all employees
function viewEmployees() {}

// BONUS- Create a function to View all employees that belong to a department

// BONUS- Create a function to View all employees that report to a specific manager

// BONUS- Create a function to Delete an employee

// TODO- Create a function to Update an employee's role

// BONUS- Create a function to Update an employee's manager

// TODO- Create a function to View all roles

// TODO- Create a function to Add a role

// BONUS- Create a function to Delete a role

// TODO- Create a function to View all deparments

// TODO- Create a function to Add a department

// BONUS- Create a function to Delete a department

// BONUS- Create a function to View all departments and show their total utilized department budget

// TODO- Create a function to Add an employee

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}