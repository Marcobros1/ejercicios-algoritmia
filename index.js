// Ejercicio 1
// Dado un número por parámetro, devuelve un array con su tabla de multiplicar (del 1 al 10)
// Tabla del 3 --> [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
function tablaMultiplicar(num) {
    const tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(num * i);
    }
    return tabla;
}

console.log("Ejercicio 1 --> Tabla del 3:", tablaMultiplicar(3));

// Ejercicio 2
// Pide números por prompt y los guarda en un array. Al meter un 0 deja de insertar.
// Por último ordena los números de menor a mayor y devuelve el array.
// (prompt devuelve string, hay que convertirlo a entero con parseInt)
function pedirNumeros() {
    const numeros = [];
    let numero = parseInt(prompt("Introduce un número (0 para terminar):"));

    while (numero !== 0) {
        numeros.push(numero);
        numero = parseInt(prompt("Introduce un número (0 para terminar):"));
    }

    numeros.sort((a, b) => a - b);
    return numeros;
}

// Para probarlo en el navegador: pedirNumeros();
// console.log("Ejercicio 2 -->", pedirNumeros());

// Ejercicio 3
// Pide un año por prompt y escribe por consola si es bisiesto o no.
// Bisiestos: múltiplos de 4, salvo los múltiplos de 100 (que NO lo son),
// aunque los múltiplos de 400 sí lo son.
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

function comprobarBisiesto() {
    const anio = parseInt(prompt("Introduce un año:"));
    if (esBisiesto(anio)) {
        console.log(anio + " es bisiesto");
    } else {
        console.log(anio + " no es bisiesto");
    }
}

// Para probarlo en el navegador: comprobarBisiesto();
// console.log("Ejercicio 3 --> 2024:", esBisiesto(2024), "| 1900:", esBisiesto(1900), "| 2000:", esBisiesto(2000));

// Ejercicio 4
// Cuenta cuántas veces aparece un carácter en todas las palabras de un array.
// Tip: doble bucle (bucle de palabras + bucle de caracteres de cada palabra)
// Ojo: compara el carácter tal cual (en "cAfe" la "A" mayúscula NO se cuenta con "a")
function contarCaracteres(array, caracter) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === caracter) {
                total++;
            }
        }
    }
    return total;
}

const data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
console.log("Ejercicio 4 -->", contarCaracteres(data, "a"));
