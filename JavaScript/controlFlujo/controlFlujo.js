//alert('Estoy vivo');

let shirt = 'limpia';
if (shirt == 'limpia') {
    console.log('puedes ir ');
}
let edad = 30;
if (edad >= 18) {
    console.log('Puedes ir a la iesta');
} else if (edad <= 18) {
    console.log('No puedes ir hommie');
}
else {
    console.log('Ingresaste un tipo de dato mal');
}
/*var hora = prompt("Ingrese la hora actual");
if (hora < 12) {
    console.log("Buenos dias.");
} else if ((hora >= 12) && (hora <= 18)) {
    console.log("Buenas tardes.");
} else if ((hora > 18) && (hora <= 24)) {
    console.log("Buenas noches.")
} else {
    console.log("La hora ingresada no es valida, vuelve a intentar. :D");
}


let agua = 'Horchata';
let calificacion = 21;
(agua == 'Horchata') ? 'Me gusta' : 'No me gusta';
calificacion < 30 ? 'reprobamos:' : 'pasamos :D'



let opcion = prompt('ingresa una opcion del 1-4');
switch (opcion) {
    case '1':
        console.log('elegiste opcion 1');
        break;
    case '2':
        console.log('elegiste opcion 2');
        break;
    case '3':
        console.log('elegiste opcion 3');
        break;
    case '4':
        console.log('elegiste opcion 4');
        break;
    default:
        console.log('opcion no valida');
}

let variable = 1; //Es una variable con un solo valor

let array = [1, 2, 3, 4, 5]; //Es un array con varios valores





*/
var arcoiris = new Array("rojo", "verde", "azul", "amarillo", "violeta", "naranja", "rosa"); //Declaramos un arreglo con 7 posiciones


var arcoiris = ["rojo", "verde", "azul", "amarillo", "violeta", "naranja", "rosa"]; //Declaramos un arreglo con 7 posiciones

var arcoiris = []; //Declaramos un arreglo vacio

//Ejemplos de arreglos

var listaSuper = ['leche', 'pan', 'dulces'];
var listaSuper = new Array('leche', 'pan', 'dulces');

var diasSemana = new Array('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo');



// ? investigar si podemos hacer arreglos con otros tipos de datos.



var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];



//? acceder a un elemento de un array


console.log(diasSemana[4]);

console.log(diasSemana[0]);

console.log(diasSemana[9]);



let micomputadora = {
    marca: "Asus",
    modelo: 'GL',
    procesador: 'Intel core i7',
    ram: '16 GB',
    almacenamiento: '500 mb'
}

console.log(micomputadora.marca)

let participantes = {
    nombre: 'Ivan',
    edad: '22',
    githug: 'enlace',
    repositorio: 'entregado'

}
console.log(participantes.nombre);
//* Arrays asociativos

/*
Un array asociativo es un array que contiene una serie de datos que se almacenan en una estructura que se llama objeto. 
Nos sirve hacerlo de este modo porque podemos tener un control mas especifico al momento de llamar la posicion de ese elemento.  Por ejemplo, nosotros en un array normal, llamamos a los elementos por su indice (0, 1, 2, etc.), en cambio en un array asociativo, llamamos a los elementos por su nombre (nombre, apellido, etc.).

En pocas palabras, cambiamos y asociamos el numero del indice por una cadena de texto para poder identificar la posicion del elemento de una mejor forma.
*/
/*Metodos de los arrays*/
let arrayFrutas = ['Manzanas', 'Peras', 'Zanahorias', 'Duraznos', 'Melones', 'Aguacates', 'Naranjas'];

console.log('Estas es mi arreglo original ', arrayFrutas);

//Metodos transformadores

//MEtodo push(): Agregar un elemento al final del arreglo

arrayFrutas.push('Uvas');
console.log('Estas es mi arreglo push ', arrayFrutas);

//Metodo pop elimina el ultimo elemento arreglado del arreglo

arrayFrutas.pop('Frutas');
arrayFrutas[0] = 'holi';
console.log('Estas es mi arreglo pop  ', arrayFrutas);

//metodo unshift() agregar 1 o mas elementos al principio de la lista
arrayFrutas.unshift('palta');

//Metodo shift() elimina un elemento del principo del arreglo
//array.shift();


//Metodo sort lo acomoda de forma ascendente
arrayFrutas.sort()

//reverse los elementos los arregla
arrayFrutas.reverse();

//Buscar que parametros se pueden correr en sort, busar
// saludo.reverse(); Revisar si hay parametros para este metodo

let cadena1 = ['Hola', 'generation'];

var cadena2 = ["Hola", " ", " Generation", " de", " Javascript"];
console.log(cadena2);
var cadena3 = cadena2.slice(3);
console.log(cadena3);
var cadena4 = cadena3[1].slice(0, -6);
console.log("Prueba1:", cadena4);

var arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10];
var arrayNumerico2 = arrayNumerico.slice(2, 6);
/* Metodo splice()

Hay un metodo muy especial, que se llama splice, y nos permite modificar el contenido de un array. Podemos usarlo en tres formas:

    - Para eliminar o suprimir elementos del array.
    - Para agregar o insertar nuevos elementos al array.
    - Para reemplazar elementos existentes del array.

?Esta es la sintaxis general del metodo splice


splice(indice de inicio, cantidadDeElementosAEliminar, nuevoElemento1, nuevoElemento2, ..., nuevoElementoN)
*/

let meses = ['enero', 'febrero', 'lunes', 'martes', 'miercoles'];
meses.splice(2, 2);// inicia en la posicion 2 y elimina 2 elementos

//!EJERCICIO EXPRESS!!!!

var todosLosMesesDelAnio = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

//Usando splice quita todos los meses del anio que tengan 30 dias
todosLosMesesDelAnio.splice(3,1);
console.log(todosLosMesesDelAnio);
todosLosMesesDelAnio.splice(4,1);
console.log(todosLosMesesDelAnio);
todosLosMesesDelAnio.splice(7,1);
console.log(todosLosMesesDelAnio);
console.log(todosLosMesesDelAnio);


//