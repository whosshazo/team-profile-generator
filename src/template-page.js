const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
    <div class="card mr-2 ml-2 mt-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title bg-dark text-white">${manager.getName()}<br>Manager</h5>
            <p class="card-text list-group-item">ID:${manager.getId()}</p>
            <p class="card-text list-group-item">Email:${manager.getEmail()}</p>
            <p class="card-text list-group-item">Office Number:${manager.getOfficeNumber()}</p>
        </div>
    </div>`;
  };

  const generateIntern = (intern) => {
    return `
        <div class="card mr-2 ml-2 mt-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title bg-dark text-white">${intern.getName()}<br>Intern</h5>
                <p class="card-text list-group-item">ID:${intern.getId()}</p>
                <p class="card-text list-group-item">Email:${intern.getEmail()}</p>
                <p class="card-text list-group-item">School:${intern.getSchool()}</p>
            </div>
        </div>
      `;
  };

  const generateEngineer = (engineer) => {
    return `
        <div class="card mr-2 ml-2 mt-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title bg-dark text-white">${engineer.getName()}<br>Engineer</h5>
                <p class="card-text list-group-item">ID:${engineer.getId()}</p>
                <p class="card-text list-group-item">Email:${engineer.getEmail()}</p>
                <p class="card-text list-group-item">Github:${engineer.getGithub()}</p>
            </div>
        </div>
      `;
  };

  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Generator</title>

    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <div class="header">
        <h1 class="my-team bg-danger text-white text-center">My Team</h1>
        <div class="container">
        <div class="row">
        ${generateTeam(team)}
        </div>
    </div>
    
</body>
</html>
    `;
};
