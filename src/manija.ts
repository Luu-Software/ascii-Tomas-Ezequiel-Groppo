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
  return "tumadre"
}
let caracter: string = preguntar('Con que caracter vas a dibujar el triangulo? ');
let tamaño: number = Number(preguntar('De que tamaño? '));
let tipo: string = preguntar('Que tipo de triangulo? (isoceles, rectangulo) ');
let n: number = 0;
let cantidadporfila: string;

if (tipo==="isoceles" || tipo==="Isoceles"){

}
else if (tipo==="rectangulo" || tipo==="Rectangulo"){
while (n<tamaño){
  if (tamaño=1){
    cantidadporfila=caracter
    console.log(cantidadporfila + " ")
    n++;
  }
  else{
    cantidadporfila=caracter+caracter
    console.log(cantidadporfila + " ")
    n ++;
  }
  }
}
else{
  console.log("Ingresa un tipo de triangulo valido")
}
