/*
 * Reto #38
 * BINARIO A DECIMAL
 * Fecha publicación enunciado: 19/09/22
 * Fecha publicación resolución: 27/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa se encargue de transformar un número binario a decimal sin utilizar
 * funciones propias del lenguaje que lo hagan directamente.
 */

// My lazy way
const binaryToDecimal = (binary: string): number => {
  if (!/^[0-1]+$/.test(binary)) {
    throw new Error(`Invalid binary, the string has to contain 0 and 1 characters only.`)
  }

  const decimal = binary
    .split('')
    .reverse()
    .reduce((acc, digit, index) => {
      return acc + +digit * 2 ** index
    }, 0)
  return decimal
}

// Using only a loop and if statement
const binaryToDecimalTwo = (binary: string): number | null => {
  const length = binary.length
  let decimal: number | null = null

  for (let i = 0; i < length; i++) {
    const char = binary.charAt(length - 1 - i)
    
    if (binary.charAt(i) === '0' || binary.charAt(i) === '1') {
      if (!decimal) {
        decimal = 0
      }
      decimal += +char * 2 ** i
    } else {
      return null
    }
  }

  return decimal
}

const testCases = [
  '00110',
  '01100',
  '000000000',
  '00210',
  '001101001110',
  '00b10',
  '',
  '-00110',
  ' ',
  ' 10011',
  '1O1OO11',
]

testCases.forEach((testCase, index) => {
  try {
    console.log(`\nTest case ${index+1}`)
    console.log(
      `The binary number ${testCase} equals to ${binaryToDecimalTwo(
        testCase
      )} in decimal format. Using loop without string check`
    )
    console.log(`The binary number ${testCase} equals to ${binaryToDecimal(testCase)} in decimal format. Using reduce`)
  } catch (err) {
    console.error(`${err}`)
  }
})
