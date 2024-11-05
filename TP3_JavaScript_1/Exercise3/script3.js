// Simple array
const etudiantsTab = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Single object
const etudiantObjet = {
    nom: 'John',
    prenom: 'DOE',
    age: 30
};

// Array of objects
const etudiants = [
    {nom: 'nom1', prenom: 'prenom1', age: 21},
    {nom: 'nom2', prenom: 'prenom2', age: 22},
    {nom: 'nom3', prenom: 'prenom3', age: 23}
];

function displayArray() {
    for(let i = 0; i < etudiantsTab.length; i++) {
        console.log(etudiantsTab[i]);
    }
}

function afficherObjet() {
    for(let key in etudiantObjet) {
        console.log(`${key}: ${etudiantObjet[key]}`);
    }
}

function afficherTableauObjets() {
    for(let etudiant of etudiants) {
        console.log(`${etudiant.nom} - ${etudiant.prenom} - ${etudiant.age}`);
    }
}
