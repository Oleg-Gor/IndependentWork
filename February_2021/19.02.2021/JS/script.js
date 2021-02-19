'use strict';


/* Дана строка 'aba aca aea abba adca abea'. 
Напишите регулярку, которая найдет строки abba adca abea по шаблону: буква 'a', 2 любых символа, буква 'a'.  */

/* Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca. */


/* Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. Показать решение.

Дана строка 'aa aba abba abbba abca abea'. 
Напишите регулярку, которая найдет строки aa, aba, abba, abbba по шаблону: 
буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'. Показать решение.

Дана строка 'aa aba abba abbba abca abea'. 
Напишите регулярку, которая найдет строки aa, aba по шаблону: 
буква 'a', буква 'b' один раз или ниодного, буква 'a'. Показать решение.

Дана строка 'aa aba abba abbba abca abea'. 
Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea. Показать решение.

Дана строка 'ab abab abab abababab abea'. 
Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз. Показать решение.
На экранировку

Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, 
не захватив остальные. Показать решение.

Дана строка '2+3 223 2223'. 
Напишите регулярку, которая найдет строку 2+3, не захватив остальные. Показать решение.

Дана строка '23 2+3 2++3 2+++3 345 567'. 
Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные 
(+ может быть любое количество). Показать решение.

Дана строка '23 2+3 2++3 2+++3 445 677'. 
Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные. Показать решение.

Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. 
Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные. Показать решение.
На жадность

Дана строка 'aba accca azzza wwwwa'. 
Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', 
и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме a). Показать решение. */



let str1 =  'ahb acb aeb aeeb adcb axeb';
let str2 = 'aba aca aea abba adca abea';
let str3 = 'aba aca aea abba adca abea';
let str4 = 'aa aba abba abbba abca abea';
let str5 = 'ab abab abab abababab abea';
let str6 = 'a.a aba aea';
let str7 = '2+3 223 2223';
let str8 = '23 2+3 2++3 2+++3 345 567';
let str9 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
let str10 = 'aba accca azzza wwwwa';

//document.write(str1.replace(/a.b/g,'!'));
//document.write(str2.replace(/a..a/g,'!'));
//document.write(str3.replace(/ab.a/g,'!'));
//document.write(str4.replace(/ab*a/g,'!'));
//document.write(str4.replace(/ab?a/g,'!'));
//document.write(str5.replace(/(ab)+/g,'!'));
//document.write(str6.replace(/a\.a/,'!'));
//document.write(str7.replace(/2\+3/,'!'));
//document.write(str8.replace(/2\++3/g,'!'));
//document.write(str8.replace(/2\+*3/g,'!'));
//document.write(str9.replace(/\*\q+\+ /g,'! '))
//document.write(str10.replace(/a.*?a/g,' -!- '));
//document.write('aaaxx bxx bbxx exx'.replace(/(a|b+)xx/g, '!')); //вернет '! ! ! exx');


/* 

Дана строка 'aa aba abba abbba abbbba abbbbba'. 
Напишите регулярку, которая найдет строки abba, abbba, abbbba и только их. Показать решение.

Дана строка 'aa aba abba abbba abbbba abbbbba'. 
Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается менее 3-х раз (включительно). Показать решение.

Дана строка 'aa aba abba abbba abbbba abbbbba'. 
Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается более 4-х раз (включительно). Показать решение. */



let str11 = 'aa aba abba abbba abbbba abbbbba';

//document.write(str11.replace(/ab{2,4}a/g,'!'));
//document.write(str11.replace(/ab{1,2}a/g,'!'));
//document.write(str11.replace(/ab{4,}a/g,'!'));





/* Дана строка 'a1a a2a a3a a4a a5a aba aca'. 
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', 
а между ними одна цифра. Показать решение.

Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. 
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', 
а между ними любое количество цифр. Показать решение.

Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'. 
Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', 
а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa'). Показать решение.

Дана строка 'avb a1b a2b a3b a4b a5b abb acb'. 
Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a' и 'b', а между ними - не число. Показать решение.

Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'. 
Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра. Показать решение.

Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'. 
Напишите регулярку, которая заменит все пробелы на '!'. Показать решение. */


let str12 = 'a1a a2a a3a a4a a5a aba aca';


//document.write(str12.replace(/a\da/g,'!'));
//document.write('a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d+a/g,'!'));
//document.write('aa a1a a22a a333a a4444a a55555a aba aca'.replace(/a\d*a/g,'!'));
//document.write('avb a1b a2b a3b a4b a5b abb acb'.replace(/a\Db/g,'!'));
//document.write('ave a#b a2b a$b a4b a5b a-b acb'.replace(/a\Wb/g,'!'));
//document.write('ave a#a a2a a$a a4a a5a a-a aca'.replace(/\s/g,'!'));



/* Дана строка 'aba aea aca aza axa'. 
Напишите регулярку, которая найдет строки aba, aea, axa, не затронув остальных. Показать решение.

Дана строка 'aba aea aca aza axa a.a a+a a*a'. 
Напишите регулярку, которая найдет строки aba, a.a, a+a, a*a, не затронув остальных. Показать решение.

Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', 
а между ними - цифра от 3-х до 7-ми. Показать решение.

Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a', а между ними - буква от a до g. Показать решение.

Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a', а между ними - буква от a до f и от j до z. Показать решение.

Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a', а между ними - буква от a до f и от A до Z. Показать решение.

Дана строка 'aba aea aca aza axa a-a a#a'. 
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', 
а между ними - не 'e' и не 'x'. Показать решение.

Дана строка 'wйw wяw wёw wqw'. 
Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'w', а между ними - буква кириллицы. Показать решение. */



//document.write('aba aea aca aza axa'.replace(/a[bec]a/g,'!'));
//document.write('aba aea aca aza axa a.a a+a a*a'.replace(/a[.+*b]a/g,'!'));
//document.write('aba aea aca a5a axa a.a a+a a*a'.replace(/a[3-7]a/g,'!'));
//document.write('aba aea aca a5a axa a.a a+a a*a'.replace(/a[a-g]a/g,'!'));
//document.write('aba aea aca a5a axa a.a a+a ala'.replace(/a[a-fj-z]a/g,'!'));
//document.write('aba aea aca aza axa a-a a#a'.replace(/a[^ex\s]a/g,' ! '));
//document.write('wйw wяw wёw wqw'.replace(/w[а-яё]w/g,' ! '));


/* 
Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. 
Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных. Показать решение.

Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. 
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', 
а между ними - маленькие и большие латинские буквы, не затронув остальных. Показать решение.

Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. 
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', 
а между ними - маленькие латинские буквы и цифры, не затронув остальных. Показать решение.

Дана строка 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'. 
Напишите регулярку, которая найдет все слова по шаблону: 
любая кириллическая буква любое количество раз. Показать решение. */


//document.write('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z]+a/g,'!'));
//document.write('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-zA-Z]+a/g,'!'));
//document.write('aAXa aeffa aGha aza ax23a a3sSa'.replace(/a[a-z\d]+a/g,'!'));
//document.write('ааа ббб ёёё ззз йй1й ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'.replace(/[а-яА-ЯёЁ]+/g,' - ! - '));



/* 
Дана строка 'aaa aaa aaa'. 
Напишите регулярку, которая заменит первое 'aaa' на '!'. Показать решение.

Дана строка 'aaa aaa aaa'. 
Напишите регулярку, которая заменит последнее 'aaa' на '!'. Показать решение.
На '|'

Дана строка 'aeeea aeea aea axa axxa axxxa'. 
Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз 
или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз. Показать решение.

Дана строка 'aeeea aeea aea axa axxa axxxa'. 
Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', 
а между ними - или буква 'e' два раза или буква 'x' любое количество раз. Показать решение.
На обратный слеш \

Дана строка 'a\a abc'. 
Напишите регулярку, которая заменит строку 'a\a' на '!'. Показать решение.

Дана строка 'a\a a\\a a\\\a'. 
Напишите регулярку, которая заменит строку 'a\\\a' на '!'. Показать решение.
На экранировку посложнее

Дана строка 'bbb /aaa\ bbb /ccc\'. 
Напишите регулярку, которая найдет содержимое всех конструкций /...\ и заменит их на '!'. Показать решение. */



//document.write('aaa aaa aaa'.replace(/^aaa/g,'!'));

//document.write('aaa aaa aaa'.replace(/aaa$/g,'!'));

//document.write('aeea aeea aea axa axxa axxxa'.replace(/ae+a|ax+a/g,'!'));

//document.write('aeea aeea aea axa axxa axxxa'.replace(/ae{2}a|ax+a/g,'!'));

//document.write( 'a\\a abc'.replace(/a\\a/g,'!'));

//document.write( 'a\\a a\\\\a a\\\\\\a'.replace(/a\\{3}a/g,'!'));



//console.log(/[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}/.test('#$%my-mail@mail.ru&@$'));




/* 
Дана строка 'aaa@bbb eee7@kkk'. 
Напишите регулярку, которая найдет строки по шаблону: любое количество букв и цифр, 
символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, 
что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa. Показать решение.

Дана строка вида 'a1b2c3'. Напишите регулярку, которая найдет все цифры 
и удвоит их количество таким образом: 'a11b22c33' 
(то есть рядом с каждой цифрой напишет такую же). Показать решение.

 */


 //document.write('aaa@bbb eee7@kkk'.replace(/([a-z\d]+)@([a-z\d]+)/g,'$2@$1'));

  //document.write('a1b2c3'.replace(/(\d)/g,'$1$1'));



  

/* С помощью метода test определите, что переданная строка является емэйлом. 
Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, 
mail@mail.com, mail@mail.by, mail@yandex.ru. Показать решение.

Дана строка с текстом, в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива. Показать решение.

С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com. Показать решение.

С помощью test определите, что переданная строка является доменом. Примеры доменов: http://site.ru, http://site.com. Показать решение.

С помощью test определите, что переданная строка является доменом вида http://site.ru. Протокол может быть как http, так и https. Показать решение.

С помощью test определите, что переданная строка начинается с http или с https. Показать решение.

С помощью test определите, что переданная строка заканчивается расширением txt, html или php. Показать решение.

С помощью test определите, что переданная строка заканчивается расширением jpg или jpeg. Показать решение.

С помощью test узнайте является ли строка числом, длиной до 12 цифр. Показать решение.

Дана строка с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки. Показать решение. */


let arr = ['mymail@mail.ru', 'my.mail@mail.ru', 'my-mail@mail.ru', 'my_mail@mail.ru', 'mail@mail.com', 'mail@mail.by', 'mail@yandex.ru'];
let dom = ['site.ru', 'site.com', 'my-site.com'];
let dom2 = ['http://site.ru', 'https://site.com' ];

let str = ['sdfsf.txt','sdfsf.jpg','sdfsf.html','sdfsf.php','sdfsf.jpeg' ];



/* for (let elem of arr){

console.log(elem +' ' +/^[0-9a-z._-]+@[a-z]+\.[a-z]{2,3}$/.test(elem));

} */
/* let arr2 = arr.join(' ');

let result = arr2.match(/[0-9a-z._-]+@[a-z]+\.[a-z]{2,3}/g);

console.log(result); */

/*  for (let elem of dom2){

console.log(elem +' '+/^https?:\/\/[a-z-]+\.[a-z]{2,3}$/.test(elem));


}  */


/* for (let elem of str){

console.log(elem + ' '+/jpe?g$/.test(elem));

} */


//console.log(strNumb +' '+ /^[0-9]{1,12}$/.test(strNumb), strNumb.length);

/* let strNumb = '1 2 sdf 3 sdf 12 sdf 2';

let result = strNumb.match(/(\d+)/g); 


let summ = 0;

console.log(result);

for (let elem of result){

summ += +elem;

}
 */



/* 
С помощью replace замените в строке домены вида http://site.ru, http://site.com на <a href="http://site.ru">site.ru</a>. Показать решение.

С помощью replace замените все повторяющиеся пробелы на один. Показать решение.

Найдите и удалите все комментарии CSS. Показать решение.

Найдите и удалите все комментарии HTML. Показать решение. */


/* let arrDom = "http://site.ru aa aaa http://site.com";


console.log(arrDom.replace(/http:\/\/([a-z]+)\.([a-z]{2,3})/g,'<a href="http://$1.$2">$1.$2</a>')); */


/* let strGap = 'ssdfsdf   sdfss  sdf  sdf sd sdf sdf sdf ';

console.log(strGap.replace(/\s+/g,' '));
 */

