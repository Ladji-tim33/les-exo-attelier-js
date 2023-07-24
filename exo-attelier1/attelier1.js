    // ca c'est mon commentaire de une seul ligne

    /* ici j'ais fait une commentaire
    avec plusieurs ligne
    comme vous le voiyer*/
    console.log("coucou");

    // let variable = "Helo"
    // console.log(Variable);

    var x = 2;
    let nom = "timera";
    const prenom = "ladji";
    nom = "diallo"
    //  letil peut évoluer
    console.log(nom);
   
    // const c’est une constante ca veut dire qu'il ne bouge pas,
    console.log (prenom);
    // prenom = "santos";

    // ici ca fonctionne
    var preNom = "ladji tim"
    var preNom = "khady diop"

//  ici ya une ereure
//    let  XpreNom = "ladji tim"
//    let XpreNom = "khady diop"

//     La concaténation 

let chaine = "bonjour tous le monde"
let nouvelleChaine = "chaine précendant :" + chaine
console.log(nouvelleChaine);

let chaineNn = "bonjour tous le monde"
let nouvelleChaineNn = `chaine précendant numero 2 :" + ${chaineNn }`
console.log(nouvelleChaineNn);



// les types de données

let string = " chaine de caractères"
let number = 23
let boolean = true
let array = ["moi", "j'ais", 47, true]

// Les opérateurs 

console.log(4 + 7);
console.log(4 - 7);
console.log(4 * 7);
console.log(4 /7);
console.log(4 ** 7);

// Les opérateurs d’affectation
let total = 0;

total += 5;
total -= 2;
total += 3;

// Structures de contrôles

let a = 5;
let y = 3;
 if (a > y){
    alert("yes x plus gros que y")
 }else if (y > a){
    alert("yes y plus gros que x")
 }else{
    alert("ils sont egaux")
 }


//  Les fonction

function FaireQuellequeChose(parametre){
    console.log("je suis dans le fonction");
}

// appler notre fonction
FaireQuellequeChose()

