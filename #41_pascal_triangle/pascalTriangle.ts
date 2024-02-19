/*
 * Reto #40
 * TRIÁNGULO DE PASCAL
 * Fecha publicación enunciado: 03/10/22
 * Fecha publicación resolución: 10/10/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que sea capaz de dibujar el "Triángulo de Pascal" indicándole
 * únicamente el tamaño del lado.
 * - Aquí puedes ver rápidamente cómo se calcula el triángulo:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 */

import { recursiveFactorial } from '../helpers/number'

const pascalTriangle = (size: number) => {
  const values: number[][] = []

  for (let i = 0; i < size; i++) {
    values[i] = pascalFile(i)
  }
  return values
}

const pascalFile = (fileNumber: number) => {
  const values: number[] = []
  for (let i = 0; i <= fileNumber; i++) {
    values.push(recursiveFactorial(fileNumber)!! / (recursiveFactorial(i)!! * recursiveFactorial(fileNumber - i)!!))
  }
  return values
}

const printPascalTriangle = (triangle: number[][]) => {
  for (let i = 0; i < triangle.length; i++) {
    const row = triangle[i].join(' ') // Convertir la fila del array en un string separado por espacios
    const spaces = ' '.repeat(triangle.length - i - 1) // Espacios para alinear el triángulo
    console.log(spaces + row)
  }
}

printPascalTriangle(pascalTriangle(4))
