console.log(pays)
// alert('Open the console and check if the countries has been loaded')

// les exercice

// Itérer de 0 à 10 en utilisant la boucle for, faire de même en utilisant la boucle while et faire while
// let number = 10
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}


//Itérer de 10 à 0 en utilisant la boucle for, faire de même en utilisant la boucle while et faire while

for(let i = 0; i <= 10; i++){
    console.log(i)
  }

//   Itérer de 0 à n en utilisant la boucle for
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}
/*do while loop*/
let j = 0
do {
  console.log(j)
  j++
} while (j <= 10)


/*Écrivez une boucle qui crée le modèle suivant en utilisant console.log():

 
       #
       ##
       ###
       ####
       #####
       ######
       #######

*/
let myBoucle = '';
for(let i = 1;i <= 7;i++) {
   for(let j = 1;j <= i;j++) {
      myBoucle = myBoucle + i;
   }
   myBoucle = myBoucle + '<br>';
}
console.log(myBoucle);


/*Utilisez la boucle pour imprimer le motif suivant:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```
*/
for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}


