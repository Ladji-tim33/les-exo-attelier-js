
// --------------------------exo18------------------------

let list  = document.getElementById("ul");
let x = 0;
for(let i = 0;i < 10;i++) {
   let num = Math.floor(Math.random() * 20);
   if(num == 10) {
      x++
   }
   list = list + '<li>' + num + '</li>'
   
}
list = list + '<p> Il y a eu ' + x + '  10</p>'
document.body.innerHTML = list;
