//operadores de asignacion
let num=5;
let numero = 10;
let numero1=100;
let numero2 = 20;
let number2=30;
let adicion = numero1 + numero2;
let sustraccion = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

console.log ("Operador de asignacion" );
console.log(adicion);
console.log(sustraccion);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

// Operadores de cadena
let pres='HP:AMSF';
console.log(pres.toLowerCase());
let as='asafs';
console.log(pres.toUpperCase());

//trin Quita los espacios
let b=' asnf ';
let c=b.trim()
console.log(b);

//concatenar
let d='hola';
let e='ivan';
let f=d.concat(e);
console.log(f);

//AND (&&)

if(numero1<numero2){
    console.log('eh veda');
}

aFirmacion1=numero1>numero2;
aFirmacion2=numero1<numero2;

console.log(aFirmacion1&&aFirmacion2);

let numero3=36;
afirmacion3= numero3 > numero2; //true
afirmacion4= numero2 > numero1; //true

console.log("El resultado de las dos afirmacines es:", afirmacion3 && afirmacion4);

console.log('eh veda '+ afirmacion3 || afirmacion4);

let a1=12;
let b1=13;
let c1=13;

console.log('El resultado de la comparacion de a y b es:'+a1==b1);
console.log('El resultado de la comparacion de a y b es:'+a1==c1);
console.log('El resultado de la comparacion de a y b es:'+c1==b1);


let j=12;
let k=13;
let l=13;

console.log('El resultado de la comparacion de a y b es:'+j==k);
console.log('El resultado de la comparacion de a y b es:'+k==l);
console.log('El resultado de la comparacion de a y b es:'+j==l);
/* Diferente de */
console.log('El resultado de la comparacion de a y b es:'+j!=k);
console.log('El resultado de la comparacion de a y b es:'+k!=l);
console.log('El resultado de la comparacion de a y b es:'+j!=l);
/* variables estrictas, evaluan igualdad de tipo de dato y contenido*/
let valora=23;
let valorb='23';
let valorc=13;
let valord='texto 13';
let valorf=23
console.log('El resultado de la comparacion de a y b es:'+(valora==valorb));
console.log('El resultado de la comparacion de a y b es:'+valora===valorf);
/*
    Equipo de desigualdad estrictas !==
    Sirve para comparar si dos valores son estrictamente diferentes(valor diferente o diferente tipo de dato)
*/


let ejemplo1=23;
let ejemplo2=13;
let textoEjemplo="23";
let textoEjemplo2='Texto 2';

console.log('El numero 23 y el texto 23 son estrictamente diferentes ',ejemplo1!==textoEjemplo);

/* Operador mayor igual que y menor igual que*/
console.log(ejemplo1>ejemplo2);
console.log(ejemplo1>=ejemplo2);
console.group(ejemplo1<=ejemplo2);

/*Feli pruebas*/
/*
let nume1=12;
let nume2=24;
let nume3=25;
let nume4=92;
let nume5=91;

op = (nume1 < nume2 || nume2 < nume3) && (!(nume1 != nume2) && nume5 != nume3);
*/
/*(true,true)&&(false&&true))=false*/
//console.log(op);



let nume1=12;
let nume2=24;
let nume3=25;
let nume4=92;
let nume5=91;

op=(nume5>nume2 && nume4<nume3)||(!(nume1===nume2)|| nume3!=nume3);
/* (true && false)=false || (true)||true =true*/
console.log(op);

function operacionesMatematicas(){
    let numero1=10;
    let numero2=2;
   let numero3='5';

    console.log('operadores matematicos '+numero1+numero2);
    console.log('operadores matematicos '+ (numero1-numero2));
    console.log('operadores matematicos '+numero1*numero2);
    console.log('operadores matematicos '+numero1+numero2);
    console.log('operadores matematicos '+numero1/numero2);
    console.log('operadores matematicos '+numero1%numero2);
    console.log('operadores matematicos '+numero1**numero2);
    console.log('operadores matematicos '+(numero1++));
    console.log('operadores matematicos '+(numero1--));
    console.log('operadores matematicos '+(numero1+=numero2));
    console.log('operadores  matematicos '+(numero1+=5));
    /* Negativo unario*/
    console.log('operadores matematicos ',-numero1);
    console.log('holi ',+numero3)
}
operacionesMatematicas();