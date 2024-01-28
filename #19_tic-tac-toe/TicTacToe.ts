/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
*/

const TicTacToe = (array: TicTacToeValue[][]): TicTacToeResult => {
  let totalX = 0
  let totalO = 0
  const flatArray: TicTacToeValue[] = []
  const toWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ]
  let result = TicTacToeResult.DRAW

  if (array.length != 3) {
    return TicTacToeResult.NULL
  }

  array.forEach((row) => {
    if (row.length != 3) {
      return TicTacToeResult.NULL
    }

    row.forEach((cell) => {
      flatArray.push(cell)
      totalX += cell === TicTacToeValue.X ? 1 : 0
      totalO += cell === TicTacToeValue.O ? 1 : 0
    })
  })

  if (Math.abs(totalX - totalO) > 1) {
    return TicTacToeResult.NULL
  }

  for (const condition of toWin) {
    if (
      flatArray[condition[0]] !== TicTacToeValue.EMPTY &&
      flatArray[condition[0]] === flatArray[condition[1]] &&
      flatArray[condition[0]] === flatArray[condition[2]]
    ) {
      let winner = flatArray[condition[0]]

      if (
        result !== TicTacToeResult.DRAW &&
        (result === TicTacToeResult.O ? TicTacToeValue.O : TicTacToeValue.X) !== winner
      ) {
        return TicTacToeResult.NULL
      }

      result = winner === TicTacToeValue.X ? TicTacToeResult.X : TicTacToeResult.O
    }
  }

  return result
}

enum TicTacToeValue {
  X = 'X',
  O = 'O',
  EMPTY = 'EMPTY',
}

enum TicTacToeResult {
  X = 'X',
  O = 'O',
  DRAW = 'DRAW',
  NULL = 'NULL',
}

const windCondition = [[0]]

const match_one = [
  [TicTacToeValue.X, TicTacToeValue.O, TicTacToeValue.X],
  [TicTacToeValue.O, TicTacToeValue.X, TicTacToeValue.O],
  [TicTacToeValue.O, TicTacToeValue.O, TicTacToeValue.X],
]

const match_two = [
  [TicTacToeValue.EMPTY, TicTacToeValue.O, TicTacToeValue.X],
  [TicTacToeValue.EMPTY, TicTacToeValue.X, TicTacToeValue.O],
  [TicTacToeValue.EMPTY, TicTacToeValue.O, TicTacToeValue.X],
]

const match_three = [
  [TicTacToeValue.O, TicTacToeValue.O, TicTacToeValue.O],
  [TicTacToeValue.O, TicTacToeValue.X, TicTacToeValue.X],
  [TicTacToeValue.O, TicTacToeValue.X, TicTacToeValue.X],
]

const match_four = [
  [TicTacToeValue.X, TicTacToeValue.O, TicTacToeValue.X],
  [TicTacToeValue.X, TicTacToeValue.X, TicTacToeValue.O],
  [TicTacToeValue.X, TicTacToeValue.X, TicTacToeValue.X],
]

try {
  console.log('TicTacToe Result: ', TicTacToe(match_one))
  console.log('TicTacToe Result: ', TicTacToe(match_two))
  console.log('TicTacToe Result: ', TicTacToe(match_three))
  console.log('TicTacToe Result: ', TicTacToe(match_four))
} catch (err) {
  console.error(`${err}`)
}
