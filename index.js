const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const fs = require("fs");
const path = require("path");
const render = require("./src/template-page");
const team = [];
const idTeam = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// ------------ PROMPT USER QUESTIONS ABOUT MANAGER ------------

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your team manager name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide your team manager name");
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your team manager employee ID?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide your team manager employee ID!");
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your team manager email address?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide your team manager email address");
          }
        },
      },
      {
        type: "input",
        name: "managerNumber",
        message: "What is your team manager office number?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide your team manager office number!");
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerNumber
      );
      team.push(manager);
      idTeam.push(answers.managerId);
      makeNewTeamMembers();
    });
};

// ---------- ADD A NEW EMPLOYEE ------------

function makeNewTeamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newEmployee",
        message: "Would you like to add another Employee?",
        choices: ["Engineer", "Intern", "No"],
      },
    ])
    .then((answers) => {
      switch (answers.newEmployee) {
        case "Engineer":
          promptEmployeeEngineer();
          break;

        case "Intern":
          promptEmployeeIntern();
          break;

        default:
          buildTeam();
      }
    });
}

// ------------ ENGINEER QUESTIONS ------------

const promptEmployeeEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "what is your team engineer name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the name for your team engineer");
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your team engineer id?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the ID for your team engineer");
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email for your team engineer?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the email for your team engineer");
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the GitHub account for your team engineer?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(
              "Please provide the GitHub account for your team engineer"
            );
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      team.push(engineer);
      idTeam.push(answers.engineerId);
      makeNewTeamMembers();
    });
};

// ------------ INTERN QUESTIONS -------------------------

const promptEmployeeIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your team intern name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the name of your team intern.");
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is your team intern ID?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide your team intern ID");
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the email for your team intern?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the email for your team intern");
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Where does your team intern go to school?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide the school your intern attends");
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      team.push(intern);
      idTeam.push(answers.internId);
      makeNewTeamMembers();
    });
};

//------ END QUESTION SECTION --------//

function buildTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

promptUser();

// function buildHTML() {
//     renderHTML(team);
// };

// // team
// var team = [
//     {
//         name: "Ryan",
//         id: "32",
//         github: "whatever"
//     },
//     {
//         name: "Ryan",
//         id: "32",
//         github: "whatever"
//     },
//     {
//         name: "Ryan",
//         id: "32",
//         github: "whatever"
//     },

// ]
