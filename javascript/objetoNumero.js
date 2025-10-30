//Bloque 3: Ejercicios númericos aplicados a objetos
//ejercicio 1: Promedio de calificaciones mayores a 70 (en empleados)
function promedioCalificacionesEmpleados() {
    let empleados = [
        { nombre: "Ana", calificacion: 65 },
        { nombre: "Luis", calificacion: 80 },
        { nombre: "Carla", calificacion: 90 },
        { nombre: "José", calificacion: 50 },
        { nombre: "Marta", calificacion: 75 }
    ];

    let suma = 0;
    let contador = 0;

    for (let i = 0; i < empleados.length; i++) {

        if (empleados[i].calificacion > 70) {
            suma += empleados[i].calificacion;
            contador++;

        }
    }

    let promedio = suma / contador;
    return `El promedio de calificaciones mayores a 70 es: ${promedio.toFixed(2)}`;

}
console.log(`\n`);
console.log(promedioCalificacionesEmpleados());


//Ejercicio 2: Contar empleados con edad negativa o inválida
function contarEmpleadosEdadInvalida() {
    let empleados = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Luis", edad: -5 },
        { nombre: "Carla", edad: 0 },
    ];

    let contador = 0;

    for (let i = 0; i < empleados.length; i++) {

        if (empleados[i].edad <= 0) {
            contador++;

        }
    }   
    return `Número de empleados con edades inválida: ${contador}`;

}
console.log(contarEmpleadosEdadInvalida());


//Ejercicio 3: Promedio de edad: mayores vs. menores de edad
function promedioEdadMayoresMenores() {
    let empleados = [
        { nombre: "Ana", edad: 17 },
        { nombre: "Luis", edad: 20 },
        { nombre: "Carla", edad: 35 },
        { nombre: "José", edad: 15 },
        { nombre: "Marta", edad: 18 }
    ];

    let sumaMayores = 0;
    let contadorMayores = 0;
    let sumaMenores = 0;
    let contadorMenores = 0;

    for (let i = 0; i < empleados.length; i++) {

        if (empleados[i].edad >= 18) {
            sumaMayores += empleados[i].edad;
            contadorMayores++;

        } else {
            sumaMenores += empleados[i].edad;
            contadorMenores++;

        }
    }

    let promedioMayores = sumaMayores / contadorMayores;
    let promedioMenores = sumaMenores / contadorMenores;
    return `El promedio de edad de empleados mayores de edad es: ${promedioMayores.toFixed(2)}\nEl promedio de edad de empleados menores de edad es: ${promedioMenores.toFixed(2)}`;

}
console.log(promedioEdadMayoresMenores());


//Ejercicio 4: Mostrar la tabla de multiplicar del salario (1 a 10)
function tablaMultiplicarSalario(empleado) {
    let resultados = [];

    console.log(`Tabla de multiplicar del salario (${empleado.salario}):`);

    for (let i = 1; i <= 10; i++) {
        let resultado = empleado.salario * i;
        resultados.push(resultado);

    }
    return resultados.join(", ");

}
let emp = { nombre: "Luis", salario: 300 };
console.log(tablaMultiplicarSalario(emp));
/* function tablaMultiplicarSalario(empleado) {
    console.log(`Tabla de multiplicar del salario (${empleado.salario}):`);

    for (let i = 1; i <= 10; i++) {
        let resultado = empleado.salario * i;
        console.log(`${resultado}`);

    }
}

let emp = { nombre: "Luis", salario: 300 };
tablaMultiplicarSalario(emp); */


//Ejercicio 5: Promedio de salarios pares e impares
function promedioSalariosParesImpares() {
    let empleados = [   
        { nombre: "Ana", salario: 450 },
        { nombre: "Luis", salario: 500 },
        { nombre: "Carla", salario: 625 },
        { nombre: "José", salario: 800 },
        { nombre: "Marta", salario: 705 }
    ];

    let sumaPares = 0;
    let contadorPares = 0;
    let sumaImpares = 0;
    let contadorImpares = 0;

    for (let i = 0; i < empleados.length; i++) {

        if (empleados[i].salario % 2 === 0) {
            sumaPares += empleados[i].salario;
            contadorPares++;

        } else {
            sumaImpares += empleados[i].salario;
            contadorImpares++;

        }
    }

    let promedioPares = sumaPares / contadorPares;
    let promedioImpares = sumaImpares / contadorImpares;
    return `El promedio de salarios pares es: ${promedioPares.toFixed(2)}\nEl promedio de salarios impares es: ${promedioImpares.toFixed(2)}`;

}
console.log(promedioSalariosParesImpares());