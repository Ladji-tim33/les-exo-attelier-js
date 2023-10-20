const allUser = [];

const button = document.querySelector('.button');
button.addEventListener ('click', function(e) {
  e.preventDefault();
  const utilisateur  = {
    prenom : document.getElementById('prenom').value,
    nom : document.getElementById('nom').value,
    email : document.getElementById('email').value,
    numero : document.getElementById('numero').value
  }
   allUser.push(utilisateur);
   

   let btltbody = document.querySelector('.btltbody')
   let ligne = document.createElement('tr');
   ligne.innerHTML = 
   `<td>${utilisateur.prenom}</td> <td>${utilisateur.nom}</td> <td>${utilisateur.email}</td> <td>${utilisateur.numero}</td>`

   
   console.log(ligne);
   btltbody.appendChild(ligne);

   const myButton1 = document.createElement('button')
   const myButton2 = document.createElement('button')

   
   myButton1.textContent = "Modifier";
   ligne.appendChild(myButton1);
   myButton1.style.backgroundColor = "green"

   myButton2.onclick = () => del(ligne);
   myButton2.textContent = "Suprimer ";
   ligne.appendChild(myButton2);

   myButton1.addEventListener ('click', () => {
    prenom.value = utilisateur.prenom
    nom.value = utilisateur.nom
    email.value = utilisateur.email
    numero.value = utilisateur.numero

    del(ligne)
})
   document.getElementById('prenom').value = "";
   document.getElementById('nom').value = "";
   document.getElementById('email').value = "";
   document.getElementById('numero').value = "";
   console.log(allUser);

   const myTable = document.getElementById('myTable')
   myTable.style.backgroundColor = "chartreuse"

   function del(element) {
    element.remove();
}

console.log(del);
})








function del(element) {
    element.remove();

    // // enregistre la nouvelle list
    // localStorage.setItem("stock", btltbody.innerHTML)
}


