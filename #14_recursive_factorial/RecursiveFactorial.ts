/*
 * Reto #13
 * FACTORIAL RECURSIVO
 * Fecha publicación enunciado: 28/03/22
 * Fecha publicación resolución: 04/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
*/

const RecursiveFactorial = (n: number): number | null => {
  return n < 0 ? null : n === 0 || n === 1 ? 1 : RecursiveFactorial(n - 1) * n
}

const number = 5
console.log(`The factorial of ${number} is ${RecursiveFactorial(number)}`)

const number2 = -1
console.log(`The factorial of ${number2} is ${RecursiveFactorial(number2)}`)