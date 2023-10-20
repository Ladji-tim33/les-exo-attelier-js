let todos
async function fetchUser() {
    const r = await fetch('https://jsonplaceholder.typicode.com/todos')
    // console.log(r.url);
    if (r.ok === true) {
        // return la promise
        return r.text();
    }
    // si ya un probléme
    throw new Error('imposible de ontacter le serveur')
}

// console apres la racupération des utilisateurs
fetchUser().then(user => {
  todos = user
  document.getElementById('p1').innerHTML =  todos/false ;
})


async function main() {
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/todos')
        let res = await r.json()
        console.log(res);
         
    } catch(error){
        console.log("error");
    }
}
main()

    
    
