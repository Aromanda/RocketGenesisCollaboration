function populateAgentTable(data) {
  var tableBody = document.getElementById("agentTableBody");
  tableBody.innerHTML = "";

  data.forEach(function(agent, index) {
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
}

// Make a GET request to retrieve the agent data
fetch("http://99.79.77.144:3000/api/agents")
  .then(response => response.json())
  .then(data => {
    var filteredAgents = data.filter(function(agent) {
      return agent.rating >= 95;
    });
    populateAgentTable(filteredAgents);
  })
  .catch(error => console.error("Error:", error));