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


let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

let n: number = 0;

while (n<tamaño){
  console.log(repetirLetra(caracter, tamaño))
  n++;
}

