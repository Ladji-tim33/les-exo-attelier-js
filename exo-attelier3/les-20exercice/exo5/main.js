

// ----------exo5--------------

let prixHorsTaxe = prompt("Entrez le prix hors taxes:");


let  prixTaux = prompt("Entrez le prix TVA:");
let calcul = prixTaux / 6 ;
let prixttc = prixHorsTaxe * calcul ;

document.body.innerText = prixttc