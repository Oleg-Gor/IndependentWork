'use strict';


var elem = document.getElementById('elem');

function func() {
	alert(this.value);
}

//func.call(elem);


function func2(surname, name) {
	alert(this.value + ', ' + surname + ' ' + name);

}
//func2.call(elem, 'Ivanov', 'Ivan');
//func2.apply(elem, ['Ivanov', 'Ivan']);

func2 = func2.bind(elem);

func2('Иванов', 'Иван'); 
func2('Петров', 'Петр');