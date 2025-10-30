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
