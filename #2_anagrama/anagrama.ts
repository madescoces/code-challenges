/* Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */


const Anagrama = (original: string, toCompare: string): boolean => {  
  let originalStrings = original.toLowerCase().split('')
  let toCompareStrings = toCompare.toLowerCase().split('')
  
  if (original !== toCompare && original.length === toCompare.length) {     
    return JSON.stringify(originalStrings.sort()) === JSON.stringify(toCompareStrings.sort())
  }

  return originalStrings.length === 0
}

console.log(Anagrama('pablo', 'pablo'))

console.log(Anagrama('pablo', 'ablop'))

console.log(Anagrama('pablo', 'abldop'))

console.log(Anagrama('pablo', '2ldop'))

console.log(Anagrama('pablo', '2'))