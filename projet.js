const prompt = require("prompt-sync")()
 let condidats = [{
     cin: "PB312568",
     nom: "Abidi",
     prenom: "karim",
     partipolotique: "Indépendant",
     age: 45,
     electeurs: ['pb312594','pb317469','p025232','p3698']
 }, {
    cin: "AB935778",
     nom: "Ait abd Rafiaa",
     prenom: "omar",
     partipolotique: "PAM",
     age: 30,
    electeurs: ['PB25314','PB31976','P5236','P31569','P5264','PB31203','P9873','PB310263']
 }, {
     cin: "Ad4458",
    nom: "zinb",
    prenom: "Lamkdmi",
    partipolotique: "PJD",
    age: 40,
    electeurs: ['pb31906','p02341']
 }, {
     cin: "pb2458",
     nom: "sofian",
     prenom: "Sousofiany",
     partipolotique: "PI",
     age: 32,
    electeurs: ['pb314836','p2569','p02369']
 },];


let choix;
////////////////////////////////////////////preparation/////////////////////////////////////////
do {
    console.log(" ================Menu principal==============")
    console.log("1----> ajouter un nouveau candidat")
    console.log("2----> Ajouter plusieurs candidats à la fois. ")
    console.log("3---->  Afficher la liste des candidats ")
    console.log("4---->  Afficher par Trier les candidats   ")
    console.log("5---->   Voter pour un candidat  ")
    console.log("6----> Modifier l'age  d'un candidat ")
    console.log("7----> Modifier la partipolitique d'un candidat ")
    console.log("8----> Supprimer un candidat ")
    console.log("9----> Rechercher des candidats ")
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
            triCondidats(condidats);
            break;
        
        case "5":
            voterElecteur(); break;
        case "6":
            modifierageCandidat(); break;
        case "7":
            modifierpartipolitiqueCandidat(); break;
        case "8":
            SupprimerCandidat(); break;
        case "9":
            RechercherCandidat(); break;

        default:
            console.log("Retour au menu principal s'il vous plait!"); break;
    }
} while (choix != 0)













//////////////////////////////////////////////function///////////////////////////////////////////////////////
function ajouterCandidats() {
    let cin = prompt("entrez le cin s'il vous plait:").toLowerCase();
    for (let i = 0; i < condidats.length; i++) {
        if (condidats[i].cin .toLowerCase() == cin .toLowerCase()) {
            console.log("Vous avez déjà un condidat en meme cin ")
            return
        }
    }
    let nom = prompt("entrez nom:").toLowerCase() ;
    let prenom = prompt("entrez prenom:").toLowerCase() ;
    let partipolotique = prompt("entrez partipolotique:").toLowerCase() ;
    let age = +prompt("entrez age:")

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
    return true;
};
///////////////////////////////////////////////plusieurecandidats////////////////////////////////////////////////////
function plusieuresCandidats() {
    let condidat = +prompt("entre plusieures candidats:");

    for (let i = 0; i < condidat; i++) {

        ajouterCandidats();
    }
};
/////////////////////////////////////////////////////afficher////////////////////////////////////////////////////////////
function afficherCandidats() {


    console.table(condidats);

    console.log("=========================================================================");

};
function triCondidats(condidats) {

    for (let i = 0; i < condidats.length; i++) {
        for (let j = 0; j < condidats.length - 1; j++) {
            0
            if (condidats[i].electeurs.length > condidats[j].electeurs.length) {
                let temp = condidats[i];
                condidats[i] = condidats[j];
                condidats[j] = temp
            }
        }

    } console.log("==============classement trie======================")
    console.table(condidats)
};

/////////////////////////////////////////////////////////////voter////////////////////////////////////////////////////////////
function voterCandidats(cinelecteur) {
    let cinCandidat = prompt("entre cin candidat qui vous voter:").toLowerCase();

    for (let i = 0; i < condidats.length; i++) {
        if (condidats[i].cin== cinCandidat ) {
            condidats[i].electeurs.push(cinelecteur)
            console.log("vous avez voté merci!");
            return;

        }
    }
    console.log(" cin du candidat n'exte pas merci!")


};
function voterElecteur() {
    let cinelecteur = prompt("etre votre cin s'il vous plait:");
    for (let i = 0; i < condidats.length; i++) {
        for (let j = 0; j < condidats[i].electeurs.length; j++) {
            if (condidats[i].electeurs[j]=== cinelecteur ) {
                console.log(" Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau"); break;
            }

        }
        ; break;
    }
    console.log("pour qui allez-vous voter")
    afficherCandidats();
    voterCandidats(cinelecteur);
}
//////////////////////////////////////////////////////////////Modifier /////////////////////////////////////////////////
function modifierageCandidat() {
    let agerecherche = +prompt("entre le age du candidat s'il vous plait:")
    for (let i = 0; i < condidats.length; i++) {
        if (condidats[i].age == agerecherche) {
            let neauveauage = +prompt("entre le neauvau nom:")
            condidats[i].age = neauveauage;
        }
        console.log("le neauvau age du candidat est modifier")
    }
}
function modifierpartipolitiqueCandidat() {
    let partipolotiquerecherche = prompt("entre la partipolotique du candidat s'il vous plait:");
    for (let i = 0; i < condidats.length; i++) {
        if (condidats[i].partipolotique.toLowerCase() == partipolotiquerecherche .toLowerCase()) {
            let neauvaupartipolitique = prompt("entre le neauvau partipolitique:")
            condidats[i].partipolotique = neauvaupartipolitique;
        }
        console.log("le neauvau partipolitique du candidat est modifier merci")
    }
}
///////////////////////////////////////////////////Supprimer////////////////////////////////////////////////

function SupprimerCandidat() {
    let cinsuSupprimer = prompt("retrait de candidature:");
    for (let i = 0; i < condidats.length; i++) {
        if (condidats[i].cin.toLowerCase() === cinsuSupprimer.toLowerCase() ) {
            condidats.splice(i, 1);

        } console.log("condidat a est été supprimé")
    }

}
/////////////////////////////////////////// Rechercher///////////////////////////////////////////////////

function RechercherCandidat() {
    let nomRechercher = prompt("veuillez saisir le candidat que vous souhaitez modifier:");
    for (let i = 0; i < condidats.length; i++) {
        if (condidats[i].nom .toLowerCase()== nomRechercher.toLowerCase()) {
            console.log("=======condidat trouver=======")
            console.log(
                `|${condidats[i].cin}|
        
         |${condidats[i].nom}|
         |${condidats[i].prenom}|
         |${condidats[i].partipolotique}|
         |${condidats[i].age}|
         `)
        }
         return
    }
    console.log("aucun condidat avec ce nom merci!")
}







































































