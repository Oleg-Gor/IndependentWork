'use strict';

let game = document.querySelector('.game');


let gamers = ['gamer1', 'gamer2'];
let startGamer = 0;

let rows = 15;
let columns = 26;

let arr = [];
//let count = 1;







createTable(game);


let winner = findArrOfWinner();

function findArrOfWinner() {

    return arr.concat(countRows(), diagonalFirst(arr), diagonalSecond());
}


//console.log(winner);



function createTable(element) {

    let result = [];

    for (let i = 0; i < rows; i++) {

        let tr = document.createElement('tr');

        let arr = [];

        for (let j = 0; j < columns; j++) {

            let td = document.createElement('td');

            // td.innerHTML = count;

            td.classList.add('www');
            tr.appendChild(td);

            arr.push(td);

            td.addEventListener('click', chahgeGemer);

            // count++;

        }


        game.appendChild(tr);

        result.push(arr);

    }

    arr = result;

}


function chahgeGemer() {


//console.log(startGamer);

    this.classList.add(gamers[startGamer]);

 

    findWinner(gamers[startGamer]);

    this.removeEventListener('click', chahgeGemer);

    startGamer++;

    // console.log(startGamer);

    if (startGamer == gamers.length) {

        startGamer = 0;

    }

}


function countRows() {
    let result = [];

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < columns; j++) {

            if (result[j] == undefined) {

                result[j] = [];

            }

            result[j][i] = arr[i][j];

        }

    }
    return result;

}



function diagonalFirst(arr) {


    let result = [];


    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < columns; j++) {

            if (result[i + j] == undefined) {

                result[i + j] = [];


            }

            result[i + j].push(arr[i][j]);


        }


    }

    return result;

}



function diagonalSecond() {

    let arr = changeTable();

    let result = diagonalFirst(arr);

    return result;
}



function changeTable() {

    let result = [];

    for (let i = 0; i < rows; i++) {

        result[i] = [];

        for (let j = columns - 1; j >= 0; j--) {

            result[i].push(arr[i][j]);

        }

    }

    return result;

}


function findWinner(elem) {


    for (let i = 0; i < winner.length; i++) {

        for (let j = 4; j < winner[i].length; j++) {

           // console.log(winner[i][j].className);

            if (winner[i][j].classList.contains(elem) &&
                winner[i][j - 1].classList.contains(elem) &&
                winner[i][j - 2].classList.contains(elem) &&
                winner[i][j - 3].classList.contains(elem) &&
                winner[i][j - 4].classList.contains(elem)) {

                alert('winner ' + elem);

                newGame();

            }



        }
    }


}


function newGame() {

   // console.log(startGamer);

    game.innerHTML = '';

    winner = [];

    createTable(game);

    winner = findArrOfWinner();

    startGamer = -1;


   // console.log(startGamer);

}
