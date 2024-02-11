/*
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 */

import { GetDigits } from '../helpers/digit'

const IsArmstrongNumber = (number: number): boolean => {
  // This can be done with toString() method, but is more challenging to implement a math function that returns a array of numbers
  const digits = GetDigits(number)
  const pow = digits.length
  return digits.reduce((acum, digit) => acum + digit ** pow, 0) === number
}

const armstrong = 153
const notArmstrong = 334422

console.log(`The number ${armstrong} is${IsArmstrongNumber(armstrong) ? ' ' : ' not '}a Armstrong number.`)
console.log(`The number ${notArmstrong} is${IsArmstrongNumber(notArmstrong) ? ' ' : ' not '}a Armstrong number.`)