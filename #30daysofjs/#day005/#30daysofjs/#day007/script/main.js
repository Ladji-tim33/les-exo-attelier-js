//  les exercices
// Déclarez une fonction fullName et elle affiche votre nom complet.

function printFullName (){
    let firstName = 'Ladji'
    let lastName = 'Timera'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() // calling a function


// Déclarez une fonction fullName et maintenant elle prend firstName, lastName comme paramètre et elle renvoie votre nom complet.

function myName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
  
console.log(myName('Ladji', 'timera'))



// Déclarez une fonction addNumbers et elle prend deux deux paramètres et renvoie la somme.

function addNumbers(num1, num2) {
    let som = num1 + num2
    console.log(som)
}
addNumbers(15, 20)



// L'aire d'un rectangle est calculée comme suit : aire = longueur x largeur . Écrivez une fonction qui calcule AreaOfRectangle .
function AreaOfRectangle() {
    let longueur = 5
    let largeur  = 2
    let aire = longueur * largeur
    console.log(aire)
}
  
AreaOfRectangle() 




// le périmètre d'un rectangle est calculé comme suit : périmètre= 2x(longueur + largeur) . Écrivez une fonction qui calcule périmètreOfRectangle 
function périmètreOfRectangle() {
    let longueur = 5
    let largeur  = 2
    let perimetre = 2 * longueur + largeur
    console.log(perimetre)
}

périmètreOfRectangle() 


// Le volume d'un prisme rectangulaire est calculé comme suit : volume = longueur x largeur x hauteur . Écrivez une fonction qui calcule volumeOfRectPrism
function volumeOfRectPrism() {
    let longueur = 10
    let largeur  = 3
    let hauteur = 2
    let volume  =  longueur * largeur * hauteur
    console.log(volume)
}

volumeOfRectPrism() 


// La densité d'une substance est calculée comme suit : densité= masse/volume . Écrivez une fonction qui calcule la densité

function calculeDensite () {
    let masse = 15
    let volume  = 3
    let densite =  masse / volume 
    console.log(densite)
}

calculeDensite() 




// La vitesse est calculée en divisant la distance totale parcourue par un objet en mouvement divisée par le temps total mis. Écrivez une fonction qui calcule la vitesse d'un objet en mouvement, speed .


function calculeVitesse () {
    let distance = 20
    let tempsTotal  = 24
    let vitesse = distance / tempsTotal
    console.log(vitesse)
}

calculeVitesse()


// Le poids d'une substance est calculé comme suit : poids = masse x gravité . Écrivez une fonction qui calcule le poids .

function  poidsubstance(masse, gravite) {
    let poids =  masse * gravite 
    console.log(poids)
}

poidsubstance(20, 4) 

// La température en oC peut être convertie en oF en utilisant cette formule : oF = (oC x 9/5) + 32 . Écrivez une fonction qui convertit oC en oF convertCelsiusToFahrenheit 

function  temperatureOc(oc = 50) {
    let of =  oc * 9 / 5 
    console.log(of)
}

temperatureOc() 

// Écrivez une fonction appelée checkSeason , elle prend un paramètre de mois et renvoie la saison : Automne, Hiver, Printemps ou Été.
function  checkSeason(octobre) {
    return octobre
}

console.log(checkSeason('Automne'))