/*
 * Reto #22
 * CONJUNTOS
 * Fecha publicación enunciado: 01/06/22
 * Fecha publicación resolución: 07/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
*/

const SetOperations = (arraya: any, arrayb: any, commonElements = true) => {
  const seta = new Set(arraya)
  const setb = new Set(arrayb)

  return commonElements
    ? [...seta].filter((element) => setb.has(element))
    : [...seta].filter((element) => !setb.has(element))
}

const first = [1, 2, 3, 3, 4]
const second = [2, 2, 3, 3, 3, 4, 6]
console.log(`Commont Array elements: ${SetOperations(first, second)}`)
console.log(`Commont Array elements: ${SetOperations(first, second, false)}`)

export {}
