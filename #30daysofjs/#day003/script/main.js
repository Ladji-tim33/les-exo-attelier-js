
/**********Exercises: Level 1 ************/

let firstName = "ladji"
let lastName = "timera"
let age =   10;
let anee = 2000
let country = 'Sénégal'
let isMarried = true
let city = "Dakar"

document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof firstName;
document.getElementById('p2').innerHTML = 'Type de prenom : ' + typeof lastName;
document.getElementById('p3').innerHTML = 'Type de age : ' + typeof age;
document.getElementById('p4').innerHTML = 'Type de anee : ' + typeof anee;
document.getElementById('p5').innerHTML = 'Type de country : ' + typeof country;
document.getElementById('p6').innerHTML = 'Type de city : ' + typeof city;
document.getElementById('p7').innerHTML = 'Type de isMarried : ' + typeof isMarried;

console.log("10" == 10) 

// 3 true
let text = 'yes'
let vrai = true
let number = 12

// 3 flase
let tex =  "";
let faut = true
let nul = null

console.log("9.8" === 10) 

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

let langue1 = "phyton"
let langue2 = "jargon"

console.log(langue1.length);
console.log(langue2.length);


console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(! (4 > 3));
console.log(! (4 < 3));
// console.log(! (faux));
console.log(! (4 > 3 && 10 < 12));
console.log(! (4 > 3 && 10 > 12));
console.log(! (4 === '4'));



const now = new Date()
console.log(now)

const ane = new Date()
console.log(ane.getFullYear())

const mois = new Date()
console.log(mois.getMonth())

const jour = new Date()
console.log(jour.getDay())

const heures = new Date()
console.log(heures.getHours())

const minutes = new Date()
console.log(minutes.getMinutes())


const temps = new Date() //
console.log(temps.getTime())

/**********Exercises: Level 2 ************/

let base = prompt('Entrez le base')
let height = prompt('Enterz le heught')
let air = 0.5

let triangle = air * base * height
console.log("The area of the triangle is " + triangle);


let  a = prompt('Enter side a')
let  b = prompt('Enter side b')
let  c = prompt('Enter side c')
let calcul = a + b + c;

console.log("The perimeter of the triangle is " + calcul);

// Obtenez la longueur et la largeur à l'aide de l'invite et calculez une aire de rectangle
// (surface = longueur x largeur et périmètre du rectangle (périmètre = 2 x (longueur + largeur))
let longueur = pprompt("Entrez la longueur du rectangle :")

let largeur = prompt("Entrez la largeur du rectangle :");

let aire = longueur * largeur;

let perimetre = 2 * (longueur + largeur);

console.log("L'aire du rectangle est  " + aire);
console.log("Le périmètre du rectangle est  " + perimetre);



let hour = prompt('Enter hours')
let rate = prompt('Entrez le taux horaire')

let total = hour * rate 
console.log('Your weekly earning is ' + total);

let myName = "djibril";

if(myName.length > 7) {
    console.log('mon nom et long');
}else(
    console.log('mon non et court')
)


let firstNames = 'Asabeneh'
let lastNames = 'Yetayeh'

if(firstNames.length > lastNames.length){
    console.log('mon prenom est plus long que mon nom');
}else(
    console.log('mon nom est plus long que mon prenom')
)



let monAge = 25;
let votreAge = 18;
console.log("I am " + monAge + " et vous");

let birth = prompt ('entrez votre annee de necensse')
if(birth < 2005){
    
    console.log('vous ete majeur vous pouvais conduire');
}else(
    console.log('Desole vous ete muneur vous ne peut pas conduire')
)


