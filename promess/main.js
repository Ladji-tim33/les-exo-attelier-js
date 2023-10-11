function calculDivision(a,b){
    return new Promise( ( resolv, reject) => {
         
        if(b != 0){
            return resolv  (a +  " / " + b + " = " + a / b);
        }
         reject  ("b doit etre differant de 0")
    })
}
calculDivision(4,2).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


function calculMultiplication(a,b){
    return new Promise( ( resolv, reject) => {
         
        if(b !== 0 && a !== 0){
            return resolv  (a +  " x " + b + " = " + a * b);
        }
         reject  ("a et b doivent etre differant de 0")
    })
}
calculMultiplication(7,9).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


function calculAddition(a,b){
    return new Promise( ( resolv, reject) => {
         
        if(a > 0 && b > 0){
            return resolv  (a +  " + " + b + " = " + a + b);
        }
         reject  ("a doit etre supérieutr a 0")
    })
}
calculAddition(7,9).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


function calculSoustraction(a,b){
    return new Promise( ( resolv, reject) => {
        let cal = a - b
         
        if(a > b){
            return resolv  (a +  " - " + b + " = " + cal);
        }
         reject  ("a doit etre supérieutr a b")
    })
}
calculSoustraction(22,9).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


function calculSoustraction(a,b){
    return new Promise( ( resolv, reject) => {

         
        if(a % b !== 0){
            return resolv  (a +  " % " + b + " = " + a % b);
        }
         reject  ("a % b doit etre differant de 0")
    })
}
calculSoustraction(5,9).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})