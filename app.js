const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const {
    Console
} = require("console");

const teamProfiles = []




const confirmManager =
inquirer.prompt ([
{
    type: "list",
    name: "confirm",
    message: "Welcome to the TeamGenerator, if this your first time entering employees will you confirm you will begin with adding a Manager in the system",
    choices: ["Confirm", "Exit Program"],
}

]).then((data) => {
    if (data.confirm == "Confirm") {
        addTeamMember();
    } else if (data.role == "Exit Program") {
       

    }
})


const addTeamMember = ()=> inquirer.prompt([

    
    {
        type: "list",
        name: "role",
        message: "Which type of employee are you entering into the system?",
        choices: ["Manager", "Engineer", "Intern", "Exit Program"],
    },

]).then((data) => {
    if (data.role === "Manager") {
        addManager();
    } else if (data.role === "Engineer") {
        addEngineer();
    } else if (data.role === "Intern") {
        addIntern();
    } else if (data.role === "Exit Program") {
        createFile ();

    }

})






const addManager = () =>
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the manager.',
            validate: (responseInfo) =>
            { if (responseInfo){
                return true
            }
            else{
                return "Please provide name of Manager"
            }

            }

        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID.",
            validate: (responseInfo) => {
                if (/^([1-9])$/.test(responseInfo)) {
                    return true
                }
                else {
                    return "Please enter only numbers between 1-9."
                }}

        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email.",
            validate: (responseInfo) =>
            { if (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(responseInfo)){
                return true
            }
            else{
                return "Please provide valid email"
            }

            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please provide the manager's office number.",
            validate: (responseInfo) => {
                if (/^([1-9])$/.test(responseInfo)) {
                    return true
                }
                else {
                    return "Please enter only numbers between 1-9."
                }}
        },



    ]).then((data) =>{
     const manager = new Manager (data.name, data.id, data.email, data.officeNumber)
     teamProfiles.push(manager)
    
     addTeamMember();
    
    }
    )

const addEngineer = () =>

    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the engineer.',
            validate: (responseInfo) =>
            { if (responseInfo){
                return true
            }
            else{
                return "Please provide name of engineer"
            }

            }


        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID.",
            validate: (responseInfo) => {
                if (/^([1-9])$/.test(responseInfo)) {
                    return true
                }
                else {
                    return "Please enter only numbers between 1-9."
                }}

        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email.",
            validate: (responseInfo) =>
            { if (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(responseInfo)){
                return true
            }
            else{
                return "Please provide valid email"
            }

            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please provide the engineer's github username.",
            validate: (responseInfo) =>
            { if (responseInfo){
                return true
            }
            else{
                return "Please provide name of engineer's username"
            }

            }

            
        },



    ]).then((data) =>{
         const engineer = new Engineer (data.name, data.id, data.email, data.github)
         teamProfiles.push(engineer)
        
         addTeamMember();
        
        })


const addIntern = () =>
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the intern.',
            validate: (responseInfo) =>
            { if (responseInfo){
                return true
            }
            else{
                return "Please provide name of intern"
            }

            }


        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID.",
            validate: (responseInfo) => {
                if (/^([1-9])$/.test(responseInfo)) {
                    return true
                }
                else {
                    return "Please enter only numbers between 1-9."
                }}

        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email.",
            validate: (responseInfo) =>
            { if (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(responseInfo)){
                return true
            }
            else{
                return "Please provide valid email"
            }

            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please provide the intern's school name.",
            validate: (responseInfo) =>
            { if (responseInfo){
                return true
            }
            else{
                return "Please provide name of intern's school."
            }

            }
        },



    ]).then((data) =>{
         const intern = new Intern (data.name, data.id, data.email, data.school)
         teamProfiles.push(intern)
        
         addTeamMember();
        
        })

    
    
        
const createFile = () =>{

fs.writeFileSync(outputPath, render(teamProfiles), "utf-8");
console.log("Generator complete. Please check output folders for your teams' profiles")
}