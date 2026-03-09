function draw(){

const canvas = document.getElementById("canvas");

if(canvas.getContext){

const ctx = canvas.getContext("2d");


/* RECTANGULO */

ctx.fillStyle="#27ae60";
ctx.fillRect(30,260,160,100);

ctx.lineWidth=3;
ctx.strokeStyle="#145a32";
ctx.strokeRect(30,260,160,100);



/* TRIANGULO */

ctx.beginPath();

ctx.moveTo(250,260);
ctx.lineTo(200,150);
ctx.lineTo(300,150);

ctx.closePath();

ctx.fillStyle="#3498db";
ctx.fill();

ctx.strokeStyle="#1f618d";
ctx.stroke();



/* HAPPY FACE (entre triangulo y rectangulo) */

ctx.beginPath();
ctx.arc(150,200,35,0,Math.PI*2); // cara

ctx.moveTo(140,190);
ctx.arc(135,190,4,0,Math.PI*2); // ojo izquierdo

ctx.moveTo(170,190);
ctx.arc(165,190,4,0,Math.PI*2); // ojo derecho

ctx.moveTo(170,205);
ctx.arc(150,205,18,0,Math.PI); // sonrisa

ctx.lineWidth=3;
ctx.strokeStyle="#f1c40f";
ctx.stroke();



/* ARCO TIPO ARQUITECTURA */

ctx.beginPath();

ctx.moveTo(420,300);
ctx.lineTo(420,180);

ctx.arc(490,180,70,Math.PI,0);

ctx.lineTo(560,300);

ctx.lineWidth=4;
ctx.strokeStyle="#2c3e50";
ctx.stroke();



/* LINEAS */

ctx.beginPath();

ctx.moveTo(50,80);
ctx.lineTo(550,80);

ctx.moveTo(50,110);
ctx.lineTo(550,110);

ctx.lineWidth=2;
ctx.strokeStyle="#8e44ad";
ctx.stroke();



/* CURVA BEZIER */

const p1 = {x:200, y:350};
const p2 = {x:350, y:250};
const p3 = {x:500, y:350};

ctx.beginPath();
ctx.moveTo(p1.x,p1.y);

ctx.quadraticCurveTo(
p2.x,p2.y,
p3.x,p3.y
);

ctx.lineWidth=4;
ctx.strokeStyle="#e74c3c";
ctx.stroke();



/* PUNTOS DE CONTROL */

function punto(x,y,color){

ctx.beginPath();
ctx.arc(x,y,5,0,Math.PI*2);
ctx.fillStyle=color;
ctx.fill();

}

punto(p1.x,p1.y,"blue");
punto(p2.x,p2.y,"orange");
punto(p3.x,p3.y,"blue");


}

}

draw();