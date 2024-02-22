/*
 * Reto #43
 * TRUCO O TRATO
 * Fecha publicación enunciado: 24/10/22
 * Fecha publicación resolución: 02/11/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Truco o Trato" y
 * un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco, el programa retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato, el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 */

import { isEven, randomInt } from '../helpers/number'

class Person {
  constructor(public name: string, public age: number, public heigth: number) {}
}

type Halloween = 'TRICK' | 'TREAT'

interface TrickOrTreat {
  type: Halloween
  trickOrTreatQuantity(person: Person): number
}

class AgeTrick implements TrickOrTreat {
  type: Halloween = 'TRICK'
  trickOrTreatQuantity = (person: Person): number => (isEven(person.age) ? 2 : 0)
}

class NameTrick implements TrickOrTreat {
  type: Halloween = 'TRICK'
  trickOrTreatQuantity = (person: Person): number => Math.floor(person.name.length / 2)
}

class HeigthTrick implements TrickOrTreat {
  type: Halloween = 'TRICK'
  trickOrTreatQuantity = (person: Person): number => Math.floor(person.heigth / 100) * 3
}

class AgeTreat implements TrickOrTreat {
  type: Halloween = 'TREAT'
  trickOrTreatQuantity = (person: Person): number => (this.validAge(person.age) ? Math.floor(person.age / 3) : 3)
  private validAge = (age: number) => age <= 10
}

class NameTreat implements TrickOrTreat {
  type: Halloween = 'TREAT'
  trickOrTreatQuantity = (person: Person): number => person.name.length
}

class HeigthTreat implements TrickOrTreat {
  type: Halloween = 'TREAT'
  trickOrTreatQuantity = (person: Person): number =>
    this.validHeigth(person.heigth) ? Math.floor(person.heigth / 50) * 2 : 6
  private validHeigth = (heigth: number) => heigth <= 150
}

const trickOrTreat = (selection: Halloween, persons: Person[]) => {
  const tricks = ['🎃', '👻', '💀', '🕷', '🕸', '🦇']
  const treats = ['🍰', '🍬', '🍡', '🍭', '🍪', '🍫', '🧁', '🍩']
  const trickOrTreatStrategies = [
    new AgeTrick(),
    new NameTrick(),
    new HeigthTrick(),
    new AgeTreat(),
    new NameTreat(),
    new HeigthTreat(),
  ]

  const totalTricksOrTreats = calculateTotalTricksOrTreats(
    trickOrTreatStrategies.filter((trickOrTreat) => trickOrTreat.type === selection),
    persons
  )

  return getRandomElementsFromArray(selection === 'TREAT' ? treats : tricks, totalTricksOrTreats)
}

const calculateTotalTricksOrTreats = (tricksOrTreatsStrategies: TrickOrTreat[], persons: Person[]) =>
  persons.reduce(
    (acc, person) =>
      acc + tricksOrTreatsStrategies.reduce((acc, trickOrTreat) => acc + trickOrTreat.trickOrTreatQuantity(person), 0),
    0
  )

const getRandomElementsFromArray = (elements: string[], quantity: number) => {
  const newElements: string[] = []
  for (let i = 0; i < quantity; i++) {
    newElements.push(elements[randomInt(0, elements.length - 1)])
  }
  return newElements
}

console.log(
  `Tricks: ${trickOrTreat('TRICK', [
    new Person('Brais', 35, 177),
    new Person('Sara', 9, 122),
    new Person('Pedro', 5, 80),
    new Person('Roswell', 3, 54),
  ])}`
)

console.log(
  `Treats received: ${trickOrTreat('TREAT', [
    new Person('Brais', 35, 177),
    new Person('Sara', 9, 122),
    new Person('Pedro', 5, 80),
    new Person('Roswell', 3, 54),
  ])}`
)

export {}
