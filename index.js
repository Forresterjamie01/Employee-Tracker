const inquirer = require('inquirer');
const mysql = require('mysql');
require ('console.table');

//Create connection

const db = mysql.createConnection({

    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'EMPLOYEES_DB',
});

//connect to mysql//

db.connect((err) => {
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

        case 'Update View Roles':
            updateViewRoles();
            break;
}
});
}
//View Deparments function if user selects to view departments
function viewDepartments() {
    console.log ("Current Departments")
    const query = 
    `SELECT department.id, department.name As 
}
