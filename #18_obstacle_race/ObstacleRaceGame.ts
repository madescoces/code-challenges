/*
 * Reto #17
 * LA CARRERA DE OBSTÁCULOS
 * Fecha publicación enunciado: 25/04/22
 * Fecha publicación resolución: 02/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

class AthleteState {
  segment: string

  constructor(segment: string) {
    this.segment = segment
  }

  static RUN() {
    return new AthleteState('_')
  }

  static JUMP() {
    return new AthleteState('|')
  }
}

const ObstacleRace = (athlete: AthleteState[], track: string): boolean => {
  const totalActions = athlete.length > track.length ? athlete.length : track.length
  const minActions = athlete.length > track.length ? track.length : athlete.length
  const trackSegments = Array.from(track)

  let athleteTrack = ''

  for (let i = 0; i < totalActions; i++) {
    if (i >= minActions) {
      athleteTrack += '?'
    } else {
      const segment = trackSegments[i]
      const state = athlete[i]

      switch (state.segment) {
        case AthleteState.RUN().segment:
          athleteTrack += segment === state.segment ? state.segment : '/'
          console.log('running')
          break
        case AthleteState.JUMP().segment:
          athleteTrack += segment === state.segment ? state.segment : 'x'
          console.log('jumping')
          break
        default:
          console.log('default')
          break
      }
    }
  }

  return track === athleteTrack
}

const moves = [AthleteState.RUN(), AthleteState.JUMP(), AthleteState.RUN(), AthleteState.JUMP(), AthleteState.RUN()]
const raceCourse = '_|_|_'

try {
  console.log(`Race result: player ${ObstacleRace(moves, raceCourse) ? 'win' : 'lose'}`)
} catch (err) {
  console.log(`${err}`)
}
