/*
 * Reto #12
 * ¿ES UN PALÍNDROMO?
 * Fecha publicación enunciado: 21/03/22
 * Fecha publicación resolución: 28/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
*/

const IsPalindrome = (text: string): boolean => {  
  const cleanText = text.toLowerCase().replace(/[^a-z]/g, '')
  const inversedText = cleanText.split('').reverse().join('')
  
  return cleanText === inversedText
}

const palindromeExpression = 'Ana lleva al oso la... ... avellana'

console.log(`The expression is${IsPalindrome(palindromeExpression) ? ' ' : ' not '}a palindrome expression.`)
