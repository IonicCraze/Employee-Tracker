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

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter first name'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter last name'
    },
    {
      type: 'input',
      name: 'roleid',
      message: 'Enter roleid'
    },
    {
      type: 'input',
      name: 'managerid',
      message: 'Enter managerid'
    }
  ])
  .then((data) => {
    db.query(`INSERT INTO employee(first_name, last_name, rold_id, manager_id)
              VALUES('${data.firstName}', '${data.lastName}', ${data.roleid}, ${data.managerid})`);
    
    db.query(`SELECT * FROM employee`, (err, res) => {
      if (err) {
        console.log(err);
        return 'error'
      }
      console.table(res);
    });
  
    start();
  });
}

const addDepartment = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'Enter department name'
    }
  ])
  .then((data) => {
    db.query(`INSERT INTO departments(department_name)
              VALUES('${data.departmentName}')`);
    
    db.query(`SELECT * FROM departments`, (err, res) => {
      if (err) {
        console.log(err);
        return 'error'
      }
      console.table(res);
    });
  
    start();
  });
}

const addRole = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter role name'
    },
    {
      type: 'input',
      name: 'roleSalary',
      message: 'Enter role salary'
    },
    {
      type: 'input',
      name: 'departmentid',
      message: 'Enter department id'
    }
  ])
  .then((data) => {
    db.query(`INSERT INTO roles(title, salary, department_id)
              VALUES('${data.title}', '${data.roleSalary}', '${data.departmentid}')`);
    
    db.query(`SELECT * FROM roles`, (err, res) => {
      if (err) {
        console.log(err);
        return 'error'
      }
      console.table(res);
    });
  
    start();
  });
}


start();




