'use strict';



var body = document.body;

var frame = createHeader('div', 'frame', 'beforeend', body, '', '');
var headOfFrame = createHeader('div', 'headOfFrame', 'beforeend', frame, '', '');
var footerOfFrame = createHeader('div', 'footOfFrame', 'beforeend', frame, '', '');
var arrName = ['JavaScript', 'Jquery', 'DOM', 'CSS'];
var arrDifinition = [[
    'JavaScript — прототипно-ориентированный сценарный язык программирования. Является реализацией языка ECMAScript.',
    'JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.'
], [
    'jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX. Сейчас разработка jQuery ведётся командой jQuery во главе с Джоном Резигом.'
], [
    'DOM — это не зависящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.'
],
[
    'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'
]];

headOfFrame.addEventListener('click', showFrame);
headOfFrame.addEventListener('click', showDiscription);





for (let i = 0; i < arrName.length; i++) {

    createHeader('div', 'head', 'beforeend', headOfFrame, arrName[i], i + 1);


}

var frames = headOfFrame.querySelectorAll('div');
frames[0].classList.add('active');

function showDiscription(elem) {

    footerOfFrame.innerHTML = '';
    var id = elem.target.id - 1;
    createHeader('div', 'foot', 'beforeend', footerOfFrame, arrDifinition[id], '');

}


createHeader('div', 'foot', 'beforeend', footerOfFrame, arrDifinition[0], '');




function showFrame(elem) {

    var frames = headOfFrame.querySelectorAll('div');



    for (let key of frames) {

        if (key.classList.contains('active')) {

            key.classList.remove('active');

        }

    }

    elem.target.classList.add('active');


}




function createHeader(tag, classHead, metod, placeToPosess, inner, i) {


    if (Array.isArray(inner)) {

        for (let i = 0; i < inner.length; i++) {

            createHeader('p', 0, 'beforeend', footerOfFrame, inner[i], '');


        }

    } else {

        var nameOfDiv = document.createElement(tag);

        if (classHead) {

            nameOfDiv.classList.add(classHead);
        }


        if (i) {

            nameOfDiv.id = i;
        }

        nameOfDiv.innerHTML = inner;

        placeToPosess.insertAdjacentElement(metod, nameOfDiv);

        return nameOfDiv;
    }
}





var newframe = createHeader('div', 'newframe', 'beforeend', body, '', '');


for (let i = 0; i < arrName.length; i++) {

    createHeader('div', 'newhead', 'beforeend', newframe, arrName[i], i + 10);

    var div = createHeader('div', 'answer', 'beforeend', newframe, '', i + 100);
    div.style.display = 'none';

    createHeaderNew('div', 'answer', 'beforeend', div, arrDifinition[i], '');

}

for (let i = 10; i<=13; i++){

var click = document.getElementById(i);
click.addEventListener('click', showAnswer);


}


function showAnswer (elem){

for (let i = 100; i<=103; i++) {



    let answer = document.getElementById(i);

    answer.style.display = 'none';
  answer.style.height = 0;

    if (Number(elem.target.id)+90 == i){

        answer.style.display = 'block'; 
       answer.style.height = answer.scrollHeight + 'px';
    }

}



}


function createHeaderNew(tag, classHead, metod, placeToPosess, inner, i) {


    if (Array.isArray(inner)) {

        for (let i = 0; i < inner.length; i++) {

            createHeaderNew('p', 'answer', 'beforeend', placeToPosess, inner[i], '');

        }

    } else {

        var nameOfDiv = document.createElement(tag);


        if (classHead) {

            nameOfDiv.classList.add(classHead);
        }



        if (i) {

            nameOfDiv.id = i;
        }


        nameOfDiv.innerHTML = inner;



        placeToPosess.insertAdjacentElement(metod, nameOfDiv);

        return nameOfDiv;
    }

}

