/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Fecha publicación enunciado: 07/02/22
 * Fecha publicación resolución: 14/02/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const InvertString = (string: string): string => {
  let current = string.length - 1
  const result = []

  for (let letter of string) {
    result[current] = letter
    current--
  }

  return result.join('')
}

console.log('Inversed word: ', InvertString('happycoding'))