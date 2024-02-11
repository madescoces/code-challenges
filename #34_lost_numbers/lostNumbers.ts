/*
 * Reto #34
 * LOS NÚMEROS PERDIDOS
 * Fecha publicación enunciado: 22/08/22
 * Fecha publicación resolución: 29/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

import { isAsc, isDesc } from '../helpers/number'
import { range } from '../helpers/range'

class LostNumbersException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'LostNumbersException'
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

const lostNumbers = (numbers: number[]): number[] => {
  if (numbers.length < 2) {
    throw new LostNumbersException('Array length must be more than 1')
  }

  if (!isOrdered(numbers)) {
    throw new LostNumbersException('Invalid order, the array must be ordered')
  }

  const from = Math.min(...numbers)
  const length = Math.max(...numbers) - from  
  const asc = numbers[0] < numbers[numbers.length - 1]  
  const difference = range(from, length).filter((n) => !numbers.includes(n))

  return asc ? difference : difference.reverse()
}

const isOrdered = (numbers: number[]): boolean => isAsc(numbers) || isDesc(numbers)

const examples = [
  [1],
  [1, 3, 5],
  [5, 3, 1],
  [5, 1],
  [-5, 1],
  [5, 5],
  [1, 3, 3, 5],
  [5, 7, 1],
  [10, 7, 7, 1],
]

examples.forEach((example) => {
  try {
    console.log(`Lost numbers for the array ${example}: ${lostNumbers(example)}\n`)
  } catch (err) {
    if (err instanceof LostNumbersException) {
      console.log(`${err}\n`)
    }
  }
})