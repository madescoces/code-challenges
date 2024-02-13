/*
 * Reto #32
 * EL SEGUNDO
 * Fecha publicación enunciado: 08/08/22
 * Fecha publicación resolución: 15/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 */

import { randomListOfNumbers } from '../helpers/number'

const numbers = randomListOfNumbers(12, 1, 10)

const secondBiggest = (numbers: number[], uniques: boolean = false): number | null => {
  const orderedNumbers = Array.from(uniques ? new Set(numbers) : numbers).sort((a: number, b: number) => a - b)
  return orderedNumbers.length >= 2 ? orderedNumbers[orderedNumbers.length - 2] : null
}

console.log(`Original numbers: ${numbers}`)
console.log(`The second biggest number is: ${secondBiggest(numbers)}`)

console.log(`The second unique biggest number is: ${secondBiggest(numbers, true)}`)
