'use strict';





class Worker {
    constructor(name, surname, rate, days) {

        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;

    }

    getSalary() {

        return this._rate * this._days;
    }

    getName() {

        return this._name;

    }

    getSurname() {

        return this._surname;
    }

    getRate() {

        return this._rate;
    }

    getDays() {

        return this._days;
    }


    setDays(days) {

        this._days = days;

    }
    setRate(rate) {

        this._rate = rate;
    }
}


class MyString {

    reverse(str) {

        let arr = [];
        arr = str.split('');
        arr.reverse();
        str = arr.join('');

        return str;


    }

    ucFirst(str) {

        let arr = [];
        arr = str.split('');
        arr[0] = arr[0].toUpperCase();
        str = arr.join('');

        return str;

    }


    ucWords(str) {

        let arr = [];
        arr = str.split(' ');

        arr.forEach((element, index) => {

            arr[index] = this.ucFirst(element);

        });

        str = arr.join(' ');

        return str;

    }

}


class Validator {

    isEmail(str) {

        return /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(str);


    }

    isDomain(str) {

        return /^[a-zA-Z-.]+\.[a-z]{2,3}$/.test(str);


    }

    isDate(str) {

        return /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test(str);

    }


    isPhone(str) {

        return /^\+38\s\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/.test(str);

    }

}


class User {

    constructor(name, surname) {

        this.name = name;
        this.surname = surname;

    }

    getFullName() {

        return this.name + ' ' + this.surname;

    }

}


class Student extends User {

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;

    }

    getCourse() {

        let yearNow = new Date().getFullYear();
        return yearNow - this.year

    }

};



class Elem {

    constructor(IdSelector) {

        this.elem = document.querySelector(IdSelector);

    }

    html(value) {

        this.elem.innerHTML = value;
return this;

    }

    append(value) {

        this.elem.innerHTML = this.elem.innerHTML + ' ' + value;

        return this;
    }

    prepend(value) {

        this.elem.innerHTML = value + ' ' + this.elem.innerHTML;
        return this;

    }

    attr(attribute, value) {

         this.elem.setAttribute(attribute, value);
         return this;

    }



}




var elem = new Elem('#first');

/* elem.html('!'); //запишет в текст элемента '!'
elem.append('1'); //запишет в начало элемента '!'
elem.prepend('2'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www */

//Должны работать цепочки методов:
elem.html('hello').append('!').prepend('!');
elem.attr('class', 'www').attr('title', 'hello'); 

