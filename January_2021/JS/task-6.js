'use stcict';

/*Переберите циклом все его узлы, получите их текст, выведите текст на экран, 
а рядом с каждый текстом - тип соответствующего узла.   */

var div = document.querySelector('div');



func(div);


function func(sibling) {

    sibling.childNodes.forEach(function (elem) {


        //console.log(elem.childNodes.length);

     if (elem.childNodes.length == 0) {


            if (elem.nodeType == 3 || 8) {

                console.log(elem.textContent);

            } else {
                console.log(elem.innerHtml);

            }




        } else func(elem); 
    });


}
