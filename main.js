function draw(){

const canvas = document.getElementById("canvas");

if(canvas.getContext){

const ctx = canvas.getContext("2d");

ctx.lineWidth = 5;

/* ARCO 1 */

ctx.beginPath()

/* lado izquierdo */
ctx.moveTo(150,300)
ctx.lineTo(150,180)

/* arco superior */
ctx.arc(220,180,70,Math.PI,0)

/* lado derecho */
ctx.lineTo(290,300)

ctx.strokeStyle = "#2c3e50"
ctx.stroke()


/* ARCO 2 */

ctx.beginPath()

ctx.moveTo(350,300)
ctx.lineTo(350,180)

ctx.arc(420,180,70,Math.PI,0)

ctx.lineTo(490,300)

ctx.strokeStyle = "#e74c3c"
ctx.stroke()

}

}

draw();