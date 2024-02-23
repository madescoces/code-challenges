/*
 * Reto #45
 * CONTENEDOR DE AGUA
 * Fecha publicación enunciado: 07/10/22
 * Fecha publicación resolución: 14/11/22
 * Dificultad: MEDIA
 *
 * Enunciado: Dado un array de números enteros positivos, donde cada uno representa unidades
 * de bloques apilados, debemos calcular cuantas unidades de agua quedarán atrapadas entre ellos.
 *
 * - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 *
 *        ⏹
 *        ⏹
 *   ⏹💧💧⏹
 *   ⏹💧⏹⏹💧⏹
 *   ⏹💧⏹⏹💧⏹
 *   ⏹💧⏹⏹⏹⏹
 *
 *   Representando bloque con ⏹︎ y agua con 💧, quedarán atrapadas 7 unidades de agua.
 *   Suponemos que existe un suelo impermeable en la parte inferior que retiene el agua.
 */

const leftWall = (blocks: number[]) => blocks.findIndex((b) => b > 0)
const rightWall = (blocks: number[]) => blocks.length - [...blocks].reverse().findIndex((b) => b > 0) - 1
const isWaterBlock = (block: number) => !block

const calculateWaterUnits = (blocks: number[]): number => {
  let waterUnits = 0
  let localBlocks = [...blocks]

  while (
    leftWall(localBlocks) !== rightWall(localBlocks) &&
    leftWall(localBlocks) !== -1 &&
    rightWall(localBlocks) !== localBlocks.length
  ) {
    localBlocks.forEach((block, index) => {
      if (leftWall(localBlocks) < index && index < rightWall(localBlocks)) {
        // Add water units if block is equal to 0
        isWaterBlock(block) && waterUnits++
      }
    })

    localBlocks = localBlocks.map((block) => (block ? block - 1 : block))
  }
  return waterUnits
}

const toEvaluate = [
  [4, 1, 3],
  [4, 0, 3, 6],
  [4, 0, 3, 6, 1, 3],
  [5, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 5],
  [4, 0, 3, 6, 1, 3, 0, 1, 6],
]

// Evaluate every container block to get the total water units of each one
toEvaluate.forEach((blocks) => {
  console.log(`${JSON.stringify(blocks)} Total Water units: ${calculateWaterUnits(blocks)}\n`)
})

// Verify that the original blocks remain unchanged. (unmutable)
console.log(toEvaluate)

export {}
