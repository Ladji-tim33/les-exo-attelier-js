  // Expressions régulières 

 /* Création d'un modèle avec le constructeur RegExp */
//Déclarer une expression régulière sans indicateur global ni indicateur insensible à la casse.

let pattern1 = 'love'
let regEx1 = new RegExp(pattern1)

//Déclaration d'une expression régulière avec un indicateur global et un indicateur insensible à la casse.

let pattern2 = 'love'
let flag1 = 'gi'
let regEx2 = new RegExp(pattern2, flag1)


//Déclaration d'un modèle regex à l'aide de l'objet RegExp. Écrire le modèle et le drapeau dans le constructeur RegExp
/*let regEx = new RegExp('love','gi')*/

/* Création d'un modèle sans constructeur RegExp */
//Déclaration d'une expression régulière avec un indicateur global et un indicateur insensible à la casse.


let regEx3 = /love/gi

//L'expression régulière ci-dessus est la même que celle que nous avons créée avec le constructeur RegExp
let regEx4 = new RegExp('love','gi')

        /* Méthodes des objets RegExpp */


        //  Test pour une correspondance 
//*test() :Teste une correspondance dans une chaîne. Il renvoie vrai ou faux.

const str1 = 'I love JavaScript'
const pattern3 = /love/
const result1 = pattern3.test(str1)
console.log(result1) //true

/*Tableau contenant toute la correspondance */
/*match() : renvoie un tableau contenant toutes les 
correspondances, y compris les groupes de capture,
 ou null si aucune correspondance n'est trouvée. Si
  nous n'utilisons pas d'indicateur global, match()
   renvoie un tableau contenant le modèle, l'index, 
   l'entrée et le groupe.*/

const str2 = 'I love JavaScript'
const pattern4 = /love/
const result2 = str2.match(pattern4)
console.log(result2) //["love", index: 2, input: "I love JavaScript", groups: undefined]

const str3 = 'I love JavaScript'
const pattern5 = /love/g
const result3 = str3.match(pattern5)
console.log(result3)  //["love"]

//*search() : Teste une correspondance dans une chaîne. Il renvoie l'index de la correspondance, ou -1 si la recherche échoue.
const str4 = 'I love JavaScript'
const pattern6 = /love/g
const result4 = str4.search(pattern6)
console.log(result4)     //2


/* Remplacer une sous-chaîne */
/*replace() : exécute une recherche d'une correspondance dans une chaîne et remplace 
la sous-chaîne correspondante par une sous-chaîne de remplacement.
 */

 const txt1 = 'Python is the most beautiful language that a human begin has ever created.\
 I recommend python for a first programming language'
 
 matchReplaced = txt1.replace(/Python|python/, 'JavaScript')
 console.log(matchReplaced) 


/*Une ou plusieurs fois(+) */
const pattern7 = /\d+/g  // d is a special character which means digits
const txt2 = 'This regular expression example was made in January 12,  2020.'
const matches1 = txt2. match(pattern7)

console.log(matches1)  // ["12", "2020"], this is not what we want


                            /* Period(.) */
const pattern8 = /[a].+/g  // . any character, + any character one or more times 
const txt3 = 'Apple and banana are fruits'
const matches2 = txt3.match(pattern8)

console.log(matches2)  // ['and banana are fruits']


/* Zéro ou plusieurs fois(*) */
//Zéro ou plusieurs fois. Le modèle peut ne pas se produire ou se produire plusieurs fois.
const pattern9 = /[a].*/g  //. any character, + any character one or more times 
const txt4 = 'Apple and banana are fruits'
const matches3 = txt4.match(pattern9)

console.log(matches3)  // ['and banana are fruits']


/* Zéro ou une fois (?) */
//Zéro ou une fois. Le modèle peut ne pas se produire ou se produire une seule fois.
const txt5 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern10 = /[Ee]-?mail/g  // ? means optional
const matches4 = txt5.match(pattern10)

console.log(matches4)  // ["e-mail", "email", "Email", "E-mail"]



                                /* Quantifier in RegExp */
/*We can specify the length of the substring we look for in a text, using a curly bracket. Let us see, how ot use
RegExp quantifiers. Imagine, we are interested in substring that their length are 4 characters*/

const txt6 = 'This regular expression example was made in December 6,  2019.'
const pattern11 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches5 = txt6.match(pattern11)
console.log(matches5)  //['This', 'made']

const txt7 = 'This regular expression example was made in December 6,  2019.'
const pattern12 = /\d{1,4}/g   // 1 to 4
const matches6 = txt7.match(pattern12)
console.log(matches6)  // ['6', '2019']


/* Panier ^*/
//Commence avec
const txt8 = 'This regular expression example was made in December 6,  2019.'
const pattern13 = /^This/ // ^ means starts with
const matches7 = txt8.match(pattern13)
console.log(matches7)  // ['This']

//Negation
const txt9 = 'This regular expression example was made in December 6,  2019.'
const pattern14 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches8 = txt9.match(pattern12)
console.log(matches8)  // ["6", "2019"]


/*Correspondance exacte */
//Il devrait avoir ^ commençant et $ qui est une fin.
let pattern = /^[A-Z][a-z]{3,12}$/;
let namme = 'Asabeneh';
let result = pattern.test(namme)

console.log(result) // true