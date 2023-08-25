
// ---------------------------exo12------------------
let chiffre = '';
for (let i=1; i<=5; i++){
   for (let j=1; j<= i; j++){
      chiffre = chiffre + i;
   }
   chiffre = chiffre + "<br>";

}
document.body.innerHTML = chiffre