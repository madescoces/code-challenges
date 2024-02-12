/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 */

const Fibonacci = (maxPosition: number): number[] => {
  const succesion: number[] = [0, 1]

  while (succesion.length < maxPosition) {
    const newFibonacci =
      succesion[succesion.length - 1] + succesion[succesion.length - 2]
    succesion.push(newFibonacci)
  }

  return succesion
}

const FibonacciNoArray = (maxPosition: number) => {
  let n1 = 0
  let n2 = 1
  let fibo = 0

  for (let i = 0; i < maxPosition; i++) {
    console.log(n1)
    fibo = n1 + n2
    n1 = n2
    n2 = fibo    
  }
}

console.log(Fibonacci(50))

FibonacciNoArray(50)
