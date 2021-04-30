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
    console.log ('Add A New Employee')
    const query = `SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, ROLE_ID, MANAGER_ID `;
    
    connection.query(query, (err,data) => {
        if (err) throw err;

        
        console.table(data);
    })
    prompt();

}

