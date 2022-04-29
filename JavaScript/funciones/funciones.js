function suma(a,b){
    let resultado=a+b;
    return resultado;
}

console.log(suma(5,5));

/*
Scope es el alcance de una variable , que esta definida al momento de declarla
var son globales
let son locales
Hosting es la flexibilidad que tenemos para llamar funciones y 
variables que ya hemos definido.
return 
*/

let resta=(a,b)=>{
    let res=a-b;
    return console.log(`El valor de la resta es:${res}`);
}
resta(100,40);

let area=(base,altura)=>{
    let cuadrado=altura*base;
    return cuadrado;

}

console.log(area(5,5));

const dividision=(l1,l2)=>{
    let result =l1/l2;
    return result;
}

class areas{
    constructor(pi,r,h){
        this._pi=pi;
        this._r=r;
        this._h=h;
    }

     circulo(pi,r){
        this._pi=pi;
        this._r=r;
        let areaCirculo=pi*Math.pow(r,2);
        return areaCirculo;
    }
     cilindro(pi,r,h){
        this._pi=pi;
        this._r=r;
        this._h=h;
        let areaCilindro=(pi*Math.pow(r,2))*h;
     
        return areaCilindro;
    }
}

let a=new areas();
console.log(a.circulo(3.1416,5,5));

class calculadora{
    constructor(a,b,n) {
        this._a=a;
        this._b=b;
        this._n=n;
    }

    suma(a,b){
        this._a=a;
        this._b=b;
        let resultado=a+b;
        return resultado;
    }
    resta(a,b){
        this._a=a;
        this._b=b;
        let resultado=a-b;
        return resultado;
    }
    cuadrado(a,n){
        this._a=a;
        this._n=n;
        let resultado=Math.pow(a,n);
        return resultado;
    }

    raiz(a,n){
        this._a=a;
        this._n=n;
        let resultado=Math.sqrt(a,n);
        return resultado;  
    }

}

let b=new calculadora();
b.suma(5,6);

function Calculadora(num1,num2){
    let suma=num1+num2;
    let resta=num1-num2;
    let multiplicacion=num1*num2;
    let dividision=num1/num2;
    return suma,resta,multiplicacion,dividision;
}

/* funciones flecha*/

let multiplicacion=(x,y)=> x*y;


console.log(multiplicacion(5,5));

function saludar(nombre){
    let saludo=`Hola ${nombre}`;
    return saludo;
}

saludar('ivan');
let nombres=['ivan','ricardo','juan','luis','armando'];
for(let i=0;i<nombres.length;i++){
    let names='hola '+nombres[i];
     console.log(names);
}

/*Mas ejeccicios  */

let programa=(a,b,c)=> a+b/b*c;
console.log(programa(3,2,5));

function formulaGeneral1(a,b,c){

    return (-b+Math.sqrt((b**2-4*a*c),2))/2*a;
}

