// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  devolverPrimerElemento = array[0];
  return devolverPrimerElemento;
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  devolverUltimoElemento = array[array.length - 1];
  return devolverUltimoElemento;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  obtenerLargoDelArray = array.length;
  return obtenerLargoDelArray;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  incrementarPorUno = array;
  for(var i = 0; i < array.length; i++) {
    incrementarPorUno[i]++;
  }
  return incrementarPorUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  dePalabrasAFrase = palabras[0];
  for(var i = 1; i < palabras.length; i++) {
  dePalabrasAFrase = dePalabrasAFrase + " " + palabras[i];
  }
  return dePalabrasAFrase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
      Estaono = true;
      return Estaono;
    } else {
      Estaono = false;
    }
  }
  return Estaono;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  agregarNumeros = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    agregarNumeros = agregarNumeros + numeros[i];
  }
  return agregarNumeros;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  promedioResultadosTest = resultadosTest[0];
  for(var i = 1; i < resultadosTest.length; i++) {
    promedioResultadosTest = promedioResultadosTest + resultadosTest[i];
  }
  promedioResultadosTest = promedioResultadosTest / (resultadosTest.length);
  return promedioResultadosTest;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  numeroMasGrande = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
  if(numeroMasGrande < numeros[i]) {
    numeroMasGrande = numeros[i];
  }
  }
  return numeroMasGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  multiplicarArgumentos = 0;
  if(arguments[0] !== undefined) {
  multiplicarArgumentos = arguments[0];
  }
  for(var i = 1; i <  arguments.length; i++) {
    multiplicarArgumentos = multiplicarArgumentos * arguments[i];
  }
  return multiplicarArgumentos;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
