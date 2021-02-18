'use strict';

var ul = document.querySelectorAll('div > ul');
var buttonNextQuestion = document.getElementById('nextQuestion');
var buttomResult = document.getElementById('result');
var arrCorrectAnswers = [11, 23, 33];
var arrCheckAnswers = [];
var countClick = 0;
var numberOfQuestions = 0;
var checkCheckBox = [];

click();
checkButton();


buttonNextQuestion.addEventListener('click', changeQuestion);
buttomResult.addEventListener('click', checkResult);





function checkResult() {



    countClick++;
    numberOfQuestions++;

    click();


    checkAnswers();

    showResult();

    countClick = 0;
    checkButton();

    arrCheckAnswers.length = 0;
    click();

}




function changeQuestion() {


    countClick++;

    click();
    checkButton();
    checkAnswers();

}


function click() {

    for (let i = 0; i < ul.length; i++) {

        if (countClick == i) {

            ul[i].style.display = 'block';

            numberOfQuestions = i - 1;


        } else {

            ul[i].style.display = 'none';

        }


    }




}


function checkButton() {

    if (countClick < ul.length - 1) {

        buttonNextQuestion.style.display = 'block';
        buttomResult.style.display = 'none';

    } else {
        buttonNextQuestion.style.display = 'none';
        buttomResult.style.display = 'block';
    }



}



function checkAnswers() {


    checkCheckBox = ul[numberOfQuestions].querySelectorAll('input');


    for (let i = 0; i < checkCheckBox.length; i++) {

        if (checkCheckBox[i].checked) {

            arrCheckAnswers.push(checkCheckBox[i].name + checkCheckBox[i].dataset.correct);

        }

    }





}


function showResult() {
    var countCorrect = 0;
    var countMistaces = 0;

    arrCheckAnswers.forEach(function (elem) {


        for (let i = 0; i < arrCorrectAnswers.length; i++) {

            if (elem == arrCorrectAnswers[i]) {

                countCorrect++;


            }

        }



    });

countMistaces = arrCheckAnswers.length - countCorrect;



  alert('correct answers ' + countCorrect + ' from ' +arrCorrectAnswers.length +' \n' + 'mistakes '+countMistaces  );

}




//// next task


var task = document.getElementById('task');
var taskRadio = document.querySelectorAll('#task input[type="radio"]');

var buttonTask = document.getElementById('buttonTask');
var arrTask = {};
var inputText = document.querySelectorAll(('#task input[type="text"]'));
var buttonTaskAgain = document.getElementById('buttonTaskAgain');

buttonTask.addEventListener('click', checkAnswersTask);
buttonTaskAgain.addEventListener('click', clearSurvay);

buttonTaskAgain.style.display = 'none';

createArr();

function createArr() {

    for (let i = 0; i < taskRadio.length; i++) {

        arrTask[taskRadio[i].name] = {};


    }
    //console.log(arrTask);

    for (let i = 0; i < taskRadio.length; i++) {



        arrTask[taskRadio[i].name][taskRadio[i].id] = 0;
        arrTask[taskRadio[i].name].countPeople = 0;



    }


    //console.log(arrTask);
}

function checkAnswersTask() {


    for (let i = 0; i < inputText.length; i++) {



        if (inputText[i].value.length > 0) {



            //console.log(inputText[i].name);

            for (let j = 0; j < taskRadio.length; j++) {


                if (taskRadio[j].checked) {



                    if (taskRadio[j].name == inputText[i].name) {

                        taskRadio[j].checked = false;

                    }

                }



            }







        }



    }



    for (let i = 0; i < taskRadio.length; i++) {


        if (taskRadio[i].checked) {

            arrTask[taskRadio[i].name][taskRadio[i].id]++;


            arrTask[taskRadio[i].name].countPeople++;

        }


    }



    //console.log(arrTask);

    countAnswers();



}



function countAnswers() {


    for (var key in arrTask) {


        showProsentAnswers(key, arrTask[key]['countPeople']);


    }




}



function showProsentAnswers(key, countPeople) {

    var position;

    for (var key2 in arrTask[key]) {

        if (document.getElementById(key2) != null && arrTask[key][key2] > 0) {

            position = document.getElementById(key2).nextElementSibling;


            position.innerHTML = position.innerHTML + ' <span>(' + Math.round((+arrTask[key][key2]) / countPeople * 100) + '%' + ')</span>';



        }


    }

    changeButton();
    clearRadio();

}


function changeButton() {

    if (buttonTaskAgain.style.display == 'none') {

        buttonTaskAgain.style.display = 'block';
        buttonTask.style.display = 'none';


    } else {

        buttonTaskAgain.style.display = 'none';
        buttonTask.style.display = 'block';
    }


}


function clearSurvay() {

    var taskRadioLabel = document.querySelectorAll('#task span');
    //console.log(taskRadioLabel);

    changeButton();

    clearRadio();

    clearInputText();

    for (let i = 0; i < taskRadioLabel.length; i++) {

        taskRadioLabel[i].parentNode.removeChild(taskRadioLabel[i]);


    }


}

function clearRadio() {

    for (let i = 0; i < taskRadio.length; i++) {

        if (taskRadio[i].style.display == 'none') {


            taskRadio[i].style.display = 'inline-block';

        } else { taskRadio[i].style.display = 'none'};

        if (taskRadio[i].checked) {


            taskRadio[i].checked = false;

        }




    }



}


function clearInputText() {


    for (let i = 0; i < inputText.length; i++) {

        inputText[i].value = '';


    }


}



