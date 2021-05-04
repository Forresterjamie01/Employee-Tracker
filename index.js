const inquirer = require('inquirer');
const mysql = require('mysql');
require ('console.table');

//Create connection

const connection = mysql.createConnection({

    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'EMPLOYEES_DB',
});

//connect to mysql//

connection.connect((err) => {
    if(err) {
        throw err; 
    } prompt();
});

//function that tells user to select one of the choices//

function prompt() {
    inquirer.prompt({

        type: 'list',
        name: 'Begin',
        message: 'Hi, What task would you like to complete?',
        choices: ['View Departments', 'View Employees','View Roles',' Add Departments','Add Roles','Add Employees','Update Employees Roles']
    })
.then(function ({  Begin }) {
    
    switch (Begin) {

        case 'View Departments':
            viewDepartments();
            break;

        case 'View Employees':
            viewEmployees();
            break;

        case 'View Roles':
            viewRoles();
            break;

        case 'Add Departments':
            addDepartments();
            break;

        case 'Add Roles':
            addRoles();
            break;

        case 'Add Employees':
            addEmployees();
            break;  

        case 'Update Employee Roles':
            updateEmployeeRoles();
            break;
        case 'Exit':
            connection.end();
            break;
}
});
}
//View Departments function if user selects to view departments
function viewDepartments() {
    console.log ('Current Departments')
    const query = `SELECT * FROM department`;

    connection.query(query, (err,data) => {
        if (err) throw err;
        console.table(data);
    })
    prompt();
    }

//View Roles function if user selects to view roles
function viewRoles() {
    console.log ('Current Roles')
    const query = `SELECT * FROM ROLE`;

    connection.query(query, (err,data) => {
        if (err) throw err;
        console.table(data);
    })
    prompt();

}

//View Employees function if user selects to view employees
function viewEmployees() {
    console.log ('Current Employees')
    const query = `SELECT * FROM employee`;
    
    connection.query(query, (err,data) => {
        if (err) throw err;
        console.table(data);
    })
    prompt();

}

//Add Employees function so the user can add an employee to the database
function addEmployees() {
let roles = connection.viewRoles();
    const role = roles.map(({ROLE_ID, TITLE } ) => ({name: TITLE, value: ROLE_ID}))  
    
    inquirer
    .prompt([
      {
        name: 'employee',
        type: 'input',
        message: 'Who is the employee you would like to submit?',
      },
      {
        name: 'department',
        type: 'input',
        message: 'What department would you like to place your employee in?',
      },
      {
        name: 'role',
        type: 'input',
        message: 'What would you like their role to be?',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Accountant', 'Legal Team Lead', 'Lawyer'],
      },

      {
        name: 'manager',
        type: 'input',
        message: 'Who is employees manager?',
        choices: ['JoAnn Peters', 'John Evans', 'Ashley Johnson', 'Mark Stevens']
     
      },

    ])
    .then((answer) => {
      // when finished prompting, insert a new employee into the db with that info
      connection.query(
        'INSERT INTO employee SET ?',
        // QUESTION: What does the || 0 do?
        {
          FIRST_NAME: answer.employee,
          LAST_NAME: answer.department,
          ROLE_ID: answer.role, 
          manager_id: answer.manager,
        },
        (err) => {
          if (err) throw err;
          console.log('Your employee was created successfully!');
          // re-prompt the user for if they want to create another employee
          start();
        }
      );
    });
};






