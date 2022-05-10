/*
* Elementos del DOM

Cuando hablamos del DOM, hablamos de dos representaciones basicas:

- Representacion del codigo fuente (estructura del HTML)
- Representacion del navegador (estructura del DOM o como se ve ese HTML).


elemento Node(node):Es una unidad basica, que puede ser un elemento o un nodo de texto.
el texto  dentro de un nodo elemento, se considera un nuevo nodo hijo de un tipo texto

tenemos distintos tipos de nodos:
    -Documento:Es el nodo raiz del documeto, a partir del cual se derivan los demas nodos.Este objeto es el que nos permite acceder a todos
    los elementos del DOM
    -Element: Son nodos definidos por etiquetas de html.
    -text: El texto dentro de un nodo element(el texto dentro de un h1) se considera un nodo hijo del tipo texto
        <h1> Hola Generation!!!</h1>

    nodo element: h1
    notod text: Hola Generation!!!
    attribute: Los atributos de las etiquetas tambien definen nodos.No
    son nodos adicionales, son atributos de un nodo elemento.
    -Comentarios y otros: Los comentarios y otros elementos como las
    declaraciones doctype, son considerados nodos adicionales.

*/
/*
*Ejemplo de los nodos
<html>
<h1 style: color: red> Hola Generation!!! </h1>
</html>

nodo document: documento (html)
nodo element: h1
nodo text: Hola Generation!!!
nodo atributo: style
*/
/*
*Ejemplo de los nodos
<html>
<h1 style: color: red> Hola Generation!!! </h1>
</html>

nodo document: documento (html)
nodo element: h1
nodo text: Hola Generation!!!
nodo atributo: style
*/
/*
*Metodos para seleccionar elementos

Estos metodos nos van a permitir seleccionar uno o varios elementos o grupos de elementos del DOM. Estos metodos se utilizan en el document, por eso se agrega element antes del get.
*/
//? querySelectorAll(selector)
/*
//? getElementById(id)
const titulo=document.getElementById('titulo');
document.write(titulo);
const etiqueta=document.getElementsByTagName('h1');
document.write(etiqueta);
//? getElementsByTagName(tag)

//? getElementsByClassName(class)

//? querySelector(selector)

//? querySelectorAll(selector)
const parrafo=document.querySelector('p');
console.log(parrafo);


/*
Metodos para definir, obtener y eliminar atributos
? 
 setAtribbute(atribute,valor):DEfine un atributo de un elemento



*/

//const rango=document.querySelector('.rango');
//rango.setAttribute('type','text');

// getAttribute(atributo): Obtiene el valor de un atributo de un elemento
//document.write(rango.getAttribute('type'));
//removeAttribute(atributo): elimina un atributo de un elemento
//rango.removeAttribute('type');

/*
*Propiedades para modificar textos

Son propiedades que nos permiten modificar el texto de un elemetno

*/

//innerHTML 
//const modificarParrafo=document.querySelector('.parrafito').innerHTML;
//innerHTML='hola soy yo de nuevo';
//document write: inscribe en nuestro html algo sin orden especifico
//document.write('holi');
/*
*Modificacion de estilos

Gracias al DOM, podemos modificar los estilos de un elemento de forma mucho mas facil.

Sintaxis bsica de la propiedad .style.propiedad = valor;

*/
//document.getElementById('parrafo1').style.color='blue';

/*
*Uso de eventos
Una forma mas facil de modificar 


*/

//Creo una constante con la informacion recuperada al usuar el querySelector
const textoAModificar = document.querySelector(".Header1");

//Creo una constante para cambiar el color de esa informacion recopilada
function cambiarColor(color){ //Recibo como parametro el color a cambiar, y este parametro lo voy a obtener del HTML
    textoAModificar.style.color = color; //Cambio el color del texto
}
