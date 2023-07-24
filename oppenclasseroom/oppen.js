// Les execices openclassroom

// cree notre valeur
let numberOfCats = 3;
numberOfCats = 4; //on a modifier notre premier valeur (3) Nous lui réaffectons ensuite la valeur (4)
console.log(numberOfCats);

// Pour ajouter deux variables, on utilisez le signe (+)

let totalLog = 67;
let totalVice = 34;
let totalMusic = totalLog + totalVice;
console.log(totalMusic);

// Pour soustraire deux variables, on utilisez le signe (-)
let cookiesInJar = 10;
let cookiesRemoved = 4;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;
console.log(cookiesLeftInJar);

// Pour ajouter ou soustraire un nombre d'une variable on utilise les opérateurs (+=) et (-=)
let cookiesPlus = 20;
/* manger deux cookies */
cookiesPlus -= 5;  //il reste 15 cookies
/* cuisson d'un nouveau lot de cookies */
cookiesPlus += 8; // il y a maintenant 23 cookies dans la boîte
console.log(cookiesPlus);

// On peut utiliser ++ ou --  pour ajouter ou soustraire 1 
let numberOfLikes = 22;
numberOfLikes++;  // cela fait 23
numberOfLikes--; // et on revient à 22 
console.log(numberOfLikes)

// On utilise les opérateur (*) pour de multiplication et (/) pour division
let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;


// Pour multiplier ou diviser un nombre d'une variable on utilise les opérateurs (*=) et (/=)
let numberMultDiv = 4;
numberMultDiv *= 8;  // numberMultDiv vaut maintenant 4*8 = 32;
numberMultDiv /= 2;  // numberMultDiv vaut maintenant 32/2 = 16;
console.log(numberMultDiv);

// les types de valeurs

// ici on utilise l'artimétique en vurgue flottante qui nous donne pas le rsultat qu'on veut
let integerCalculation = 1 + 2;  // donne 3
let weirdCalculation = 0.1 + 0.2;  // on attend 0.3, réponse réelle 0.30000000000000004
console.log(weirdCalculation)

// Les variables de type boolean peuvent avoir une des deux valeurs true  ou false.
let userIsSignedIn = true;
let userIsAdmin = false;

// Les variables de type string sont encadrées par des guillemets simples ou doubles –('')  ou   ("")  :

let firstName = "Will";
let lastName = 'Alexander';
let wholeName = firstName + " " + lastName;  // valeur: "Will Alexander"
console.log(wholeName);//On a concaténée les chaines

// ici on utilise un autre facon pour concaténéee qui est la string interpolation ${maVariable}.
const myName = `Alexander`;
const salutation = `Bienvenue sur mon site ${myName}!`;
console.log(salutation);//retournera “Bienvenue sur mon site Alexander!”

// les objects 
let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};
console.log(myBook);

// ici on esseye d'accedez a l'un des nos objects
let bookTitle = myBook.title;  // "L'Histoire de Tao"
let bookPages = myBook.numberOfPages  // 250
console.log("le titre est : " + bookTitle);

// ici on essey d'accedez a un sous élément dans nos object
let propertyToAccess = "title";

/*ici on va créer une class et on utilise ce qu'on appelle un constructor.
en suit utilisation de mot clé this  Pour attribuer le titre, 
l'auteur et le nombre de pages reçus à cette instance,
*/
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// ici on crée nos instances par le mot clé (new)
let myBookLol = new Book("L'Histoire de Tao", "Will Alexander", 250);
console.log(myBookLol);


// Les arrays
//  notre tableaux
let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];

// on peut accéder aux éléments de ce tableau par leur indice :

let firstGuest = guests[0]; // "Sarah Kate"
let thirdGuest = guests[2]; // "Will Alexander"
let undefinedGuest = guests[12] // undefined par ce que cette indice n'existe pas dans notre tableaux

// On utilisenla propriété (length)  d'un tableau poue nous indique le nombre d'éléments qu'il contient :

let guestsNom = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.length; // 3
console.log("On a " + howManyGuests + " élément dans notre tableaux");

// Pour ajouter un élément à la fin d'un tableau,on utilisez méthode push :

guests.push("Pier giraud"); // ajoute "pier giraud" à la fin de notre tableau guests
console.log(guests);

// Pour supprimer le dernier élément d'un tableau, appelez sa méthode  pop  , sans passer aucun argument :

guests.pop(); // supprimer le dernier élément du tableau
console.log(guests);

// ici on crée nos condition if else
let UserLoggedIn = true;
if (UserLoggedIn) {
   console.log("Utilisateur connecté!");
} else {
   console.log("Alerte, intrus!");
}

// on utiliser des expressions de comparaison,
const numberOfSeats = 30;
const numberOfGuests = 30;
if (numberOfGuests == numberOfSeats) {
    console.log("tous les sièges sont occupés");
}    
else if (numberOfGuests < numberOfSeats) {
console.log("autoriser plus d'invités");
} else {
console.log("ne pas autoriser de nouveaux invités");
}

// Ici on utilise des opérateurs logiques : (&&) (||) (!)
let userLoggedIn = true;
let UserHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

if(userLoggedIn > UserHasPremiumAccount && userLoggedIn <= UserHasPremiumAccount) {
    console.log("autoriser plus d'invités");
}else{
    console.log("ne pas autoriser de nouveaux invités");
}
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || UserHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true


// les portées des variable
/*cette facon de poetée de variable nous renvoie erreur
par ce que ces vraiable ne sont disponibles qu'à l'intérieur 
des blocs où elles sont déclarées
*/
let userLoggedIno = true;

if (userLoggedIno) {
   let welcomeMessage = 'Welcome back!';
} else {
   let welcomeMessage = 'Welcome new user!';
}

//console.log(welcomeMessage);  renvoie une erreur

// ici on déclar la variable a l'extérieur
let userLook = true;
let welcomeMessages = ''; // déclarer la variable ici

if (userLook) {
    welcomeMessages = 'Welcome back!'; // modifier la variable extérieure
} else {
    welcomeMessages = 'Welcome new user!'; // modifier la variable extérieure
}

console.log(welcomeMessages); // imprime 'Welcome back!'

// ici on Utilisez les instructions switch
let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

switch (firstUser.accountLevel) {
    case 'normal':
          console.log('You have a normal account!');
    
    break;
    case 'premium':
          console.log('You have a premium account!');
    
    break;
    case 'mega-premium':
          console.log('You have a mega premium account!');
    break;
    
    default:
          console.log('Unknown account type!');
    };

    // Le boucle for
for (let i = 0; i < 10; i++) {
    console.log("Passager embarqué !");
 }

//  le boucle for...in
const passengersIn = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengersIn) {
   console.log("Embarquement du passager " + passengersIn[i]);
}

// les boucle...of
const passengers = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },
    
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
   console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}

// Le boucle while
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges


// quelques erreurs de syntaxe 
// if (seatsRemaining) {
//     passengersBoarded+;
// }

// while (seatsRemaining > 0 {
//     passengersBoarded++;
// }

// if (seatsRemaining > 0) {
//     passengersBoarded++;
// } else {
//     passengersStillToBoard = 0;
// }

// lesfonction
// On définit la fonction et ces parametre

function afficherDeuxValeurs(valeur1, valeur2) {
    console.log('Première valeur:' + valeur1);
    console.log('Deuxième valeur:' + valeur2);
}
    
// On exécute la fonction
afficherDeuxValeurs(12, 'Bonjour');// les arguments d'appel

// on va parcourire a notre tableaux
let monTableau = ["bic", "book", "cahier","phone"]
    for (let elementDeTableau of monTableau) {
    console.log(elementDeTableau); //Affiche chaque élément individuellement
}

// le méthodes d'instance
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }
    
    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
                 console.log("Retrait refusé !");
        } else {
            console.log("Retrait de " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}
// ------------------


// un code tre long
if (firstUser.online) {
if (firstUser.accountType === "normal") {
    console.log("Hello " + firstUser.name + "!");
} else {
   console.log("Welcome back premium user " + firstUser.name + "!");
}

}

if (secondUser.online) {
if (secondUser.accountType === "normal") {
    console.log("Hello " + secondUser.name + "!");
} else {
   console.log("Welcome back premium user " + secondUser.name + "!");
}
}

if (thirdUser.online) {
if (thirdUser.accountType === "normal") {
    console.log("Hello " + thirdUser.name + "!");
} else {
   console.log("Welcome back premium user " + thirdUser.name + "!");
}
}


// ici on a réduit notre code en le rendant plus lisible
const sendWelcomeMessageToUser = (user) => {
if (user.online) {
if (user.accountType === "normal") {
       console.log("Hello " + user.name + "!");
} else {
      console.log("Welcome back premium user " + user.name + "!");
}
}
}

sendWelcomeMessageToUser(firstUser);

sendWelcomeMessageToUser(secondUser);

sendWelcomeMessageToUser(thirdUser);



const printStringStats = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    const wordCount = wordArray.length;
    let letterCount = 0;
    
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        letterCount += word.length;
    }

    const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
    const stringStats = {
        wordCount: wordCount,
        letterCount: letterCount,
        averageWordLength: averageWordLength
    };
    
    console.log(stringStats);
}


// bien chpoisir un et de bien commenter nos code

const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {

    // retire la ponctuation pour ne compter que les lettres
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    totalLetters += word.length;
    }

    return totalLetters;
}

// mettre en forme notre code

//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let personne3 = "Marcel";

function saluer(prenom){
  //On met la première lettre en majuscule, on salue la personne et on donne le nombre de lettre dans son prénom
  const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
  const longueurPrenom = monPrenom.length;
  console.log(`Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`);
}

//On salue les 3 personnes
saluer(personne1);
saluer(personne2);
saluer(personne3);

// ici on a une fonction récursive, qui s'appelle elle-même
const binarySearch = (array, thingToFind, start, end) => {
    if (start > end) {
        return false;
    }
    
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === thingToFind) {
        return true;
    }
    
    if (thingToFind < array[mid]) {
        return binarySearch(array, thingToFind, start, mid - 1);
    
    } else {
    
        return binarySearch(array, thingToFind, mid + 1, end);
    }
}
