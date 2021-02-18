'use strict';


//Задача. Создайте переменную str и присвойте ей значение 'abcde'. 
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'. 




let str = "absde";
let mass = [0, 1, 4];

for (var i = 0; i <= str.length - 1; i++) {

    for (var j = 0; j <= mass.length - 1; j++) {

        if (mass[j] == i) {

            console.log(str[i]);

        } else continue;



    }



}
