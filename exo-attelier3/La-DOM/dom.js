// SELECTEUR

// document.querySelector("h4").style.background = "yellow"

// const baliseHTML = document.querySelector("h4")

// console.log(baliseHTML)

// baliseHTML.style.background = "yellow"

// Click event
const questionContainer = document.querySelector(".click-even")
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const response = document.querySelector("p")



questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked")
})

btn1.addEventListener("click", () => {
   response.classList.toggle("show-response")
   response.style.background = "green"
})

btn2.addEventListener("click", () => {
    response.classList.toggle("show-response")
   response.style.background = "red"
})

// ---------------------------------------------

// Mouse Event
const mousemove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px"
})

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%);";
    console.log("test");
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%);";
    mousemove.style.border = "2px solid teal"
})


questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6"
})


questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink"
})

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)"
})


// -----------------------------------------------
// keyPress event

const keyPressContainer = document.querySelector(".keypress")
const key = document.getElementById("key")

const ring = () => {
    const audio = new Audio();
    audio.src = "./agic.jpg.mp3";
    audio.play();
}

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === "l"){
        keyPressContainer.style.background = "pink"
    }  else if(e.key === "v"){
        keyPressContainer.style.background = "yellow"
    } else {
        keyPressContainer.style.background = "red"
    }
    ring()
})


// -----------------------------------------------
// Scroll Event

const nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 120){
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px"
    }
})

// ---------------------------------------------
// Form Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
})

select.addEventListener("input", (e) => {
    language = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
          <h3>Pseudo : ${pseudo}<h3>
          <h4>Langage fovoris : ${language}<h4>
        `
    } else {
        alert("Veuillez accepter les CGV")
    }
})

// ----------------------------------------------
// forEach

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    })
});

// --------------------------------------------
// stop propagation
questionContainer.addEventListener("click", () => {
    e.stopPropagation
})

// removeEventListener


// -------------------------------------------
// BOM

// lES Evenement adossés à windiow

// 1 alert

// 2 confirm
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment vous tromper ?");
})

// 3 prompt
btn1.addEventListener("click", () => {
    let answer = prompt("Entrer votre nom !");

    questionContainer.innerHTML += "<h3> Bravo" + answer +"</h3>"
})

// 4 setTimeout

setTimeout(() => {
    questionContainer.style.borderRadius = "300px";
}, 3000)

// 4 setInterval

// let interval = setInterval(() => {
//     document.body.innerHTML += `
//        <div class="box"> 
//         <h2>Nouvelle Boite ! </h2>
//        </div>
//     `
// }, 1000)

document.body.addEventListener("click", (e) => {
    clearInterval(interval)
})

// 5 location
// loction.href : vert les lien quon est
// location.replace : vert un autre lien

// Navigator
// console.log(navigator.userAgent);

// window.addEventListener("mousemove", (e) => {
//     nav.style.setProperty("--x", e.layerX + "px");
//     nav.style.setProperty("--y", e.layerY + "px");
// })