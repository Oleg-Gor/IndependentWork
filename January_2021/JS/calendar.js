'use strict';

(function calendar() {

    var divCalendar = document.createElement('div');
    divCalendar.classList.add('calendar');

    document.body.insertAdjacentElement('afterbegin', divCalendar);

    var todayFirst = new Date();



    var buttonNext = document.createElement('input');
    buttonNext.type = 'button';
    buttonNext.value = 'next month';
    divCalendar.insertAdjacentElement('afterbegin', buttonNext);


    var buttonPrevious = document.createElement('input');
    buttonPrevious.type = 'button';
    buttonPrevious.value = 'previous month';
    divCalendar.insertAdjacentElement('afterbegin', buttonPrevious);



    buttonPrevious.addEventListener('click', showPreviousMonth);
    buttonNext.addEventListener('click', showNextMonth);



    var month = todayFirst.getMonth(); 
    var year = todayFirst.getFullYear();

    var arrMonth = [
        'Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август',
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];





    var pYear = document.createElement('p');

    pYear.innerHTML = todayFirst.getFullYear() + ' ' + showMonth(month);
    divCalendar.insertAdjacentElement('beforeend', pYear);


    var divCalendarMain = document.createElement('div');
    divCalendar.insertAdjacentElement('beforeend',divCalendarMain);




    createDay(todayFirst);



    function createYearMonth(todayFirst) {

pYear.innerHTML = '';


        pYear.innerHTML = todayFirst.getFullYear() + ' ' + showMonth(todayFirst.getMonth()); 


    }


    function showNextMonth() {

    todayFirst = new Date(todayFirst.getFullYear(), todayFirst.getMonth()+1,1);
    
    divCalendarMain.innerHTML = '';

    createDay(todayFirst);

    createYearMonth(todayFirst);


    }

    function showPreviousMonth() {


        todayFirst = new Date(todayFirst.getFullYear(), todayFirst.getMonth()-1,1);
    
        divCalendarMain.innerHTML = '';
    
        createDay(todayFirst);
    
        createYearMonth(todayFirst);


    }


    function showMonth(month) {

        for (let i = 0; i < arrMonth.length; i++) {

            if (i == month) {

                return arrMonth[i];

            }


        }


    }


    function createDay(today) {

        var todayDay = today.getDate();
        var todayMonth = today.getMonth();
        var todayYear = today.getFullYear();



        var lastDay = new Date(todayYear, todayMonth + 1, 0);
 
  

        var p;

        for (let i = 1; i <= lastDay.getDate(); i++) {
            p = document.createElement('p');
            p.classList.add('day');
            p.innerHTML = i;

             if (today.getMonth() == month && i == todayDay && today.getFullYear() == year ) {


                p.classList.add('today');

            } 


            divCalendarMain.insertAdjacentElement('beforeend', p);

        }





    }



})();
