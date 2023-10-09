// for Loop
// For loop structure
for(let i = 0; i <= 5; i++){
    console.log(i)
  }
  
  // 0 1 2 3 4 5

  for(let i = 5; i >= 0; i--){
    console.log(i)
  }
  
  // 5 4 3 2 1 0

  for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]


// Ajouter tous les éléments du tableau

const mynumbers = [1, 2, 3, 4, 5]
let som = 0
for(let i = 0; i < mynumbers.length; i++){
  som  = som + mynumbers[i]  // can be shorten, sum += numbers[i]

}
console.log(som)  // 15

// Création d'un nouveau tableau basé sur le tableau existant
const numbers = [1, 2, 3, 4, 5]
const mynewArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  mynewArr.push( numbers[i] ** 2)

}

console.log(mynewArr)  // [1, 4, 9, 16, 25]

const mycountries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newTab  = []
for(let i = 0; i < mycountries.length; i++){
  newTab.push(mycountries[i].toUpperCase())
}

console.log(newTab)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


const newCountries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const tab = []
for(let i = 0; i < newCountries.length; i++){
  tab.push(newCountries[i].toUpperCase())
}

console.log(tab)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// boucle while

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

// faire une boucle while

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

// 0 1 2 3 4 5

// pour la boucle

const numero = [1, 2, 3, 4, 5]

for (const num of numero) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numero) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let mySum = 0
for (const num of numero) {
  mySum = mySum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(mySum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}



// Break est utilisé pour interrompre une boucle.
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  
  // 0 1 2

//   Nous utilisons le mot-clé continue pour sauter certaines itérations.


for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5

  