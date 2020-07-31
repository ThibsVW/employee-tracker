USE employeeDB;

INSERT INTO department (department)
VALUES ('Fundraising'), ('Development'), ('Advising'), ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Fundraising Manager', 90000, 1),
    ('Fundraising Assistant', 45000, 1),
    ('Development Manager', 70000, 2),
    ('Associate Development Manager', 50000, 2),
    ('Lead Advisor', 70000, 3),
    ('Associate Advisor', 50000, 3),
    ('Marketing Manager', 75000, 4),
    ('Associate Marketing Manager', 45000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Kathy', 'Wetzel-Mastel', 1, NULL),
    ('Ahmed', 'Artan', 2, 1),
    ('Erin', 'Wilson', 3, NULL),
    ('Kevin', 'Guilden', 4, 3),
    ('Paul', 'McCarthy', 5, NULL),
    ('Luiz', 'Mendoza', 6, 5),
    ('Aubrey', 'Koski', 7, NULL),
    ('Ryan', 'Stopera', 8, 7);