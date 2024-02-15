/*
 * Reto #31
 * AÑOS BISIESTOS
 * Fecha publicación enunciado: 01/08/22
 * Fecha publicación resolución: 08/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

const nextLeapYears = (origin: number, amount: number = 30): number[] => {
  const leapYears: number[] = []
  let i = 0

  if (origin < 0) {
    return []
  }

  while (i < amount) {
    if ((origin % 4 === 0 && origin % 100 !== 0) || origin % 400 === 0) {
      leapYears.push(origin)
      i += 1
    }
    origin += 1
  }

  return leapYears
}

console.log(`Next leap years from 1999: ${nextLeapYears(1999)}`)
console.log(`Next leap years from -500: ${nextLeapYears(-500)}`)