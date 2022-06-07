const express = require('express');
const inquirer = require('inquirer')
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection(
  {
      host: 'localhost',
      user: 'root',
      password: 'yourPassword',
      database: 'employeetracker_db'
  },
  console.log('connected to employeetracker_db')
);





