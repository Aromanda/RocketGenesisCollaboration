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

/* Make a GET request to retrieve the agent data
fetch("http://99.79.77.144:3000/api/agents")
  .then(response => response.json())
  .then(data => {
    var filteredAgents = data.filter(function(agent) {
      return agent.rating >= 95;
    });
    populateAgentTable(filteredAgents);
  })
  .catch(error => console.error("Error:", error));
*/

  // Function to filter agents by region and update the table
 // Function to filter agents by region and update the table
function filterAgentsByRegion(region) {
  fetch("http://99.79.77.144:3000/api/agents")
    .then(response => response.json())
    .then(data => {
      var filteredAgents = data.filter(agent => agent.rating >= 95);

      if (region !== "all") {
        filteredAgents = filteredAgents.filter(agent => agent.region.toLowerCase() === region.toLowerCase());
      }

      populateAgentTable(filteredAgents);
    })
    .catch(error => console.error("Error:", error));
}

// Function to add click event listeners to dropdown menu items
function addDropdownEventListeners() {
  var dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach(item => {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      var region = this.getAttribute("data-region");
      filterAgentsByRegion(region);
    });
  });
}

// Function to initialize the page and table with all agents
function initializePage() {
  filterAgentsByRegion("all");
  addDropdownEventListeners();
}

// Call the initializePage function when the page has finished loading
window.addEventListener("load", initializePage);


