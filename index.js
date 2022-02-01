const inquire = require('inquirer');
const fs = require('fs');
const path = require('path');
// const generatePage = require('./utils/generatePage');

function init() {
    inquire.prompt(questions)
}

init();