const billInput = document.querySelector('#bill')
const tipButtons = document.querySelectorAll('.tip-grid_tip-chiox button')
const customTipButton = document.querySelector('.tip-grid_tip-chiox input')
const poepleLabel = document.querySelector('#peopoleLabel')
const poepleInput = document.querySelector('#poeple')
let   poepleErrors = document.querySelectorAll('#poepleLabel .errore')
const tipAmount= document.querySelector('.result_tip-amount h3')
const tipBill = document.querySelector('.result_total-bill h3')
const resetButton = document.querySelector('.result button')

let bill = 0 ;
let tipAmountPoucentage = 0;
let numberOfPoeple = 0;

const calculateTipAndTtotal = () => {
    if(numberOfPoeple !== 0) {
        tipAmount.innerText = `$${(bill * (tipAmountPoucentage / 100) / numberOfPoeple).toFixed(2)}`
        tipBill.innerText = `$${(bill / numberOfPoeple ).toFixed(2)}`
    }
}

billInput.addEventListener('input', (event) => {
    bill = +event.target.value 
    calculateTipAndTtotal()
})

tipButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if (button.classList.contains('active')) {
            tipButtons.forEach((button) => button.classList.remove('active'))
            tipAmountPoucentage = 0
        } else{
            tipButtons.forEach((button) => button.classList.remove('active'))
            button.classList.add('active')
            tipAmountPoucentage = +button.value
        }
        calculateTipAndTtotal()
    })
})

customTipButton.addEventListener('input', (event) => {
    tipAmountPoucentage = +event.target.value
    calculateTipAndTtotal()
})

poepleInput.addEventListener('input', (event) => {
    poepleErrors = document.querySelectorAll('#poepleLabel .errore')
    poepleErrors.forEach((poepleErrors) => {
        poepleLabel.removeChild(poepleErrors)
    })
    poepleInput.classList.remove('error')

    if(event.target.value === 0) {
        const errorSpan = document.createElement('span')
        errorSpan.innerText = "Can 't be zero"
        errorSpan.classList.add('error')
        poepleInput.classList.add('error')
        poepleLabel.appendChild(errorSpan)
    } else if (event.target.value.includes('.')) {
        const errorSpan = document.createElement('span')
        errorSpan.innerText = "Can 't be a decimal value"
        errorSpan.classList.add('error')
        poepleInput.classList.add('error')
        poepleLabel.appendChild(errorSpan) 
    }else{
        numberOfPoeple = +event.target.value
        calculateTipAndTtotal()
    }

    
})

resetButton.addEventListener('click', () => {
    tipAmountPoucentage = 0
    bill = 0
    numberOfPoeple = 0
    billInput.value = ''
    tipButtons.forEach((button) => button.classList.remove('active'))
    customTipButton.value = ''
    poepleInput.value =''
    tipAmount.innerText = '$0.00'
    tipBill.innerText = '$0.00'
})