                // Booléens
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false


let firstName
console.log(firstName) //la valeur no defini

let empty = null
console.log(empty) // -> null , means no value

            // Opérateurs d’affectation
let name = 'Asabeneh'
let country = 'Finland'

            // Opérateurs arithmétiques
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)



            // Opérateurs de comparaison
console.log(3 > 2)              // true, par ce que 3 est strictement supérieur a 2
console.log(3 >= 2)             // true, par ce que 3 est  supérieur a 2
console.log(3 < 2)              // false,  par ce que 3 n'est inférieur  a 2
console.log(2 < 3)              // true, par ce que 2 est strictement inférieur  a 3
console.log(2 <= 3)             // true, par ce que 2 est  inférieur  a 3
console.log(3 == 2)             // false, par ce que 3 in,est pas egal a 2
console.log(3 != 2)             // true, par ce que 3 in,est pas egal a 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


            // Opérateurs logiques

// && ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOne = true
let isLightOff = !isLightOn           // false
let isMarriedd = !false                // true



                    // Opérateur d’incrémentation 
//pré-incrémentation 
let count1 = 0
console.log(++count1)        // 1
console.log(count1)          // 1       

// post-incrémentation 
let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1



// Opérateur de décrémentation
//pré-incrémentation 
let count3 = 0
console.log(--count3)        // -1
console.log(count3)          // -1       

// post-incrémentation 
let count4 = 0
console.log(count4--)        // 0
console.log(count4)   // -1


                    // Opérateurs ternaires
let isRaining1 = true
isRaining1
   ? console.log('You need a rain coat.')
   : console.log('No need for a rain coat.')
isRaining1 = false
                    
isRaining1
   ? console.log('You need a rain coat.')
   : console.log('No need for a rain coat.')

   
let number = 5
number > 0
     ? console.log(`${number} is a positive number`)
     : console.log(`${number} is a negative number`)
number = -5
   
number > 0
     ? console.log(`${number} is a positive number`)
     : console.log(`${number} is a negative number`) 
     
     
// Méthode Window alert()





                    // Méthode Window prompt()
// prompt('required text', 'optional text')
// let numbers = prompt('Enterz un number', 'number goes here')
// console.log(numbers)


                    // Méthode Window confirm()
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box



                // Création d’un objet temporel
const now = new Date()
console.log(now) // ven oct 06 2023 18:04:41 GMT-1200 (UTC−12:00)



                // Obtenir une année complète
const anee = new Date()
console.log(anee.getFullYear()) // 2023



                    // Obtenir le mois
const mois = new Date()
console.log(mois.getMonth()) // 9 par ce que les mois c'est (0-11)



                    // Obtenir un jour
const jour = new Date()
console.log(jour.getDay()) // 5, par ce que les jours c'est (0-6)



                     // Obtenir des heures
const heures = new Date()
console.log(heures.getHours()) // 6, because the time is 06:17:54



                     // Obtenir des minutes
const minutes = new Date()
console.log(minutes.getMinutes()) // 17, because the time is 06:17:54



                   // Obtenir des secondes
const secondes = new Date()
console.log(secondes.getSeconds()) // 54, because the time is 06:17:54



                  // Obtenir du temps
//   Utilisation de getTime()
const temps = new Date() //
console.log(temps.getTime()) // 1696616274341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// Utilisation de Date.now()
const allSeconds = Date.now() //
console.log(allSeconds) // 1696616274341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true


const nows = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minute = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minute}`) // 4/1/2020 0:56
