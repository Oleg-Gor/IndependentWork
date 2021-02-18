'use strict';


//caclulate

var calculate = document.getElementById('calculate');
var enter = document.getElementById('enter');
var hist = document.getElementById('history');

calculate.addEventListener('click', insertToEnter);

function insertToEnter(element) {

    var valueTarget = element.target.value;



    switch (valueTarget) {
        case 'C':
            enter.value = '';
            break;
        case '=':
            hist.innerHTML = enter.value + ' = ' + eval(enter.value) + '<br>' + ' ' + hist.innerHTML;

            enter.value = eval(enter.value);

            break;

        default:
            enter.value = enter.value + element.target.value;
            break;
    }


}


// GameX


var gameX = document.getElementById('gameX');
var td = document.querySelectorAll('#gameX td');



let j = 11;
let count = 1;
let playerX = [];
let playerO = [];
for (let i = 0; i < td.length; i++) {


    td[i].setAttribute('data-id', j);

    //td[i].innerHTML = j;

    if (j % 10 == 4) j += 7; else j++;

    td[i].addEventListener('click', fillCell);

}


function killerClick() {

    for (let i = 0; i < td.length; i++) {



        td[i].removeEventListener('click', fillCell);

    }


}



function fillCell(element) {

    var elem = element.target;

    count++;

    if (count % 2 == 0) {

        elem.innerHTML = 'X';
        playerX.push(elem.getAttribute('data-id'));
        chekWinner(playerX, elem.innerHTML);

    } else {
        elem.innerHTML = 'O';
        playerO.push(elem.getAttribute('data-id'));
        chekWinner(playerO, elem.innerHTML);
    }


    elem.removeEventListener('click', fillCell);



}



function chekWinner(arr, win) {
    let arrWinner = [];

    arrWinner = arr.sort();


    for (let i = 0; i <= arrWinner.length; i++) {

        if (arrWinner.length >= 3) {

            if (counter(arrWinner, i, 11) >= 3) {
                killerClick();
                return alert('winner: ' + win);

            }

            if (counter(arrWinner, i, 1) >= 3) {
                killerClick();
                return alert('winner: ' + win);

            }

            if (counter(arrWinner, i, 10) >= 3) {
                killerClick();
                return alert('winner: ' + win);

            }
            if (counter(arrWinner, i, 9) >= 3) {
                killerClick();
                return alert('winner: ' + win);

            }


        }

    }

}


function counter(arrWinner, i, cons) {

    let countWinner = 1;

    arrWinner.slice(i + 1).forEach(function (elem) {



        if (+arrWinner[i] + cons == elem) {

            countWinner += 1;

        }

        if (+arrWinner[i] + cons * 2 == elem) {

            countWinner += 1;

        }



    });


    return countWinner;
}



// survay

var arrCorrectAnswers = [11, 23, 33];
var arrAnswers = [];
arrAnswers.length = 3;
var ul = document.querySelector('ul');
var survay = document.getElementById('survay');
var survayAnswer = document.getElementById('survay-answer');


ul.addEventListener('change', checkAnswer);
survay.addEventListener('click', enterAnswers);


function checkAnswer(elem) {
    let target = elem.target;

    arrAnswers[target.getAttribute('name') - 1] = target.getAttribute('name') + target.getAttribute('data-correct');


}


function enterAnswers() {

    var counterCorrect = 0;
    var counterMictake = 0;
    var counterDontAnswer = 0;

    for (let i = 0; i <= 2; i++) {



        if (arrAnswers[i] == arrCorrectAnswers[i]) {

            counterCorrect++;

        } else if (arrAnswers[i] == undefined) {

            counterDontAnswer++;

        } else {

            counterMictake++;
        }



    }

    survayAnswer.innerHTML = 'correct ' + counterCorrect + '<br>' +
        'mistakes ' + counterMictake + '<br>' + 'empty ansvers ' + counterDontAnswer;


}







//carusel






var carousel = document.getElementById('carousel');
var carouselTd = document.querySelectorAll('#carousel td');
var changeCarousel = document.getElementById('changeCarousel');
var arrOpenPicters = [];
var countSetInterval = 0;
var counterMictakeCarousel = 0;
var counterCorrectCarousel = 0;


var arrImg = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
var arrCarousel = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 1];
arrCarousel.length = 12;


changeCarouselFunc();


for (let i = 0; i < carouselTd.length; i++) {

    carouselTd[i].addEventListener('click', openPicter);

    carouselTd[i].setAttribute('data-nam', i);


}


for (let i = 0; i <= 11; i++) {

    arrCarousel[i] = checkArrImg();


}


function checkArrImg() {

    for (let i = 0; i < arrImg.length; i++) {

        var arrElement = Math.floor(Math.random() * arrImg.length);



        var finish = arrImg.splice(arrElement, 1);

        return finish[0];


    }


}




changeCarousel.addEventListener('click', timer);



function timer() {

    window.timerId = window.setInterval(changeCarouselFunc, 250);


}



function changeCarouselFunc() {

    arrCarousel.unshift(arrCarousel.pop());


    for (let i = 0; i < arrCarousel.length; i++) {

        carouselTd[i].innerHTML = '<img src="IMG/' + arrCarousel[i] + '.png" alt="">';

    }

    countSetInterval++;

    if (countSetInterval == 10) {

        window.clearInterval(window.timerId);
        countSetInterval = 0;
        delPicters();

    }

}


function delPicters() {

    for (let i = 0; i < arrCarousel.length; i++) {

        carouselTd[i].innerHTML = ' ';

    }

}


function openPicter(element) {

    element.target.innerHTML = '<img src="IMG/' + arrCarousel[element.target.dataset.nam] + '.png" alt="">';

    arrOpenPicters.push(element.target.dataset.nam);

    countSetInterval++;

    if (countSetInterval == 2) {
        countSetInterval = 0;

        setTimeout(closePicter, 1500);

    }

}


function closePicter() {

    for (let i = 0; i < arrOpenPicters.length; i++) {
        carouselTd[arrOpenPicters[i]].innerHTML = '';

    }


   
if ( arrCarousel[arrOpenPicters[0]]== arrCarousel[arrOpenPicters[1]] ){
counterCorrectCarousel ++;


} else {counterMictakeCarousel ++ ;}

arrOpenPicters.length = 0;


document.getElementById('correct').innerHTML = 'correct ' + counterCorrectCarousel;

document.getElementById('mistakes').innerHTML = 'mistakes ' + counterMictakeCarousel;

}



/////curvay2



