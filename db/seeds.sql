USE employee;

INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Sales'),
    ('Legal');

INSERT INTO role_ (title, salary, department_id)
VALUES
    ('Lead Engineer', '130000', 1),
    ('Legal Team Lead', '120000', 4),
    ('Lawyer', '70000', 4),
    ('Software Engineer', '100000', 1),
    ('Sales Lead', '90000', 3),
    ('Sales Person', '70000', 3),
    ('Accountant', '125000', 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Steve', 'Goodfellow', 1),
    ('Bill', 'Graves', 2),
    ('Mary', 'Flores', 3),
    ('Jane', 'Doe', 6);