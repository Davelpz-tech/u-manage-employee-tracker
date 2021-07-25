// Setting up requires -----------------------------------------------
const db = require('./db/connection');
const mysql = require('mysql2');
const {prompt} = require('inquirer');
// Terminal navigation menu propmts -----------------------------------------------
function mainMenu() {
    console.log(`
    =============================================
                     Welcome!
    =============================================
    `)
    prompt([
        {
            type: 'list',
            message: 'Manage your employees',
            name: 'list',
            choices: [
                'check all departments',
                'check all roles',
                'check all employees',
                'add department',
                'add role',
                'add employee',
                'update employee role'
            ],
        },
    ]).then((answers) => {
        if (answers.list === 'check all departments') {
            checkDepartments();
        } else if (answers.list === 'check all roles') {
            checkRoles();
        } else if (answers.list === 'check all employees') {
            checkEmployees();
        } else if (answers.list === 'add department') {
            addDepartment();
        } else if (answers.list === 'add role') {
            addRole();
        } else if (answers.list === 'add employee') {
            addEmployee();
        }
    });
}
// Functions for list options (add departments, roles, employees, etc.)
function checkDepartments() {
    db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows);
        mainMenu();
    });
};

function checkRoles() {
    db.query(`SELECT * FROM role_`, (err, rows) => {
        console.table(rows);
        mainMenu();
    });
};

function checkEmployees() {
    db.query(`SELECT * FROM employee`, (err, rows) => {
        console.table(rows);
        mainMenu();
    });
};

function addDepartment() {
    prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Add department name...'
        },
    ]).then(function (response) {
        db.query(`INSERT INTO department SET ?`, [response], function (err) {
            if(err) throw (err);
            console.log('-- DEPARTMENT HAS BEEN ADDED --');
            mainMenu();
        });
    });
}

function addEmployee() {
    prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Add Employee first name'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Add Employee last_name'
        },
        {
            type: 'input',
            name: 'role_id',
            choices: [
                'Lead Engineer | role_id: 1',
                'Legal Team Lead | role_id: 2',
                'Lawyer | role_id: 3',
                'Software Engineer | role_id: 4',
                'Sales Lead | role_id: 5',
                'Sales Person | role_id: 6',
                'Accountant | role_id: 7'
            ]
        }
    ]).then(function (response) {
        db.query(`INSERT INTO employee SET ?`), [response], function (err) {
            if (err) throw err;
            console.log(`-- EMPLOYEE HAS BEEN ADDED --`);
            mainMenu();
        };
    });
}

function updateEmployee() {
    
}

mainMenu();