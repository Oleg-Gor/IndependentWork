'use strict';



/* function hardOperation(num) {

let arr = [];

    for (let i = 0; i < num; i++) {

        let iter = Math.floor(Math.random()*(5-1+1) + 1);

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                 arr[i] = resolve(iter);

            }, 1000);

        });

    }

  
} */


/* let arg1 = new Promise((revorse, reject) => {

    let iter = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    setTimeout(() => { revorse(iter) }, 1000);

});

let arg2 = new Promise((revorse, reject) => {

    let iter = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    setTimeout(() => { revorse(iter) }, 1000);

});

let arg3 = new Promise((revorse, reject) => {

    let iter = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    setTimeout(() => { revorse(iter) }, 1000);

});


console.log([arg1, arg2, arg3]);

Promise.all([arg1, arg2, arg3]).then(argument => console.log(argument.reduce ((elemfirst, elemsecond) => { return elemfirst + elemsecond }))); */

//arg1.then( revorse => console.log(revorse) );

//Promise.all().then( result => console.log(result));


/* let arr = [];
function chageArrPromise(num) {

   let max = 10;
   let min = 1;

    for (let i = 0; i < num; i++) {

        let iter = Math.floor(Math.random() * (max - min + 1) + 1);

        let newElementArr = new Promise((resolve, reject) => {

            setTimeout(() => { resolve(iter) }, 1000);

        });

        arr.push(newElementArr);
    }

    return  arr;
}

let arr2 = chageArrPromise(3);

console.log(arr2);


Promise.all(arr2).then(resolve => {console.log(resolve.reduce((first,second) => {return first + second} ))}) */


/* 

function hardOperation() {

    let arr = [];

    let max = 6;
    let min = 1;

    for (let i = 0; i <= 2; i++) {

        let iter = Math.floor(Math.random() * (max - min + 1) + 1);

        let prom = new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve(iter + ' ' + i);

            }, iter * 500);

        });

        arr.push(prom);

    }

    return arr;

}

let arr = hardOperation();

console.log(arr);


Promise.race(arr).then((resolve) => console.log(resolve));

Promise.race(arr).then((resolve) => console.log(resolve));

Promise.race(arr).then((resolve) => console.log(resolve)); */

/* 

function getNum(min,max,delay) {


    let promiseOut =new Promise((resolve, reject) => {
    
        let inter = Math.floor(Math.random() * (max - min + 1) + min);

        setInterval(() => {

          

           

            reject(inter);

        }, delay *1000);



    });

    return promiseOut;

}


async function func() {

let result = await getNum(1,5,3);
console.log(result);
let result2 = await getNum(6,10,5);
console.log(result2);

console.log(result + result2);

}

func().catch((error) => console.log('error ' + error)); */


function showImage(path) {

    return new Promise((resolve, reject) => {

        let img = new Image();
        img.src = path;

        img.onload = () => resolve(img);
        img.onerror = () => reject(path);


    });


}


let arr = ['img/1.png', 'img/2.png', 'img/2.png', 'img/4.png', 'img/5.png']


Promise.all(arr.map(showImage)).then(

    resolves => {
        for (let img of resolves) {

            document.body.appendChild(img);

        }

    }

);



