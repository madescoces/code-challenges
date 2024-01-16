/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const IsPrime = (value: number): boolean => {  

  if (value < 2) {
    return false
  }

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false
    }
  }

  return true
}

let count = 0

for (let i = 0; i <= 200; i++) {
  if (IsPrime(i)) {
    console.log(i)
    count++
  }
}

console.log('total de primos encontrados: ', count)