const createManager = function (manager) {
    return `
    <div class="card" style="width:400px">
        <div class="card-divider employees">
            <h5>Manager: ${manager.name}</h5>
        </div>
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email:<a href="${manager.email}"> ${manager.email}</a></p>
        <p class="managerId"> Manager ID: ${manager.managerId}</p>
        
    </div>
    `;
};

const createEngineer = function (engineer) {
    return `
    <div class="card" style="width:400px">
        <div class="card-divider employees">
            <h5>Engineer: ${engineer.name}</h5>
        </div>
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email:<a href="${engineer.email}"> ${engineer.email}</a></p>
        <p class="github"> Github: ${engineer.github}</p>
        
    </div>
    `;
};

const createIntern = function (intern) {
    return `
    <div class="card" style="width:400px">
        <div class="card-divider employees">
            <h5>Intern: ${intern.name}</h5>
        </div>
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email:<a href="${intern.email}"> ${intern.email}</a></p>
        <p class="school"> school: ${intern.scchool}</p>
        
    </div>
    `;
};

dataOptions = (data) => {
    info = [];

    for (var i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = createManager(employee);
            info.push(managerInfo);
        }
        if (role === 'Engineer') {
            const engineerInfo = createEngineer(employee);
            info.push(engineerInfo);
        }
        if (role === 'Intern') {
            const internInfo = createIntern(employee);
            info.push(internInfo);
        }

    }

    const employeeCards = info.join('')

    const teamInfo = generatePage(employeeCards);
    return teamInfo;
};

const generatePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
</head>
<body>
    <div class="top-bar nav">
    <h1>Engineering Team</h1>
    </div>
    <br>
    <div class="card" style="width:400px">
        ${employeeCards}
    </div>
</body>
</html>`
};

module.exports = dataOptions;