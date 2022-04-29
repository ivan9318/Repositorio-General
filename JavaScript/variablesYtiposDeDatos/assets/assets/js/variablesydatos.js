//let alerta=alert ("Estoy vivo!!!!!!");


recipiente="agua";
recipiente ="cafe";//cuando escribo recipiente, estoy declarando mi variable y le asigno el valor de "cafe", en este momento ya esta inicializada
recipiente = "leche";

console.log(recipiente);//JS es caseSensitive (sensible a mayusculas y minisculas)

/*tipos de variables
- var: es una variable global que podra ser utilizada en todo el codigo
- let: es una  variable que pertenece solo a un bloque de codigo
- const: una variable que no cambiara de valor.

Declarar, inicializar y modificar variables

DEclarar una variable es cuando la comienzo a escribir y aun no le doy valores.
Inicializar una variable es cuando le doy valores a la variables.
*/

var nombre="Felipe";
let apellido="Maqueda";
const edad = "30"

var descanso = 15;
var tulum = "playita";

var nombre = "Juan";

let perrito = "Toby";
let perrito2= "manchas";


//Este es un ejemplo de una alerta undefined porque no agregamos valor a nuesta variable

let numero5
console.log(numero5); //imprime undefined. No es un error.

// Ejemplo de descuento de zapatos

let zapatosnegros=500; //precio sin descuento
let zapatos=250; //precio con descuento del 50% porque es jueves

console.log(`Precio original de los zapatos: ${zapatosnegros}`);
console.log(`Precio nuevos de los zapatos: ${zapatos}`);

let n1,n2,n3;
n1='ivan';
n2='alejandro';
n3='Lopez';

console.log(`el nombre del alumno fav es ${n1} ${n2} ${n3}`);

//Tipos de datos primitovs
/*
Son los tipos de datos que no se pueden cambiar por js
-string
-nmber
-boolean
-undefined //representan todos aquellos valores que no tienen
inicializada

-null
-NaN


*/
let base=15;
let altura=30;
let area=base*altura/2;
console.log(area);




/*Ejercicio de calcular el sueldo de un empleado*/
let costoHora=80;
let horasTrabajadas=40;
let primaDominical=.05;
let nombreEmpleado1='ivan';
let nombreEmpleado2='gus';
let sueldoBase=costoHora*horasTrabajadas;
let primaDominicalTotal=sueldoBase*primaDominical;
let bonoExtra=1000;
console.log(`El nombre de nuestro primer trabajador es ${nombreEmpleado1}`);
console.log(`El sueldoBase de nuestro primer trabajador es ${sueldoBase}`);
console.log(`El  valor de nombre de nuestra prima dominical de nuestro primer trabajador es ${primaDominical}`);

/*
Como convertir unidades en js


*/
const esVeda=true;
console.log(esVeda);
const esFalso=false;
let age=10;
console.log(age);
let km=100;
let hr=24;
let seconds=60;
let min=1;
let name='ivan';
console.log(name);
let lastName='lopez';
let charge='inge';
let gender='male';
let sport='tennis';
let holi;
console.log(typeof(holi));
let como;
let estas;
let amistad;
let esperoBien;
const felipe=null;
console.log(typeof(felipe));
const alonso=null;
const bri=null;
const suAmor=null;
const amista=null;
let a=NaN;
console.log(typeof(a));
let b=NaN;
let c=NaN;
let d=NaN;
let e=NaN;

if (esVeda==false){
    console.log(`Hola me llamo ${name}`);
}
else{
    console.log(`Tengo ${edad} y ${felipe}`);
}

/*convertir variables*/
//cadenas a numeros
let n10=Number('10');
console.log(n10);
let n11=toString(55);
console.log(typeof(n11));
let float=50.78;
console.log(parseInt(float));
console.log(Math.round(50.78));
