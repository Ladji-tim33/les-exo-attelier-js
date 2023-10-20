

// recuperer  les utilsatreures avex function asnyc
// async function fetchUser() {
//     const r =  fetch('https://jsonplaceholder.typicode.com/todos', {
//         method: 'GET',
//         // ajouter en tete
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "appliction/json"
//         },
//         // body: JSON.stringify({ titel: 'mon premier titre ' })
//     })
//     // console.log(r.url);
//     if (r.ok === true) {
//         // return la promise
//         return r.text();
//     }
//     // si ya un probléme
//     throw new Error('imposible de ontacter le serveur')
// }

// // console apres la racupération des utilisateurs
// fetchUser().then(user => console.log(user))



// function wait(duration) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove(duration)
//         }, duration)
//     })
// }

// function waitAndFail(duration) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reject(duration)
//         }, duration)
//     })
// }

// async function main() {
//     try {
//         await wait(2000)
//         console.log("bonjour");
//         await waitAndFail(2000)
//         console.log("bonjour");
//     } catch(e){
//         console.log("error");
//     }
// }
// main()