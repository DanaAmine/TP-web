let lignes = 0;
let total_points = 0;

const persons = [
    {nom: "Doe", prenom: "John", points: 10},
    {nom: "Smith", prenom: "Jane", points: 15},
    {nom: "Brown", prenom: "Bob", points: 5}
];

function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementById("dataTable");
    const newRow = table.insertRow(-1);
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    
    cell1.className = "col_number";
    cell2.className = "col_text";
    cell3.className = "col_text";
    cell4.className = "col_number";
    cell5.className = "col_chkbox";
    
    cell1.innerHTML = num;
    cell2.innerHTML = nom;
    cell3.innerHTML = prenom;
    cell4.innerHTML = points;
    cell5.innerHTML = '<input type="checkbox"/>';
}

function init() {
    persons.forEach(person => {
        doInsert(person.nom, person.prenom, person.points);
    });
}

function doInsert(nom, prenom, points) {
    lignes++;
    total_points += parseInt(points);
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

function update_summary() {
    document.getElementById("nb_lines").innerHTML = lignes;
    document.getElementById("total_points").innerHTML = total_points;
}

function consoleTableau() {
    console.log("Current table content:", persons);
}

function doNewData() {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const points = document.getElementById("points").value;
    
    if (nom === "" || prenom === "" || points === "") {
        alert("Please fill all fields!");
        return;
    }
    
    doInsert(nom, prenom, points);
    persons.push({nom: nom, prenom: prenom, points: parseInt(points)});
    
    // Clear input fields
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("points").value = "";
}

function deleteRow() {
    const table = document.getElementById("dataTable");
    const checkboxes = table.getElementsByTagName("input");
    const toDelete = [];
    
    // Mark rows for deletion
    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            toDelete.push(i);
        }
    }
    
    // Delete from table and update persons array
    toDelete.forEach(index => {
        table.deleteRow(index + 1); // +1 because of header row
        persons.splice(index, 1);
        lignes--;
        // Recalculate total points
        total_points = persons.reduce((sum, person) => sum + person.points, 0);
    });
    
    update_summary();
}
