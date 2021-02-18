'use strict';




var div = document.createElement('div');
var divCansel = document.createElement('div');
var countWindowHi = 0;


div.classList.add('scrolling');
document.body.insertAdjacentElement('afterbegin', div);

divCansel.classList.add('escape');
divCansel.innerHTML = 'x';


var divBild = document.querySelectorAll('div');


//console.log(divBild);

divBild[0].addEventListener('scroll', checkHight);



for (let i = 0; i < 20; i++) {
   var p = document.createElement('p');
   p.innerHTML = 'Text';

   divBild[0].insertAdjacentElement('afterbegin', p);



}





function checkHight() {

   if (div.scrollTop > 150 && countWindowHi == 0) {

      var newDiv = document.createElement('div');

      newDiv.innerHTML = 'Hi';

      newDiv.classList.add('newDiv');

      divBild[0].insertAdjacentElement('afterbegin', newDiv);

      CreateCansel(newDiv);

      countWindowHi++;

   }

}


function CreateCansel() {



   divBild[0].insertAdjacentElement("afterend", divCansel);
   divCansel.addEventListener('click', escapeWindow);

}


function escapeWindow() {

   divBild[0].firstElementChild.style.display = 'none'; 
   divBild[0].nextElementSibling.style.display = 'none'; 



}