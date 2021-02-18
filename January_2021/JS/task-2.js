'use strict';


// Задача. Напишите скрипт, который считает количество секунд в часе, месяце, году.

let time = {
    date: new Date(),
    seconds: function () { return this.date.getSeconds(); },
    minutes: function () { return this.date.getMinutes(); },
    day: function () { return this.date.getDate(); },
    month: function () { return this.date.getMonth() + 1; },
    year: function () { return this.date.getFullYear(); },
    newSeconds: 0,
    newMinutes: 0,
    newDay: 1,
    newMonth: 1,
    newYear: 2019,

};


function sec () {
    var sum;
sum = (this.seconds()-this.newSeconds) + (this.minutes() - this.newMinutes)*60 + (this.day() - this.newDay)*24*60; 

return sum;
}




console.log(sec.call(time));

/*




console.log(time.date);
console.log(time.seconds());
console.log(time.minutes());
console.log(time.day());
console.log(time.month());
console.log(time.year()); */

/* let date = new Date(),
 today = date.getDate();

let month = prompt('enter a day', today );

console.log (date);
 */

