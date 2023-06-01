var agents = [
    {"first_name":"Orlando","last_name":"Perez","email":"perez@rocket.elv","region":"north","rating":"95","fee":"10000"},
    {"first_name":"Elmar","last_name":"Fade","email":"elmar@rocket.elv","region":"south","rating":"95","fee":"10000"},
    {"first_name":"Zed","last_name":"Roles","email":"zebra@rocket.elv","region":"north","rating":"100","fee":"4321"},
    {"first_name":"Brian","last_name":"Bossman","email":"papi@rocket.elv","region":"south","rating":"100","fee":"10001"}
  ];

  var bestAgents = agents.filter(function(agent) {
    return agent.rating >= 95;
  });

  var tableBody = document.querySelector("#tableagent tbody");

  bestAgents.forEach(function(agent, index) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${agent.first_name}</td>
      <td>${agent.last_name}</td>
      <td>${agent.rating}</td>
      <td>${agent.fee}</td>
      <td>${agent.region}</td>
    `;
    tableBody.appendChild(row);
  });

