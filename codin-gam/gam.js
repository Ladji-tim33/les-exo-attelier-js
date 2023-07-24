// Créez une fonction puissance qui :

// prend deux arguments
// réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS
let argumentUn = 0
let argumentDeux = 0
function puissance(argumentUn,argumentDeux) {
    let result = 1;
    for (let i = 0; i < argumentDeux; i++) {
        result *= argumentUn
    }
    return result
}
console.log(puissance(3,5));



// On souhaite stocker les positions d"une série de 20 objets mobiles  dans un jeu vidéo. Pour cela on va créer 2 tableaux :
// posX qui contient la série des abscisses des objets
// posY qui contient la série des ordonnées des objets
// Créez une fonction initXY :
// qui prend en 1er argument l'abscisse du 1er objet
// qui prend en 2ème argument l'ordonnée du 1er objet
// qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonnée

function initXY(abscisse, ordonnee) {
    const numMber = 20;
    const MonSpacingX = 40;
    const MonSpacingY = 30;

    const posX = [abscisse];
    const posY = [ordonnee];

    for (let i = 1; i < numMber; i++) {
      const newX = posX[i - 1] + MonSpacingX;
      const newY = posY[i - 1] + MonSpacingY;
      posX.push(newX);
      posY.push(newY);
    }

    return { posX, posY };
  }
  console.log(initXY(10, 40));



  /* Vous disposez d'un tableau contenant des nombres aléatoires et vous devez créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :
   tous les éléments de tInit inférieurs à 10 dans le tableau tInf
  et tous les éléments de tInit supérieurs ou égaux à 10 dans le tableau tSup
 💡 la fonction doit fonctionner quel que soit le tableau tInit*/

function sortNumbers(tInit, tInf, tSup) {
    for (const MyNumber of tInit) {
      if (MyNumber < 10) {
        tInf.push(MyNumber);
      } else {
        tSup.push(MyNumber);
      }
    }
  }

  const tInit = [3, 10, 6, 21, 5, 12, 18];
  const tInf = [];
  const tSup = [];

  sortNumbers(tInit, tInf, tSup);

  console.log(tInf);
  console.log(tSup);