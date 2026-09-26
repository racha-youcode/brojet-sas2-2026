const prompt = require("prompt-sync")()
let conditats = [];
let choix;
////////////////////////////////////////////preparation/////////////////////////////////////////
do {
    console.log(" ================Menu principal==============")
    console.log("1----> ajouter un nouveau candidat")
    console.log("2----> Ajouter plusieurs candidats à la fois. ")
    console.log("3---->  Afficher la liste des candidats ")
    console.log("4---->   Voter pour un candidat  ")
    console.log("5----> Modifier les informations d'un candidat ")
    console.log("6----> Supprimer un candidat ")
    console.log("7----> Rechercher des candidats ")
    console.log("0----> Quitter ")
    console.log("=========================================================")
    choix = prompt("entre votre choix:")

    switch (choix) {
        case "1":
            ajouterCandidats();
            break;
            ;
        case "2":
            plusieuresCandidats(); break;
        case "3":
            afficherCandidats(); break;

        case "4":
            voterElecteur(); break;
        case "5":
            modifierCandidat(); break;
        default:
            console.log("revenu menu principal"); break;
    }
} while (choix != 0)













//////////////////////////////////////////////function///////////////////////////////////////////////////////
function ajouterCandidats() {
    let cin = prompt("entre cin:");
    let nom = prompt("entre nom:");
    let prenom = prompt("entre prenom:");
    let partipolotique = prompt("entre partipolotique:");
    let age = prompt("entre age:")

    conditats.push({
        cin: cin,
        nom: nom,
        prenom: prenom,
        partipolotique: partipolotique,
        age: age,
        electeurs: []
    })
    console.log("=====================================ajouter Candidat===========================")
    console.log(conditats);
    console.log("================================================================")
};
function plusieuresCandidats() {
    let electeur = +prompt("entre plusieures candidats:")

    for (let i = 0; i < electeur; i++) {

        ajouterCandidats();
    }
};
function afficherCandidats() {


    console.table(conditats);

    console.log("=========================================================================");

};
function voterCandidats() {
    let cinelecteur = prompt("demande cin de candidat:")
    for (let i = 0; i < conditats.length; i++) {
        if (conditats[i].cin === cinelecteur) {
            conditats[i].electeurs.push(cinelecteur)
            console.log("voter merci!");
        }
    }
    console.log("aucun candidat ")



};
function voterElecteur() {
    let cinelecteur = prompt("demande cin de candidat:");
    for (let i = 0; i < conditats.length; i++) {
        for (let j = 0; j < cinelecteur; j++) {
            if (conditats[i].electeurs.electeurs[i] === cinelecteur) {
                console.log("deja voter merci!");
            }

        }
    }
    console.log("quel est vous avez voter")
    afficherCandidats();}









    

//     voterCandidats();
//     let cinCandidat = prompt("demande cin de candidat:");
//      let candidatTrouve = null;
//      for (let i = 0; i < conditats.length; i++) {
//     if (conditats[i].cin === cinCandidat) {
//       candidatTrouve = condidats[i];
//       break;
//     }
//   }
//     if (candidatTrouve === null) {
//     console.log("aucun candidat!merci");
//   } else {
//     candidatTrouve.electeurs.push(cinElecteur);
//     console.log("Merci! vous voter sur: " + candidatTrouve.nom);
//   }
// }



















//            function triCandidats (condidats){
//             nouveauCandidats() ;
//       for(let i=0;i<condidats.length-1;i++){
//          for(let j=0;j<condidats.length-1;j++){
//              if(condidats[j].electeurs.length>condidats[j+1].electeurs.length){
//                  let temp=condidats[j];
//              condidats[j]=condidats[j+1];
//                   condidats[j]=temp
//              }
//       }
//      }
//  console.log(condidats)};


















































