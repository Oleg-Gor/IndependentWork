'use strict';

var trEl = document.querySelectorAll('tr');
var people = [];
var thEl = document.querySelectorAll('th');
var column = [];

for (let i = 1; i < thEl.length; i++) {

    thEl[i].id = i;
    thEl[i].dataset.value = 0;
    thEl[i].addEventListener('click', foundColumn);

}


for (let i = 1; i < trEl.length; i++) {

    var count = trEl[i].querySelectorAll('td');

    people.push([]);

    for (let j = 0; j < count.length; j++) {

        people[i - 1].push(count[j].innerHTML);

    }

}


function foundColumn(elem) {



    var arrSourse = [];

    elem.target.dataset.value++;

    // создать массив из значений строк выбранной кликом колонки

    for (let i = 0; i < people.length; i++) {

        arrSourse.push(people[i][elem.target.id]);

    }

    arrSourse.sort();
    /// в обратном порядке, если уже колонка уже сортировалась

    sortDisplay(elem);

    if (elem.target.dataset.value == 2) {

        arrSourse.reverse();
        elem.target.dataset.value = 0;




    }


    // заменить значение в массиве на порядковый номер строки

    /*   for (let key of arrSourse) {
  
          for (let j = 0; j < people.length; j++) {
  
              if (key == people[j][elem.target.id]) {
                  console.log(key, people[j][elem.target.id]);
                  key = people[j][0];
                  console.log(key, people[j][0]);
              }
  
          }
  
      } */

    for (let c = 0; c < arrSourse.length; c++) {

        for (let j = 0; j < people.length; j++) {

            if (arrSourse[c] == people[j][elem.target.id]) {

                arrSourse[c] = people[j][0] - 1;


            }

        }

    }

    console.log(arrSourse, people);

    //// перезаписать значения таблицы с учетом сортировки

    var c = 0;

    for (let i = 1; i < trEl.length; i++) {


        var count = trEl[i].querySelectorAll('td');


        for (let j = 1; j < count.length; j++) {


            count[j].innerHTML = people[arrSourse[c]][j];


        }
        c++;

    }






}


function sortDisplay(elem) {


    for (let i = 0; i < thEl.length; i++) {

        thEl[i].classList.remove('uarr');
        thEl[i].classList.remove('darr');

    }


    if (elem.target.dataset.value == 1) {


        elem.target.classList.add('uarr');


    }


    if (elem.target.dataset.value == 2) {


        elem.target.classList.add('darr');


    }



}

