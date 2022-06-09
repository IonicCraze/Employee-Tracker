const express = require('express');
const inquirer = require('inquirer')
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection(
  {
      host: 'localhost',
      user: 'root',
      password: 'Dr33978392143381!ums!',
      database: 'employeetracker_db'
  },
  console.log('connected to employeetracker_db')
);

//DO A COMMIT AFTER DINNER


inquirer
const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
        }
    ])
} 



const start = () => {
  menu()
  .then((data) => {
    switch(data.choice){
      case 'View All Employees':
        viewEmployees();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'View All Roles':
        viewRoles();
        break;
      case 'Add Role':
        addRole();
        break;
      case 'View All Departments':
        viewDepartments();
        break;
      case 'Add Department':
        addDepartment();
        break;
    }
  })
}

const viewEmployees = () => {
  const sqlCommand = `SELECT * FROM employee`;
  db.query(sqlCommand, (err, res) => {
    if (err) {
      console.log(err)
      return "Error";
    }
    console.table(res);
    start();
  })
}

const viewDepartments = () => {
  const sqlCommand = `SELECT * FROM Departments`;
  db.query(sqlCommand, (err, res) => {
    if (err) {
      console.log(err)
      return "Error";
    }
    console.table(res);
    start(); 
  })
}

const viewRoles = () => {
  const sqlCommand = `SELECT * FROM Roles`;
  db.query(sqlCommand, (err, res) => {
    if (err) {
      console.log(err)
      return "Error";
    }
    console.table(res);
    start(); 
  })
}

start();




