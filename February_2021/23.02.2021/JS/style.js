'use strict';


let textareaDiv = document.querySelector('.textarea');
let textarea = textareaDiv.querySelector('textarea');
let spans = textareaDiv.querySelectorAll('span');



textarea.addEventListener('blur', saveHistory());

//localStorage.clear();


(function () {

    for (let elem of spans) {

        elem.addEventListener('click', showHistory);

    }


})();


document.addEventListener('DOMContentLoaded', function () {

    let id = 'textarea-1';

    let arrHistory = getStorageAll(id);
    let arr = arrHistory[0];
    let i = arr.length;
    //console.log(arr,i);
    let obj = [arr, i];
    let json = JSON.stringify(obj);


    setStorage(id, json);


});


function saveHistory() {


    let arrHistory = [];
    let json;
    let i = 0;
    let obj;



    return function () {

        let id = this.parentElement.id;

        arrHistory = getStorageAll(id);
        let arr = arrHistory[0];
        arr.push(this.value);

        this.value = '';

        i = arr.length - 1;
        //console.log(arr,i);
        obj = [arr, i];
        json = JSON.stringify(obj);


        setStorage(id, json);

    };




}


function setStorage(key, value) {

    localStorage.setItem(key, value);

}


function getStorageAll(key) {

    let arr = localStorage.getItem(key);

    arr = JSON.parse(arr);

    // console.log(arr);

    if (arr != undefined) {

        return arr;

    } else return [[], 0];


}


function showHistory() {

    let id = this.parentElement.parentElement.id;

    let textarea = this.parentElement.parentElement.lastElementChild;

    let arrHistory = getStorageAll(id);

    let i = arrHistory[1];


    if (this.className == 'prev') {

        i--;

        if (i <= 0) { i = 0; };

        textarea.value = arrHistory[0][i];

        let obj = [arrHistory[0], i];

        let json = JSON.stringify(obj);

        setStorage(id, json);

    }


    if (this.className == 'next') {

        i++;

        if (i > arrHistory[0].length - 1) { i = arrHistory[0].length - 1; }

        textarea.value = arrHistory[0][i];

        let obj = [arrHistory[0], i];

        let json = JSON.stringify(obj);

        setStorage(id, json);

    }




}

//////////////new task


let task_3 = document.querySelector('#task-3');

let allElements = task_3.getElementsByTagName('*');



document.addEventListener('DOMContentLoaded', openStorage);

window.addEventListener('unload', saveStorage);


function saveStorage() {

    let obj = {};


    for (let i = 0; i < allElements.length; i++) {

        // console.log(allElements[i].type == 'option', allElements[i].type, allElements[i], allElements[i].tagName);


        if (allElements[i].type == 'radio' | allElements[i].type == 'checkbox') {

            obj[i] = allElements[i].checked;


        }

        if (allElements[i].tagName == 'OPTION') {

            obj[i] = allElements[i].selected;


        }


        if (allElements[i].type == 'text' | allElements[i].type == 'textarea') {

            obj[i] = allElements[i].value;


        }




    }

    // console.log(obj);
    let json = JSON.stringify(obj);

    localStorage.setItem('task_3', json);


}



function openStorage() {

    let json = localStorage.getItem('task_3');

    if (json.length > 0) {

        let obj = JSON.parse(json);



        for (let i = 0; i < allElements.length; i++) {




            if (allElements[i].type == 'radio' | allElements[i].type == 'checkbox') {

                allElements[i].checked = obj[i];


            }

            if (allElements[i].tagName == 'OPTION') {

                allElements[i].selected = obj[i];


            }


            if (allElements[i].type == 'text' | allElements[i].type == 'textarea') {

                allElements[i].value = obj[i];


            }




        }


    }



}




//////////////// create notebook

(function () {

    let writer = document.querySelector('.notebook');
    let textarea = writer.querySelector('textarea');
    let buttonAdd = writer.querySelector('button.addNotes');
    let buttonChange = writer.querySelector('button.changeNotes');
    let buttonDell = writer.querySelector('button.dellNotes');
    let ulNotes = writer.querySelector('ul');
    let arrNotes = [];

    //console.log(ulNotes);

    buttonAdd.addEventListener('click', saveNotes);
    buttonChange.addEventListener('click', saveNotes);
    buttonDell.addEventListener('click', dellNotes);

    window.addEventListener('unload', saveStorage);

    document.addEventListener('DOMContentLoaded', showStorage);


    function saveNotes(elem) {

        showButtons(elem);

        if (textarea.value != '') {

            if (textarea.hasAttribute('data-number')) {

                let notesNumber = textarea.dataset.number;

                arrNotes[notesNumber] = textarea.value;

                textarea.removeAttribute('data-number');


            } else {



                arrNotes.push(textarea.value);


                console.log(arrNotes, textarea.value);

            }
            textarea.value = '';
            createNotes(arrNotes);
        }
    }


    function createNotes(arrNotes) {

        ulNotes.innerHTML = '';

        for (let i = 0; i < arrNotes.length; i++) {

            let li = document.createElement('li');
            li.innerHTML = 'Note ' + (i + 1);
            li.setAttribute('data-number', i);

            li.addEventListener('click', editNote);

            ulNotes.appendChild(li);



        }


    }


    function editNote() {



        let notesNumber = this.dataset.number;

        textarea.value = arrNotes[notesNumber];

        textarea.setAttribute('data-number', notesNumber);

        changeButtons('edit');
        //  console.log();


    }



    function saveStorage() {

        let json = JSON.stringify(arrNotes);

        localStorage.setItem('notes', json);


    }


    function showStorage() {



        if (localStorage.getItem('notes') != 'null') {

            let jason = localStorage.getItem('notes');

            arrNotes = JSON.parse(jason);

            createNotes(arrNotes);
        }
    }


    function changeButtons(marker) {



        if (marker == 'edit') {

            let notesNumber = textarea.dataset.number;


            buttonAdd.style.display = 'none';
            buttonChange.style.display = 'inline-block';
            buttonDell.style.display = 'inline-block';

            buttonChange.innerHTML = 'change note ' + (+notesNumber + 1);
            buttonDell.innerHTML = 'dell note ' + (+notesNumber + 1);

        } else {

            buttonAdd.style.display = 'block';
            buttonChange.style.display = 'none';
            buttonDell.style.display = 'none';

        }

    }


    function dellNotes() {

        let notesNumber = textarea.dataset.number;

        arrNotes.splice(notesNumber, 1);

        textarea.value = '';

        changeButtons();

        createNotes(arrNotes);

    }



    function showButtons(elem) {


        if (elem.className == 'changeNotes' | elem.className == 'dellNotes') {

            changeButtons();

        }

    }

})();




//////////////// organizer


(function () {

    let organizer = document.querySelector('.organizer');
    let table = organizer.querySelector('table');
    let showYear = organizer.querySelector('.year');
    let showMonth = organizer.querySelector('.month');
    let sticksMonth = organizer.querySelector('.month-block');
    let writer = organizer.querySelector('.writer');
    let textarea = organizer.querySelector('textarea');
    let localStorageNotes = {};
    let buttonAddNotes = organizer.querySelector('.addNotes');

    let dayToday = new Date();
    let year = dayToday.getFullYear();
    let month = dayToday.getMonth();

    let yearNow = year;
    let monthNow = month;
    let dayNow = dayToday.getDate();
    let firstDay;
    let td;

    let dayNotes;


    // console.log(organizer);


    let dayName = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    sticksMonth.addEventListener('click', changeMonth);

    buttonAddNotes.addEventListener('click', saveNotes);


    (function firstView() {



        createTable(year, month);


    })();



    function createTable(year, month) {



        createHeaderTable();
        createBodyTable(month, year);
        showHeader(month, year);


        //  console.log(new Date(year, month, 1));
    }

    function createHeaderTable() {

        table.innerHTML = '';

        let tr = document.createElement('tr');

        for (let i = 0; i < dayName.length; i++) {

            let th = document.createElement('th');
            th.innerHTML = dayName[i];
            tr.appendChild(th);
        }

        table.appendChild(tr);

    }


    function createBodyTable(month, year) {

        let daysOfMonth = findCountOfDays(month, year);
        firstDay = new Date(year, month, 1).getDay();

        if (firstDay == 0) { firstDay = 7 };
        if (firstDay == 1) { firstDay = 8 };

        let countWeeks;

        /*         countWeeks = daysOfMonth + firstDay - 1;
                countWeeks = Math.ceil(countWeeks / 7); */

        countWeeks = 6;

        for (let i = 1; i <= countWeeks; i++) {
            let tr = document.createElement('tr');

            for (let j = 1; j <= 7; j++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }

            table.appendChild(tr);

        }


        addDate(daysOfMonth, firstDay);



        // console.log(monthName[month], daysOfMonth, firstDay, countWeeks);


    }

    function findCountOfDays(month, year) {

        let date = new Date(year, month + 1, 0);

        let dayMax = date.getDate();

        return dayMax;


    }

    function addDate(daysOfMonth, firstDay) {

        td = table.querySelectorAll('td');


        for (let i = 0; i < td.length; i++) {

            if (i >= firstDay - 1 & i <= daysOfMonth + firstDay - 2) {

                td[i].innerHTML = i - firstDay + 2;

                td[i].addEventListener('click', addNotes);

                td[i].classList.add('calendar');

            }

            if (year == yearNow & month == monthNow & td[i].innerHTML == dayNow) {

                td[i].classList.add('today');

            }

                 if (showNotes(td[i].innerHTML)){
     
                     td[i].classList.add('notesDay');
     
                 }

            // console.log(i, td[i].innerHTML, firstDay);

        }


    }



    function showHeader(month, year) {

        showYear.innerHTML = year;
        showMonth.innerHTML = monthName[month];


    }


    function changeMonth(elem) {

        if (elem.target.className == 'prewMonth') {

            let day = new Date(year, month - 1, 1);

            year = day.getFullYear();
            month = day.getMonth();

            createTable(year, month);

        }



        if (elem.target.className == 'nextMonth') {


            let day = new Date(year, month + 1, 1);

            year = day.getFullYear();
            month = day.getMonth();

            createTable(year, month);




        }


    }


    function addNotes() {

        writer.style.display = 'inline-block';

        let dayNotes = this.innerHTML;

        buttonAddNotes.innerHTML = 'add notes for ' + monthName[month] + ' ' + dayNotes;

        textarea.setAttribute('data-day', dayNotes);


        checkNotes(dayNotes);

    }



    function saveNotes() {


        dayNotes = textarea.getAttribute('data-day');

        localStorageNotes = localStorage.getItem('notesOrganizer');

        localStorageNotes = JSON.parse(localStorageNotes);

       // console.log(localStorageNotes);

        if (textarea.value.length > 0) {

            localStorageNotes[year + '-' + month + '-' + dayNotes] = textarea.value;

           // console.log(localStorageNotes);

    

            td[+dayNotes + firstDay -2].classList.add('notesDay');



            textarea.value = '';

        } else { 
            td[+dayNotes + firstDay -2].classList.remove('notesDay');

            delete localStorageNotes[year + '-' + month + '-' + dayNotes];
    
    }



        let json = JSON.stringify(localStorageNotes);

        localStorage.setItem('notesOrganizer', json);

    }


    function checkNotes(dayNotes) {

        let lockalStorage = localStorage.getItem('notesOrganizer');

        let obj = JSON.parse(lockalStorage);

        let date = year + '-' + month + '-' + dayNotes;


        if (obj[date]) {

            textarea.value = obj[date];


        } else { textarea.value = '' }


    }


    function showNotes(dayNotes) {

        let lockal = localStorage.getItem('notesOrganizer');

        let objdayNotes = JSON.parse(lockal);

        let date = year + '-' + month + '-' + dayNotes;


        if (objdayNotes[date]) {

            return true;

        }


    }


})();





