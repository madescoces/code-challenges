/*
 * Reto #36
 * LOS ANILLOS DE PODER
 * Fecha publicación enunciado: 06/09/22
 * Fecha publicación resolución: 14/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron
 * contra otras bondadosas que no quieren que el mal reine sobre sus tierras.
 * Cada raza tiene asociado un "valor" entre 1 y 5:
 * - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)
 * - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)
 * Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:
 * - El resultado puede ser que gane el bien, el mal, o exista un empate. Dependiendo de la
 *   suma del valor del ejército y el número de integrantes.
 * - Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.
 * - Tienes total libertad para modelar los datos del ejercicio.
 * Ej: 1 Peloso pierde contra 1 Orco, 2 Pelosos empatan contra 1 Orco, 3 Pelosos ganan a 1 Orco.
 */

type Pair<T, U> = [T, U]

enum GoodArmy {
  HARFOOT = 1,
  SOUTHERNER = 2,
  DWARF = 3,
  NUMENOREAN = 4,
  ELF = 5,
}

enum EvilArmy {
  SOUTHERNER = 2,
  ORC = 2,
  GOBLIN = 2,
  WARG = 3,
  TROLL = 5,
}

const battle = (good: Pair<GoodArmy, number>[], evil: Pair<EvilArmy, number>[]): string => {
  return power(good) > power(evil)
    ? `The good army wins the battle with a total power of ${power(good)}.`
    : power(evil) > power(good)
    ? `The evil army wins the battle with a total power of ${power(evil)}.`
    : 'The battle ends in a draw.'
}

const power = (army: Pair<GoodArmy | EvilArmy, number>[]): number =>
  army.reduce((acc, [army, amount]) => acc + army * amount, 0)

// First Battle ends in a draw because the power of the armies are equal
console.log(`First Battle: ${battle([[GoodArmy.ELF, 1]], [[EvilArmy.TROLL, 1]])}`)

// Second Battle, Army of good wins
console.log(
  `Second Battle: ${battle(
    [
      [GoodArmy.ELF, 1],
      [GoodArmy.HARFOOT, 1],
    ],
    [[EvilArmy.TROLL, 1]]
  )}`
)

// Third Battle, Army of evil wins
console.log(
  `Third Battle: ${battle(
    [
      [GoodArmy.ELF, 1],
      [GoodArmy.HARFOOT, 1],
    ],
    [
      [EvilArmy.TROLL, 1],
      [EvilArmy.ORC, 1],
    ]
  )}`
)

// Full Scale Battle, Army of good wins
console.log(
  `Final Battle: ${battle(
    [
      [GoodArmy.ELF, 56],
      [GoodArmy.HARFOOT, 80],
      [GoodArmy.DWARF, 5],
    ],
    [
      [EvilArmy.TROLL, 17],
      [EvilArmy.ORC, 51],
      [EvilArmy.WARG, 10],
      [EvilArmy.SOUTHERNER, 2],
    ]
  )}`
)

export {}
