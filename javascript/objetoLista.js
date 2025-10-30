//Bloque 2: Objetos en listas (versión con arreglos de objetos)
//Ejercicio 1: Contar caracteres en nombres de varios empleados
function contarNombresEmpleados(empleados) {
    
    for (let i = 0; i < empleados.length; i++) {
        let resultado = contarNombre(empleados[i]);
        console.log(resultado);

    }
}
let empl_1 = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Santiago", edad: 30 },
    { nombre: "Rosa", edad: 27 }
];
console.log(`\n`);
contarNombresEmpleados(empl_1);
/*function contarNombresEmpleados() {
    let empleados = [
        { nombre: "Ana", edad: 22 },
        { nombre: "Santiago", edad: 30 },
        { nombre: "Rosa", edad: 27 }
    ];

    for (let i = 0; i < empleados.length; i++) {
        let resultado = contarNombre(empleados[i]);
        console.log(resultado);

    }
}
console.log(`\n`)
contarNombresEmpleados();*/


//Ejercicio 2: Contar vocales en nombres de empleados
function contarVocalesEmpleados(empleados, vocal) {

    for (let i = 0; i < empleados.length; i++) {
        let resultados = contarVocales(empleados[i], vocal);
        console.log(resultados);

    }
}
let empl_2 = [
        { nombre: "Andrea", edad: 35 },
        { nombre: "Marcos", edad: 29 },
        { nombre: "Lucía", edad: 40 }
];
let buscarVocal_2 = "a"; //Cambiar el nombre de las variables para evitar conflicto de llamado en la función anterior!
contarVocalesEmpleados(empl_2, buscarVocal_2);


//Ejercicio 3: Invertir los nombres de empleados
function invertirNombresEmpleados(empleados) {

    for (let i = 0; i < empleados.length; i++) {
        let resultados = invertirNombre(empleados[i]);
        console.log(resultados);

    }
}
let empl_3 = [
        { nombre: "Luis", edad: 26 },
        { nombre: "Carmen", edad: 33 },
        { nombre: "Pedro", edad: 24 }
    ];
invertirNombresEmpleados(empl_3);


//Ejercicio 4: Comparar longitudes de ciudades de residencia
function compararCiudadesResidencia(empleados) {

    for (let i = 0; i < empleados.length-1; i++) {
        let resultado = compararCiudades(empleados[i], empleados[i + 1]);
        console.log(resultado);

    }
}
let empl_4 = [
        { nombre: "Carlosss", ciudad: "Milagro" },
        { nombre: "Andrea", ciudad: "Guayaquil" },
        { nombre: "José", ciudad: "Quito" }
    ];
compararCiudadesResidencia(empl_4);


//Ejercicio 5: Obtener iniciales de cargos de varios empleados
function obtenerInicialesCargosEmpleados(empleados) {

    for (let i = 0; i < empleados.length; i++) {
        let resultados = obtenerIniciales(empleados[i]);
        console.log(resultados);

    }
}
let empl_5 = [
        { cargo: "Director General Académico" },
        { cargo: "Jefe de Laboratorio" },
        { cargo: "Asistente Administrativo" }
    ];
obtenerInicialesCargosEmpleados(empl_5);
