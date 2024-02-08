/*
 * Reto #29
 * ORDENA LA LISTA
 * Fecha publicación enunciado: 18/07/22
 * Fecha publicación resolución: 26/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */

import { randomListOfNumbers } from '../helpers/RandomNumber'

type OrderType = 'asc' | 'desc'

const sortedArray = (array: number[], order: OrderType = 'asc'): number[] => {
  if (array.length < 2) {
    return array
  }

  const posiblePivots = [array[0], array[Math.floor(array.length / 2)], array[array.length - 1]]
  let pivot = posiblePivots.find((p) => p !== Math.min(...posiblePivots) && p !== Math.max(...posiblePivots))

  if (pivot === undefined) {
    pivot = array[0]
  }

  const lesser = array.slice(1).filter((element) => element < pivot!!)
  const greater = array.slice(1).filter((element) => element >= pivot!!)

  return order === 'asc'
    ? [...sortedArray(lesser, order), pivot, ...sortedArray(greater, order)]
    : [...sortedArray(greater, order), pivot, ...sortedArray(lesser, order)]
}

// Random number list
const numberList = randomListOfNumbers(1, 100)

// Unordered list
console.log(numberList)

// Ordered list
console.log(sortedArray(numberList))

// Ordered list desc
console.log(sortedArray(numberList, 'desc'))
