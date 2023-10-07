// les exrcice

// Exercices : Niveau 1
/*Obtenez les commentaires de l'utilisateur à l'aide de l'invite (« Entrez votre âge : »). 
Si l'utilisateur a 18 ans ou plus, donnez un feedback : 
"Vous êtes assez vieux pour conduire", mais s'il n'a pas 18 ans, 
donnez un autre feedback indiquant d'attendre le nombre d'années 
dont il a besoin pour atteindre 18 ans.*/

let age = prompt('Entrez votre age');
if(age >= 18){
    console.log('Vous ete autorise a conduire');
}else{
    console.log('Il faut avoir plus de 18 an pour conduire')
}

/* Comparez les valeurs de myAge et yourAge en utilisant if… else. Sur la base de la comparaison, enregistrez le résultat sur la console en indiquant qui est le plus âgé (moi ou vous). 
Utilisez prompt ("Entrez votre âge :") pour obtenir l'âge en entrée. */

let monAge = prompt('Entrez mon age');
let tonAge = prompt('Entrez votre age');
if(monAge > tonAge){
    console.log('Je suis plus agé');
}else{
    console.log("T'est plus agé")
}
    
/* Si a est supérieur à b, renvoyez « a est supérieur à b », sinon 
« a est inférieur à b ». Essayez de le mettre en œuvre de manière
en utilisant si d'autre  opérateur ternaire.*/
let a = prompt('Entrez number a');
let b = prompt('Entrez number b');
a > b
    ? console.log('a est supérieur à b.')
    : console.log('a est inférieur à b ')

a < b
    ? console.log('a est inférieur à b .')
    : console.log('a est supérieur à b ');


/* Les nombres pairs sont divisibles par 2 et le reste est nul. Comment vérifier si un nombre 
est pair ou non en utilisant JavaScript ? */
let numbre = prompt('Entrez un number')
if(numbre%2 == 0)
{
       console.log(`${numbre}${" est un nombre pair"}`);
}else{
       console.log(`${numbre}${" est un nombre impair"}`);
}



// Exercices : Niveau 2

/* Écrivez un code qui peut donner des notes aux étudiants en fonction de leurs scores */
let score = parseInt(prompt("Enterz une  score "));

if (score <= 49 ){
    console.log("F");
}
else if (score <= 59){
    console.log("D");
}
else if (score <= 69){   
    console.log("C");
}
else if (score <= 79){
    console.log("B");
}
else if (score <= 100) {
    console.log("A");
}else{
    console.log('none');
}


/* Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. Si la saisie de l'utilisateur est :
Septembre, octobre ou novembre, la saison est l'automne.
Décembre, janvier ou février, la saison est l'hiver.
Mars, avril ou mai, la saison est le printemps
Juin, juillet ou août, la saison est l'été */
let moisUserInput = prompt('Entrez le mois')
let mois = moisUserInput.toLowerCase()

switch (mois) {
    case 'septembre':
    case 'octobre':
    case ' novembre':
        console.log("la saison est l'automne. ")
        break
    case 'decembre':
    case 'janvier':
    case 'février':
        console.log("la saison est l'hiver.")
        break
    case 'mars':
    case 'avril':
    case ' mais':
        console.log("la saison est le printemps")
        break
    case 'juin':
    case 'juillet':
    case 'aout':
        console.log("la saison est l'été")
        break
    default:
        console.log("le sesie n'est pas un mois")
}


/* Vérifiez si un jour est un jour de week-end ou un jour ouvrable. Votre script prendra une journée en entrée. */

let dayUserInput = prompt("c'est quelle jour aujaur'hui ?")
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'lundi':
  case 'mardi':
  case 'mercredi':
  case 'jeudi':
  case 'vendredi':
    console.log(`${dayUserInput}${' est un jour ouvrable'}`)
    break
  case 'samedi':
  case 'dimache':
    console.log(`${dayUserInput} ${' est un jour de week-end'}`)
    break
  default:
    console.log(`${"le"}${dayUserInput} ${"  n'est pas un jour . "}`)
}



// Exercices : Niveau 3

/* Écrivez un programme qui indique le nombre de jours dans un mois. */
let monthUserInput = prompt('Entrez le mois')
let month = monthUserInput.toLowerCase()

switch (month) {
    case 'janvier':
    case 'mars':
    case 'mai':
    case 'juillet': 
    case 'aout':
    case 'octobre':  
    case 'decembre':
        console.log(`${"le nombre de jours dans le moi de "}${monthUserInput}${" c'est 31"}`)
        break
    case 'avril':
    case 'juin':
    case 'septembre':
    case 'novembre':    
        console.log(`${"le nombre de jours dans le moi de "}${monthUserInput}${" c'est 30"}`)
        break
    case 'fevrier':
        console.log(`${"le nombre de jours dans le moi de "}${monthUserInput}${" c'est 28 ou 29"}`)
        break
    default:
        console.log(`${"le "}${monthUserInput} ${"  n'est pas un mois . "}`)
}





