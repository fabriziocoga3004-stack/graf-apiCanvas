function draw(){

const canvas=document.getElementById("canvas");

if(canvas.getContext){

const ctx=canvas.getContext("2d");

ctx.fillStyle="#27ae60";
ctx.fillRect(220,140,220,120);

ctx.lineWidth=4;
ctx.strokeStyle="#145a32";
ctx.strokeRect(220,140,220,120);

}

}

draw();