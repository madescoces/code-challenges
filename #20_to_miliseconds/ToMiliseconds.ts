/*
 * Reto #19
 * CONVERSOR TIEMPO
 * Fecha publicación enunciado: 09/05/22
 * Fecha publicación resolución: 16/05/22
 * Dificultad: FACIL
 *
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
*/

const ToMiliSeconds = (days: number, hours: number, minutes: number, seconds: number): number => {
  const milisecondsInSeconds = 1000
  const milisecondsInMinutes = 60 * milisecondsInSeconds
  const milisecondsInHours = 60 * milisecondsInMinutes
  const milisecondsInDays = 24 * milisecondsInHours

  return (
    days * milisecondsInDays +
    hours * milisecondsInHours +
    minutes * milisecondsInMinutes +
    seconds * milisecondsInSeconds
  )
}

const day = 22
const hour = 22
const minute = 59
const second = 10

console.log(
  `Total mileseconds in ${day} days ${hour} hours ${minute} minutes ${second} seconds -> ${ToMiliSeconds(day, hour, minute, second)}`
)