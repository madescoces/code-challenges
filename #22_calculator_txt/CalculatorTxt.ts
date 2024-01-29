/*
 * Reto #21
 * CALCULADORA .TXT
 * Fecha publicación enunciado: 23/05/22
 * Fecha publicación resolución: 01/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
*/

import * as fs from 'fs'
import * as path from 'path'

const Operations = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => {
    if (b === 0) {
      throw new Error(`Can't divide by ${b}`)
    }
    return a / b
  },
}

const CalculatorTxt = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let result: number | null = null
    let lastOperator: string | null = null
    let fileError = false

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Error reading file: ${err.message}`))
      } else {
        data.split('\n').forEach((line) => {
          const number = +line

          if (+number) {
            if (result === null) {
              result = number
            } else {
              try {
                result = Operations[lastOperator](result, number)
                lastOperator = null
              } catch (e) {
                fileError = true
                return
              }
            }
          } else {
            if (lastOperator === null) {
              lastOperator = line
            } else {
              fileError = true
              return
            }
          }
        })

        resolve(fileError || lastOperator !== null ? "The operations couldn't be resolved" : result.toString())
      }
    })
  })
}

try {
  const filePath = path.join(__dirname, 'data.txt')
  CalculatorTxt(filePath)
    .then((result) => {
      console.log(`Txt calculation result: ${result}`)
    })
    .catch((err) => {
      console.error(`${err}`)
    })
} catch (err) {
  console.error(`${err}`)
}
