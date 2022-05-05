let ensalada =['lechuga','tomate','cebolla','pimiento','zanahora'];
console.log(`La cantidad de verduras en la ensalada es ${ensalada.length}`);

//metodo concat(), nos permite unir dos arrays.Devuelve un nuevo arreglo con los elementos de los arrays
let dulces=['galletas','ensalda','gomitas','helado'];
let fusion=ensalada.concat(dulces);
console.log(ensalda.join(' ')); //Imprime el array separado por un guin
//indexOf nos permite saber la posicion de un elemento dentro de un array
console.log('Esta es la posicion de la lechuga ',ensalada.indexOf('lechuga'));