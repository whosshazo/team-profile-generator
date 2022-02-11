const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const path = require('path');
const writeFile = require('./lib/generate-page.js');
const team = [];
const idTeam = [];


// ------------ PROMPT USER QUESTIONS ABOUT MANAGER ------------ 

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your team manager name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your team manager name')
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your team manager employee ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your team manager employee ID!')
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your team manager email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your team manager email address')
                }
            }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'What is your team manager office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your team manager office number!')
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        team.push(manager)
        idTeam.push(answers.managerId);
        makeNewTeamMembers()
    })



};

// ---------- ADD A NEW EMPLOYEE ------------

function makeNewTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add another Employee?',
            choices: ['Engineer', 'Intern', 'No']
        },
    ]).then(answers => {
        switch (answers.newEmployee) {
            case 'Engineer':
                promptEmployeeEngineer() 
                break;
            
            case 'Intern':
                promptEmployeeIntern() 
                break;
        
            default:
                buildTeam();
        }
    })
};



// ------------ ENGINEER QUESTIONS ------------

const promptEmployeeEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineer-name',
            message: 'what is your team engineer name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the name for your team engineer')
                }
            }
        },
        {
            type: 'input',
            name: 'engineer-id',
            message: 'What is your team engineer id?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the ID for your team engineer')
                }
            }
        },
        {
            type: 'input',
            name: 'engineer-email',
            message: 'What is the email for your team engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the email for your team engineer')
                }
            }
        },
        {
            type: 'input',
            name: 'engineer-github',
            message: 'What is the GitHub account for your team engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the GitHub account for your team engineer')
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.EngineerName, answers.EngineerId, answers.EngineerEmail, answers.EngineerGithub);
        team.push(engineer)
        idTeam.push(answers.engineerId);
        makeNewTeamMembers()
    })
}

// ------------ INTERN QUESTIONS -------------------------

const promptEmployeeIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intern-name',
            message: 'What is your team intern name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the name of your team intern.')
                }
            }
        },
        {
            type: 'input',
            name: 'intern-id',
            message: 'What is your team intern ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your team intern ID')
                }
            }
        },
        {
            type: 'input',
            name: 'intern-email',
            message: 'What is the email for your team intern?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the email for your team intern')
                }
            }
        },
        {
            type: 'input',
            name: 'intern-school',
            message: 'Where does your team intern go to school?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide the school your intern attends')
                }
            }
        }    
    ]).then(answers => {
        const intern = new Intern(answers.InternName, answers.InternId, answers.InternEmail, answers.InternSchool);
        team.push(intern)
        idTeam.push(answers.internId);
        makeNewTeamMembers()
    })
    
}





promptUser()
.then(employeeData => {
    return writeFile(employeeData); 
})
// .then(pageHTML => {
//     return fs.writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
// })
// .catch(err => {
//     console.log(err);
// });
