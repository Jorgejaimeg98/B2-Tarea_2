//Bloque 1: Ejercicios con objetos simples (Utilizar parametros en la función)
//Ejercicio 1: Contar caracteres del nombre de un empleado
function contarNombre(empleado) {
    let contarCaracteres = empleado.nombre;

    for (let i = 0; i < contarCaracteres.length; i++) {
        return `El nombre '${empleado.nombre}' tiene ${contarCaracteres.length} caracteres`;

    }
}
let empleador = { nombre: "Ana", edad: 25 };
console.log(contarNombre(empleador));


//Ejercicio 2: Contar apariciones de una vocal en el nombre de un producto
function contarVocales(producto, vocal) {
    let contador = 0;

    for (let i = 0; i < producto.nombre.length; i++) {
        if (producto.nombre[i].toLowerCase() === vocal.toLowerCase()) {
            contador++;

        }
    }
    return `La vocal '${vocal}' aparece ${contador} veces en el nombre '${producto.nombre}'`;

}
let prod = { nombre: "Programador", precio: 100 };
let buscarVocal_1 = "o";
console.log(contarVocales(prod, buscarVocal_1));


//Ejericio 3: Invertir el nombre de una persona
function invertirNombre(persona) {
    let nombreInvertido = "";

    for (let i = persona.nombre.length - 1; i >= 0; i--) {
        nombreInvertido += persona.nombre[i];
    }
    return `El nombre invertido de '${persona.nombre}' es '${nombreInvertido}'`;

}
let pers = { nombre: "Carlos", edad: 30 };
console.log(invertirNombre(pers));


//Ejercicio 4: Comparar logitudes de nombres entre dos empleados
function compararNombres(empleado1, empleado2) {
    let = logitudNombre1 = empleado1.nombre.length;
    let = logitudNombre2 = empleado2.nombre.length;

    if (logitudNombre1 > logitudNombre2) {
        return `El empleado con el nombre más largo es '${empleado1.nombre}' (${logitudNombre1} letras)`;

    } else if (logitudNombre1 < logitudNombre2) {
        return `El empleado con el nombre más largo es '${empleado2.nombre}' (${logitudNombre2} letras)`;

    } else {
        return `Los nombres '${empleado1.nombre}' y '${empleado2.nombre}' tienen la misma longitud`;

    }
}
let empl1 = { nombre: "María", edad: 28 };
let empl2 = { nombre: "Guillermo", edad: 35 };
console.log(compararNombres(empl1, empl2));


function compararCiudades(empleado1, empleado2) {
    let = logitudCity1 = empleado1.ciudad.length;
    let = logitudCity2 = empleado2.ciudad.length;

    if (logitudCity1 > logitudCity2) {
        return `La ciudad con más letras es '${empleado1.ciudad}' (${logitudCity1} letras)`;

    } else if (logitudCity1 < logitudCity2) {
        return `La ciudad con más letras es '${empleado2.ciudad}' (${logitudCity2} letras)`;

    } else {
        return `Los nombres '${empleado1.ciudad}' y '${empleado2.ciudad}' tienen la misma longitud`;

    }
}
let emp_1 = { nombre: "María", edad: 28, ciudad: "Quito" };
let emp_2 = { nombre: "Guillermo", edad: 35, ciudad: "Cuenca" };
console.log(compararCiudades(emp_1, emp_2));


//Ejercicio 5: Obtener iniciales del cargo de un empleado
function obtenerIniciales(empleado) {
    let iniciales = "";
    let palabras = empleado.cargo.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        iniciales += palabras[i][0].toUpperCase() + ".";

    }
    return `Las iniciales del cargo '${empleado.cargo}' son '${iniciales}'`;

}
let empl = { cargo: "Director General Académico" };
console.log(obtenerIniciales(empl));
