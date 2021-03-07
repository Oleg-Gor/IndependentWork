'use strict';



let drag = document.getElementById('first');
let drop = document.getElementById('second');


let shiftX;
let shiftY;
let target;

drag.addEventListener('dragstart', function (event) {

 
    shiftX = event.offsetX;
    shiftY = event.offsetY;
 
   // console.log(event.target);
 

   target = event.target;

    event.target.addEventListener('dragend', function (event) {

       // event.target.style.position = 'absolute';

        event.target.style.left = event.pageX - shiftX + 'px';
        event.target.style.top = event.pageY - shiftY + 'px';

        //console.log(event.pageX , event.pageY);
      

    });


    drop.addEventListener('dragover', function (event) {

        event.preventDefault();

    });

    drop.addEventListener('drop', function (event) {

        console.log(target);

     

        drop.appendChild(target);

      


    });


});



