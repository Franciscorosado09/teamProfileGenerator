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


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



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
        choices: ["Manager", "Engineer", "Intern", "None"],
    },

]).then((data) => {
    if (data.role == "Manager") {
        addManager();
    } else if (data.role == "Engineer") {
        addEngineer();
    } else if (data.role == "Intern") {
        addIntern();
    } else if (data.role == "None") {

    }

})




//need to write Manager Const

const addManager = () =>
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the employee.',

        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID.",

        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please provide the manager's office number.",
        },



    ]).then((managerData) =>{
     const manager = new Manager (managerData.name,managerData.id, managerData.email, managerData.officeNumber)
     teamProfiles.push(manager)
    
     addTeamMember();
    
    }
    )
//then write Enigeer Const
const addEngineer = () =>

    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the employee.',

        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID.",

        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please provide the engineer's github.",
        },



    ]).then((engineerData) =>{
         const engineer = new Engineer (engineerData.name,engineerData.id, engineerData.email, engineerData.github)
         teamProfiles.push(engineer)
        
         addTeamMember();
        
        })
//then write intern const

const addIntern = () =>
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the employee.',

        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID.",

        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please provide the intern's school name.",
        },



    ]).then((internData) =>{
         const intern = new Intern (internData.name,internData.id, internData.email, internData.school)
         teamProfiles.push(intern)
        
         addTeamMember();
        
        })

    
    
        