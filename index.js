const generateHtml = require('./src/generateHtml');

const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require('fs');
const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer');

const team = [];

const managerTeam = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who will be the manager of this team?"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's ID."
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the manager's id tag."
        }

    ])
    .then(answers => {
        const {name, id , email, managerId} = answers;
        const manager = new Manager (name, id , email, managerId);

        team.push(manager);
        console.log(manager);
        menu();
    })
};

const engineerPrompt = () => { 
   inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "role",
            message: "What is your engineer's role?"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your employee's id."
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your engineer's github username."
        },

    ])
    .then(answers => {
        const {name, role, id, email, github} = answers;
        const engineer = new Engineer (name, role,  id, email, github);

        team.push(engineer);
        console.log(engineer);
        menu();
    })

};



const internPrompt = () => {
   inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "role",
            message: "What is your intern's role?"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your intern's id."
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "Enter your school."
        },
    ])
    .then(answers => {
        const {name, role, id, email, school} = answers;
        const intern = new Intern (name, role, id, email, school);

        team.push(intern);
        console.log(intern);
        menu();
    })
};

function menu() {
    inquirer.prompt(
         {
             type: 'list',
             name: "choice",
             message: 'What is your next step?',
             choices: ["Engineer", "Intern", "Finished"]
         }
     ).then(({choice}) => {
         if(choice === "Engineer") {
             engineerPrompt()
         }
         if(choice === "Intern") {
             internPrompt()
         }
         if(choice === "Finished") {
             writeFile()
         }
     })
 };

function writeFile() {
    fs.writeFile('./team.html', generateHtml(team), err => {
        if (err) throw err;
    })
}


managerTeam();