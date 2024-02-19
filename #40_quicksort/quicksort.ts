/*
 * Reto #39
 * TOP ALGORITMOS: QUICK SORT
 * Fecha publicación enunciado: 27/09/22
 * Fecha publicación resolución: 03/10/22
 * Dificultad: MEDIA
 *
 * Enunciado: Implementa uno de los algoritmos de ordenación más famosos: el "Quick Sort",
 * creado por C.A.R. Hoare.
 * - Entender el funcionamiento de los algoritmos más utilizados de la historia nos ayuda a
 *   mejorar nuestro conocimiento sobre ingeniería de software. Dedícale tiempo a entenderlo,
 *   no únicamente a copiar su implementación.
 * - Esta es una nueva serie de retos llamada "TOP ALGORITMOS", donde trabajaremos y entenderemos
 *   los más famosos de la historia.
 */

type OrderType = 'asc' | 'desc'

const quickSort = <T extends number | string>(array: T[], order: OrderType = 'asc'): T[] => {
  if (array.length < 2) {
    return array
  }  
  let pivot = array[Math.floor(array.length / 2)]

  const lesser = array.slice(1).filter((element) => element < pivot!!)
  const greater = array.slice(1).filter((element) => element >= pivot!!)

  return order === 'asc'
    ? [...quickSort(lesser, order), pivot, ...quickSort(greater, order)]
    : [...quickSort(greater, order), pivot, ...quickSort(lesser, order)]
}

// Testing quicksort with numbers
const numeros: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(`Sorted numbers in ascending order: ${quickSort(numeros)}`); 
console.log(`Sorted numbers in descending order: ${quickSort(numeros, 'desc')}`); 

// Testing quicksort with letters
const letras: string[] = ['z', 'b', 'a', 'c', 'f'];
console.log(`Sorted letters in ascending order: ${quickSort(letras)}`);
console.log(`Sorted letters in descending order: ${quickSort(letras, 'desc')}`);

export {}