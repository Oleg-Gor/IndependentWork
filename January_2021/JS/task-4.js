var func = function() {
	var counter = 0;
	//Эта функция запишется в func:
	return function() {
		counter++;
		return counter;
	}
}();


console.log(func());
