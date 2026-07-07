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
  fila=(fila-0.5)*2
   let espacio: string = " "
   let retornar: string= "";
   retornar = repetirLetra(" ",tamaño)+repetirLetra(letra, fila)+repetirLetra(" ",tamaño)
      
   
  return retornar
}
let caracter: string = preguntar('Con que caracter vas a dibujar el triangulo? ');
let tamaño: number = Number(preguntar('De que tamaño? '));
let tipo: string = preguntar('Que tipo de triangulo? (isosceles, rectangulo) ');
let n: number = 1;
let m: number = tamaño;
if (tipo==="Rectangulo" || tipo==="rectangulo"){
  while (n<tamaño+1){
    console.log(repetirLetra(caracter, n));
    n++;
  }
}
else if (tipo==="Isosceles" || tipo==="isosceles"){
  while (n<tamaño+1){
    console.log(filaTrianguloIsoceles(caracter, m, n));
    n++;
    m=m-1;
  }
}
else if(tipo==="Isoceles" || tipo==="isoceles"){
  console.log("Se escribe isosceles");
}
else{
  console.log ("No es un triangulo valido");
}
