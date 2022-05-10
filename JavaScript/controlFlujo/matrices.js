let ensalada =['lechuga','tomate','cebolla','pimiento','zanahora'];
console.log(`La cantidad de verduras en la ensalada es ${ensalada.length}`);

//metodo concat(), nos permite unir dos arrays.Devuelve un nuevo arreglo con los elementos de los arrays
let dulces=['galletas','ensalda','gomitas','helado'];
let fusion=ensalada.concat(dulces);
console.log(ensalda.join(' ')); //Imprime el array separado por un guin
//indexOf nos permite saber la posicion de un elemento dentro de un array
console.log('Esta es la posicion de la lechuga ',ensalada.indexOf('lechuga'));
console.log(ensalda[4])//imprime el elemento de la posicion 5

// el elemento lastIndexOf() nos entrega el ultimo elemento del array, tambien sirve para STrings
console.log('Esta es la ultima posicion de la lechuga ',ensalada.lastIndexOf());

//toString nos permite convertir un array en una cadena de texto
console.log(ensalada.toString());

console.log(ensalda.valueOf());

//El metodo include nos indica si hay un valor en el array
console.log(ensalada.includes('brocoli'));

//split nos permite separar una cadena de texti en un array
console.log(fusion.split(' '));

console.log(fusion.split(' ',3));

//ejercicio

