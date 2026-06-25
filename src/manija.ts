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

function filaTrianguloIsoceles(letra: string, tamaño: number, fila : number): string {
  fila=-tamaño;
   let espacio: string = " "
   let retornar: string= "";
   retornar= repetirLetra(letra,fila)
   
  return "hola"
}
let caracter: string = preguntar('Con que caracter vas a dibujar el triangulo? ');
let tamaño: number = Number(preguntar('De que tamaño? '));
let tipo: string = preguntar('Que tipo de triangulo? (isoceles, rectangulo) ');
let n: number = 0;
let m: number = tamaño;
if (tipo==="Rectangulo" || tipo==="rectangulo"){
  while (n<tamaño+1){
    console.log(repetirLetra(caracter, n))
    n++;
  }
}
else if (tipo==="Isoceles" || tipo==="isoceles" || tipo==="s"){
 
}
else{
  console.log ("mal")
}
