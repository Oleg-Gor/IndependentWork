'use strict';

let gate = document.querySelector('img');
let ball = document.querySelector('div img');
let div = document.querySelector('div');





ball.addEventListener('mousedown', function (elem) {

    let element = elem.target;

    element.ondragstart = function () {

        return false;

    };


    let shiftX = elem.pageX - element.getBoundingClientRect().left;
    let shiftY = elem.pageY - element.getBoundingClientRect().top;



    element.style.position = 'absolute';
    document.body.append(element);

    let targetChange = null;

    catchObject(elem);

    element.addEventListener('mousemove', catchObject);
    element.addEventListener('mouseup', endMoveMouse);



    function catchObject(elem) {

        let X = elem.pageX;
        let Y = elem.pageY;

        element.style.left = X - shiftX + 'px';
        element.style.top = Y - shiftY + 'px';

        element.hidden = true;
        let target = document.elementFromPoint(X, Y);
        element.hidden = false;

        let goal = target.closest('.gate');

       // console.log(target, goal);

        if (targetChange != goal) {

            if (targetChange) {


                targetChange.style.background = '';
            }


        }

        targetChange = goal;

        if (targetChange) {

            targetChange.style.background = 'red';

        }


    };

    function endMoveMouse() {

        elem.target.removeEventListener('mousemove', catchObject);
        elem.target.removeEventListener('mouseup', endMoveMouse);

    }


});



