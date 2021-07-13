// Variables:
// var = number, strings, booleanos, arrays, objetos, funciones, undefined y null

// Funciones:
// function filtrar(numeros) {
//     // NO tienen que declarar un nuevo array.
//     // var numeros = [1,2,3,4,5];
//     console.log(chupetin);
// };

// Control de flujo:
// if (Condicion) {
//     ...Que hacemos si se cumple la condicion
// } else if(Condicion) {
//     ...Que hacemos si se cumple esta condicion.
// } else {
//     ...Que hacemos si las condiciones anteriores no se cumplen.
// }

// switch(color) {
//     case "red":
//         return "this is red";
//         break;
//     case "green":
//         return "this is green";
//     default:
            // El default es exactamente lo mismo que el else en la estructura if...else;
// }

// Operadores de comparación:
// == === != !== < <= > >=
// 1 < 2 === true;
// 1 < 0 === false;
// 1 == '1' === true;
// 1 === '1' === false;

// Operadores Lógicos:
// && AND = Retorna true si las dos condiciones que analiza son verdaderas (true);
// || OR = Retorna true si una de las condiciones es verdadera (true);

// Bucles:
// for (var i = 0; i < arrayOString.length; i++) {
//     Acá metemos toda la lógica.
// }

// for (var i = 1; i < 3; i++) {
//     // 1
//     // 2
//     console.log(i);
//     for (var j = 1; j < 11; j++) {
//         console.log(j);

//         console.log(`${i} * ${j} = ${i * j}`);
//     };

// };

// Mientras la condicion sea true, se sigue ejecutando.
// while (Condicion) {
//     ejecuto lo que quiera.
// };

// Para objetos:
// for...in:
// for (var key in objeto) {
//     console.log(key);
//     console.log(objeto[key]);
// };

// ARRAYS:
//  0 1
// [1,1];
// length = cantidad de elementos que tiene el array.
// índice del array = Siempre empiezan en cero (0). 
// NombreDelArray[1];

// Al final del array:
// push(Acá pasamos los elementos que van a ser ingresados al final del array);
// pop(). Saca un elemento del final del array.

// Al principio del array:
// unshift(Acá pasamos los elementos que van a ser ingresados al principio del array);
// shift(). Saca un elemento del principio del array

// OBJETOS:

// var persona = {
//     ojos: 2,
//     nariz: 1,
//     colorDePelo: 'negro',
//     saludar: function () { // Método.
//         return "Hola!";
//     },
// };

// Dot Notation:
// persona.ojos // 2;
// persona.nariz // 1;
// persona.saludar() // "Hola!";
// persona.orejas = 2; ---> agregue la propieda "orejas" a persona.

// Bracket Notation:
// persona['ojos'] // 2;
// var propiedad = "nariz";
// persona[propiedad] // 1;


// CLASES:
// Son como fábricas desde las cuales puedo fabricar objetos con las mismas propiedades. Pero distintos valores.

// Funcion constructora:
// function Alumno(nombre, apellido, cohorte) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.cohorte = cohorte;
// };

// Asigno métodos a mis instancias mediante el prototype
// Alumno.prototype.saludar = function () {
//     return `Hola soy ${this.nombre} ${this.apellido}`;
// };

// Class:
// class Alumno {
//     constructor(nombre, apellido, cohorte) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.cohorte = cohorte;
//     };

//     // Asigno métodos a mis instancias mediante la siguiente sintaxis:
//     saludar() {
//         return `Hola soy ${this.nombre} ${this.apellido}`; 
//     };
// }

// THIS:
// Es una palabra reservada que representa al objeto o instancia en la que estoy parado o hago referencia.


// CALLBACK:
// Es una función que es enviada como argumento de otra funcion.

// function sumar(a, b) {
//     return a + b;
// };

// function totalCompra(callback, a, b) {
//     // return "Hola, el total de la compra es de " + cb(a, b) + "."
//     return `Hola, el total de la compra es de ${callback(a, b)}.`;
// };

// console.log(totalCompra(sumar, 10, 5));

// METODOS DE ARRAY:

// Map:
// Aplica una lógica sobre los elementos de un array y va "metiendo" los resultados de esa lógica en un nuevo array. Este nuevo array
// se retorna finalmente como resultado del map.

// var array = [10,11,12,13];
// var numerosSumados = array.map(function(elemento) {
//     return elemento + 2;
// });
// console.log(numerosSumados) // [12, 13, 14, 15]; 

// Filter:
// Aplica una lógica sobre cada elemento de un array y si esta lógica retorna un valor true, "mete" el elemento en un nuevo array.
// Finalmente el filter retorna el nuevo array con los elementos que hayan retornado true a nuestra lógica.

// var array = [12, 545, 145, 1];
// var filtrados = array.filter(function(elemento) {
//     return elemento > 100;
// });

// console.log(filtrados) // [545, 145];

// Reduce:
// Reducir un array de elementos a un único valor. En cada iteración se va guardando en un acumulador el resultado de aplicar la lógica que
// nosotros querramos.

// var array = [1, 2, 3, 4, 5];
// var reducido = array.reduce(function(acumulador, elemento) {
//     return acumulador + elemento;
// }, 150);

// Cero del final, es un argumento opcional que indica el valor inicial que va a tener el acumulador del reduce.

// console.log(reducido) // 15;
