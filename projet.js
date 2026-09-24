const prompt = require("prompt-sync")()
let conditats = [];
let choix ;
////////////////////////////////////////////preparation/////////////////////////////////////////
do{console.log("        ========Menu==========")
console.log("1----> ajouter un nouveau candidat")
console.log("2----> Afficher la liste des candidats ")
console.log("3----> Voter pour un candidat ")
console.log("4----> Modifier les informations d'un candidat ")
console.log("5----> Supprimer un candidat ")
console.log("6----> Rechercher des candidats ")
console.log("7----> Statistiques de l'élection ")
 choix = prompt("entre votre choix:")

    switch (choix) {
        case "1":
            nouveauCandidats(); break;
            ;
        case "2":
        // afficherCandidats();
    }
} while (choix != 0)













//////////////////////////////////////////////function///////////////////////////////////////////////////////
function nouveauCandidats() {
    let cin = prompt("entre cin:");
    let nom = prompt("entre nom:");
    let prenom = prompt("entre prenom:");
    let partipolotique = prompt("entre partipolotique:");
    let age = prompt("entre age:")
    let electeurs = prompt("entre electeurs:")
    conditats.push({
        cin: cin,
        nom: nom,
        prenom: prenom,
        partipolotique: partipolotique,
        age: age,
        electeurs: electeurs
    })
    console.log(conditats);
};





























//  afficherCandidats(){

//  }