/*
 * Reto #24
 * ITERATION MASTER
 * Fecha publicación enunciado: 13/06/22
 * Fecha publicación resolución: 20/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.
 */

const FROM = 1
const TO = 10

// Using for method
const IterateFor = (from: number, to: number) => {
  for (let i = from; i <= to; i++) {
    console.log(i)
  }
}

console.log(`\nFor Iteretion ${FROM} to ${TO}`)
IterateFor(FROM, TO)

// Using while method
const IterateWhile = (from: number, to: number) => {
  let i = from
  while (i <= to) {
    console.log(i++)
  }
}

console.log(`\nWhile Iteretion ${FROM} to ${TO}`)
IterateWhile(FROM, TO)

// Using do while method
const IterateDoWhile = (from: number, to: number) => {
  let i = from
  do {
    console.log(i++)
  } while (i <= to)
}

console.log(`\nDo While Iteretion ${FROM} to ${TO}`)
IterateDoWhile(FROM, TO)

// Using recursive method
const IterateRecursive = (from: number, to: number): number => {
  console.log(from)
  if (from === to) {
    return from
  }
  return IterateRecursive(from + 1, to)
}

console.log(`\nRecursive Iteretion ${FROM} to ${TO}`)
IterateRecursive(FROM, TO)

// Using forEach method
const IterateForEach = (from: number, to: number) => {
  Array.from({ length: to }, (_, index) => from + index).forEach((n) => console.log(n))
}

console.log(`\nForEach Iteretion ${FROM} to ${TO}`)
IterateForEach(FROM, TO)

// Using map method
const IterateMap = (from: number, to: number) => {
  Array.from({ length: to }, (_, index) => from + index).map((n) => console.log(n))
}

console.log(`\nForEach IterateMap ${FROM} to ${TO}`)
IterateMap(FROM, TO)

// Using map method
const IterateFilter = (from: number, to: number) => {
  Array.from({ length: to }, (_, index) => from + index).filter((value) => {
    console.log(value)
    return true
  })
}

console.log(`\nForEach IterateFilter ${FROM} to ${TO}`)
IterateFilter(FROM, TO)

export {}