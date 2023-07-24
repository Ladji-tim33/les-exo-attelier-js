// les exercice sur mozila

//1) Créer un tableau

let produit = ['Phone', 'ordinateur','tele','chaussure', 'chemise', 'sac'];

console.log(produit.length);

// 2) Accéder à un élément du tableau

// On veut accéder a l'index 0 de notre tableaux qui est "phone"
let first = produit[0];
console.log(first)

// ici On veut accéder a la dernier index de notre tableaux  qui est "chaussure"
let last = produit[produit.length  -1];
console.log(last)

//  3)ici on essey de boucler dans notre tableaux 
/*alor on utilise le méthode forEach qui fais parti 
aussi des élément utilisée pour faire des boucles dans des tableaux*/
produit.forEach(function(rapel, index, array){
    console.log(rapel, index);
  });

  //4) Ajouter un élément à la fin de notre tableau

  let newLength = produit.push('chargeur');
  console.log(produit);

//   5) Supprimer le dernier élément de notre tableau 'chargeur'

let supprimer = produit.pop();
console.log(produit);

// 6) Supprimer le premier élément de notre tableau 'phone'

let supp = produit.shift()
console.log(produit);

// 7) Ajouter au début de notre tableau
let Ajoute = produit.unshift('Commande')
console.log(produit)

// 8) Trouver l'index d'un élément dans le tableau

let pos = produit.indexOf('chaussure');
console.log(pos)

// 9) Supprimer un élément de notre tableaux par son index

let removedItem = produit.splice(4,1 );
console.log(produit)
 console.log(removedItem); //(splice retourne l'éléments supprimés)

//  10) Supprimer des éléments dans notre tableaux à partir d'un index

let post = 0, n = 2;

let removedItems = produit.splice(post, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position post

console.log(produit);
// ["tele", "chaussure", "sac"] (le tableau d'origine est changé)

console.log(removedItems);
// ["commande", "ordinateur"] (splice retourne la liste des éléments supprimés)


let promise = {
  'var' : 'text',
  'array': [1, 2, 3, 4]
};

console.log(promise['array']);

// 11) ici on ajout un élément a notre tableaux mais est dehors des limites actuelles du tableau
produit[6] = "lampe";
console.log(produit);  // "mangue"
console.log(Object.keys(produit)); // ['0', '1', '2', '6']

console.log(produit.length); // 6 le moteur JavaScript mettra à jour la propriété "length"

// 12) icion modifie la propriété directement sans ajouter un élément
produit.length = 10;
console.log(Object.keys(produit)); // ['0', '1', '2', '6']
console.log(produit.length);  // 10

// 13) ici on esseye de dimunuer la valeur de length qui va nous suprimer des élémént
produit.length = 3;
console.log(Object.keys(produit)); // ['0', '1', '2']
console.log(produit.length); // 3

let maRegexp = /a(t+)(a)/i;
let monTableau = maRegexp.exec("catTabsbz");

console.log(monTableau);


// tableaux
produit[0] = 'Coucou';
produit[49] = 'monde';

if (produit.length === 50) {
  console.log(produit);
}
  

let plateau = [
  ['T','C','F','R','K','F','C','T'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['t','c','f','k','r','f','c','t'] ];

console.log(plateau.join('\n') + '\n\n');

// On déplace le pion de deux cases en avant 2
plateau[5][3] = plateau[0][4];
plateau[0][4] = ' ';
console.log(plateau.join('\n'));


values = [];
for (let x = 0; x < 10; x++){
 values.push([
  4 ** x,
  4 * x ** 4
 ])
};
console.table(values)