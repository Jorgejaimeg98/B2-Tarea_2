//Bloque 1: Ejercicios con objetos simples (Utilizar parametros en la función)
//Ejercicio 1: Contar caracteres del nombre de un empleado
function contarNombre(empleado) {
    let contarCaracteres = empleado.nombre;

    for (let i = 0; i < contarCaracteres.length; i++) {
        console.log(`El nombre '${empleado.nombre}' tiene ${contarCaracteres.length} caracteres`);

    }
}
let empleador = { nombre: "Ana", edad: 25 };
contarNombre(empleador);


//Ejercicio 2: Contar apariciones de una vocal en el nombre de un producto
function contarVocales(producto, vocal) {
    let contador = 0;

    for (let i = 0; i < producto.nombre.length; i++) {
        if (producto.nombre[i].toLowerCase() === vocal.toLowerCase()) {
            contador++;

        }
    }
    console.log(`La vocal '${vocal}' aparece ${contador} veces en el nombre '${producto.nombre}'`);

}
let prod = { nombre: "Programador", precio: 100 };
let vocales = "o";
contarVocales(prod, vocales);


//Ejericio 3: Invertir el nombre de una persona
function invertirNombre(persona) {
    let nombreInvertido = "";

    for (let i = persona.nombre.length - 1; i >= 0; i--) {
        nombreInvertido += persona.nombre[i];
    }
    console.log(`El nombre invertido de '${persona.nombre}' es '${nombreInvertido}'`);

}
let pers = { nombre: "Carlos", edad: 30 };
invertirNombre(pers);


//Ejercicio 4: Comparar logitudes de nombres entre dos empleados
function compararNombres(empleado1, empleado2) {
    let = logitudNombre1 = empleado1.nombre.length;
    let = logitudNombre2 = empleado2.nombre.length;

    if (logitudNombre1 > logitudNombre2) {
        console.log(`El empleado con el nombre más largo es '${empleado1.nombre}' (${empleado1.nombre.length} letras)`);

    } else if (logitudNombre1 < logitudNombre2) {
        console.log(`El empleado con el nombre más largo es '${empleado2.nombre}' (${empleado2.nombre.length} letras)`);

    } else {
        console.log(`Los nombres '${empleado1.nombre}' y '${empleado2.nombre}' tienen la misma longitud`);

    }
}
let empl1 = { nombre: "María", edad: 28 };
let empl2 = { nombre: "Guillermo", edad: 35 };
compararNombres(empl1, empl2);


//Ejercicio 5: Obtener iniciales del cargo de un empleado
function obtenerIniciales(empleado) {
    let iniciales = "";
    let palabras = empleado.cargo.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        iniciales += palabras[i][0].toUpperCase() + ".";

    }
    console.log(`Las iniciales del cargo '${empleado.cargo}' son '${iniciales}'`);

}
let empl = { cargo: "Director General Académico" };
obtenerIniciales(empl);
