//Objet global de fenêtre
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible




//Portée mondiale
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible




// Portée locale
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible


//scope.js
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3



  //scope.js
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }

//   console.log(gravity)

  //    , Uncaught ReferenceError: gravity is not defined
  
  if (true){
    const  gravity = 9.81
    console.log(gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }



  // console.log(i), Uncaught ReferenceError: i is not defined
  
  


// Créer une objection avec des valeurs
  const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true
  }
  console.log(person)


/*Obtenir les valeurs d'un objet
Nous pouvons accéder aux valeurs de l'objet en utilisant deux méthodes :

en utilisant . suivi du nom de la clé si le nom de la clé est un seul mot
en utilisant des crochets et une citation
 */

const persons = {
    firstName: 'Ladji',
    lastName: 'Timera',
    age: 250,
    country: 'Sénégal',
    city: 'Dakar',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }
  
  // accessing values using .
  console.log(persons.firstName)
  console.log(persons.lastName)
  console.log(persons.age)
  console.log(persons.location) // undefined
  
  // value can be accessed using square bracket and key name
  console.log(persons['firstName'])
  console.log(persons['lastName'])
  console.log(persons['age'])
  console.log(persons['age'])
  console.log(persons['location']) // undefined
  
  // for instance to access the phone number we only use the square bracket method
  console.log(persons['phone number'])

// Définition d'une nouvelle clé pour un objet
persons.nationality = 'Ethiopian'
persons.country = 'France'
persons.title = 'teacher'
persons.skills.push('Meteor')
persons.skills.push('SasS')
persons.isMarried = true

persons.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(persons)
console.log(persons.getPersonInfo())




// Méthodes d'objet
const myPerson = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)




// Obtenir les clés d'objet à l'aide de Object.keys() 
// const keys = Object.keys(copyPerson)
// console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
// const address = Object.keys(copyPerson.address)
// console.log(address) //['street', 'pobox', 'city'] 



// Obtenir des valeurs d'objet à l'aide de Object.values()
const values = Object.values(copyPerson)
console.log(values)

// Obtenir les clés et les valeurs des objets à l'aide de Object.entries()
const entries = Object.entries(copyPerson)
console.log(entries)



// Vérification des propriétés à l'aide de hasOwnProperty()
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))