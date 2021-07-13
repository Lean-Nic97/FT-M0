// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  // console.log(nombre.slice(1))
  // var nuevoString = nombre[0].toUpperCase() + nombre.slice(1);
  // return nuevoString;

  // var nuevoString = nombre[0].toUpperCase();
  // for (var i = 1; i < nombre.length; i++) {
  //   nuevoString += nombre[i];
  // }
  // return nuevoString;
  // palabra=nombre.charAt(0).toUpperCase();

  // nombre.split("").map(function(elemento,item) {
  //   if(item!==0){
  //     return elemento.toUpperCase();
  //   };
  //   return elemento;
  // }).join("");
  // return nombre;

  nombre = nombre.split(" ");
  for (var i = 0; i <= nombre.length - 1; i++) {
    nombre[i] = nombre[i][0].toUpperCase() + nombre[i].slice(1);
  };

  return nombre.join(" ");
};
// ['leandro', 'nicolau'];
console.log(mayuscula("leandro nicolau"));
var nuevoObjeto = {

};

var nuevoObjeto2 = Object.create()
Object.create()
function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
};

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // var result = 0;
  // for (var i = 0; i < numeros.length; i++) {
  //   result += numeros[i];
  // };
  // cb(result);

  // var result = numeros.reduce(function(acumulador, elemento) {
  //   return acumulador + elemento;
  // }, 0);
  // cb(result);

  cb(numeros.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  }, 0));
};

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento) {
    cb(elemento);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // var nuevoArray = array.map(function(elemento) {
  //   return cb(elemento);
  // });

  // var nuevoArray = [];
  // for (var i = 0; i < array.length; i++) {
  //   nuevoArray.push(cb(array[i]));
  // }
  // return nuevoArray;

  return array.map(function(elemento) {
    return cb(elemento);
  });
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código: ['arbol', 'bananas', 'auto', 'oro'];
  // var nuevoArray = [];
  // for (var i = 0; i < array.length; i ++) {
  //   if (array[i][0] === 'a') {
  //     nuevoArray.push(array[i]);
  //   };
  // };
  // return nuevoArray;
  // var nuevoArray = array.filter(function(elemento) {
  //   return elemento[0] === 'a';
  // });
  // return nuevoArray;
  return array.filter(function(elemento) {
    return elemento[0] === 'a';
  });
}

var arrayBidimensional = [[1,1,1,1], [1,1,1,1], [1,1,1,1,1,1,1]];

var sum = 0;
for (var i = 0; i < arrayBidimensional.length; i++) {
  for (var j = 0; j < arrayBidimensional[i].length; j++) {
    sum += arrayBidimensional[i][j];
  };
};
console.log(sum);
console.log("Leandro".length)
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
