let nombre: string = "Laura";
nombre ="Elizabeth";
//console.log(nombre)
let numero: number =323;
//console.log(numero);

//
type address ={
    city?: string;// ?solo para que el campo no sea obligatorio
    country?:string;
    ad?:string;
    address?: address;
}

//creación de objeto en typescripts
type estudiante ={
    fistName: string;
    lastName:string;
    //tipos union
    age?:number | string;
    address?: address;
}
//primer estudiante
const e1 : estudiante = {
    fistName: "Sharick",
    lastName:"Albarracin",
    age: 2812,
    address: {
        city: "Bogotá",
        country: "Colombia",
        ad: "cr 117 a #63 d 29"
    }
}
//segundo estudiante
const e2 : estudiante = {
    fistName: "Madison",
    lastName:"Morales",
    age: 2024,
    address: {
        city: "Bogotá",
        country: "Colombia",
        ad: "cr 117 a #63 d 29"
    }
}
//funcion para mostgrar in fo del estudiante
//version
const mostrarEstudiante =
        (estudiante: estudiante): string =>  {
            const {fistName, lastName,age}= estudiante;
            return`Nombre de estudiante: ${fistName}
                    apellido:${lastName},
                    Edad: ${age}`;
        }


///ARREGLOS
//Crear un arreglo de estudiantes:
//let para dejar algo fijo y

//recorrer el arreglo de estuiante
let estudiantes:estudiante[]=[];

estudiantes.forEach(est =>{
    console.log(`El nombre del estudiante es: ${est.fistName} y su apellido: ${est.lastName}`)
});

type Estudiante ={
    fistName: string;
    lastName:string;
    //tipos union
    age?:number | string;
}
//agregar estudiantes
const agregarEstudiante =(estudiante:Estudiante)=> {
    estudiantes.push(estudiante)
};

//eliminar estudiante
const eliminarEstudiante =(indice: number)=>{
    estudiantes.splice(indice,1)
}
agregarEstudiante({
    fistName: "Wilmar",
    lastName: "Amaya",
    age:22
})
agregarEstudiante({
    fistName: "Ana",
    lastName: "Rodriguez",
    age:12
})
//eliminarEstudiante(0)
console.log(estudiantes);

// Función para eliminar estudiantes por edad
const eliminarEstudiantePorEdad = (edad: number | string) => {
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
const actualizarApellidoPorNombre = (nombre: string, nuevoApellido: string) => {
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
