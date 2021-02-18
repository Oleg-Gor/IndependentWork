'use sticrt';


var divCount = document.getElementById('count');
var tabCount = divCount.querySelector('table');
var buttomCount = divCount.querySelectorAll('input');
var p = document.querySelector('p');
var firstTimer = 65;

var arrNumbers = [];
var time = firstTimer;

buttomCount[0].addEventListener('click', allFunction);

buttomCount[1].addEventListener('click', startAgain);

tabCount.addEventListener('click',checkAnswer);




function hideButtom() {
    buttomCount[0].style.display = 'none';
    buttomCount[1].style.display = 'block';
}


function allFunction (elem){

    createTab();
    fullArrNumbers();
    fullTab();
    createTimer();
    hideButtom();


}



function createTimer() {

    timer();
    window.timerId = window.setInterval(timer, 1000);


}

function timer() {

    p.innerHTML = 'Timer: ' + time--;

    if (time < 0) {

        tabCount.removeEventListener ('click', checkAnswer);
        window.clearInterval(window.timerId);
alert ('you are looser');

    }


}


function createTab() {
    var tr;
    var td;

    for (let j = 1; j <= 5; j++) {

        tr = document.createElement('tr');

        for (let i = 1; i <= 5; i++) {
            td = document.createElement('td');
            td.innerHTML = i;
            tr.insertAdjacentElement("beforeend", td);
        }

        tabCount.insertAdjacentElement('afterbegin', tr);

    }
}


function fullArrNumbers() {
    var number;
    var count = 0;

    while (arrNumbers.length < 25) {

        number = Math.round(1 + Math.random() * (25 - 1));

        arrNumbers.forEach(function (elem) {

            if (elem == number) count++;

        });

        if (count == 0) {

            arrNumbers.push(number);

        } else {

            count = 0;
            continue;

        }

    }

}


function fullTab() {

    var tabTd = tabCount.querySelectorAll('td');



    for (let i = 0; i < tabTd.length; i++) {

        tabTd[i].innerHTML = arrNumbers[i];

       // tabTd[i].addEventListener('click', checkAnswer);

    }


    createStyle(tabTd);

}

function createStyle(tabTd) {


    tabTd.forEach(function (elem) {

        var fontSize = Math.round(15 + Math.random() * (35 - 15));

        fontSize = 'font-size:' + fontSize + 'px';

        var colorRgb1 = Math.round(50 + Math.random() * (250 - 50));
        var colorRgb2 = Math.round(50 + Math.random() * (250 - 50));
        var colorRgb3 = Math.round(50 + Math.random() * (250 - 50));
        var colorRgbSumm = 'color:rgb(' + colorRgb1 + ',' + colorRgb2 + ',' + colorRgb3 + ')';

        elem.style.cssText = fontSize + ';' + colorRgbSumm;


    });


}

function checkAnswer(elem) {


    var newArr = arrNumbers.sort(function (a, b) { return a - b });


    if (elem.target.innerHTML == newArr[0]) {

        elem.target.style.background = 'crimson';
        newArr.splice(0, 1);

    }


if (newArr.length == 0){

    window.clearInterval(window.timerId);
    alert('you are winner');

}    

}


function startAgain() {

    window.clearInterval(window.timerId);
    tabCount.innerHTML = '';
    p.innerHTML = '';

    tabCount.addEventListener('click',checkAnswer);

    createTab();
    fullArrNumbers();
    fullTab();
    time = firstTimer;
    createTimer();

}