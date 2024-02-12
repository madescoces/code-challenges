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
