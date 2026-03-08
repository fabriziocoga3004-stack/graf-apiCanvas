function draw(){

const canvas=document.getElementById("canvas");

if(canvas.getContext){

const ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.arc(300,200,100,0,Math.PI*2);

ctx.fillStyle="#f4d03f";
ctx.fill();

ctx.strokeStyle="#b7950b";
ctx.lineWidth=4;
ctx.stroke();

ctx.beginPath();
ctx.arc(260,170,10,0,Math.PI*2);
ctx.arc(340,170,10,0,Math.PI*2);
ctx.fillStyle="black";
ctx.fill();

ctx.beginPath();
ctx.arc(300,220,50,0,Math.PI);
ctx.lineWidth=5;
ctx.stroke();

}

}

draw();