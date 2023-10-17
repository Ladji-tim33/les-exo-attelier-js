/* JavaScript similaire à Python ou Java fournit un mécanisme de
gestion des erreurs pour détecter les erreurs d'exécution à l'aide du bloc try-catch-finally.
*/
try {
    // code that may throw an error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}


// Exemple:

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err)
}

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error(err) // we can use console.log() or console.error()
} finally {
    console.log('In any case I will be executed')
}


try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}


const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()


// Types d'erreurs
/*
ReferenceError : une référence illégale s'est produite.
Une ReferenceError est levée si nous utilisons une variable qui n'a pas été déclarée. */


let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)
    


// SyntaxError : une erreur de syntaxe s'est produite
// let square = 2 x 2
// console.log(square)
// console.log('Hello, world');


// TypeError : une erreur de type s'est produite

let num = 10
console.log(num.toLowerCase())