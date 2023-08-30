// Dom manupilation

// GetElementByid()
// const title = document.getElementById("main-heading");
// title.style.color = 'red'
// console.log(title);

// GetElementByClassName()
// const listitems = document.getElementsByClassName("list-items");
// listitems.style.fontSize = '2rem'
// console.log(listitems);


// // GetElementByTagName()
// const listitems = document.getElementsByTagName("li");
// console.log(listitems);


// querySelector()
// const container = document.querySelector("div");
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll("div");
// console.log(container);


// const title = document.querySelector("#main-heading");
// title.style.color = 'red'
// console.log(title);


//  const listitems = document.querySelectorAll(".list-items");

// for (i = 0; i < listitems.length; i++){
//     listitems[i].style.fontSize = '2rem'
// }
// console.log(listitems);


// Creating Elements

const ul = document.querySelector("ul")
const li = document.createElement("li")


// Adding Elements
ul.append(li)

// modifying the text

// const firstLisItem = document.querySelector(".list-items")
// console.log(firstLisItem.innerText);
// console.log(firstLisItem.textContent);
// console.log(firstLisItem.innerHTML);

li.innerText = 'X-main'

// modifying Atteibutes & classes

// li.setAttribute('id', 'main-heading')
// li.removeAttribute('id')

li.classList.add('list-items')

// -----------remove Element-----------
li.remove()


// -----------Parent Node Traversal--------
// let ulList = document.querySelector('ul')
// console.log(ulList.parentNode.parentNode);
// console.log(ulList.parentElement.parentElement);


// ---------Child Node Traversal---------
let ulList = document.querySelector('ul')
console.log(ulList.childNodes);
console.log(ulList.firstChild);
console.log(ulList.lastChild);
console.log(ulList.children);
console.log(ulList.firstElementChild);
console.log(ulList.lastElementChild);
// ulList.childNodes[9].style.background = 'blue'


// ----------sibling Node Traversal





//----------------------Event listsners--------------

// --------click---------
const buttonTwo = document.querySelector('.btn-2')
function alertBtn() {
    alert('I also love javascript')
}

buttonTwo.addEventListener("click", alertBtn)



// -------Mouseover-------

const newBgColor = document.querySelector(".box-3")

function changeBgColor() {
    newBgColor.style.background = 'red';
};

// newBgColor.addEventListener("click", changeBgColor)





// ------------------Reveal Event------------------
const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContente () {
    if (hiddenContent.classList.contains('reveal-btn')
    ) {
      hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener("click", revealContente);



// -----------------------Event Probagtion---------------
window.addEventListener('click', function(){
    console.log('window');
}, true)

document.addEventListener('click', function(){
    console.log('Document');
}, true)

document.querySelector(".div2").addEventListener('click', function(){
    console.log("Div2");
}, {once: true})

document.querySelector(".div1").addEventListener('click', function(){
    console.log("Div1");
}, true)

document.querySelector(".Click").addEventListener('click', function(e){
    console.log(e.target.innerText = 'clicked');
}, true)




// ------------------Event List----------------

document.querySelector(".my-liste").addEventListener("click", function(e) {
    console.log(e.target.getAttribute('id') + " is clicked");

    const target = e.target;

    if(target.matches('li')) {
        target.style.background = "lightgrey"
    }
})

const myList = document.querySelector(".my-liste");
const newLi = document.createElement('li');

newLi.innerText = "Rugby";
newLi.setAttribute('id', 'rugby');

myList.appendChild(newLi)

// document.querySelector("#foot").addEventListener("click", function(e) {
//     console.log("football is clicked");

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.background = "lightgrey"
//     }
// })

// document.querySelector("#basket").addEventListener("click", function(e) {
//     console.log("basketball is clicked");

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.background = "lightgrey"
//     }
// })

// document.querySelector("#box").addEventListener("click", function(e) {
//     console.log("boxing is clicked");

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.background = "lightgrey"
//     }
// })

// document.querySelector("#tennis").addEventListener("click", function(e) {
//     console.log("tennis is clicked");

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.background = "lightgrey"
//     }
// })

// document.querySelector("#golf").addEventListener("click", function(e) {
//     console.log("golf is clicked");

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.background = "lightgrey"
//     }
// })