INSERT INTO departments (department_name)
 VALUES ('Engineering'),
        ('Research'),
        ('Development'),
        ('Marketing'),
        ('Outreach'),
        ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES ('Manager', 80000, null),
       ('Programmer', 70000, 1),
       ('Salesperson', 40000, 4),
       ('Designer', 55000, 5),
       ('HR', 50000, 6),
       ('Secretary', 40000, 2);

INSERT INTO employee (first_name, last_name, rold_id, manager_id)
VALUES ('Bill', 'Daniels', 1, null),
       ('Bob', 'Smith', 2, 1),
       ('Paul', 'Morgan', 3, 2)       
