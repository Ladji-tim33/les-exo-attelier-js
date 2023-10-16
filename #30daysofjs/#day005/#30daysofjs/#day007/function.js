// Fonction sans paramètre et retour
// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4
  
  // function without parameter
  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers() // a function has to be called by its name to be executed 


//   function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }

// printFullName() // calling a function


function printFullName (){
    let firstName = 'Ladji'
    let lastName = 'Timera'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())


// function with one parameter

  
// Fonction avec un paramètre
  function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
  }
  
  console.log(areaOfCircle(10)) // should be called with one argument
  
  function square(number) {
    return number * number
  }
  
  console.log(square(10))



//   Fonction avec deux paramètres

  function sumTwoNumbers(num1, num2) {
    let soom = num1 + num2
    console.log(soom)
  }
  sumTwoNumbers(10, 20) // calling functions
  // If a function doesn't return it doesn't store data, so it should return
  

  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'))


//   Fonction avec de nombreux paramètres
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
  
  
    const areaOfCircles = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
    }
  console.log(areaOfCircles(10))



//  Fonction avec un nombre illimité de paramètres
// function declaration

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


// function declaration
const sumAllNum = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNum(1, 2, 3, 4)) // 10
console.log(sumAllNum(10, 20, 13, 40, 10))  // 93
console.log(sumAllNum(15, 20, 30, 25, 10, 33, 40))  // 173




// Fonction anonyme
// Fonction anonyme ou sans nom
const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
}

anonymousFun()


// Function expression
const squares = function(n) {
    return n * n
}
  
console.log(squares(2)) // -> 4


// Fonctions d'auto-invocation
  
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)



//   Fonction flèche
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function fonctionSquare(n) {
    return n * n
  }
  
  console.log(fonctionSquare(2)) // 4
  
  const squareFunction = n => {
    return n * n
  }
  
  console.log(squareFunction(2))  // -> 4
  



  const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


  const printFullNames = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullNames('Asabeneh', 'Yetayeh'))


  const printFullNom = (firstName, lastName) => `${firstName} ${lastName}`

  console.log(printFullNom('Ladji', 'Timera'))

  


//   Fonction avec paramètres par défaut
  function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))


  function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))


  function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(1819))


  function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
  }
  
  console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
  console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon



//  les fonctions ci-dessus avec les fonctions fléchées
const greeting = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
  }
  
  console.log(greeting())
  console.log(greeting('Asabeneh'))