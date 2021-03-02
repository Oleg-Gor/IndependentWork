'use strict';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.lineTo(150,100);
ctx.fill();


ctx.strokeRect(5,5,10,10);

ctx.fillRect(15,15,10,10);