var alumno1 = {
    nombre: "Juan Pablo",
    apellido: "Mira Villa",
    cohorte: '16b',
}

var alumno2 = {
    nombre: "Beto",
    apellido: "Gomez",
    cohorte: '16b'
}

var alumno50 = {
    nombre: "Juan Pablo",
    apellido: "Mira Villa",
    cohorte: '16b'
};

console.log(alumno50.cohorte);

// function Alumno(nombre, apellido, cohorte, puntuacion, ciudad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.cohorte = cohorte;
//     this.puntuacion = puntuacion;
//     this.ciudad = ciudad;
// };

// Alumno.prototype.academia = "Henry";

// Alumno.prototype.saludar = function () {
//     return `Hola soy ${this.nombre} ${this.apellido}`;
// };

// Alumno.prototype.sayHi = function () {
//     return "Hi i'm " + this.nombre;
// };

// class Alumno {
//     constructor(nombre, apellido, cohorte) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.cohorte = cohorte;
//     };

//     saludar() {
//         return `Hola soy ${this.nombre} ${this.apellido}`;
//     };

//     sayHi() {
//         return "Hi i'm " + this.nombre;
//     };

// };

// var alumno51 = new Alumno("Oscar", "Aguilar", "16b");
// alumno51.ciudad = "Córdoba";

// // Sintax sugar;
// console.log(alumno51)

// var alumno52 = new Alumno("Aldemar", "Restrepo", "16b");

// console.log(alumno51.saludar());
// console.log(alumno52.saludar());
// console.log(alumno52.sayHi());

// var array = [1,2,3,4,5];

// console.log(array.length);


class Animal {
    constructor(numeroPatas, nombre) {
        this.numeroPatas = numeroPatas;
        this.nombre = nombre;
    };
};

Animal.prototype.cuentoPatas = function() {
    return `Hola tengo ${this.numeroPatas} patas`;
};

class Gato extends Animal {
    constructor(numeroPatas, nombre, raza) {
        super(numeroPatas, nombre);
        this.raza = raza || "Persa";
    };
};

var gato1 = new Gato(4, "Garfield");

console.log(gato1)
console.log(gato1.cuentoPatas())
