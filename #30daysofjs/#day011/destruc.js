// Déstructuration et propagation
// La déstructuration est un moyen de décompresser des tableaux et des objets et de les attribuer à une variable distincte.

// Destruction de tableaux
const numbers1 = [1, 2, 3]
let [numOne1, numTwo1, numThree1] = numbers1

console.log(numOne1, numTwo1, numThree1)


const names1 = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson1, secondPerson1, thirdPerson1, fourthPerson1] = names1

console.log(firstPerson1, secondPerson1, thirdPerson1, fourthPerson1)


const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e, pi, gravity, bodyTemp, boilingTemp)


const fullStack1 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd1, backEnd1] = fullStack1

console.log(frontEnd1)
console.log(backEnd1)




// Si nous aimons ignorer les valeurs du tableau, nous utilisons une virgule supplémentaire.La virgule permet d'omettre la valeur à cet index spécifique

const numbers2 = [1, 2, 3]
let [numOne2, , numThree2] = numbers2 //2 is omitted

console.log(numOne2, numThree2)

const names2 = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPerson2, , fourthPerson2] = names2 // first and third person is omitted

console.log(secondPerson2, fourthPerson2)

// Nous pouvons utiliser la valeur par défaut au cas où la valeur du tableau pour cet index n'est pas définie :

const names3 = [undefined, 'Brook', 'David']
let [
    firstPerson3 = 'Asabeneh',
    secondPerson3,
    thirdPerson3,
    fourthPerson3 = 'John'
] = names3

console.log(firstPerson3, secondPerson3, thirdPerson3, fourthPerson3)  

/* Nous ne pouvons pas attribuer de variable à tous les éléments du tableau.
Nous pouvons déstructurer quelques - uns des premiers et obtenir le reste sous forme de tableau en utilisant l'opérateur de propagation (...).*/

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums1

console.log(num1, num2, num3)
console.log(rest)


// Déstructuration lors de l'itération
const countries1 = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries1) {
    console.log(country, city)
}


const fullStack2 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const [first, second, third] of fullStack2) {
    console.log(first, second, third)
}



// Objet déstructurant
/*Lorsque nous déstructurons, le nom de la variable que nous utilisons pour 
déstructurer doit être exactement le même 
que la clé ou la propriété de l'objet. Voir l'exemple ci - dessous.*/

const rectangle1 = {
    width: 20,
    height: 10,
    area: 200
}
let { width1, height1, area1, perimeter1 } = rectangle1

console.log(width1, height1, area1, perimeter1)



// Renommer lors de la structuration
const rectangle2 = {
    width: 20,
    height: 10,
    area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle2

console.log(w, h, a, p)



/*Si la clé n'est pas trouvée dans l'objet, la variable sera affectée à undefined.Parfois, la clé peut ne pas être dans l'objet, 
dans ce cas nous pouvons donner une valeur par défaut lors de la déclaration. Voir l'exemple.*/

const rectangle3 = {
    width: 20,
    height: 10,
    area: 200
}
let { width2, height2, area2, perimeter2 = 60 } = rectangle3

console.log(width2, height2, area2, perimeter2) 

//Let us modify the object:width to 30 and perimeter to 80
const rectangle4 = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
}
let { width3, height3, area3, perimeter3 = 60 } = rectangle4
console.log(width3, height3, area3, perimeter3) //30 10 200 80


/*Clés de déstructuration en tant que paramètres de fonction.Créons une fonction qui prend un objet rectangle et renvoie le périmètre d'un rectangle.*/

// Paramètre d'objet sans déstructuration
// Without destructuring
const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter1 = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter1(rect)) // 60
//with destructuring
//Another Example
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo1 = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}

console.log(getPersonInfo1(person))


// Paramètre d'objet avec déstructuration
const calculatePerimeter2 = ({ width, height }) => {
    return 2 * (width + height)
}

console.log(calculatePerimeter2(rect)) // 60
// Let us create a function which give information about the person object with destructuring
const getPersonInfo2 = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}
console.log(getPersonInfo2(person))



// Objet déstructurant lors de l'itération
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}






// Opérateur Spread pour obtenir le reste des éléments du tableau
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [numOne, numTwo, numThree, ...rest1] = nums2

console.log(numOne, numTwo, numThree)
console.log(rest1)


const countries2 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries2

console.log(gem)
console.log(fra)
console.log(nordicCountries)



// Opérateur de propagation pour copier le tableau
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const frontEnd2 = ['HTML', 'CSS', 'JS', 'React']
const backEnd2 = ['Node', 'Express', 'MongoDB']
const fullStack3 = [...frontEnd2, ...backEnd2]

console.log(fullStack3)


// Opérateur de propagation pour copier l'objet
// Nous pouvons copier un objet en utilisant un opérateur spread

const user1 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}

const copiedUser1 = { ...user1 }
console.log(copiedUser1)



// Modifier ou changer l'objet pendant la copie

const user2 = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}

const copiedUser2 = { ...user2, title: 'instructor' }
console.log(copiedUser2)


// Opérateur de propagation avec fonction flèche
/*Chaque fois que nous aimons écrire une fonction fléchée qui prend un nombre illimité d'arguments, nous utilisons un opérateur 
de propagation. Si nous utilisons un opérateur spread comme paramètre, l'argument passé lorsque nous invoquons une fonction se 
transformera en tableau.*/

const sumAllNums1 = (...args) => {
    console.log(args)
}


const sumAllNums2 = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum

}

console.log(sumAllNums2(1, 2, 3, 4, 5))