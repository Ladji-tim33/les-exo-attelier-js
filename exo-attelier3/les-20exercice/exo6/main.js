
// ---------------exo6-------------

let prixHorsTaxe = prompt("Entrez le prix hors taxes:");


let  prixTaux = prompt("Entrez le prix TVA:");
let calcul = prixTaux / 6 ;
let prixttc = prixHorsTaxe * calcul ;

if(prixttc > 100){
   document.querySelector("h1").innerHTML += prixttc
} else{
   document.querySelector("h2").innerHTML += prixttc
}
