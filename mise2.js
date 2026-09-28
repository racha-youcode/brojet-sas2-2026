const prompt=require("prompt-sync")()
const boissons =[{ nom:"chaude", prix:25, stock:200 },{nom:"froide",prix:30,stock:20},{nom:"soda",prix:20,stock:0}];
console.log("1---> boisson chaude ")
    console.log("2---> boisson froide")
    console.log("3---> boisson soda")
let choix=prompt("entre votre choix:")
    

switch(choix){

    case "1" :
         for(let i=0;i<boissons.length;i++){
        console.table("nom:",boissons[i].nom)
         console.log("prix:",boissons[i].prix)
          console.log("stock:",boissons[i].stock)
    };break;
        case "2":
            //rechercherBoisson(froide);break;
            case "3":
                //rechercherBoisson(soda);break;
                default:
                    console.log("votre choix invalider!merci.");
}
  let montant =prompt("le montant inséré.")
let nom =prompt(" le nom de la boisson choisie :")
let  rendre=0



for(let i=0;i<boissons.length;i++){
    if(montant>=boissons[i].prix && boissons[i].nom>nom){
        if(montant>boissons[i].prix){
          rendre= boissons[i].prix-montant  
        }
        console.log("le montant ." , montant)
    }
    console.log("choix pas disponible !merci")
}

//rechercherBoisson(froide)
//{
    //for(let i=0;i<boissons.length;i++){
        //console.log(boissons[i].nom)
         //console.log(boissons[i].prix)
          //console.log(boissons[i].stock)
    //}
//}