"use strict";
let nombre = "Laura";
nombre = "Elizabeth";
//console.log(nombre)
let numero = 323;
//primer estudiante
const e1 = {
    fistName: "Sharick",
    lastName: "Albarracin",
    age: 2812,
    address: {
        city: "Bogotá",
        country: "Colombia",
        ad: "cr 117 a #63 d 29"
    }
};
//segundo estudiante
const e2 = {
    fistName: "Madison",
    lastName: "Morales",
    age: 2024,
    address: {
        city: "Bogotá",
        country: "Colombia",
        ad: "cr 117 a #63 d 29"
    }
};
//funcion para mostgrar in fo del estudiante
//version
const mostrarEstudiante = (estudiante) => {
    const { fistName, lastName, age } = estudiante;
    return `Nombre de estudiante: ${fistName}
                    apellido:${lastName},
                    Edad: ${age}`;
};
///ARREGLOS
//Crear un arreglo de estudiantes:
//let para dejar algo fijo y
//recorrer el arreglo de estuiante
let estudiantes = [];
estudiantes.forEach(est => {
    console.log(`El nombre del estudiante es: ${est.fistName} y su apellido: ${est.lastName}`);
});
//agregar estudiantes
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
//eliminar estudiante
const eliminarEstudiante = (indice) => {
    estudiantes.splice(indice, 1);
};
agregarEstudiante({
    fistName: "Wilmar",
    lastName: "Amaya",
    age: 22
});
agregarEstudiante({
    fistName: "Ana",
    lastName: "Rodriguez",
    age: 12
});
//eliminarEstudiante(0)
console.log(estudiantes);
// Función para eliminar estudiantes por edad
const eliminarEstudiantePorEdad = (edad) => {
    estudiantes = estudiantes.filter(est => est.age !== edad);
};
// Mostrar estudiantes antes de eliminar
console.log("Estudiantes antes de eliminar:");
estudiantes.forEach(est => {
    console.log(`Nombre: ${est.fistName}, Apellido: ${est.lastName}, Edad: ${est.age}`);
});
// Eliminar estudiante por edad
eliminarEstudiantePorEdad(22);
// Mostrar estudiantes después de eliminar
console.log("Estudiantes después de eliminar:");
estudiantes.forEach(est => {
    console.log(`Nombre: ${est.fistName}, Apellido: ${est.lastName}, Edad: ${est.age}`);
});
//actualizar
// Función para actualizar el apellido de un estudiante por su nombre
const actualizarApellidoPorNombre = (nombre, nuevoApellido) => {
    const estudiante = estudiantes.find(est => est.fistName === nombre);
    if (estudiante) {
        estudiante.lastName = nuevoApellido; // Actualiza el apellido
    }
};
// Mostrar estudiantes antes de actualizar
console.log("Estudiantes antes de actualizar:");
estudiantes.forEach(est => {
    console.log(`Nombre: ${est.fistName}, Apellido: ${est.lastName}, Edad: ${est.age}`);
});
// Actualizar el apellido de "Ana"
actualizarApellidoPorNombre("Ana", "Gómez");
// Mostrar estudiantes después de actualizar
console.log("Estudiantes después de actualizar:");
estudiantes.forEach(est => {
    console.log(`Nombre: ${est.fistName}, Apellido: ${est.lastName}, Edad: ${est.age}`);
});
