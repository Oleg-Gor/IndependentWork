'use strict';



/* 
let div = document.querySelector('div');
let sign = document.createElement('p');

let func = function () {

    let arr = [];

    for (let i = 0; i < 2000; i++) {

        arr.push(i);

    }


    let time = document.createElement('p');
    time.innerHTML = arr.join(' ');

    div.appendChild(time);


    sign.classList.add('sign');
    sign.style.display = 'none';
    sign.innerHTML = '>';
    div.appendChild(sign);

sign.addEventListener('click', function(){

div.scrollTop = 0;


});

};

func();





div.addEventListener('scroll', function () {

    if (div.scrollTop > div.clientHeight) {

        sign.style.display = 'block';

    } else {  sign.style.display = 'none'; }


 
});
 
 */




/* let arr = 'aaooo ddddo';
let summ = 0;

let object = {
    id: 'elem',
    color: 'blue', 
    border: '1px solid red', 
    font: '15px Arial'
};


let func = ({id, color= 'red', border= '1px solid red', font= '15px Arial'}) => {

let idNew = document.getElementById(id);

console.log(idNew);

idNew.style.cssText = `color:${color}; border:${border}; font:${font}`;


};


func (object);
 */





/* let paragr = document.querySelectorAll('p');

paragr.forEach(element => {element.addEventListener('click', 
()=> {setInterval(() => {
    
    element.innerHTML = Number(element.innerHTML) + 1;

}, 1000);

})
    
}); */

/* let arrP = document.querySelectorAll('p');
let button = document.querySelector('input');
let mySet = new Set();

for (let key of arrP) {

    key.addEventListener('click', function () {

        mySet.add(key);

    });


};

button.addEventListener('click', function () {

    for (let key of mySet) {

        key.innerHTML += '!';



    }
mySet.clear();

});
 */



let p = document.querySelectorAll('p');
let entries;
entries = p.entries();

for (let entry of entries){

    console.log(entry[1].innerHTML+ entry[0]);

}







