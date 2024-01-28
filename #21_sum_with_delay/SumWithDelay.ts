/*
 * Reto #20
 * PARANDO EL TIEMPO
 * Fecha publicación enunciado: 16/05/22
 * Fecha publicación resolución: 23/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que sume 2 números y retorne su resultado pasados unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma asíncrona, es decir, sin detener la ejecución del programa principal. Se podría ejecutar varias veces al mismo tiempo.
 */

const SumWithDelay = (a: number, b: number, delay: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b)
    }, delay)
  })
}

SumWithDelay(5, 10, 2000).then((resultado) => console.log(`Delayed result for 5+10: ${resultado}`))
SumWithDelay(3, 7, 1000).then((resultado) => console.log(`Delayed result for 3+7: ${resultado}`))
