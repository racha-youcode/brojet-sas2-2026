const prompt = require("prompt-sync")()
let condidats = [];
let choix;
////////////////////////////////////////////preparation/////////////////////////////////////////
do {
    console.log(" ================Menu principal==============")
    console.log("1----> ajouter un nouveau candidat")
    console.log("2----> Ajouter plusieurs candidats à la fois. ")
    console.log("3---->  Afficher la liste des candidats ")
    console.log("4---->  Afficher par Trier les candidats   ")
    console.log("5---->  Afficher par Filtrer les candidats ")
    console.log("6---->   Voter pour un candidat  ")
    console.log("7----> Modifier l'age  d'un candidat ")
    console.log("8----> Modifier la partipolitique d'un candidat ")
    console.log("9----> Supprimer un candidat ")
    console.log("10----> Rechercher des candidats ")
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
             triCondidats (condidats);
              break;
        case "5":
            //filterCandidats(); break;
            case "6":
            voterElecteur(); break;
              case "7":
            modifierageCandidat(); break;
              case "8":
            modifierpartipolitiqueCandidat(); break;
              case "9":
            m; break;
              case "10":
            ; break;

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

    condidats.push({
        cin: cin,
        nom: nom,
        prenom: prenom,
        partipolotique: partipolotique,
        age: age,
        electeurs: []
    })
    console.log("=====================================ajouter Candidat===========================")
    console.log(condidats);
    console.log("================================================================")
};
///////////////////////////////////////////////plusieurecandidats////////////////////////////////////////////////////
function plusieuresCandidats() {
    let electeur = +prompt("entre plusieures candidats:")

    for (let i = 0; i < electeur; i++) {

        ajouterCandidats();
    }
};
/////////////////////////////////////////////////////afficher/////////////////////////////////////////////////////////
function afficherCandidats() {


    console.table(condidats);

    console.log("=========================================================================");

};
    function triCondidats (condidats){
              
        for(let i=0;i<condidats.length-1;i++){
           for(let j=0;j<condidats.length-1;j++){
               if(condidats[j].electeurs.length<condidats[j+1].electeurs.length){
                   let temp=condidats[j];
              condidats[j]=condidats[j+1];
                   condidats[j+1]=temp
              }
       }
      } console.table(condidats)};
      
/////////////////////////////////////////////////////////////voter////////////////////////////////////////////////////////////
function voterCandidats() {
    let cinCandidat=prompt("entre cin candidat qui vous voter:")
    
    for (let i = 0; i < condidats.length; i++) {
        if (condidats[i].cin === cinCandidat) {
            condidats[i].electeurs++
            console.log("vous avez voté merci!");break;
        }
    }
    console.log(" Votre cin du candidat n'exte pas merci!" )



};
function voterElecteur() {
    let cinelecteur = prompt("etre votre cin :")
    for (let i = 0; i < condidats.length; i++) {
        for (let j = 0; j < condidats[i].electeurs.length; j++) {
            if (condidats[i].cinelecteur[j] === cinelecteur) {
                console.log(" Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau" );break;
            }

        }
        ;break;
    }
    console.log("quel est vous avez voter")
    afficherCandidats();
    voterCandidats();
}
//////////////////////////////////////////////////////////////Modifier /////////////////////////////////////////////////
function modifierageCandidat(){
    let agerecherche=prompt("entre le age du candidat:")
    for(let i=0;i<condidats.length;i++){
        if(condidats[i].age==agerecherche){
            let neauveauage=prompt("entre le neauvau nom:")
            condidats[i].age=neauveauage;
        }
        console.log("le neauvau age du candidat est modifier")
    }
}
function modifierpartipolitiqueCandidat(){
    let partipolotiquerecherche=prompt("entre la partipolotique du candidat:")
    for(let i=0;i<condidats.length;i++){
        if(condidats[i].partipolotique==partipolotiquerecherche){
            let neauvaupartipolitique=prompt("entre le neauvau partipolitique:")
            condidats[i].partipolotique=neauvaupartipolitique;
        }
        console.log("le neauvau partipolitique du candidat est modifier")
    }
}
////////////////////////////////////////////Supprimer////////////////////////////////////////////////








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



































































