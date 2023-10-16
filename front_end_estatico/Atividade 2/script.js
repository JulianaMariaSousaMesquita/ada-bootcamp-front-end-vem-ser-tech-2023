// Função para atualizar a visibilidade dos campos
function updateFieldsVisibility() {
  const nationality = document.getElementById("nationality").value;
  const cpfContainer = document.getElementById("cpf-container");
  const passportContainer = document.getElementById("passport-container");
  const countrySelect = document.getElementById("country-select");

  cpfContainer.style.display = nationality === "br" ? "block" : "none";
  cpfContainer.required = nationality === "br";
  
  passportContainer.style.display = nationality === "foreign" ? "block" : "none";
  passportContainer.required = nationality === "foreign";
  
  countrySelect.style.display = nationality === "foreign" ? "block" : "none";
  countrySelect.required = nationality === "foreign";
}

// Função para deletar uma entrada por ID
function deleteEntry(id) {
  fetch("https://crudcrud.com/api/e1000cc527734c10ad45fc1b23a39872/users/" + id, {
    method: "DELETE",
  })
    .then(refreshTable);
}

// Função para preencher a tabela de dados
function populateTable(data) {
  const tbody = document.querySelector("#data-table tbody");
  tbody.innerHTML = "";

  data.forEach((entry) => {
    const row = document.createElement("tr");
    const keys = ["name", "email", "birthdate", "nationality", "cpf", "passport", "country"];

    keys.forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = entry[key];
      row.appendChild(cell);
    });

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Deletar";
    deleteButton.addEventListener("click", () => {
      deleteEntry(entry._id);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tbody.appendChild(row);
  });
}

// Função para buscar e atualizar a tabela de dados
function refreshTable() {
  fetch("https://crudcrud.com/api/e1000cc527734c10ad45fc1b23a39872/users/", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => populateTable(data))
}

// Atualiza a visibilidade dos campos e preenche a tabela no início
updateFieldsVisibility();
refreshTable();

// Event listener para o formulário de envio
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch("https://crudcrud.com/api/e1000cc527734c10ad45fc1b23a39872/users/", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      this.reset();
      refreshTable();
      document.getElementById("data-table").style.display = "table";
    });
});

// Event listener para alterações na seleção de nacionalidade
document.getElementById("nationality").addEventListener("change", updateFieldsVisibility);