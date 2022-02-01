const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generatePage = require('./utils/generatePage');

// ------------ PROMPT USER QUESTIONS ABOUT MANAGER ------------ 

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager-name',
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
            name: 'manager-id',
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
            name: 'manager-email',
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
            name: 'manager-number',
            message: 'What is your team manager office number?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your team manager office number!')
                }
            }
        }
    ]);
};

// ---------- ADD A NEW EMPLOYEE ------------


// const promptEmployee = employeeData => {
//     employeeData.projects = [];
//     console.log(`

//     ==================
//     Add a New Employee
//     ==================

//     `)

//     if (!employeeData.projects) {
//         employeeData.projects = [];
//     }

//         return inquirer.prompt([
//             {
//                 type: 'confirm',
//                 name: 'employee',
//                 message: 'Would you like to add another employee?',
//                 default: false
//             },

//         ])

//         .then(employeeData => {
//             employeeData.projects.push(employeeType);
//             if (employeeData.confirmAddEmployee) {
//                 return promptEmployeeType(employeeData);
//             } else {
//                 return employeeData;
//             }
//         });
        
// }



// const promptEmployeeType = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'test',
//             message: 'This is a test'
//         }
//     ]);
// }

// // ------------ ENGINEER QUESTIONS ------------

// const promptEmployeeEngineer = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'engineer-name',
//             message: 'what is your team engineer name?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide the name for your team engineer')
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engineer-id',
//             message: 'What is your team engineer id?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide the ID for your team engineer')
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engineer-email',
//             message: 'What is the email for your team engineer?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide the email for your team engineer')
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'engineer-github',
//             message: 'What is the GitHub account for your team engineer?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide the GitHub account for your team engineer')
//                 }
//             }
//         }
//     ])
// }

// // ------------ INTERN QUESTIONS -------------------------

// const promptEmployeeIntern = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'intern-name',
//             message: 'What is your team intern name?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide the name of your team intern.')
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'intern-id',
//             message: 'What is your team intern ID?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide your team intern ID')
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'intern-email',
//             message: 'What is the email for your team intern?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide the email for your team intern')
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'intern-school',
//             message: 'Where does your team intern go to school?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please provide the school your inter attends')
//                 }
//             }
//         }    
//     ]);
// }





promptUser()
