// Comment créer un tableau avec des valeurs
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
// Number of numbers: 6
Fruits: ['banana', 'orange', 'mango', 'lemon']
// Number of fruits: 4
Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// Number of vegetables: 5
Animal_products: ['milk', 'meat', 'butter', 'yoghurt']
// Number of animal products: 4
Web_technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
// Number of web technologies: 7
Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
// Number of countries: 5



// Le tableau peut contenir des éléments de différents types de données
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)


// Création d'un tableau à l'aide de split
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]



// Accéder aux éléments du tableau à l'aide de l'index
const myfruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = myfruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = myfruits[1]
console.log(secondFruit) // orange

let lastFruit = myfruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = myfruits.length - 1
lastFruit = myfruits[lastIndex]

console.log(lastFruit)  // lemon


const numeros = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numeros.length)  // => to know the size of the array, which is 6
console.log(numeros)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numeros[0])      //  -> 0
console.log(numeros[5])      //  -> 100

let lastIndexMoin = numeros.length - 1;
console.log(numeros[lastIndex]) // -> 100



const webTechss = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies
  
  console.log(webTechss)        // all the array items
  console.log(webTechss.length) // => to know the size of the array, which is 7
  console.log(webTechss[0])     //  -> HTML
  console.log(webTechss[6])     //  -> MongoDB
  
  let lastMoinIndex = webTechs.length - 1
  console.log(webTechs[lastMoinIndex]) // -> MongoDB


  const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products
  
  console.log(shoppingCart) // -> all shoppingCart in array
  console.log(shoppingCart[0]) //  -> Milk
  console.log(shoppingCart[7]) //  -> Sugar
  
  let indexLast = shoppingCart.length - 1;
  console.log(shoppingCart[indexLast]) //  -> Sugar


//   Modification d'un élément de tableau
const numbersTab = [1, 2, 3, 4, 5]
numbersTab[0] = 10      // changing 1 at index 0 to 10
numbersTab[1] = 20      // changing  2 at index 1 to 20

console.log(numbersTab) // [10, 20, 3, 4, 5]

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
  'Kenya'
]

pays[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndexIndex = pays.length - 1
pays[lastIndexIndex] = 'Korea' // Replacing Kenya by Korea

console.log(pays)


//                    Méthodes pour manipuler le tableau
// fill : remplit tous les éléments du tableau avec une valeur statique
const tab = Array() // creates an an empty array
console.log(tab)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]


// Concaténation d'un tableau à l'aide de concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]


const fruit = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const myVegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruit.concat(myVegetables)                 // concatenate the two arrays

console.log(fruitsAndVegetables)


// Obtenir la longueur du tableau
const myNumbers = [1, 2, 3, 4, 5]
console.log(myNumbers.length) // -> 5 is the size of the array


// Vérifiez un élément s'il existe dans un tableau.
// let us check if a banana exist in the array

const fruitsFruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruitsFruits.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array


// Obtenir le dernier index d'un élément dans un tableau
const myNumeros = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(myNumeros.lastIndexOf(2)) // 7
console.log(myNumeros.lastIndexOf(0)) // -1
console.log(myNumeros.lastIndexOf(1)) //  6
console.log(myNumeros.lastIndexOf(4)) //  3
console.log(myNumeros.lastIndexOf(6)) // -1


// include : Pour vérifier si un élément existe dans un tableau. S'il existe, il renvoie le vrai, sinon il renvoie le faux.
const numbersTab = [1, 2, 3, 4, 5]

console.log(numbersTab.includes(5)) // true
console.log(numbersTab.includes(0)) // false
console.log(numbersTab.includes(1)) // true
console.log(numbersTab.includes(6)) // false

const webTechsTab = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechsTab.includes('Node'))  // true
console.log(webTechsTab.includes('C'))     // false



// Array.isArray : pour vérifier si le type de données est un tableau
// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false



// toString : convertit le tableau en chaîne

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook



// Joindre des éléments de tableau


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTech = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTech.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTech.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"


// Éléments du tableau en tranches
const tabNumbers = [1,2,3,4,5]

console.log(tabNumbers.slice()) // -> it copies all  item
console.log(tabNumbers.slice(0)) // -> it copies all  item
console.log(tabNumbers.slice(0, tabNumbers.length)) // it copies all  item
console.log(tabNumbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


// Méthode d'épissage dans un tableau
// const numbers = [1, 2, 3, 4, 5]
// numbers.splice()
// console.log(numbers)                // -> remove all items
// const numbers = [1, 2, 3, 4, 5]
//   numbers.splice(0,1)
// console.log(numbers)            // remove the first item
// const numbers = [1, 2, 3, 4, 5, 6]
//   numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items




// Push : ajout d'un élément à la fin. Pour ajouter un élément à la fin d'un tableau existant, nous utilisons la méthode push.


// syntax
// const arr  = ['item1', 'item2','item3']
// arr.push('new item')
// console.log(arr)
// // ['item1', 'item2','item3','new item']
// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]
// let fruits = ['banana', 'orange', 'mango', 'lemon']
// fruits.push('apple')
// console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

// fruits.push('lime')
// console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']



// pop : suppression de l'élément à la fin.
// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4]





// shift : suppression d'un élément du tableau au début du tableau.
// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning
// console.log(numbers) // -> [2,3,4,5]




// unshift : ajout d'un élément de tableau au début du tableau.

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]




// reverse : inverse l’ordre d’un tableau.
// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]



// Trier les éléments dans un tableau
const tabWebTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  tabWebTechs.sort()
  console.log(tabWebTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
  tabWebTechs.reverse() // after sorting we can reverse it
  console.log(tabWebTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]



//   Tableau de tableaux
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]