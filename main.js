function draw(){

const canvas = document.getElementById("canvas");

if(canvas.getContext){

const ctx = canvas.getContext("2d");

/* puntos de la curva */

const p1 = {x:100, y:300};
const p2 = {x:300, y:80};
const p3 = {x:500, y:300};


/* dibujar lineas guia (triangulo) */

ctx.beginPath();
ctx.moveTo(p1.x,p1.y);
ctx.lineTo(p2.x,p2.y);
ctx.lineTo(p3.x,p3.y);

ctx.strokeStyle="#f39c12";
ctx.lineWidth=2;
ctx.stroke();


/* dibujar curva bezier */

ctx.beginPath();
ctx.moveTo(p1.x,p1.y);

ctx.quadraticCurveTo(
p2.x,p2.y,
p3.x,p3.y
);

ctx.strokeStyle="#e74c3c";
ctx.lineWidth=4;
ctx.stroke();


/* dibujar puntos */

function punto(x,y,color){

ctx.beginPath();
ctx.arc(x,y,6,0,Math.PI*2);
ctx.fillStyle=color;
ctx.fill();

}

punto(p1.x,p1.y,"blue");
punto(p2.x,p2.y,"orange");
punto(p3.x,p3.y,"blue");

}

}

draw();