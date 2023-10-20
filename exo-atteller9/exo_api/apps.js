


let mtTbody1 = document.querySelector('#mtTbody1')
let mtTbody2 = document.querySelector('#mtTbody2')
let mtTbody3 = document.querySelector('#mtTbody3')



let todos1 = []
fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => res.json())
    .then(newRes => {
        todos1 = newRes

        const todos = todos1.filter(element => element.completed == false)
        console.log(todos1);
        console.log(todos);
        for (const i of todos) {
            let myTr1 = document.createElement('tr')
            myTr1.innerHTML = `
        <td>${i.userId}</td>
        <td>${i.id}</td>
        <td>${i.title}</td>
        <td>${i.completed}</td>
        `


         const myButton1 = document.createElement('button')
            myButton1.textContent = "Click"
            myButton1.style.backgroundColor = "green";

            myTr1.appendChild(myButton1)
            mtTbody1.appendChild(myTr1)


            myButton1.addEventListener('click', ()=> {
                del(myTr1)
            })

            
        }

         


    })


let todos2 = []
fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => res.json())
    .then(newRes2 => {
        todos2 = newRes2

        const todos = todos2.filter(element => element.completed == true)
        console.log(todos2);
        console.log(todos);
        for (const i of todos) {
            let myTr2 = document.createElement('tr')
            myTr2.innerHTML = `
        <td>${i.userId}</td>
        <td>${i.id}</td>
        <td>${i.title}</td>
        <td>${i.completed}</td>
        `
            const myButton1 = document.createElement('button')
            myButton1.textContent = "Click"
            myButton1.style.backgroundColor = "green";
            myTr2.appendChild(myButton1)
            mtTbody2.appendChild(myTr2)
           
            myButton1.addEventListener('click', ()=> {
                del(myTr2)
            })

        }

       
    })

function del(element) {
    element.remove();
}













