'use strict';

//let func = Symbol.for('text arr');


/* Пусть у нас есть скрипт. В этом скрипте есть функция, которая возвращает массив, заполненный случайными числами от 1 до 10. 
В этом скрипте также есть функция, которая параметром принимает два массива с числами и возвращает массив элементов, которые есть в обоих массивах.

Сделайте так, чтобы массивы, возвращаемые любой из функций нашего скрипта, содержали функцию, возвращающую сумму чисел этого массива. 
Ключ этой функции должен быть одинаковым для всех массивов, то есть созданным через Symbol.for. 
 */

/*



function summArr () {
    let summ = 0;

    for (let value of this) {

        summ += +value;

    }

    return summ;
};



function createArr() {

    let arr = [];

    arr[func] = summArr;



    for (let i = 0; i < 5; i++) {

        let numb = Math.round(Math.random() * 9 + 1);

        let prob = arr.some(function (elem) {

            return elem == numb;

        });

        if (i > 0 && prob) {

            i--;
            continue;

        }


        arr.push(numb);

    }

    return arr;

}


function compare(arr1, arr2) {


    let arr = arr1.filter(function (e) {
        return arr2.indexOf(e) >= 0;
    });

    arr[func] = summArr;


    return arr;
}

let arr1 = createArr();
let arr2 = createArr();

let arr3 = compare(arr1, arr2);



console.log(arr1[func] === arr3[func]);



 */



/* let arr = [1,3,5,6];

for (let key of arr){

//console.log(key);

}


let p = document.querySelectorAll('p');

for (let value of p){

value.innerHTML = value.innerHTML + ' ' +'!';


}

console.log(p[Symbol.iterator]);
console.log(arr[Symbol.iterator]);

 */


function* iteratorFunc() {

    yield 1;
    yield 2;
    yield 3;

}


let iterator = iteratorFunc();


/* console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
 */

/* for (let value of iterator) {

    console.log(value);

} */


let arr = [1, 3, 5, 5];

/* 
function* iteratorArr(arr) {

    for (let i = 0; i < arr.length; i+2) {

        yield arr[i] + ' ' +arr[i+1] ;
    }

}
 */

let iter = iteratorArr(arr);


//console.log(iter.next());


/* for (let key of iter) {

    console.log(key);

}
 */

function* iteratorArr(arr) {

    for (let i = 0; i < arr.length;) {

        yield arr[i] + ' ' + arr[i + 1];

        i = i + 2;
    }

}



let arrFib = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function* iritateFibonachy(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        yield arr[i] + arr[i + 1];

    }

}

let fib = iritateFibonachy(arrFib);


let objIter = {
    a: 1,
    b: 2,
    c: 'hi'
};


function* iteratorObj(obj) {

    for (let key in obj) {

        yield { key: key, value: obj[key] };

    }

}

let objIterNow = iteratorObj(objIter);

for (let key of objIterNow) {

    //console.log(key);

}


let iterArr = arr.values();

let summ = 0;
for (let value of iterArr) {

    summ += value;

}

//console.log(summ);


let newMap = new Map();

newMap.set('a', 1);
newMap.set('b', 3);


//console.log(newMap);


iterator = newMap.values();


for (let key of iterator) {

    //console.log(key);

}

let str2 = 'hi mother';

//console.log([...str2].reverse().join(''));

let num = 123456789;

let sum = summFunction([...String(num)]);

//console.log(sum);

function summFunction(arr) {

    summ = 0;

    for (let key of arr) {

        summ += +key;
    }
    return summ;

}

let buttons = document.querySelectorAll('button');

let buttonIrit = buttons.entries();

for (let [key, elem] of buttonIrit) {

    elem.addEventListener('click', function first() {

        let p = elem.previousElementSibling;

        p.innerHTML = p.innerHTML + ' ' + key;

        elem.removeEventListener('click', first);

    });




}

