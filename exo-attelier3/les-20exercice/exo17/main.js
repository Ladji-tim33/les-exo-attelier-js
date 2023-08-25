
// ------------------------------exo17-----------------------

let list  = document.getElementById("ul");
for(let i = 0;i < 10;i++) {
   let num = Math.floor(Math.random() * 20);
   if(num == 10) {
      console.log('Le nombre 10 fait parti du tirage.');
   }
   list = list + '<li>' + num + '</li>'
   
}
document.body.innerHTML = list;