// var array = [1,23, "lala", function() {}];

// var lean = {
//     nombre: "Leandro",
//     apellido: "Nicolau",
//     edad: 23,
//     saludar: function () {
//         return "Hola soy Leandro";
//     },
// };

// console.log(lean.nombre);
// console.log(lean.edad);
// console.log(lean.saludar());

// var propiedad = 'nombre';
// var propiedad2 = 'apellido';

// console.log(lean['nombre']);
// console.log(lean[propiedad2]);
// console.log(lean[propiedad2]);
// console.log(lean['edad']);
// console.log(lean['saludar']());

// var obj = {
//     a: 2,
//     b: 4,
// };

// // Dot notation lean.nombre;
// // Bracket notation lean['nombre'];

// function suma(key1, chupetin) {
//     // tenes que sumar los valores de las propiedades que vienen en key1 y key2;
//     return obj[key1] + obj[chupetin];
// };

// console.log(suma('x', 'y'));
// console.log(suma('a', 'b'));

// array[7] = 17;

// obj.c = 6;
// obj.nuevaPropiedad = 12 + obj.c;
// obj['b'] = 20;
// console.log(obj);
// delete obj.b;
// console.log(obj);

// for (var key in obj) {
//     console.log(key);
//     console.log(obj[key]);
//     console.log(`${key}: ${obj[key]}`);
// };

// var suma = 0;
// for (var key in obj) {
//     suma += obj[key];
// };
// console.log(obj.otraPropiedad);

// if (obj.otraPropiedad) {
//     console.log("Si, la tiene");
// } else {
//     console.log("No la tiene");
// }

// console.log(suma);


	
var persona = {
nombre: 'Toni',
saludar: function() {
    // this === persona;
    console.log(this)
    console.log('Hola, Toni');
    return this.nombre;
}
};
    
var persona2 = {
    nombre: 'Jimmy',
    saludar: function() {
        // this === persona2;
        console.log(this);
        console.log('Hola, ' + this.nombre);
        return this.nombre;
    },
}
persona.saludar();
persona2.saludar();

console.log(persona2.nuevaPropiedad)


	
function saludar() {
    console.log('Hola, ' + this.nombre);
    return 'Hola, ' + this.nombre;
}
   
   
  var manu = {
    nombre: 'manu',
    saludar: function saludar() {
        console.log('Hola, ' + this.nombre);
        return 'Hola, ' + this.nombre
    }
  }
  function suma (a, b) {
    return a + b;
};
  var martin = {
    nombre: 'martin',
    saludar: saludar,
    suma: suma,
  }

  var array = [
      {},
      {},
    ];
    array[0].nuevaPropiedad = {
        llaves: 3,
        tiempo: "Lindo",
    };
    console.log(array[0].nuevaPropiedad.llaves)

  console.log(martin.saludar())
  console.log(manu.saludar());
console.log(martin.suma);