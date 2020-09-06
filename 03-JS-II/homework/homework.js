// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  obtenerMayor = Math.max(x, y)
  return obtenerMayor
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma == "aleman") {
    saludo = "Guten Tag!"
  } else {
    if(idioma == "mandarin") {
      saludo = "Ni Hao!"
     } else {
      if(idioma == "ingles") {
        saludo = "Hello!"
      } else {
        saludo = "Hola!"
      }
      }
  }
  return saludo
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero === 10) {
      esDiezOCinco = true
    } else if(numero === 5) {
        esDiezOCinco = true
      } else {
        esDiezOCinco = false
      }
    return esDiezOCinco
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(50 > numero && numero > 20) {
    estaEnRango = true
  } else {
    estaEnRango = false
  }
  return estaEnRango
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if(numero == Math.floor(numero)) {
    esEntero = true
  } else {
    esEntero = false
  }
  return esEntero
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if(numero % 3 === 0 && numero % 5 === 0){
    fizzBuzz = "fizzbuzz"
  } else if(numero % 3 === 0) {
    fizzBuzz = "fizz"
  } else if(numero % 5 === 0) {
  fizzBuzz = "buzz"
  } else {
    fizzBuzz = numero }
    return fizzBuzz
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero === 0 || numero === 1) {
    esPrimo = false
    return esPrimo
  } else if(numero > 2) {
    for(var i = numero - 1; i != 1; i--) {
      if(numero % i === 0) {
        esPrimo = false
        return esPrimo
  } if(i === 2) {
    esPrimo = true
    return esPrimo
  }  
}
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
