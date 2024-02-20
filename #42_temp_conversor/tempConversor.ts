/*
 * Reto #42
 * CONVERSOR DE TEMPERATURA
 * Fecha publicación enunciado: 17/10/22
 * Fecha publicación resolución: 24/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que transforme grados Celsius en Fahrenheit y viceversa.
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°" y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 * - ¿Quieres emplear lo aprendido en este reto?
 *   Revisa el reto mensual y crea una App: https://retosdeprogramacion.com/mensuales2022
 */

const tempConversor = (temperature: string) => {
  const validFormat = /^-?\d+°(?:[CF])$/
  const trimedTemperature = temperature.replace(/\s/g, '')

  if (!validFormat.test(trimedTemperature)) {
    throw new Error(`Invalid temperature format, valid formats are like 12°C or 12°F`)
  }

  const value = +trimedTemperature.match(/^-?\d+/)!![0]

  trimedTemperature.includes('C')
    ? console.log(`${value}° Celsius are equal to: ${(value * (9 / 5) + 32).toFixed(2)}° Fahrenheit.`)
    : console.log(`${value}° Fahrenheit are equal to: ${((value - 32) * (5 / 9)).toFixed(2)}° Celsius.`)
}

const testValues = [
  '100°C',
  '100°F',
  '-100°C',
  '212°F',
  '-148°F',
  '100C',
  '100F',
  '100',
  '100',
  '- 32 °C ',
  '- 32 °F ',
  '100A°C',
  '100A°F',
  '°C',
  '°F',
]

testValues.forEach((value) => {
  try {
    tempConversor(value)
  } catch (e) {
    console.error(`${e}`)
  }
})

export {}
