import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  let x: number = 0;
  let retornar: string = "";
  while(x<cantidad){
      retornar= retornar + letra; 
    x++;
  }
 return retornar;
}

function filaTrianguloIsoceles(letra: string, fila: number, tamaño: number): string {
  // COMPLETAR
  /* fila n: 2*n+1 asteriscos, con espacios a izquierda a derecha 
  Pueden asumir que el tamaño es impar, así el triángulo queda centrado. */
  return "era un placeholder"
}
let caracter: string = preguntar('Con que caracter vas a dibujar el triangulo? ');
let tamaño: number = Number(preguntar('De que tamaño? '));
let tipo: string = preguntar('Que tipo de triangulo? (isoceles, rectangulo) ');
let n: number = 0;

if (tipo==="Rectangulo" || tipo==="rectangulo"){
  while (n<tamaño+1){
    console.log(repetirLetra(caracter, n))
    n++;
  }
}
else{
  console.log ("hola")
}
