//Bloque 2: Objetos en listas (versión con arreglos de objetos)
//Ejercicio 1: Contar caracteres en nombres de varios empleados
function contarNombresEmpleados() {
    let empleados = [
        { nombre: "Ana", edad: 22 },
        { nombre: "Santiago", edad: 30 },
        { nombre: "Rosa", edad: 27 }
    ];

    for (let i = 0; i < empleados.length; i++) {
        contarNombre(empleados[i]);

    }
}
contarNombresEmpleados();


//Ejercicio 2: Contar vocales en nombres de empleados
function contarVocalesEmpleados(vocal) {
    let empleados = [
        { nombre: "Andrea", edad: 35 },
        { nombre: "Marcos", edad: 29 },
        { nombre: "Lucía", edad: 40 }
    ];

    for (let i = 0; i < empleados.length; i++) {
        contarVocales(empleados[i], vocal);

    }
}
let buscarVocal_2 = "a"; //Cambiar el nombre de las variables para evitar conflicto de llamado en la función anterior!
contarVocalesEmpleados(buscarVocal_2);


//Ejercicio 3: Invertir los nombres de empleados
function invertirNombresEmpleados() {
    let empleados = [
        { nombre: "Luis", edad: 26 },
        { nombre: "Carmen", edad: 33 },
        { nombre: "Pedro", edad: 24 }
    ];

    for (let i = 0; i < empleados.length; i++) {
        invertirNombre(empleados[i]);

    }
}
invertirNombresEmpleados();


//Ejercicio 4: Comparar longitudes de ciudades de residencia
function compararCiudadesResidencia() {
    let empleados = [
        { nombre: "Carlos", ciudad: "Milagro" },
        { nombre: "Andrea", ciudad: "Guayaquil" },
        { nombre: "José", ciudad: "Quito" }
    ];

    for (let i = 0; i < empleados.length - 1; i++) {
        compararNombres(empleados[i], empleados[i + 1]);

    }
}
compararCiudadesResidencia();


//Ejercicio 5: Obtener iniciales de cargos de varios empleados
function obtenerInicialesCargosEmpleados() {
    let empleados = [
        { cargo: "Director General Académico" },
        { cargo: "Jefe de Laboratorio" },
        { cargo: "Asistente Administrativo" }
    ];

    for (let i = 0; i < empleados.length; i++) {
        obtenerIniciales(empleados[i]);

    }
}
obtenerInicialesCargosEmpleados();
