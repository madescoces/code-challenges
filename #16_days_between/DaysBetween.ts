/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
*/

import { IsValidDate } from '../helpers/Date'

const MILISECONS_DAY = 86400000

// Returns total days between two dates
const DaysBetween = (from: string, to: string): number => {
  const secondsBetween = Math.abs(Date.parse(Iso8601Date(to)) - Date.parse(Iso8601Date(from))) 
  return secondsBetween/MILISECONS_DAY
}

// Converts dd/MM/yyyy format to yyyy/MM/dd format
const Iso8601Date = (date: string): string => {
  if (!IsValidDate(date)) {
    throw new Error(`Invalid date format or day/month too big, valid format is "dd/MM/yyyy"`)
  }
  return date.split('/').reverse().join('/')
}

// Evaluating function
const from = '10/02/2015'
const to = '22/03/2015'

console.log(`Days between ${from} and ${to} are ${DaysBetween(from, to)}`)

// Evaluating bad date format
try{
  console.log(`Days between ${'32/02/2020'} and ${to} are ${DaysBetween("32/02/2020", to)}`)
} catch (err){
  console.log(`${err}`)
}