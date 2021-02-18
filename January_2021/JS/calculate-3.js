'use strict';



var inputTask = document.querySelector('#madeTasks input');
var div = document.getElementById('madeTasks');
var tasks = document.getElementById('tasks');

inputTask.addEventListener('change', enterTask);
tasks.addEventListener('click', defineNode);
tasks.addEventListener('dblclick', correctTask);
tasks.addEventListener('change', changeTask);


function enterTask() {


    var divTaskCommon = document.createElement('div');
    divTaskCommon.classList.add('divClass');
    tasks.insertAdjacentElement("afterbegin", divTaskCommon);


    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    divTaskCommon.insertAdjacentElement('afterbegin', checkbox);



    var divTask = document.createElement('div');
    divTask.classList.add('classTask');
    divTask.innerHTML = inputTask.value;
    divTaskCommon.insertAdjacentElement("beforeend", divTask);


    var delTask = document.createElement('div');
    delTask.classList.add('classDelTask');
    delTask.innerHTML = ' X ';
    divTaskCommon.insertAdjacentElement("beforeend", delTask);

    inputTask.value = '';



}


function defineNode(elem) {

    var clickNote = elem.target;

    if (clickNote.nodeName == 'INPUT') {

        croseTask(clickNote);

    } else if (clickNote.className == 'classDelTask') {


        dellTask(clickNote);


    }





}


function croseTask(elem) {

    if (elem.checked) {

        elem.nextElementSibling.style.textDecoration = 'line-through';
    } else elem.nextElementSibling.style.textDecoration = 'none';


}

function dellTask(elem) {

    elem.parentElement.remove();

}


function correctTask(elem) {

    //debugger;
    var clickNote = elem.target;

    if (clickNote.className == 'classTask') {

        var createInput = document.createElement('input');
        createInput.type = 'text';
        createInput.classList.add('classCreateInput');
        createInput.value = elem.target.innerHTML;

        clickNote.insertAdjacentElement('beforebegin', createInput);

        clickNote.style.display = 'none';


        createInput.addEventListener('mouseout', changeTask);

    }



}

function changeTask(elem) {

    var clickNote = elem.target;

    if (clickNote.className == 'classCreateInput') {


        clickNote.nextElementSibling.innerHTML = clickNote.value;

        if (clickNote.nextElementSibling.innerHTML == '') {

            dellTask(clickNote);

        }


        clickNote.nextElementSibling.style.display = 'inline-block';

        clickNote.remove();
    }

}





////// countries

var arrCountry = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"];
var arrCountryNewList = [];
var countrySearch = document.querySelector('#countries input');
var countryDiv = document.getElementById('showCountrySearch');



countrySearch.addEventListener('keyup', showCountry);
countryDiv.addEventListener('click', shiftCountry );
countryDiv.addEventListener('mousemove',showFocus);


function showCountry(elem) {

    var country = elem.target.value;

    createCountryList(country.toLowerCase());


}


function createCountryList(country) {
    arrCountryNewList.length = 0;


    for (let i = 0; i < arrCountry.length; i++) {



        if (arrCountry[i].toLocaleLowerCase().indexOf(country, 0) == 0) {



            arrCountryNewList.unshift(arrCountry[i]);


        }



    }

    showCountryDom(arrCountryNewList);

}


function showCountryDom(arrCountryNewList) {

    clearDiv ();


if (arrCountryNewList.length < arrCountry.length ) {

    for (let i = 0; i < arrCountryNewList.length; i++) {

        

        countryDiv.classList.add('divClassCountry');

        var div = document.createElement('div');

        div.innerHTML = arrCountryNewList[i];

        countryDiv.insertAdjacentElement('afterbegin', div);


    }

}


}

function clearDiv (){

    countryDiv.innerHTML = '';
    countryDiv.classList.remove('divClassCountry');



}

function shiftCountry (elem) {

var chouseCountry = elem.target;    

countrySearch.value = chouseCountry.innerHTML;

clearDiv();



}

function showFocus(elem){

var cursorActive = elem.target;

cursorActive.style.cursor = 'pointer';



}