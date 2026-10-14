# Ejercicios algoritmia - OPCIONAL

Ejercicios prácticos de algoritmía en **JavaScript (Node.js)** del curso de fundamentos de programación de [The Bridge](https://thebridge.es/).

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior

## Ejercicios

Todo está en [`index.js`](index.js):

1. **Tabla de multiplicar** — `tablaMultiplicar(num)` devuelve un array con la tabla de multiplicar de `num` del 1 al 10.
2. **Pedir números** — `pedirNumeros()` pide números por la terminal hasta que se introduce el `0` (que no se guarda), los almacena en un array y lo devuelve ordenado de menor a mayor. Usa `node:readline/promises` con `async/await`, valida la entrada y pide de nuevo si se meten letras o símbolos.
3. **Año bisiesto** — `esBisiesto(anio)` devuelve `true` si el año es bisiesto: múltiplos de 4, salvo los múltiplos de 100 (que NO lo son), aunque los múltiplos de 400 sí lo son.
4. **Contar caracteres** — `contarCaracteres(array, caracter)` cuenta cuántas veces aparece `caracter` en todas las palabras del array. Compara el carácter tal cual, distinguiendo mayúsculas y minúsculas (en `cAfe` la `A` mayúscula NO se cuenta con `a`).

## Ejecutar

```bash
node index.js
```

Al arrancar imprime el ejercicio 1 y, a través de la función `main()`, ejecuta los ejercicios 2 (interactivo por terminal), 3 y 4 con datos de ejemplo.
