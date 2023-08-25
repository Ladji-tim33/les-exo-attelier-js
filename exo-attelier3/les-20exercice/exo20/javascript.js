
let image = '';

for(let i = 1;i <= 10;i++) {
   image = image + '<img src="https://picsum.photos/350/350?random=' + i + '" />';
}
document.body.innerHTML = image;