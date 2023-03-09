console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posición del elemento a animar
let x = 0;
let y = 10;

//-- Velocidad horizontal del objeto
let velx = 3;
//-- Velocidad vertical del objeto
let vely = 1;

//-- lado rectángulo 
let lr = 20


//-- Función principal de animación
function update() 
{
  console.log("test");
  //-- Algoritmo de animación:
  //-- 1) Actualizar posiciones de los elementos
  //-- Por hacer

  //-- Comprobar colisión con borde derecho
  //-- Si se alcanza la anchura del canvas, se cambia la velocidad
  //-- de signo (rebote)
  //-- Condicion de rebote en extremos del canvas
  if (x < 0 || x >= (canvas.width - lr) ) {
    velx = -velx;
    //lr = lr + 1;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if ( y <= 0 || y > canvas.height - lr) {
    vely = -vely;
    //lr = lr - 1;
  }

  //-- (física del movimiento rectilineo uniforme)
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();

    ctx.rect(x, y, lr, lr);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()

  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();