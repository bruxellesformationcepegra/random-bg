let randomNumber = Math.floor(Math.random()*5+1);
let myHeader = document.querySelector('.header');

myHeader.style.backgroundImage = "url('img/bg"+randomNumber+".jpg')";