function draw(){

const canvas=document.getElementById("canvas");

if(canvas.getContext){

const ctx=canvas.getContext("2d");

ctx.lineWidth=6;

ctx.strokeStyle="#e74c3c";

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(500,100);

ctx.moveTo(100,200);
ctx.lineTo(500,200);

ctx.moveTo(100,300);
ctx.lineTo(500,300);

ctx.stroke();

}

}

draw();