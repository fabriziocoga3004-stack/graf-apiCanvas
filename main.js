function draw(){

const canvas=document.getElementById("canvas");

if(canvas.getContext){

const ctx=canvas.getContext("2d");

ctx.beginPath();

ctx.moveTo(300,100);
ctx.lineTo(420,300);
ctx.lineTo(180,300);

ctx.closePath();

ctx.fillStyle="#3498db";
ctx.fill();

ctx.lineWidth=4;
ctx.strokeStyle="#1f618d";
ctx.stroke();

}

}

draw();