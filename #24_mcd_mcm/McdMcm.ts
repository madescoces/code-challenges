/*
 * Reto #23
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 * Fecha publicación enunciado: 07/06/22
 * Fecha publicación resolución: 13/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

const Mcd = (a: number, b: number): number => (b === 0 ? a : Mcd(b, a % b))

const Mcm = (numa: number, numb: number): number => Math.abs(numa * numb) / Mcd(numa, numb)

console.log(`MCD between 120 and 12 is: ${Mcd(120, 12)}`)
console.log(`MCM between 50 and 12 is: ${Mcm(50, 12)}`)

export {}