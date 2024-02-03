/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
*/

enum RPSValues {
  Rock = 'R',
  Paper = 'P',
  Scissors = 'S',
}

type RPSMatch = [RPSValues, RPSValues]

const winConditions: Map<RPSValues, RPSValues> = new Map([
  [RPSValues.Rock, RPSValues.Scissors],
  [RPSValues.Paper, RPSValues.Rock],
  [RPSValues.Scissors, RPSValues.Paper],
])

const RockPaperScissors = (values: RPSMatch[]): string => {
  let playerOneWins = 0
  let playerTwoWins = 0

  values.forEach(([playerOne, playerTwo]) => {
    if (winConditions.get(playerOne)?.includes(playerTwo)) {
      playerOneWins += 1
    } else if (winConditions.get(playerTwo)?.includes(playerOne)) {
      playerTwoWins += 1
    }
  })

  return playerOneWins === playerTwoWins ? 'Tie' : playerOneWins > playerTwoWins ? 'Player One Wins' : 'Player Two Wins'
}

const matchOne: RPSMatch[] = [
  [RPSValues.Rock, RPSValues.Paper],
  [RPSValues.Scissors, RPSValues.Scissors],
  [RPSValues.Rock, RPSValues.Rock],
]

const matchTwo: RPSMatch[] = [
  [RPSValues.Paper, RPSValues.Paper],
  [RPSValues.Scissors, RPSValues.Scissors],
  [RPSValues.Rock, RPSValues.Rock],
]

const matchThree: RPSMatch[] = [
  [RPSValues.Paper, RPSValues.Paper],
  [RPSValues.Scissors, RPSValues.Scissors],
  [RPSValues.Paper, RPSValues.Rock],
]

console.log(`Game 1 Result: ${RockPaperScissors(matchOne)}`)
console.log(`Game 2 Result: ${RockPaperScissors(matchTwo)}`)
console.log(`Game 3 Result: ${RockPaperScissors(matchThree)}`)