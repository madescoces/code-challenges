/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const ToBinary = (number: number): number => {
  if (number < 2) {
    return number
  }

  const result = DivideMe(number, 2)
  return ToBinary(result[0]) * 10 + result[1]
}

type DivideMeResult = [number, number]

const DivideMe = (dividend: number, divisor: number): DivideMeResult => {
  const quotient = Math.floor(dividend / divisor)
  const remainder = dividend % divisor
  return [quotient, remainder]
}

console.log('25 to binary is: ', ToBinary(25))