/*
 * Reto #46
 * ¿DÓNDE ESTÁ EL ROBOT?
 * Fecha publicación enunciado: 14/11/22
 * Fecha publicación resolución: 21/11/22
 * Dificultad: MEDIA
 *
 * Enunciado: Calcula dónde estará un robot (sus coordenadas finales) que se encuentra en una cuadrícula
 * representada por los ejes "x" e "y".
 * - El robot comienza en la coordenada (0, 0).
 * - Para idicarle que se mueva, le enviamos un array formado por enteros (positivos o negativos)
 *   que indican la secuencia de pasos a dar.
 *  - Por ejemplo: [10, 5, -2] indica que primero se mueve 10 pasos, se detiene, luego 5, se detiene,
 *    y finalmente 2. El resultado en este caso sería (x: -5, y: 12)
 * - Si el número de pasos es negativo, se desplazaría en sentido contrario al que está mirando.
 * - Los primeros pasos los hace en el eje "y". Interpretamos que está mirando hacia la parte
 *   positiva del eje "y".
 * - El robot tiene un fallo en su programación: cada vez que finaliza una secuencia de pasos gira
 *   90 grados en el sentido contrario a las agujas del reloj.
 */

import { Pair } from '../helpers/customTypes'

const robot = (steps: number[]): Pair<number, number> => {
  let position: Pair<number, number> = [0, 0]
  enum directions {
    TOP = 1,
    BOTTOM = -1,
    LEFT = -1,
    RIGHT = 1,
  }

  let currentDirection = directions.TOP

  for (let i = 0; i < steps.length; i++) {
    if (i % 2 === 0) {
      position = [position[0], position[1] + steps[i] * currentDirection]
      currentDirection = currentDirection === directions.TOP ? directions.LEFT : directions.RIGHT
    } else {
      position = [position[0] + steps[i] * currentDirection, position[1]]
      currentDirection = currentDirection === directions.RIGHT ? directions.TOP : directions.BOTTOM
    }
  }

  return position
}

const toEvaluate = [[10, 5, -2], [0, 0, 0], [], [-10, -5, 2], [-10, -5, 2, 4, -8]]

toEvaluate.forEach((steps) => {
  console.log(`The robot ends at: ${JSON.stringify(robot(steps))}`)
})

export {}
