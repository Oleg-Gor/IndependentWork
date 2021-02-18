'use strict';


var divCalendar = document.createElement('div');
divCalendar.classList.add('calendar');
document.body.insertAdjacentElement('afterbegin', divCalendar);


var divMonth = document.createElement('div');
divMonth.classList.add('month');
divMonth.innerHTML = 'Month';
divCalendar.insertAdjacentElement('afterbegin', divMonth);


var divBotton = document.createElement('div');
divBotton.classList.add('botton');
divCalendar.insertAdjacentElement('beforeend', divBotton);

var divBottonPrevious = document.createElement('div');
divBottonPrevious.innerHTML = '←';
divBottonPrevious.classList.add('bottonIn');
divBotton.insertAdjacentElement('afterbegin', divBottonPrevious);

var divBottonNext = document.createElement('div');
divBottonNext.innerHTML = '→';
divBottonNext.classList.add('bottonIn');
divBotton.insertAdjacentElement('beforeend', divBottonNext);

divBottonPrevious.addEventListener('click', previousTime);
divBottonNext.addEventListener('click', nextTime);


var arrDay = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПЦ', 'СБ', 'ВС'];
var arrMonth = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];


var divDay = document.createElement('div');
divDay.classList.add('day');
divCalendar.insertAdjacentElement('beforeend', divDay);
createDay();

var divDays = document.createElement('div');
divDays.classList.add('days');
divCalendar.insertAdjacentElement('beforeend', divDays);

var today = new Date();
createDays(today);




function createDay() {

    for (let i = 0; i < arrDay.length; i++) {

        var div = document.createElement('div');
        div.innerHTML = arrDay[i];
        divDay.insertAdjacentElement('beforeend', div);

    }

}


function createDays(today) {
    var year = today.getFullYear();
    var month = today.getMonth();
    var dayWeek = today.getDay();

    var dayNow = new Date();

    showYearMonth(year, month);

    var maxDay = new Date(year, month + 1, 0);

    if (dayWeek != 1) {

        for (let i = 1; i <= dayWeek - 1; i++) {

            var dayEmpty = document.createElement('div');
            dayEmpty.classList.add('d');
            divDays.insertAdjacentElement('beforeend', dayEmpty);

        }

    }


    for (let i = 1; i <= maxDay.getDate(); i++) {

        var days = document.createElement('div');
        days.classList.add('d');

        if (year == dayNow.getFullYear() && month == dayNow.getMonth() && i == dayNow.getDate()) {

            days.classList.add('active');

        }

        days.innerHTML = i;
        divDays.insertAdjacentElement('beforeend', days);

    }

}


function showYearMonth(year, month) {

    var monthNow;

    for (let i = 0; i < arrMonth.length; i++) {

        if (month == i) {

            monthNow = arrMonth[i];

        }

    }

    divMonth.innerHTML = year + ' ' + monthNow;

}


function previousTime() {

    today = new Date(today.getFullYear(), today.getMonth(), 0);

    showYearMonth(today.getFullYear(), today.getMonth());

    divDays.innerHTML = '';
    createDays(today);    
}


function nextTime() {

    today = new Date(today.getFullYear(), today.getMonth()+1, 1);

    showYearMonth(today.getFullYear(), today.getMonth());

    divDays.innerHTML = '';
    createDays(today);

}