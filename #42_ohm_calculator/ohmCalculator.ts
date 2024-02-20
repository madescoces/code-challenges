/*
 * Reto #41
 * LA LEY DE OHM
 * Fecha publicación enunciado: 10/10/22
 * Fecha publicación resolución: 17/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que calcule el valor del parámetro perdido correspondiente a la ley de Ohm.
 * - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará el valor del tercero (redondeado a 2 decimales).
 * - Si los parámetros son incorrectos o insuficientes, la función retornará la cadena de texto "Invalid values".
 */

const ohmCalculator = ({ V, R, I }: { V?: number; R?: number; I?: number }) => {
  if ([V, R, I].filter((p) => p === undefined).length > 1) {
    throw new Error(`Invalid or insuficient values, you have to provide ad least two values.`)
  }

  V === undefined
    ? console.log(`Voltage value: ${voltage({ R: R!, I: I! })} volts.`)
    : R === undefined
    ? console.log(`Resistance value: ${resistance({ V: V!, I: I! })} ohms.`)
    : console.log(`Intensity value: ${intensity({ V: V!, R: R! })} amps.`)
}

const intensity = ({ V, R }: { V: number; R: number }, decimals = 2) =>
  R !== 0 ? Number((V / R).toFixed(decimals)) : undefined

const voltage = ({ R, I }: { R: number; I: number }, decimals = 2): number => Number((R * I).toFixed(decimals))

const resistance = ({ V, I }: { V: number; I: number }, decimals = 2) =>
  I !== 0 ? Number((V / I).toFixed(decimals)) : undefined

const testValues = [
  {},
  { V: 5.0 },
  { V: 5.0, R: 4.0 },
  { V: 5.0, I: 4.0 },
  { R: 5.0, I: 4.0 },
  { V: 5.125, R: 4.0 },
  { V: 5.0, I: 4.125 },
  { R: 5.0, I: 4.125 },
  { V: 5.0, R: 0.0 },
  { V: 5.0, I: 0.0 },
  { R: 5.0, I: 0.0 },
  { V: 5.0, R: 4.0, I: 3.0 },
]

testValues.forEach((testValue) => {
  try {
    ohmCalculator(testValue)
  } catch (e) {
    console.error(`${e}`)
  }
})
