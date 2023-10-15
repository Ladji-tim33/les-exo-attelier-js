// Fonction d'ordre supérieur

// Rappeler
// Un rappel est une fonction qui peut être passée en paramètre à une autre fonction. Voir l'exemple ci-dessous.

// a callback function, the name of the function could be any name
const callback = (n) => {
    return n * 2
}
console.log(callback(3));

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 2))


// Fonction de retour
// Les fonctions d'ordre supérieur renvoient la fonction sous forme de valeur ​
// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))


// L'exemple ci-dessus peut être simplifié comme suit
const numbers = [1, 2, 3, 4, 8]

const sumArray = arr => {
    let sum = 0
    arr.forEach(function (element) {
        sum += element
    })
    return sum

}
console.log(sumArray(numbers))



// Temps de prise

// syntax
// function callback() {
//     // code goes here
//   }
//   setInterval(callback, duration)

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 5000) // it prints hello in every second, 1000ms is 1s


function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000)


/* forEach : Itérer les éléments d'un tableau. Nous utilisons forEach uniquement avec des tableaux. 
Il prend une fonction de rappel avec des éléments, un paramètre d'index et un tableau lui-même. 
L'index et le tableau facultatifs.*/
let sum = 0;
const number = [1, 2, 3, 4, 5];
// number.forEach(num => console.log(num))
// console.log(sum)

number.forEach(function (element) {
    console.log(element)
})
console.log(sum);
//   // The above code can be written using arrow function
//   arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
//   })
// The above code can be written using arrow function and explicit return
//   arr.forEach((element, index, arr) => console.log(index, element, arr))


let somm = 0;
const numero = [1, 2, 3, 4, 5];
numero.forEach(num => somm += num)

console.log("le somme c'est " + somm)


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))


// carte

/* map : Itérer les éléments d’un tableau et modifier les éléments du tableau. 
Il prend une fonction de rappel avec des éléments, un index, un paramètre de 
tableau et renvoie un nouveau tableau.*/

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const num = [1, 2, 3, 4, 5]
const numbersSquare = num.map((numm) => numm * numm)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)



const pays = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
//   const countriesToUpperCase = pays.map((pays) => pays.toUpperCase())
//   console.log(countriesToUpperCase)


// Arrow function
pays.push('senegal')
const countriesToUpperCase = pays.map((pays) => {
    return pays.toUpperCase();
});
console.log(countriesToUpperCase);
/*
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/


const countriesFirstThreeLetters = pays.map((pays) =>
    pays.toUpperCase().slice(1, 3)

); console.log(countriesFirstThreeLetters);



// filtre
// Filtrer : filtrez les éléments qui remplissent complètement les conditions de filtrage et renvoient un nouveau tableau
//Filter countries containing land
const countriesContainingLand = pays.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = pays.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)


const countriesHaveFiveLetters = pays.filter(
    (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)




const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)


// réduire
const myNumbers = [1, 2, 3, 4, 5]
const initialValue = 0;
const mySum = myNumbers.reduce((acc, cur) => acc + cur, 5)

console.log(mySum)

// chaque
// each : Vérifiez si tous les éléments sont similaires sur un aspect. Il renvoie un booléen
const namee = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = namee.every((name) => typeof name === 'number') // Are all strings?

console.log(areAllStr)


const bools = [true, true, true, true]
const areAllTrue = bools.every((m) => m === true) // Are all true? 

console.log(areAllTrue) // true




// trouver
// find : Renvoie le premier élément qui satisfait la condition
const namees = ['Asabenehhh', 'Mathiasf', 'Elias', 'Brook']
const result = namees.find((name) => name.length > 7)
console.log(result)

const myScores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const score = myScores.find((user) => user.score > 80)
console.log(score)



// trouverIndex
// findIndex : Renvoie la position du premier élément qui satisfait la condition
const myNames = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const myResult = myNames.findIndex((name) => name.length > 7)
console.log(myResult) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5



// quelques
// some : Vérifiez si certains des éléments sont similaires sur un aspect. Il renvoie un booléen
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

// const areSomeTrue = bools.some((b) =>  b === true)

// console.log(areSomeTrue) //true




// trier
// const numbers = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// numbers.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]