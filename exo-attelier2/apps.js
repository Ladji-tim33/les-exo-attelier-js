
function numAverage(numArray) {

    let moyenneTableau = 0;
    let sommeTableau = 0;

    //   for (let bbb of .[......]){}

    for (let nombre of numArray) {
        /*
          1) sommeTableau = sommeTableau + nombre =  0 + 5 = 5
          2) sommeTableau = sommeTableau + nombre =  5 + 1 = 6
          3) sommeTableau = sommeTableau + nombre =  6 + 5 = 11
          3) sommeTableau = sommeTableau + nombre =  11 + 20 = 31
        */
        sommeTableau = sommeTableau + nombre
        // console.log(nombre)
    }

    moyenneTableau = sommeTableau / numArray.length
    // console.log(sommeTableau / numArray.length)
    return moyenneTableau
}

const notes = ['5',3]

// console.log(numAverage(notes));

const moyenneClasse = numAverage(notes)

console.log("La moyenne de la classe est: ", moyenneClasse)



