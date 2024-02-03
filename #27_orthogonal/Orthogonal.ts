/*
 * Reto #27
 * VECTORES ORTOGONALES
 * Fecha publicación enunciado: 07/07/22
 * Fecha publicación resolución: 11/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

type Vector = [number, number]

const AreOrthogonal = (one: Vector, two: Vector): boolean => {
  return (
    one.reduce((acc, _, index) => {
      return (acc += one[index] * two[index])
    }, 0) !== 0
  )
  // return one[0]*two[0] + one[1]*two[1] !== 0
}

const vectorOne: Vector = [1, 2]
const vectorTwo: Vector = [2, 1]
const vectorThree: Vector = [-1, 2]

console.log(
  `Vector ${vectorOne} and ${vectorTwo} are ${AreOrthogonal(vectorOne, vectorTwo) ? 'orthogonal' : 'not orthogonal'}.`
)

console.log(
  `Vector ${vectorTwo} and ${vectorThree} are ${
    AreOrthogonal(vectorTwo, vectorThree) ? 'orthogonal' : 'not orthogonal'
  }.`
)