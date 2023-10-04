
const button = document.querySelector('.button')
const btltbody = document.querySelector('.btltbody')

// recupere la localstorage
btltbody.innerHTML = localStorage.getItem("stock");

// on recuoére tous ce qui est dans  notre class delete
const spanDels = document.querySelectorAll(".delete");

//  bouclé suR le spanDeles 

for (let span of spanDels) {
    // ajoute l'evenement del
    span.onclick = () => del(span.parentElement)

};

form.onsubmit = () =>  {
    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {
            var row = document.createElement('tr')

            for (let j = 0; j < 5; i++) {
                const paraPrnom = document.createElement('td')
                const paraNom = document.createElement('td')
                const paraEmail = document.createElement('td')
                const paranNumero = document.createElement('td')
                const paranAction = document.createElement('td')
                const myButton1 = document.createElement('button')
                const myButton2 = document.createElement('button')

                myButton2.classList.add("delete");
                paraPrnom.innerHTML = prenom.value;
                row.appendChild(paraPrnom);

                paraNom.innerHTML = nom.value;
                row.appendChild(paraNom);

                paraEmail.innerHTML = email.value;
                row.appendChild(paraEmail);

                paranNumero.innerHTML = numero.value;
                row.appendChild(paranNumero);

                row.appendChild(paranAction);


            
                myButton1.textContent = "Modifier";
                paranAction.appendChild(myButton1);
                myButton1.style.background = "green"

                myButton2.onclick = () => del(row);
                myButton2.textContent = "Suprimer ";
                paranAction.appendChild(myButton2);
                myButton2.style.background = "red"
                myButton2.style.marginLeft = "20px"

                myButton1.addEventListener ('click', () => {
                    prenom.value = paraPrnom.textContent
                })

                btltbody.appendChild(row);
                prenom.value = "";
                nom.value = "";
                email.value = "";
                numero.value = "";

                // suvegarder localstorage
                localStorage.setItem("stock", btltbody.innerHTML)
                return false
            }

        }



    }

    function del(element) {
        element.remove();



        // // enregistre la nouvelle list
        localStorage.setItem("stock", btltbody.innerHTML)
    }

   

}



