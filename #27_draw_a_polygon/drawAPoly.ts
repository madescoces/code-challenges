/*
 * Reto #26
 * CUADRADO Y TRIÁNGULO 2D
 * Fecha publicación enunciado: 27/06/22
 * Fecha publicación resolución: 07/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

type PolygonType = 'SQUARE' | 'PYRAMID' | 'TRIANGLE' | 'DIAMOND'

const drawPolygon = (polygonType: PolygonType, length: number) => {
  if (length <= 0 || !Number.isInteger(length)) {
    console.log(`\nInvalid length: ${length}, length must be a positive integer.\n`)
    return
  }

  let realLength = length
  switch (polygonType) {
    case 'SQUARE':
      console.log(`\nA square of length ${length}\n`)
      break
    case 'DIAMOND':
      console.log(`\nA diamond of length ${length}\n`)
      realLength = 2 * length - 1
      break
    case 'TRIANGLE':
      console.log(`\nA triangle of length ${length}\n`)
      break
    case 'PYRAMID':
      console.log(`\nA pyramid of height ${length}\n`)
      break
    default:
      console.log(`\nUnknown polygon type: ${polygonType}\n`)
      return
  }

  for (let i = 1; i <= realLength; i++) {
    switch (polygonType) {
      case 'SQUARE':
        process.stdout.write('* '.repeat(realLength))
        break
      case 'TRIANGLE':
        process.stdout.write('* '.repeat(i))
        break
      case 'PYRAMID':
        process.stdout.write('  '.repeat(length - i) + '* '.repeat(2 * i - 1))
        break
      case 'DIAMOND':
        const spaces = Math.abs(length - i)
        const stars = 2 * (length - spaces) - 1
        process.stdout.write('  '.repeat(spaces) + '* '.repeat(stars))
        break
    }
    process.stdout.write('\n')
  }
}

drawPolygon('SQUARE', 5)
drawPolygon('TRIANGLE', 5)
drawPolygon('PYRAMID', 4)
drawPolygon('DIAMOND', 5)
drawPolygon('DIAMOND', 0)
drawPolygon('DIAMOND', 2.1)
