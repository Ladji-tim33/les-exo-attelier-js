
// ---------------------------exo16------------------------
let list  = document.getElementById("ul");
for(let i = 0;i < 10;i++) {
   list = list + '<li>' + Math.floor(Math.random() * 100) + '</li>';
}
// html = html + '</ul>';
document.body.innerHTML = list;
