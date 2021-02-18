'use strict';

(function () {

    const task_1 = document.querySelector('.task-1').getElementsByClassName('cls');
    const inputSumm = document.querySelector('.task-1 .summ');


    document.querySelector('.task-1 input[type="button"]').addEventListener('click', findSumm);


    function findSumm() {

        let summ = 0;

        for (let i = 0; i < 3; i++) {

            summ += Number(task_1[i].value);

        }

        inputSumm.value = summ;

    }


})();




(function () {
    let inputTask_2 = document.querySelectorAll('.task-2 input[type="text"]');

    document.querySelector('.task-2 input[type="button"]').addEventListener('click', findSumm);


    function findSumm() {
        let summ = 0;

        inputTask_2.forEach(function (elem) {

            summ += +elem.value;


        });

        document.getElementById('result').innerHTML = 'summ = ' + summ;


    }

})();



(function () {

    let inputTask_3 = document.querySelector('.task-3 input');

    inputTask_3.addEventListener('blur', function () {

        let arr = inputTask_3.value.split('');

        let summ = 0;


        for (let i = 0; i < arr.length; i++) {

            summ += Number(arr[i]);

        }


        inputTask_3.value = summ;



    });



})();



(function () {

    let inputTask_4 = document.querySelector('.task-4 input');

    inputTask_4.addEventListener('blur', findAvarage);



    function findAvarage() {

        let arrValue = inputTask_4.value.split(',');

        let summ = 0;

        for (let i = 0; i < arrValue.length; i++) {

            summ += +arrValue[i];

        }
        inputTask_4.value = summ / arrValue.length;



    }







})();





(function () {

    let inputTask_5 = document.querySelector('.task-5 input');

    inputTask_5.addEventListener('blur', showFullName);




    function showFullName() {

        let arrFullName = inputTask_5.value.split(' ');

        createInputFullName(arrFullName);


    }




    function createInputFullName(arrFullName) {

        checkInputs();


        for (let i = arrFullName.length - 1; i >= 0; i--) {

            let input = document.createElement('input');

            input.classList.add('task-5-input');



            input.value = arrFullName[i];

            inputTask_5.insertAdjacentElement("afterend", input);


        }



    }



    function checkInputs() {

        let countInput = document.getElementsByClassName('task-5-input');


        for (let i = countInput.length - 1; i >= 0; i--) {


            countInput[i].remove();

        }

    }








})();



(function () {

    var inputTask_6 = document.querySelector('.task-6 input');

    inputTask_6.addEventListener('blur', breakFullName);


    function breakFullName() {

        let arrFullName = inputTask_6.value.split(' ');

        changeLaters(arrFullName);


    }

    function changeLaters(arrFullName) {

        for (let i = 0; i < arrFullName.length; i++) {

            var arrWord = arrFullName[i].split('');
            arrWord[0] = arrWord[0].toUpperCase();
            arrFullName[i] = arrWord.join('');

        }

        addFullNameToInput(arrFullName);

    }

    function addFullNameToInput(arrFullName) {

        inputTask_6.value = arrFullName.join(' ');


    }





})();



(function () {

    let inputTask_7 = document.querySelector('.task-7 input');
    let p = document.querySelector('.task-7 p');

    inputTask_7.addEventListener('blur', countWords);


    function countWords() {

        let arrWords = inputTask_7.value.split(' ');
        let num = 0;

        for (let i = 0; i < arrWords.length; i++) {

            if (arrWords[i] != '') {

                num++;

            }

        }


        p.innerHTML = 'workds ' + num;

    }



})();


(function () {

    var inputTask_8 = document.querySelector('.task-8 input');
    var p = document.querySelector('.task-8 p');


    inputTask_8.onblur = findLongWord;


    function findLongWord() {

        var arr = inputTask_8.value.split(' ');
        let count = 0;

        for (let i = 0; i < arr.length; i++) {

            if (count < arr[i].length) {

                count = arr[i].length;

            }


        }

        p.innerHTML = count;
    }




})();




(function () {

    var inputTask_9 = document.querySelector('.task-9 input');

    inputTask_9.onblur = changeFormat;

    function changeFormat() {

        var arrInput = inputTask_9.value.split('.');

        arrInput.reverse();

        var full = arrInput.join('-');

        inputTask_9.value = full;


    }




})();




(function () {

    var inputTask_10 = document.querySelector('.task-10 input[type="text"]');
    var p = document.querySelector('.task-10 p');

    var button = document.querySelector('.task-10 input[type = "button"]');
    button.addEventListener('click', findYears);

    function findYears() {

        let dateYear = new Date().getFullYear();
        let years = 0;

        years = dateYear - inputTask_10.value;

        p.innerHTML = 'your age ' + years;

    }


})();



(function () {

    let inputTask_11 = document.querySelector('.task-11 input');
    let dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    inputTask_11.addEventListener('blur', findDayWeed);


    function findDayWeed() {

        let arrDate = inputTask_11.value.split('.');
        arrDate.reverse();
        arrDate = arrDate.join(',');

        let date = new Date(arrDate);

        let p = document.querySelector('.task-11 p');

        p.innerHTML = 'день недели ' + dayWeak[date.getDay()];

    }



})();



(function () {

    let inputTask_12 = document.querySelector('.task-12 input[type="text"]');
    let button = document.querySelector('.task-12 input[type="button"]');

    button.addEventListener('click', checkWord);

    function checkWord() {

        let word = inputTask_12.value.toLowerCase();


        let arrWord = word.split('');
        arrWord.reverse();

        let newWord = arrWord.join('');

        let p = document.querySelector('.task-12 p');

        if (word == newWord) {

            p.innerHTML = 'mirrow word';

        } else p.innerHTML = 'not mirrow word';




    }



})();



(function () {

    let inputTask_13 = document.querySelector('.task-13 input');

    inputTask_13.addEventListener('blur', findNomber);

    function findNomber() {

        let arrInput = inputTask_13.value.split('');

        for (let i = 0; i < arrInput.length; i++) {

            if (arrInput[i] == 3) {

                alert('we have 3 in this input');
                return;

            }


        }
        alert("we don't have 3 in this input");
    }


})();


(function () {

    let p = document.querySelectorAll('.task-14 p');
    let button = document.querySelector('.task-14 input');

    button.addEventListener('click', recordNumberOfParagraf);

    function recordNumberOfParagraf() {

        for (let i = 0; i < p.length; i++) {

            p[i].innerHTML = p[i].innerHTML + ' ' + (i + 1);

        }

    }

})();



(function () {

    let p = document.querySelectorAll('.task-15 p');
    let button = document.querySelector('.task-15 input[type="button"]');
    let input = document.querySelector('.task-15 input[type="text"]');

    button.addEventListener('click', showNumbers);


    function showNumbers() {

        let arr = [];

        for (let i = 0; i < p.length; i++) {

            arr.push(p[i].innerHTML);



        }

        arr.sort(function (a, b) {
            return a - b
        });

        let str = arr.join(',');

        input.value = str;

    };




})();



(function () {

    let a = document.querySelectorAll('.task-16 a');


    for (let i = 0; i < a.length; i++) {

        a[i].innerHTML = a[i].innerHTML + ' ' + a[i].href + '<br>';


    }



})();



(function () {

    let a = document.querySelectorAll('.task-17 a');

    for (let i = 0; i < a.length; i++) {

        if (a[i].href.indexOf('http://') == 0) {

            a[i].innerHTML = a[i].innerHTML + ' > ';

        }

    }

})();


(function () {

    let div = document.querySelector('.task-18');


    div.addEventListener('click', showSquare);


    function showSquare(elem) {

        let p = elem.target;

        p.innerHTML = Math.pow(p.innerHTML, 2);


    }




})();



(function () {




    let div = document.querySelector('.task-19');

    div.addEventListener('click', increasHeight);


    function increasHeight(elem) {

        let img = elem.target;


        img.height = img.height * 2;


    }




})();



(function () {




    let img = document.querySelectorAll('.task-20 img');


    for (let i = 0; i < img.length; i++) {

        img[i].addEventListener('click', increasHeight)

    }


    function increasHeight() {


        this.height = this.height * 2;
        this.removeEventListener('click', increasHeight);
        this.addEventListener('click', decreaseHeight);


    }


    function decreaseHeight() {


        this.height = this.height / 2;
        this.addEventListener('click', increasHeight);
        this.removeEventListener('click', decreaseHeight);


    }



})();



(function () {
    var div = document.querySelector('.task-21');
    var img = document.getElementById('task');

    div.addEventListener('click', changeHeight)

    function changeHeight(elem) {



        img.src = elem.target.src;

    }



})();


(function () {

    let buttons = document.querySelectorAll('.task-22 input[type="button"]');
    let input = document.querySelector('.task-22 input[type="text"]');


    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', changeSumm);


    }

    function changeSumm() {



        input.value = Number(this.value) + Number(input.value);

        if (input.value < 0) {

            input.value = 0;

        }


    }





})();



(function () {

    changeColorOfInput('.task-23');

    function changeColorOfInput(taskClass) {

        let taskInput = document.querySelector(taskClass + ' input');


        taskInput.addEventListener('blur', checTheNumber);

        function checTheNumber() {

            if (this.value > 0 && this.value <= 100) {

                this.style.background = 'red';

            } else this.style.background = 'green';


        }


    }



})();


(function () {

    saveTextToInput('.task-24', 'input');

    function saveTextToInput(classTask, tagTask) {

        let taskInput = document.querySelector(classTask + ' ' + tagTask);

        document.documentElement.addEventListener('mouseup', copyText);


        function copyText() {


            taskInput.value = window.getSelection().toString();



        }




    }




})();



(function () {

    findMaxNumber('.task-25');


    function findMaxNumber(elem) {

        let div = document.querySelector(elem);
        let arrP = div.querySelectorAll('p');
        let button = div.querySelector('input');

        button.addEventListener('click', findMax);


        function findMax() {

            var max = 0;

            for (let i = 1; i < arrP.length; i++) {


                if (Number(arrP[i - 1].innerHTML) < Number(arrP[i].innerHTML)) {

                    max = i;

                }

            }


            arrP[max].style.background = 'red';
        }

    }




})();




(function () {

    countClicks('.task-26');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let arrP = div.querySelectorAll('p');
        let input = div.querySelector('input');
        let count = 0;

        saveEvents();


        function findClicks() {

            count++;

            input.value = count;


        }


        function saveEvents() {

            for (let i = 0; i < arrP.length; i++) {

                arrP[i].addEventListener('click', findClicks);


            }

        }

    }




})();



(function () {

    countClicks('.task-27');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let body = document.body;
        let input = div.querySelector('input');
        let id;

        body.addEventListener('click', countSeconds);

        div.querySelector('input[type="button"]').addEventListener('click', stop);




        function countSeconds() {

            id = setInterval(count, 1000);


        }

        function count() {

            input.value = Number(input.value) + 1;
            body.removeEventListener('click', countSeconds);

        }


        function stop() {

            clearInterval(id);


        }

    }




})();






(function () {

    countClicks('.task-28');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let inputText = div.querySelector('input[type="text"]')
        let inputButton = div.querySelector('input[type="button"]');

        let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';


        let letter;

        inputButton.addEventListener('click', createWords);


        function createWords() {

            let arrString = [];

            for (let i = 1; i <= 8; i++) {

                letter = Math.round(Math.random() * (symbols.length - 1));
                arrString.push(symbols[letter]);

            }

            let str = arrString.join('');

            inputText.value = str;

        }





    }



})();



(function () {

    countClicks('.task-29');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let inputTextStr = div.querySelector('input[type="text"].str')
        let inputTextNumber = div.querySelector('input[type="text"].number')
        let inputButton = div.querySelector('input[type="button"]');

        let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm';


        let letter;

        inputButton.addEventListener('click', createWords);


        function createWords() {

            let arrString = [];

            for (let i = 1; i <= inputTextNumber.value; i++) {

                letter = Math.round(Math.random() * (symbols.length - 1));
                arrString.push(symbols[letter]);

            }

            let str = arrString.join('');

            inputTextStr.value = str;

        }





    }



})();




(function () {

    countClicks('.task-31');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let inputNumber = div.querySelector('input[type="text"].number')
        let inputCount = div.querySelector('input[type="text"].timeCounter')
        let id;

        inputNumber.addEventListener('blur', timer);


        function timer() {

            inputCount.value = inputNumber.value;

            id = setInterval(function () {

                inputCount.value = Number(inputCount.value) - 1;

                if (inputCount.value == 0) {

                    clearInterval(id);

                }


            }, 1000);


        }


    }



})();




(function () {

    countClicks('.task-32');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let p = div.querySelector('p');

        changeColor();

        function changeColor() {
            let count = 0;
            let id1;
            let id2 = setInterval(function () {

                p.style.background = 'green';

            }, 2000)

            setTimeout(function () {

                id1 = setInterval(function () {

                    p.style.background = 'red';

                }, 2000)

            }, 1000);

            let id3 = setInterval(function () {
                count++;
                if (count == 10) {

                    p.style.background = '';
                    clearInterval(id1);
                    clearInterval(id2);
                    clearInterval(id3);

                }

            }, 1000);
        }



    }



})();



(function () {

    countClicks('.task-33');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let p = div.querySelector('p');
        let arrColor = ['red', 'green', 'blue'];

        changeColor();

        function changeColor() {

            let i = 0;

            setInterval(function () {

                p.style.background = arrColor[i];

                i++;


                if (i == arrColor.length) {

                    i = 0;


                }



            }, 1000);



        }


    }



})();




(function () {

    countClicks('.task-34');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let p = div.querySelector('p');
        let a = div.querySelector('a');
        let numer = ['один', 'два', 'три'];
        let i = 0;

        p.innerHTML = numer[i];
        i++;


        a.addEventListener('click', changeView);

        function changeView(elem) {

            elem.preventDefault();

            p.innerHTML = numer[i];

            i++;

            if (i >= numer.length) {

                i = 0;

            }


        }

    }



})();



(function () {

    countClicks('.task-35');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let p = div.querySelectorAll('p');
        let button = div.querySelector('input');
        let i = 0;
        let num = 0;


        button.addEventListener('click', changeCount);


        function changeCount() {

            setInterval(function () {

                if (i == p.length) {

                    i = 0;

                }
                num++;
                p[i].innerHTML = num;

                i++;

            }, 1000)


        }

    }



})();




(function () {

    countClicks('.task-36');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let input = div.querySelector('input');
        let a = div.querySelector('a');


        a.addEventListener('click', changeCheckBox);

        function changeCheckBox(elem) {

            elem.preventDefault();

            if (input.checked) {
                input.checked = false;
            } else {
                input.checked = true;
            }
        }

    }

})();




(function () {

    countClicks('.task-37');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let input = div.querySelectorAll('input');
        let a = div.querySelector('a');

        a.addEventListener('click', changeCheckBox);


        function changeCheckBox(elem) {

            elem.preventDefault();

            for (let i = 0; i < input.length; i++) {

                if (input[i].checked == false) {

                    input[i].checked = true;

                } else {
                    input[i].checked = false
                }

            }



        }


    }

})();






(function () {

    countClicks('.task-38');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let input = div.querySelectorAll('input');
        let p = div.querySelector('p');

        for (let i = 0; i < input.length; i++) {

            input[i].addEventListener('click', showAnswer)

        }


        function showAnswer() {

            p.innerHTML = this.value;

        }


    }

})();



(function () {

    countClicks('.task-39');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let input = div.querySelectorAll('input');
        let p = div.querySelector('p');

        for (let i = 0; i < input.length; i++) {

            input[i].addEventListener('click', showAnswer)

        }


        function showAnswer() {


            p.innerHTML = '';

            for (let i = 0; i < input.length; i++) {

                if (input[i].checked == true) {

                    p.innerHTML = p.innerHTML + ' ' + input[i].value;

                }

            }

        }

    }

})();




(function () {

    countClicks('.task-40');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let inputCheckBox = div.querySelector('input[type="checkbox"]');
        let inputText = div.querySelector('input[type="text"]');

        inputCheckBox.addEventListener('click', checkAnswer);

        checkAnswer();

        function checkAnswer() {

            if (inputCheckBox.checked == true) {

                inputText.style.display = 'block';

            } else {
                inputText.style.display = 'none'
            };


        }


    }

})();


(function () {

    countClicks('.task-42');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let inputText = div.querySelector('input[type="text"]');
        let li = div.querySelectorAll('li');

        inputText.addEventListener('blur', showNumber);


        function showNumber() {
            let number = Number(this.value - 1);

            for (let i = 0; i < li.length; i++) {

                if (i == number) {

                    li[i].style.background = 'red';


                } else {
                    li[i].style.background = 'white';

                }


            }



        }


    }

})();




(function () {

    countClicks('.task-43');


    function countClicks(elem) {

        let div = document.querySelector(elem);
        let inputText = div.querySelectorAll('input[type="checkbox"]');
        let p = div.querySelector('p');

        showNumber();

        for (let i = 0; i < inputText.length; i++) {

            inputText[i].addEventListener('click', showNumber);

        }


        function showNumber() {
            let classN = '';

            for (let i = 0; i < inputText.length; i++) {

                if (inputText[i].checked) {

                    classN = inputText[i].value + " " + classN;

                }


            }

            p.style.cssText = classN;


        }


    }

})();



(function () {

    disappearBlock('.task-44');


    function disappearBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let buttons = block.querySelectorAll('button');


        bindEvent();

        function bindEvent() {

            for (let i = 0; i < buttons.length; i++) {

                buttons[i].addEventListener('click', disappear)

            }


        }



        function disappear() {

            console.log(this.parentElement.display);

            this.parentElement.style.display = 'none';


        }


    }





})();




(function () {

    disappearBlock('.task-45');


    function disappearBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let button = block.querySelector('button');
        let input = block.querySelector('input');
        let ul = block.querySelector('ul');

        button.addEventListener('click', fullInput);


        function fullInput() {

            let arr = input.value.split(',');

            for (let i = 0; i < arr.length; i++) {

                let li = document.createElement('li');
                li.innerHTML = arr[i];
                ul.appendChild(li);


            }


        }


    }





})();



(function () {

    disappearBlock('.task-46');


    function disappearBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let input = block.querySelector('input');
        let p = block.querySelector('p');

        input.addEventListener('keyup', fullInput);


        function fullInput(elem) {

            if (elem.keyCode == 13) {

                if (p.innerHTML == '') {
                    b
                    p.innerHTML = input.value;


                } else {

                    p.innerHTML = p.innerHTML + ', ' + input.value;

                }

                input.value = '';



            }



        }



    }





})();



(function () {

    cutBlock('.task-47');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let divs = block.querySelectorAll('div');
        let button = block.querySelector('button');

        button.addEventListener('click', changeBlock);


        function changeBlock() {

            for (let i = 0; i < divs.length; i++) {



                divs[i].innerHTML = divs[i].innerHTML.slice(0, 10) + ' ...';

            }


        }


    }





})();



(function () {

    cutBlock('.task-47');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let divs = block.querySelectorAll('div');
        let button = block.querySelector('button');

        button.addEventListener('click', changeBlock);


        function changeBlock() {

            for (let i = 0; i < divs.length; i++) {



                divs[i].innerHTML = divs[i].innerHTML.slice(0, 10) + ' ...';

            }


        }


    }





})();




(function () {

    cutBlock('.task-48');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let td = block.querySelectorAll('td');
        let button = block.querySelector('button');


        button.addEventListener('click', findMax);


        function findMax() {
            let max = td[0];

            for (let i = 0; i < td.length; i++) {

                if (Number(td[i].innerHTML) > max.innerHTML) {

                    max = td[i];

                }

            }

            max.style.color = 'red';
        }

    }



})();






(function () {

    cutBlock('.task-49');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let table = block.querySelector('table');
        let input = block.querySelector('input');
        let button = block.querySelector('button');


        button.addEventListener('click', fullInput);


        function fullInput() {

            let arrNumbers = [];

            for (let row of table.rows) {

                for (let cells of row.cells) {

                    arrNumbers.push(cells.innerHTML);

                }


            }
            arrNumbers.sort(function (a, b) {
                return a - b
            });

            input.value = arrNumbers.join(', ');


        }

    }



})();





(function () {

    cutBlock('.task-50');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let table = block.querySelector('table');
        let button = block.querySelector('button');


        button.addEventListener('click', fullSumm);



        function fullSumm() {

            let row = table.rows;

            for (let i = 0; i < row.length - 1; i++) {

                for (let j = 0; j < row[i].cells.length; j++) {

                    if (row[row.length - 1].cells[j].innerHTML == '') {

                        row[row.length - 1].cells[j].innerHTML = 0;

                    }

                    row[row.length - 1].cells[j].innerHTML = Number(row[i].cells[j].innerHTML) + Number(row[row.length - 1].cells[j].innerHTML);


                }



            }




        }



    }






})();






(function () {

    cutBlock('.task-51');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let table = block.querySelector('table');
        let buttonGo = document.getElementById('go');
        let buttonClear = document.getElementById('clear');
        let p = block.querySelector('p');

        let arrDedicated = table.getElementsByClassName('showTd');

        buttonGo.addEventListener('click', findSumm);
        buttonClear.addEventListener('click', clearSumm);


        addEvent();

        function addEvent() {

            for (let row of table.rows) {

                for (let cell of row.cells) {

                    cell.addEventListener('click', function () {

                        cell.classList.add('showTd');



                    })


                }


            }


        }





        function findSumm() {


            let summ = 0;

            for (let i = 0; i < arrDedicated.length; i++) {

                summ += Number(arrDedicated[i].innerHTML);

            }

            p.innerHTML = summ;

        }


        function clearSumm() {


            for (let j = arrDedicated.length - 1; j >= 0; j--) {

                arrDedicated[j].classList.remove('showTd');

            }

            p.innerHTML = '';

        }

    }






})();






(function () {

    cutBlock('.task-52');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let table = block.querySelector('table');
        let td = table.querySelectorAll('td');

        table.addEventListener('click', editTd);


        function editTd(elem) {
            let td = elem.target;

            if (td.tagName == 'TD') {

                let input = document.createElement('input');
                input.value = td.innerHTML;
                td.innerHTML = '';
                td.appendChild(input);

                let button = document.createElement('button');
                button.innerHTML = 'save edit';
                td.appendChild(button);
                button.addEventListener('click', saveEdit);

            }

        }


        function saveEdit() {

            let td = this.parentNode;
            td.innerHTML = td.firstElementChild.value;


        }


    }


})();





(function () {

    cutBlock('.task-53');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let p = block.querySelectorAll('p');



        for (let i = 0; i < p.length; i++) {

            p[i].nextElementSibling.style.display = 'none';

            p[i].addEventListener('click', showList);
        }


        function showList() {

            if (this.nextElementSibling.style.display == 'none') {

                this.nextElementSibling.style.display = 'block';

            } else this.nextElementSibling.style.display = 'none';



        }

    }

})();




(function () {

    cutBlock('.task-54');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);

        let country = document.getElementById('country');
        let countryChoise = country.querySelectorAll('option');

        let cities = document.getElementById('cities');


        let p = block.querySelector('p');


        var cityArr = {
            'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
            'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
            'sar': ['Кейптаун', 'Йоханесбург'],
        }

        findCity();


        for (let i = 0; i < countryChoise.length; i++) {

            countryChoise[i].addEventListener('click', findCity);

        }


        function findCity() {

            let countryValue;


            if (this == undefined) {

                for (let i = 0; i < countryChoise.length; i++) {

                    if (countryChoise[i].selected == true) {

                        countryValue = countryChoise[i].value;

                    }

                }

            } else {
                countryValue = this.value;
            }

            cities.innerHTML = '';

            for (let i = 0; i < cityArr[countryValue].length; i++) {



                let option = document.createElement('option');

                option.innerHTML = cityArr[countryValue][i];

                option.addEventListener('click', addEvents);

                cities.appendChild(option);

            }

            addEvents();
        }



        function addEvents() {

            for (let i = 0; i < countryChoise.length; i++) {


                if (countryChoise[i].selected == true) {

                    p.innerHTML = countryChoise[i].innerHTML;

                }

            }

            let cityChoise = cities.querySelectorAll('option');


            for (let i = 0; i < cityChoise.length; i++) {


                if (cityChoise[i].selected == true) {

                    p.innerHTML = p.innerHTML + ' ' + cityChoise[i].innerHTML;

                }

            }

        }

    }

})();






(function () {

    cutBlock('.task-55');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);

        let year = document.getElementById('years');
        let years = year.querySelectorAll('option');

        let month = document.getElementById('months');

        let days = document.getElementById('days');

        let arrMonth = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'];

        let day = new Date();
        let yearNow = day.getFullYear();
        let monthNow = day.getMonth();
        let dayNow = day.getDate();

        chooseYear();
        createMonths();

        function createMonths() {

            for (let i = 0; i < arrMonth.length; i++) {
                let option = document.createElement('option');
                option.innerHTML = arrMonth[i];

                if (i == monthNow) {

                    option.selected = 'true';

                }

                month.appendChild(option);

            }


        }

        createDay();


        addEvent();

        function addEvent() {

            block.addEventListener('click', createDay);



        }



        function createDay() {

            let dayCount = new Date(findYear(), findMonth() + 1, 0).getDate();

            days.innerHTML = '';

            for (let i = 1; i <= dayCount; i++) {

                let option = document.createElement('option');

                option.innerHTML = i;


                if (i == dayNow && findYear() == yearNow && findMonth() == monthNow) {


                    option.selected = 'true';

                }


                days.appendChild(option);



            }



        }


        function chooseYear() {

            for (let i = 0; i < years.length; i++) {

                if (years[i].innerHTML == yearNow) {

                    years[i].selected = true;

                }

            }

        }

        function findYear() {

            for (let i = 0; i < years.length; i++) {

                if (years[i].selected == true) {

                    return year[i].innerHTML;

                }

            }

        }

        function findMonth() {

            let months = month.querySelectorAll('option');

            for (let i = 0; i < months.length; i++) {

                if (months[i].selected == true) {

                    return i;

                }

            }



        }



    }

})();







(function () {

    cutBlock('.task-56');


    function cutBlock(taskBlock) {

        let block = document.querySelector(taskBlock);
        let first_curr = document.getElementById('first_curr');
        let next_curr = document.getElementById('next_curr');

        let input = block.querySelector('input');



        let result = document.getElementById('result1');

        var rates = { 'rur': 1.00, 'usd': 58.50, 'eur': 62.15 };

        block.addEventListener('change', countPrise);


        function countPrise() {

            if (chooseFirst(first_curr) != chooseFirst(next_curr)) {

                let summ = +input.value;


                result.innerHTML = rates[chooseFirst(first_curr)] * summ / rates[chooseFirst(next_curr)];

                result.innerHTML = Math.round(result.innerHTML * 100) / 100;

            } else { alert('выберите другую валюту') }

        }


        function chooseFirst(curr) {


            let options = curr.querySelectorAll('option');

            for (let i = 0; i < options.length; i++) {

                if (options[i].selected == true) {



                    return options[i].value;

                }


            }


        }




    }

})();




(function () {

    cutBlock('.task-57');


    function cutBlock(taskBlock) {
        let block = document.querySelector(taskBlock);
        let inputs = block.querySelectorAll('input');
        let button = block.querySelector('input[type="button"]');
        let table = document.createElement('table');
        block.appendChild(table);


        button.addEventListener('click', createTable);

        function createTable() {


            let width = inputs[0].value;
            let height = inputs[1].value;

            table = block.querySelector('table');

            table.innerHTML = '';


            for (let i = 1; i <= height; i++) {



                let tr = document.createElement('tr');


                for (let j = 1; j <= width; j++) {

                    let td = document.createElement('td');
                    td.innerHTML = j;
                    tr.appendChild(td);

                }
                table.appendChild(tr);

            }



        }




    }



})();






(function () {

    cutBlock('.task-58');


    function cutBlock(taskBlock) {
        let block = document.querySelector(taskBlock);
        let li = block.querySelectorAll('.list li');
        let button = block.querySelector('.button');


        button.addEventListener('click', sort);

        function sort() {

            let arrSort = [];

            for (let i = 0; i < li.length; i++) {

                arrSort.push(li[i].innerHTML);


            }

            arrSort.sort(function (a, b) {

                return a - b;
            })


            for (let i = 0; i < li.length; i++) {

                li[i].innerHTML = arrSort[i];


            }

        }




    }



})();






(function () {

    cutBlock('.task-59');


    function cutBlock(taskBlock) {
        let block = document.querySelector(taskBlock);
        let a = block.querySelectorAll('a');
        let p = block.querySelector('p');

        for (let i = 0; i < a.length; i++) {


            a[i].addEventListener('click', changeColor);

        }



        function changeColor(elem) {

            elem.preventDefault();

            for (let i = 0; i < a.length; i++) {


                a[i].style.background = '';

            }


            elem.target.style.background = 'red';

            p.innerHTML = elem.target.href;

        }


    }



}());