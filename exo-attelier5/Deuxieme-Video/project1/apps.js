
// Variable

let btn = document.querySelector('#new-qoute');
let quate = document.querySelector('.qoute')
let persone = document.querySelector('.person')

const quates = [{
    quate: `"the best way to find youeself is to 
    lose yourself in the service of others"`,
    persone : `Mahatma Gandhi`
},{
    quate: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Expedita, nemo officiis! Animi."`,
    persone : `Albert`  
},{
    quate: `" Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Ducimus modi eaque optio,"`,
    persone : `Aristotle`  
},{
    quate: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Sapiente itaque."`,
    persone : `Steve Jobe`  
},{
    quate: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, soluta?"`,
    persone : `Benjamain Franklin`  
},{
    quate: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Ducimus modi eaque optio, "`,
    persone : `Oprah winfray`  
},{
    quate: `"Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Eaque ullam vel fugiat porro. "`,
    persone : `Confuius`  
},{
    quate: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quam deleniti animi nulla."`,
    persone : `Martin Luther king`  
},{
    quate: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odit."`,
    persone : `Dalai Lama`  
},{
    quate: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque cupiditate harum, 
    deserunt similique ducimus nam!"`,
    persone : `Lao Tzu`  
},];
   

btn.addEventListener("click", function() {
    let rendom = Math.floor(Math.random() * quates.length);
    
    quate.innerText = quates[rendom].quate;
    persone.innerText = quates[rendom].persone;
})

