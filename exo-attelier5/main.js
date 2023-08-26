var number = 5; // in-line comment

/* this is a 
multi-line 
comment*/

/* Data types :
undefined, nyll, boolean, string, symbol, number, and object
*/

// variables

var myName = "Beau";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

// storing values with assignment operator

// Initilize these three variables

var a = 5;
var b = 10;
var c = "I ame a"

// Do not change code below thise line

a = a + 1;
b = b + 5;
c = c + "String"


// Case Sensitivity in Variables (Sensibilité à la casse dans les variables)

// Declaration
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;



// Adding Numbers (Ajouter des nombres)
let sum = 10 + 10;
console.log(sum);



// Subtracting Numbers (Soustraire des nombres)
let moyen = 10 - 3;
console.log(moyen);



// Multiplying Number (multiplyer des nombres)
let mult = 10 * 5;
console.log(mult);


// Dividing Number (diviser des nombres)
let diviser = 10 / 2;
console.log(diviser);

// Incrementing Number (Incrémentation du nombre)
let myVar = 87;
myVar++ // myVar = myVar + 1;


// Decrementing Number (Nombre décrémentant)
let myDec = 87;
myDec--; // myDec = myDec - 1


// Decimal number
let ourDecimal = 5.7;

let myDecimal = 0.009


// multiply decimal
let multDecimal = 2.0 * 2.5;
console.log(multDecimal);


// Devid decimal
let devidDecimal = 4.4 * 2.0;
console.log(devidDecimal);


// Finding a Remainder (Trouver un reste)
var remainder;
remainder = 11 % 3;

/* Compound assignment 
with A ugmented Addotion*/
var a = 5;
var b = 17;
var c = 12;

// Only change code below thise line

a += 12 // a = a + 12; 
b += 9// b = b + 9;
c += 7// c = c + 7;


/* Compound assignment 
with Augmented Subtraction*/
var a = 15;
var b = 7;
var c = 9;

// Only change code below thise line

a -= 19 // a = a - 12; 
b -= 9// b = b - 9;
c -= 8// c = c - 7;


/* Compound assignment 
with A ugmented Multiplication*/
var a = 15;
var b = 7;
var c = 2;

// Only change code below thise line

a *= 2 // a = a * 12; 
b *= 4// b = b * 9;
c *= 3// c = c * 7;


/* Compound assignment 
with Augmented Division*/
var a = 5;
var b = 17;
var c = 12;

// Only change code below thise line

a /= 12 // a = a / 12; 
b /= 9// b = b / 9;
c /= 7// c = c / 7;


// Declare String Variables
let firstName = "luck";
let lestName = "zul";


// Escaping Literal Quotes in String (Échapper aux guillemets littéraux dans une chaîne)
var myStr = "I am a \"double Quotes\" string inside \"double Quotes\""
console.log(myStr);

// Quating String with Single Quates (Citation de chaîne avec des guillemets simples)
var myStri = 'I am a "double Quotes" string inside "double Quotes"'
console.log(myStri);


// Escape Sequences in Strings


// Concatenating String with Plus Operator
var ourString = "This is the start." + "This is the end."
console.log(ourString);


// Concatenating String with Equals Operator
var lestString = "This is the start." 
lestString += "This is the end."
console.log(lestString);


// Constructing Strings with Variables
let constString = "luck"
let stringConst = "Hello, our name is" + constString + ", how are you"
console.log(stringConst);


// Appending Variables to String (Ajout de variables à une chaîne)
var someAdjective = "wortwhile";
var mySome = "Learning to code is";
mySome += someAdjective
console.log(mySome);


// Find Lenght of String (Trouver la longueur de la chaîne)
var firstNameLength = 0;
var nom = "Ada";
firstNameLength = nom.length;
console.log(firstNameLength);



// Bracket Notation to Find First Character in String (Notation entre crochets pour trouver le premier caractère d'une chaîne)
var nameLength = 0;
var nomLength = "Ada";
nameLength = nomLength[0];
console.log(nameLength);


// String Immutability (Immuabilité des chaînes)
var x = "jello world";
x = "Hello World"
console.log(x);


// Bracket Notation to Find nth Character in String
var nameFirstLength = 0;
var nomFirstLength = "Ada";
nameFirstLength = nomLength[1];
console.log(nameFirstLength);


//  Bracket Notation to Find last Character in String

var nomLastLength = "Diallo";
var nameLastLength = nomLastLength[nomLastLength.length-1];
console.log(nameLastLength);


// Word Blanks
function wordBlanks(myNoun, myAjective, myVerb, myAdvreb) {
    //Your code below this line
    var result = "";
    result += "The " + myAjective + " " + myNoun + " " + myVerb + " to the store " + myAdvreb;

    // Your code above this line
    return result;
}

// Change words here to test youe function
console.log(wordBlanks("dog", "big", "ran", "quickly"));


// Store multiple Values with Arrays (Stocker plusieurs valeurs avec des tableaux)
let myArray = ["John", 23]
console.log(myArray);

// Nested Arrays (Tableaux imbriqués)
var ourArray = [["Bulls", 23], ["White Sox", 45]];
console.log(ourArray);

// Access Array Data with Indexes
let array = [ 50, 60, 70];
let ourData = array[0]
console.log(ourData);


// Modify Array Data with Indexes
var modifyArray = [18, 64, 99]
modifyArray[1] = 45;
console.log(modifyArray);


// Access Multi-Dimensional Array Data with Indexes (Accéder aux données de tableaux multidimensionnels avec des index)
let multArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14,15]]

let myData = multArray[2][1];
console.log(myData);



// Manupulate Arrays with Push()
let manupArray = ["luck", "jhon", "cat"];
manupArray.push(["happy", "joy"])
console.log(manupArray);



// Manupulate Arrays with Pop()
let manupArrayPop = ["luck", "jhon", "cat"];
manupArrayPop.pop()
console.log(manupArrayPop);



// // Manupulate Arrays with Shift()
let manupArrayShift = ["luck", "jhon", "cat"];
manupArrayShift.shift()
console.log(manupArrayShift);



// // Manupulate Arrays with Shift()
let manupArrayUnshift = ["luck", "jhon", "cat"];
manupArrayUnshift.unshift("happy")
console.log(manupArrayUnshift);


// Shopping List
let myList = [["cereal", 3], ["milk", 2], ["banenes", 3]];


// Write Reusable Code with Function (Écrire du code réutilisable avec fonction)
function ouReusableFunction(){
    console.log("Heyya, world");
}
ouReusableFunction()



// Passing Values to Functions with Arguments (Passage de valeurs aux fonctions avec des arguments)
function ouFunction(a, b){
    console.log(a - b);
}
ouFunction(10, 5)



// Global Scope and Function
    // Declare your Variable here
var myGlobal = 10;
    // Assigne 5 to oopsGlobal Here
function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal !="undefined") {
        output += "myGlobal : " + myGlobal;
    }
    if (typeof oopsGlobal !="undefined") {
        output += " , oopsGloabl : " + oopsGlobal;
    }
    console.log(output);
    
}

fun1();
fun2();




// Local Scope And Function
function myLocalScope() {
    let myVars = 5;
    console.log(myVars);
}

myLocalScope();



// Global vs Local Scope in Function
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "T-Shirt1";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);



// Return a Value from a Function with Return
function minusSeven(num) {
    
    return num * 4;
}

console.log(minusSeven(5));




// Understanding Undefined Value Returned from a Function (Comprendre la valeur non définie renvoyée par une fonction)
var sume = 0;
function addThree() {
    sume = sume + 3;
}
console.log(addThree());

function addFive() {
    sume += 3;
}

console.log(addFive());



// Assignment with a Return Value
let changed = 0;

function change(nume) {
    return (nume + 5) / 3;
}

changed = change(10);
console.log(changed);



// stend in line

function  nextInLine(arr, item) {
    
    arr.push(item)
    return arr.shift();
}

var testArr = [1, 2, 3, 4 , 5,]

console.log("Before : " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("after: " + JSON.stringify(testArr));




// Boolrans Values
function welcomToBooleans() {
    return true
}




// Use conditional logic with If Statement

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue)  {
        return "yes, that was true"
    }

    return "No, thet was false"
}

console.log(trueOrFalse(true));




// Comparison with the Equality Operator

function testEqual(val) {
    if(val == 12)  {
        return "Equal"
    }

    return "Not Equal"
}

console.log(testEqual(10));


// Comparison with the Strict Equality Operator

function testEqualTo(valTo) {
    if(valTo === 7)  {
        return "Equal"
    }

    return "Not Equal"
}

console.log(testEqualTo(10));




// Practice Comparing Different value
function compreEqual(y, J) {
    if(y == J)  {
        return "Equal"
    }

    return "Not Equal"
}

console.log(compreEqual(10, "10"));



// Comparison with the  Inequality Operator

function testNotEqualTo(valTow) {
    if(valTow != 99)  {
        return "Equal"
    }

    return "Not Equal"
}

console.log(testNotEqualTo(10));



// Comparison with the Strict  Inequality Operator

function testStrictNotEqualTo(valStrict) {
    if(valStrict != 17)  {
        return "Equal"
    }

    return "Not Equal"
}

console.log(testStrictNotEqualTo(10));



// Comparison with the Logical And Operator

function testGreaterThan(valeur) {
    if(valeur > 100)  {
        return "over 100"
    }

    if(valeur > 10)  {
        return "10 or Under"
    }

}

console.log(testGreaterThan(10));



// Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqal(vale) {
    if(vale >+ 20)  {
        return "20 or over"
    }

    if(vale >= 10)  {
        return "Les Than 10"
    }

}

console.log(testGreaterOrEqal(10));





// Comparison with the Less Than  Operator

function testLessThan(valLess) {
    if(valLess < 25)  {
        return "Under 25"
    }

    if(vale < 10)  {
        return "55 or Over"
    }

}

console.log(testLessThan(10));





// Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(valOrEqual) {
    if(valOrEqual <= 12)  {
        return "Under 25"
    }

    if(vale <= 24)  {
        return "55 or Over"
    }

}

console.log(testLessOrEqual(10));




// Comparison with the logical And  Operator

function testLogicalAnd(valAnd) {
    if(valAnd <= 25 && valAnd >= 50)  {
        return "Under 25"
    }

    
        return "55 or Over"
    
}

console.log(testLogicalAnd(10));





//  Comparison with the logical Or  Operator

function testLogicalOr(valOr) {
    if(valOr < 25 || valOr > 50)  {
        return "Under 25"
    }

    
        return "55 or Over"
    
}

console.log(testLogicalOr(10));



// Else Statements

function testElse(valElse) {
    let resultat = "";
    if(valElse > 5)  {
        resultat = "Bigger than 5"
       
    } else {
        resultat = "5 or Smaller"
    }

    return resultat;
}




// Else If Statements

function testElseIf(valElseIf) {
    let resultatIf = "";
    if(valElseIf > 5)  {
        resultatIf = "Bigger than 5"
       
    } else if (valElseIf < 10) {
        resultatIf = "5 or Smaller"
    } else {
        return "resultatIf";
    }
  
}

testElseIf(7);



// Logical Order in If Else Stataments

function  orderMyLogic(valLogic) {
    if (valLogic < 5) {
        return "less than 5";
    } else if (valLogic < 10){
        return "less than 10"
    } else {
        return "yes"
    }

}


// Chaining If Else Statement

function  testSize(numSize) {
    if (numSize < 5) {
        return "tiny";
    } else if (numSize < 10){
        return "small"
    }  else if (numSize < 15){
       return "Luck"
    }  else if (numSize < 20){
        return "Large"
    } 
    else {
        return "Cool"
    }

} 

testSize(20)

