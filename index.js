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
// Pide números por terminal y los guarda en un array. Al meter un 0 deja de insertar.
// Por último ordena los números de menor a mayor y devuelve el array.
// readline lo usamos para poder pedir datos por terminal. Al poner promises podemos usar await y no tener que usar callbacks.
// Es obvio recalcar que stdin y stdout son la entrada y salida de la terminal, respectivamente. Se pueden renombrar como se quiera.
// (la entrada de readline devuelve un string, hay que convertirlo a entero)
const readline = require("node:readline/promises");
const { stdin: entrada, stdout: salida } = require("node:process");

// El uso de async es obligatorio para poder usar await.
// createInterface crea un objeto que permite leer y escribir en la terminal.
// asyncIterator permite usar un bucle while para leer línea a línea de la terminal.
// Si intentas meter numeros decimales el programa los convertirá a enteros (parseInt) y si metes letras o símbolos te pedirá que metas un número entero.
async function pedirNumeros() {
    const numeros = [];
    const terminal = readline.createInterface({ input: entrada, output: salida });
    const lineas = terminal[Symbol.asyncIterator]();

    try {
        while (true) {
            salida.write("Introduce un número (0 para terminar): ");
            const { value: respuesta, done } = await lineas.next();
            if (done) {
                break;
            }
            const numero = parseInt(respuesta, 10);

            if (Number.isNaN(numero)) {
                console.log("Entrada no válida. Introduce un número entero.");
                continue;
            }
            if (numero === 0) {
                break;
            }
            numeros.push(numero);
        }
    } finally {
        terminal.close();
    }

    numeros.sort((a, b) => a - b);
    return numeros;
}

// Ejercicio 3
// Recibe un año y escribe por consola si es bisiesto o no.
// Bisiestos: múltiplos de 4, salvo los múltiplos de 100 (que NO lo son),
// aunque los múltiplos de 400 sí lo son.
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

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

async function main() {
    console.log("Ejercicio 2 -->", await pedirNumeros());
    console.log("Ejercicio 3 --> 2024:", esBisiesto(2024), "| 1900:", esBisiesto(1900), "| 2000:", esBisiesto(2000));
    console.log("Ejercicio 4 -->", contarCaracteres(data, "o"));
}

main();
