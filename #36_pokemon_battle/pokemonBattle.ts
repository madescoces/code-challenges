/*
 * Reto #35
 * BATALLA POKÉMON
 * Fecha publicación enunciado: 29/08/22
 * Fecha publicación resolución: 06/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 */

enum PokemonType {
  WATER = 'Water',
  FIRE = 'Fire',
  GRASS = 'Grass',
  ELECTRIC = 'Electric',
}

const effectivenessChart = {
  Water: [PokemonType.FIRE],
  Fire: [PokemonType.GRASS],
  Grass: [PokemonType.WATER],
  Electric: [PokemonType.WATER],
}

const BASEDAMAGE = 50

const battle = (typeAtk: PokemonType, typeDef: PokemonType, atk: number, def: number): number | null => {
  if (atk < 1 || atk > 100 || def < 1 || def > 100) {
    console.error('\nInvalid atk or def value, valid values must be between 1 and 100')
    return null
  }

  let effectivity = 1

  if (effectivenessChart[typeAtk].includes(typeDef)) {
    effectivity = 2
    console.log(`\nSuper effective attack!!!`)
  } else if (effectivenessChart[typeDef].includes(typeAtk)) {
    effectivity = 0.5
    console.log(`\nNot effective attack :(`)
  } else {console.log(`\nNormal attack`)}

  const damage = BASEDAMAGE * (atk / def) * effectivity

  return +damage.toFixed(1)
}

console.log(`Total damage done: ${battle(PokemonType.WATER, PokemonType.FIRE, 50, 30)}`)
console.log(`Total damage done: ${battle(PokemonType.WATER, PokemonType.FIRE, 99, -10)}`)
console.log(`Total damage done: ${battle(PokemonType.WATER, PokemonType.FIRE, 101, 99)}`)
console.log(`Total damage done: ${battle(PokemonType.FIRE, PokemonType.WATER, 50, 30)}`)
console.log(`Total damage done: ${battle(PokemonType.FIRE, PokemonType.FIRE, 50, 30)}`)
console.log(`Total damage done: ${battle(PokemonType.GRASS, PokemonType.ELECTRIC, 30, 50)}`)
