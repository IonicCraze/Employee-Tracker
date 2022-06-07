DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

use employeetracker_db;

CREATE TABLE departments (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL
    
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    rold_id INT,
    FOREIGN KEY (rold_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL

);

