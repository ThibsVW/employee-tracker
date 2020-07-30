//Requiring npm packages

var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

//Creating database connection
//========================================
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: process.env.PORT || 3306,

    // Your username
    user: "root",

    // Your password
    password: "YourRootPassword",
    database: "employeeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

//Start application

function start() {
    inquirer
        .prompt({
            name: "begin",
            type: "list",
            message: "What would you like to do?",
            choices:
                [
                    "View All Employees",
                    "View Employees by Department",
                    "View Employees by Role",
                    "Add Employee",
                    "Update Employee's Role",
                    "Quit"
                ]
        })
        .then(function (answer) {
            // based on their answer, call the function
            if (answer.begin === "View All Employees") {
                viewAllEmp();
            }
            else if (answer.begin === "View Employees by Department") {
                viewEmpDepartment();
            }
            else if (answer.begin === "View Employees by Role") {
                viewEmpRole();
            }
            else if (answer.begin === "Add Employee") {
                addEmployee();
            }
            else if (answer.begin === "Update Employee's Role") {
                updateRole();
            }
            // else if (answer.begin === "Remove Employee") {
            //   removeEmp();
            // }
            else if (answer.begin === "Quit") {
                console.log("====Goodbye====");
            }
            else {
                connection.end();
            }
        });
}