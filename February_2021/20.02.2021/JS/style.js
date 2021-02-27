'use strict';

//JSON

/* Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя". Показать решение.


Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON. Показать решение. */




//nameC = 'name', value = 'Oleg2'



let input = document.querySelector('input[type=text]');
let inputDay = document.querySelector('input[type=date]');
let button = document.querySelector('input[type=button]');
let p = document.querySelector('#birthday');
let textArea = document.querySelector('textarea');
let inputHistory = document.querySelectorAll('#history input');
let infoVisiter = document.querySelector('#infoVisiter');

//console.log(inputHistory);


let pCounter = document.querySelector('#counter');
pCounter.innerHTML = 50;


for (let elem of inputHistory) {

  elem.addEventListener('blur', saveHistory());

}


button.addEventListener('click', setCookies);

window.onbeforeunload = saveForms;

//document.addEventListener('unload', fillForms);



document.addEventListener('DOMContentLoaded', function () {

  let day = new Date(getCokies('birthday'));

  let nameCounter = getCokies('nameCounter');

  input.value = getCokies('nameBeforeEnd');
  inputDay.value = getCokies('birthdayBeforeEnd');

  showChecked();
  counter();
  Area();
  createUsers();

  let days, hours, minutes, seconds;

  firstTimer(day, nameCounter);

  setInterval(function () {

    let dayCek = day.getTime() - new Date().getTime();

    days = Math.floor(dayCek / (1000 * 60 * 60 * 24));
    dayCek = dayCek - days * 1000 * 60 * 60 * 24;

    hours = Math.floor(dayCek / 1000 / 60 / 60);
    dayCek = dayCek - hours * (1000 * 60 * 60);

    minutes = Math.floor((dayCek) / 1000 / 60);
    dayCek = dayCek - minutes * 1000 * 60;

    seconds = Math.floor((dayCek) / 1000);


    p.innerHTML = nameCounter + ' your birthday after: ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds;

  }, 1000);



});




function firstTimer(day, nameCounter) {

  let days, hours, minutes, seconds;

  let dayCek = day.getTime() - new Date().getTime();

  days = Math.floor(dayCek / (1000 * 60 * 60 * 24));
  dayCek = dayCek - days * 1000 * 60 * 60 * 24;

  hours = Math.floor(dayCek / 1000 / 60 / 60);
  dayCek = dayCek - hours * (1000 * 60 * 60);

  minutes = Math.floor((dayCek) / 1000 / 60);
  dayCek = dayCek - minutes * 1000 * 60;

  seconds = Math.floor((dayCek) / 1000);


  p.innerHTML = nameCounter + ' your birthday after: ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds;




}



function setCookies() {



  let nameC = input.value;
  let valueBirthday = inputDay.value;


  document.cookie = 'nameCounter=' + nameC;
  document.cookie = 'birthday =' + valueBirthday;


};


function getCokies(nameC) {
  let nameOfCokies, valueOfCokies;

  if (document.cookie.length > 0) {
    var arrCokies = document.cookie.split(';');

    for (let elem of arrCokies) {



      nameOfCokies = elem.slice(0, elem.indexOf('='));
      nameOfCokies = nameOfCokies.replace(/^\s|\s$/, '');

      if (nameOfCokies == nameC) {

        valueOfCokies = elem.slice(elem.indexOf('=') + 1);
        valueOfCokies.replace(/^\s|\s$/, '');

      }


    }
    //console.log(valueOfCokies);

    return valueOfCokies;

  } else alert('Cookies don\'t found');


}


function delCokies(namec = 'name') {

  namec = prompt('enter the name of cookies');

  document.cookie = namec + '=; max-age = -1;';


}


function saveForms() {



  let nameC = input.value;
  let valueBirthday = inputDay.value;
  let inputChecked = fillChecked();
  let counter = pCounter.innerHTML;
  let height = textArea.style.height;
  let width = textArea.style.width;


  document.cookie = 'nameBeforeEnd=' + nameC;
  document.cookie = 'birthdayBeforeEnd=' + valueBirthday;
  document.cookie = 'inputChecked=' + inputChecked;
  document.cookie = 'counter=' + counter;
  document.cookie = 'textAreaHeight=' + height;
  document.cookie = 'textAreaWidth=' + width;


}



function fillChecked() {

  let inputChecked = document.querySelectorAll('input[type=checkbox]');
  let arrCheked = [];

  for (let elem of inputChecked) {

    if (elem.checked) {

      arrCheked.push(elem.name);

    }

  }

  return arrCheked.join(',');

}


function showChecked() {

  let arrCheked = getCokies('inputChecked');

  arrCheked = arrCheked.split(',');


  let inputChecked = document.querySelectorAll('input[type=checkbox]');

  for (let elem of arrCheked) {

    for (let elem2 of inputChecked) {

      if (elem2.name == elem) {

        elem2.checked = true;

      }

    }


  }


  // console.log(arrCheked);

}



function counter() {


  pCounter.innerHTML = getCokies('counter');

  if (pCounter.innerHTML <= 0) {
    pCounter.innerHTML = 20;

  }

  window.timerId = setInterval(function () {

    pCounter.innerHTML--;

    if (pCounter.innerHTML == 0) {

      clearInterval(window.timerId);

    }

  }, 1000);


}


function Area() {

  textArea.style.cssText = 'height:' + getCokies('textAreaHeight') + '; width:' + getCokies('textAreaWidth');

}


let mapHistory = new Map();

function saveHistory(elem) {



  let arrHistory = [];
  let i = -1;


  return function (elem) {

    showArrows(this);

    i++;

    arrHistory.push(this.value);

    mapHistory.set(this, { arrHistory, i });

   // console.log(mapHistory);
  };
}



let keyOfHistory = document.querySelectorAll('#history span');

for (let elem of keyOfHistory) {

  elem.addEventListener('click', showHistory);

}

function showHistory() {

console.log(mapHistory);

  let inputHistory = this.parentElement.lastElementChild;

  let objHistory = mapHistory.get(inputHistory);
  let arrHistory = objHistory['arrHistory'];
  let i = objHistory['i'];

  if (this.className == 'history-prev') {


    i--;

    if (i <= 0) {
      i = 0;

    }
    inputHistory.value = arrHistory[i];

    mapHistory.set(inputHistory, { arrHistory, i });

    //console.log(arrHistory, i);


  }

  if (this.className == 'history-next') {

    i++;

    if (i >= arrHistory.length) {
      i = arrHistory.length - 1;

    }
    inputHistory.value = arrHistory[i];

    mapHistory.set(inputHistory, { arrHistory, i });

    console.log(arrHistory, i);


  }



}


function showArrows(elem) {

  let parent = elem.parentElement;

  let spans = parent.querySelectorAll('span');

  for (let elem of spans) {

    elem.style.display = 'inline-block';

  }

 // console.log(parent, 1);

}


function createUsers() {

  let user = getCokies('userAnonimus');

  if (user == undefined) {

    document.cookie = 'userAnonimus=' + Math.round(Math.random() * 100000);
    document.cookie = 'userAnonimusFirstVisit=' + new Date();
    document.cookie = 'userAnonimusCountVisits=' + '1';


  } else {
    let count = getCokies('userAnonimusCountVisits');
    count++;
    document.cookie = 'userAnonimusCountVisits=' + count;

    document.cookie = 'userAnonimusLastVisit=' + new Date();

  }

  showInfoOfVisiter();

}


function showInfoOfVisiter(){
  let nameUser;

  if (getCokies('nameCounter')) { nameUser = getCokies('nameCounter') } else { nameUser = '' };

  infoVisiter.innerHTML = nameUser +
    ' your first visit was ' + getCokies('userAnonimusFirstVisit') +
       '.<br> You have been visit this site ' + getCokies('userAnonimusCountVisits') + ' times' + 
           '.<br> Your last visit was ' + getCokies('userAnonimusLastVisit');



};