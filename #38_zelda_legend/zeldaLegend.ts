/*
 * Reto #37
 * LOS LANZAMIENTOS DE "THE LEGEND OF ZELDA"
 * Fecha publicación enunciado: 14/09/22
 * Fecha publicación resolución: 19/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: ¡Han anunciado un nuevo "The Legend of Zelda"! Se llamará "Tears of the Kingdom"
 * y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos "The Legend of Zelda" de la historia?
 * Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento (si no encuentras el día exacto
 *   puedes usar el mes, o incluso inventártelo)
 */
import { YearsDays, parseDate, yearsAndDaysBetweenTwoDates } from '../helpers/date'

// Simulating a object from API requests
const zeldaGamesJSON = {
  'The Legend Of Zelda': '21/02/1986',
  'The Adventure Of Link': '14/01/1987',
  'A Link To The Past': '21/11/1991',
  'Links Awakening': '06/06/1993',
  'Ocarina Of Time': '21/11/1998',
  'Majoras Mask': '27/04/2000',
  'Oracle Of Seasons': '27/02/2001',
  'Oracle Of Ages': '27/02/2001',
  'Four Swords': '03/12/2002',
  'The Wind Waker': '13/12/2002',
  'Four Swords Adventures': '18/03/2004',
  'The Minish Cup': '04/11/2004',
  'Twilight Princess': '19/11/2006',
  'Phantom Hourglass': '23/06/2007',
  'Spirit Tracks': '07/12/2009',
  'Skyward Sword': '18/11/2011',
  'A Link Between Worlds': '23/11/2013',
  'Tri Force Heroes': '11/10/2015',
  'Breath Of The Wild': '03/03/2017',
  'Tears Of The Kingdom': '12/05/2023',
}

class ZeldaGame {
  constructor(public title: string, public release: Date) {}
  timeBetweenOtherGame(game: ZeldaGame): YearsDays {
    return yearsAndDaysBetweenTwoDates(this.release, game.release)
  }
}

interface ZeldaGames {
  [key: string]: ZeldaGame
}

const zeldaGames: ZeldaGames = Object.entries(zeldaGamesJSON).reduce(
  (acc: Record<string, ZeldaGame>, [title, release]) => {
    acc[title.split(' ').join('')] = new ZeldaGame(title, parseDate(release, 'dd-MM-yyyy'))
    return acc
  },
  {} as Record<string, ZeldaGame>
)

const printTimeBetweenOtherGames = (gameOne: ZeldaGame, gameTwo: ZeldaGame) => {
  const time = gameOne.timeBetweenOtherGame(gameTwo)
  console.log(
    `Between the release date of ${gameOne.title} and ${gameTwo.title} there are ${time.years} years and ${time.days} days`
  )
}

printTimeBetweenOtherGames(zeldaGames.TheLegendOfZelda, zeldaGames.TearsOfTheKingdom)
printTimeBetweenOtherGames(zeldaGames.TearsOfTheKingdom, zeldaGames.TheLegendOfZelda)
printTimeBetweenOtherGames(zeldaGames.TheLegendOfZelda, zeldaGames.TheAdventureOfLink)
printTimeBetweenOtherGames(zeldaGames.TheAdventureOfLink, zeldaGames.TheLegendOfZelda)
printTimeBetweenOtherGames(zeldaGames.TheLegendOfZelda, zeldaGames.TheLegendOfZelda)
printTimeBetweenOtherGames(zeldaGames.OracleOfSeasons, zeldaGames.OracleOfAges)
