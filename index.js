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
        name: 'option',
        choices: ['Add', 'View', 'Update', 'Delete', 'Exit' ]    
    }

  ]).then((res) => {
    // TODO- Create a switch statement to call the appropriate function depending on what the user chose
   
    switch (res.option) {
        case 'Add': 
            addPrompt();
            break;
        case 'View':
            viewPrompt();
            break;
        case 'Update':
            updatePrompt();
            break;
        case 'Delete':
            deletePrompt();
            break;
        case 'Exit':
            quit();
            break;
        default:
            console.log("Invalid Option");
        }
    })
  };

  function addPrompt(){
    prompt([
        {
            type:'list',
            message:'What do you want to add to?',
            name:'add',
            choice: ['Department', 'Role', 'Employee']
        }
    ]).then((res) => {
        switch (res.add) {
            case 'Department':
                addDepartment();
                break;
            case 'Role':
                addAbortListener();
                break;
            case 'Employee':
                addEmployee();
                break;
            default:
                console.log("Invalid Option");
        }
    })
  };
  function viewPrompt() {
    prompt([
        {
        type:'list',
        message: 'What would you like to do?',
        name: 'view',
        choices: ['View all employees', 'View all roles', 'View all departments']
        }
    ]).then((res) => {
        switch(res.view) {
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'View all roles':
            viewAllRoles();
            break;
        case 'View all departments':
            viewAllDepartments();
            break;
        default:
            console.log("Invalid option");
        }
    })
  };
  function updatePrompt() {
    prompt ([
        {
        type: 'list',
        message: 'What do you want to update?',
        name: 'update',
        choices: ['Update employee', 'Update role', 'Update department']
        }
    ]).then(res => {
        switch (res.update) {
            case 'Update employee':
                updateEmployee();
                break;
            case 'Update role':
                updateRole();
                break;
            case 'Update department':
                updateDepartment()
                break;
            default:
                console.log("Invalid Option");

        }
    })
  };
function deletePrompt() {
  prompt([
    {
        type: 'list',
        message: 'What do you want to delete?',
        name: 'delete',
        choices: ['Employee', 'Role', 'Department']    
    }

  ]).then((res) => {    
    switch (res.delete) {
        case 'Employee': 
            deleteEmployee();
            break;
        case 'Role':
            deleteRole();
            break;
        case 'Department':
            deleteDepartment();
            break;
            default:
            console.log("Invalid Option");
        }
    })
  };

  function addDepartment(){

  }

// TODO- Create a function to View all employees

const viewAllEmployees = async ()=> {
    let { rows } = await db.findAllEmployees();
    console.log('\n');
    console.table(rows);
    loadMainPrompts();
};
const viewAllRoles = async ()=> {
    let { rows } = await db.findAllRoles();
    console.log('\n');
    console.table(rows);
    loadMainPrompts();
};
const viewAllDepartments = async ()=> {
    let { rows } = await db.findAllDepartments();
    console.log('\n');
    console.table(rows);
    loadMainPrompts();
}


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