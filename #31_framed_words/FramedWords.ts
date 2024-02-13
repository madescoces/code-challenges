/*
 * Reto #30
 * MARCO DE PALABRAS
 * Fecha publicación enunciado: 26/07/22
 * Fecha publicación resolución: 01/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un texto y muestre cada palabra en una línea, formando
 * un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

const framedWords = (words: string, frameSize: number = 2, minTabSpace: number = 2) => {
  const wordArray = words.split(' ')
  const bigWord = wordArray.slice().sort((a, b) => b.length - a.length)[0]
  const lineLength = bigWord.length + (frameSize + minTabSpace) * 2

  console.log('*'.repeat(lineLength))
  wordArray.forEach((word) => {
    const endSpacing = lineLength - word.length - frameSize * 2 - minTabSpace

    console.log(
      '*'
        .repeat(frameSize)
        .concat(' '.repeat(minTabSpace))
        .concat(word)
        .concat(' '.repeat(endSpacing))
        .concat('*'.repeat(frameSize))
    )
  })
  console.log('*'.repeat(lineLength))
}

const text = '¿Qué te parece el reto?'

framedWords(text, 3, 3)
