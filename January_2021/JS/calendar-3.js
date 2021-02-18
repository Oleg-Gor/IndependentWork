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


var tasks = {
    '2016.11.6': [
        '1. Сделать небольшой калькулятор на js',
        '2. Сделать игру "Крестики нолики"',
        '3. Начать делать сайт'
    ],
    '2016.11.7': [
        '1. Сверстать шапку сайта',
        '2. Сверстать блок nav',
        '3. Сверстать основные блоки',
        '4. Сверстать футер'
    ],
    '2016.11.23': [
        '1. Учить верстку',
        '2. Повторять js',
        '3. Повторить виды и особености функций'
    ],
    '2016.11.20': [
        '1. Покормить рыбок',
        '2. Покормить кота рыбками',
        '3. Написать игру про рыбок и кота'
    ],
    '2016.10.11': [
        '1. Изучать canvas',
        '2. Повторить преобразоватие типов'
    ],
    '2016.12.4': [
        '1. Смотреть сериалы',
        '2. Смотреть фильмы',
        '3. Спать'
    ],
};




var divDay = document.createElement('div');
divDay.classList.add('day');
divCalendar.insertAdjacentElement('beforeend', divDay);
createDay();

var divDays = document.createElement('div');
divDays.classList.add('days');
divCalendar.insertAdjacentElement('beforeend', divDays);

var divTasks = document.createElement('textarea');
divTasks.style.display = 'none';
divCalendar.insertAdjacentElement('afterend', divTasks);

var today = new Date();
createDays(today);

divDays.addEventListener('click', showTasks);


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

        var now = year == dayNow.getFullYear() && month == dayNow.getMonth();

        if (now) {

            if (i == dayNow.getDate()) {

                days.classList.add('active');

            }

            for (let key in tasks) {

                var dayTask = new Date(key.replace(/[.]/g, ',')).getDate();

                if (dayTask == i) {

                    days.classList.add('task');

                }

            }

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

    divTasks.style.display = 'none';

    divDays.innerHTML = '';
    createDays(today);
}


function nextTime() {

    today = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    showYearMonth(today.getFullYear(), today.getMonth());

    divTasks.style.display = 'none';

    divDays.innerHTML = '';
    createDays(today);

}


function showTasks(elem) {



    var goal = elem.target.innerHTML;

    var chekCorrectDay = 0;

    for (let key in tasks) {

        var dayTask = new Date(key.replace(/[.]/g, ',')).getDate();

        var dateNow = new Date();

        if (dayTask == goal&& today.getMonth() == dateNow.getMonth() && today.getFullYear() == dateNow.getFullYear() ) {

            divTasks.value = tasks[key].join('\n');

            divTasks.style.display = 'block';
            chekCorrectDay++;
        }

    }

    if (chekCorrectDay == 0) {

        divTasks.style.display = 'none';

    }


}

