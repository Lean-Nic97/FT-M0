	
function decirHolaAlUsuario(usuario) {
    return 'Hola ' + usuario + '!';
}
 
function decirAdiosAlUsuario(usuario) {
    return 'Adiós ' + usuario + '!';
}
 
function crearSaludo(usuario, funcion) {
    var saludo = funcion(usuario);
    return saludo;
}
 
console.log(crearSaludo('Dan', decirHolaAlUsuario)); // 'Hello Dan!'
// Ejecuto crearSaludo
// Le paso dos argumentos: 1) String-number-array-objeto,booleano. 2) funcion - decirHolaAlUsuario
// Línea 11 = guardando en una variable el resultado de ejecutar la funcion decirHolaAlUsuario.
// Resultado de decirHolaAlUsuario(usuario) ==> "Hola Dan!";
// Retorno saludo.
console.log(crearSaludo('Lean', decirAdiosAlUsuario)); // 'Adiós Dan!'


	
var alumnos = ['mati', 'leo', 'tincho', 'emi', 'jimmy', 'franco'];
 
// sin callbacks
 
for (var i = 0; i < alumnos.length; i ++) {
  console.log(alumnos[i]);
//   funcion(alumnos[i], i);
}
 
// con callbacks
 
var pushedStudents = [];
var array = [1,2,3,4,5];
var newArray = [];

array.forEach(function(elemento, indice) {
    console.log(indice)
    newArray.push(elemento + 1);
    return elemento
});

// alumnos.forEach(function (elemento, indice) {
//     console.log(elemento, indice);
//     pushedStudents.push(elemento);
// });

console.log(newArray);

var arrayModificado = array.map(function(elemento, indice, array) {
    elemento += 10;
    return elemento;
});

console.log(array.map(function(elemento, indice, array) {
    elemento += 10;
    return elemento;
}));

console.log(arrayModificado)
console.log(array);

var arrayReduced = array.reduce(function(acumulador, elemento, indice, array) {
    console.log(acumulador)
    console.log(elemento)
    console.log(indice)
    var suma = acumulador + elemento;
    return suma;
    // return ;
}, 0);

console.log(arrayReduced);
console.log(array);

var filteredArray = array.filter(function(elemento, indice, array) {
    return elemento > 5;
});

console.log(filteredArray);
