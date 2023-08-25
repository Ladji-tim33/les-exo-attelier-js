
// ---------------------exo14 -----------------

let tableau = '<table>';
let lignes = 5;
let colonne = 5;

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonne;k++) {
      tableau = tableau + '<td>Hello</td> ' ;
   }
   tableau = tableau + '</tr>';

}

tableau = tableau + '</table>';
document.body.innerHTML = tableau;