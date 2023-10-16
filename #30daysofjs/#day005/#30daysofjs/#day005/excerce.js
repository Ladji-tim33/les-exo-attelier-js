// Les exercice

// Déclarez un tableau vide ;
const  tabVide = [];

// Déclarez un tableau avec plus de 5 éléments
const tabElement = ['Tomate', 'Potate', 'Cabbage', 'Onion', 'Carrot'] 

// Trouvez la longueur de votre tableau
console.log( tabElement.length)

// Récupère le premier élément, l'élément du milieu et le dernier élément du tableau
console.log(tabElement[0]);
console.log(tabElement[2])  
console.log(tabElement[4])    


// Déclarez un tableau appelé MixedDataTypes , placez différents types de données dans le tableau et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5
const arr = [
    'Ladji',
    40,
    true,
    false,
    { pays: 'Senegal', Ville: 'Dakar' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] 
console.log(arr)


// Déclarez une variable de tableau nommée itCompanies et attribuez les valeurs initiales Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon"]

// Imprimez le tableau en utilisant console.log()
console.log(itCompanies);

// Imprimer le nombre d'entreprises dans le tableau
console.log(itCompanies.length);

// Imprimer la première entreprise, la deuxième et la dernière entreprise
console.log(itCompanies[0]);
console.log(itCompanies[1])  
console.log(itCompanies[6])  

// Changez le nom de chaque entreprise en majuscules un par un et imprimez-les

itCompanies[0] = "FACBOOK";
itCompanies[1] = "GOOGLE";
itCompanies[2] = "MICROSOFT";
itCompanies[3] = "APPLE";
itCompanies[4] = "IBM";
itCompanies[5] = "ORACLE";
itCompanies[6] = "AMAZON";
console.log(itCompanies);

// Imprimez le tableau comme une phrase : Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes sociétés informatiques.
console.log(itCompanies.join() + "sont de grandes sociétés informatiques.") 

// Vérifiez si une certaine entreprise existe dans le tableau itCompanies. Si elle existe retournez l'entreprise sinon retournez une entreprise introuvable
if (itCompanies.includes('FACBOOK')) {
    console.log(itCompanies)  
}else{
    console.log('entreprise introuvable') 
}


// Trier le tableau à l'aide de la méthode sort()
itCompanies.sort();
console.log(itCompanies);

// Inversez le tableau en utilisant la méthode reverse()
itCompanies.reverse()
console.log(itCompanies);

    

