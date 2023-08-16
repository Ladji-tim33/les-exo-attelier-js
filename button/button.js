// mes button
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")
const btn4 = document.querySelector("#btn-4")
const btn5 = document.querySelector("#btn-5")

// mes boerder
const bord1 = document.querySelector(".border1")
const bord2 = document.querySelector(".border2")
const bord3 = document.querySelector(".border3")
const bord4 = document.querySelector(".border4")
const bord5 = document.querySelector(".border5")

// Les evenmenets
btn1.addEventListener("click", () => {
   bord1.classList.toggle("my-classe1")

})

btn2.addEventListener("click", () => {
    bord2.classList.toggle("my-classe2")
 
 })

 btn3.addEventListener("click", () => {
    bord3.classList.toggle("my-classe3")
 })

 btn4.addEventListener("click", () => {
    bord4.classList.toggle("my-classe4")
 
 })

 btn5.addEventListener("click", () => {

    bord5.classList.toggle("my-classe5")
 
 })
 

