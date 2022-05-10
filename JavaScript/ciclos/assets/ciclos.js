/*while(){//palabra reservada while+condicion a evaluar
//codigo a ejecutar
}*/
let numeroParaSumar=0;
while(numeroParaSumar<10){
    console.log('Holi');
    numeroParaSumar++;
}
//Ejercicio
/*
let num = parseInt(prompt("Introduce un numero"));

let cont = 0;


while (cont < num) {
    if (cont % 2 !== 0) {
        console.log(cont);
    }
    cont++;
}
*/
// do while

let numero3=0;

do{
    console.log(numero3);
    numero3++;
}while(numero3<6);

//ciclo for

for(let i=0;i<10;i++){
    console.log('El valor ',i);
}

// bucl break

let n5=0;
while(n5<100){
    n5++;
    console.log('Resulado ',n5);
    if(n5==13){
        break;
    }
}

//Combinar for if y break
for(let i=0;i<20;i++){
    console.log(i)
        if(i==13){
            break;
        }
    
}

//Sentencia continue

for(let i=0;i<15;i++){
    if(i==10){
        continue;
    }
    console.log('Podemos seguir haciendo otra cosa',i);
}

//? Sentencia for in y for of

/*

For in: sirve para recorre un arrego, y por cada uno de los elementos de este arreglo, vamos a obtener su posicion.

For of: sirve para recorre un arreglo, y por cada uno de los elementos de este arreglo, vamos a obtener su valor.


*/
//in:posiciones del array
let animalitosDelBosque=['ardillas','conejos','vendafos','osos','mariposas'];
for( i in animalitosDelBosque){
    console.log(i);
}
//valores del array
for( j of animalitosDelBosque){
    console.log(j);
}

//Ejercicios

/*
let input=parseInt(prompt('ingresa un numero'));
if(input%input!=0 || input>1){
    alert('es un numero primo');
}
else{
    alert('es impar');
}
*/

/*
function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
  
  console.log(isPrime(121));
let input=parseInt(prompt('ingresa un numero'));
if(input===2){
for(let i=2;i<input;i++){
    if(num%i==0){
        alert('es primo');
    }
    else if(num === i * i){
        alert(' No es primo');
    }else{
        alert('No es primo')
    }
}
}

let input=parseInt(prompt('ingresa un numero'));
n=2;
primo=true;

do{
    if(input%n==0){
        primo=false;
    }
    n++;
} while(n<input);

if (primo==true){
    console.log("El numero es primo");
}else{
    console.log("El numero no es primo")
}

*/
let ingresaPi=10;

function calcularPi(iteraciones) {
    let numerador = 4;
    let  denominador = 1; // A este lo vamos a ir aumentando de 2 en 2
    let pi = 0;
    let x = 0;
    // Recuerda que es alternar entre negativo y positivo; por eso la bandera.
    // Comenzamos en positivo
    let  operador = 1;
    for (x; x < iteraciones; x++) {
      pi += operador * (numerador / denominador);
      denominador += 2; // El denominador aumenta de 2 en 2
      operador *= -1;   // Alternamos operador
    }
    return pi;
  }
  console.log(calcularPi(10));