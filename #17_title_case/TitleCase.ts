/*
 * Reto #16
 * EN MAYÚSCULA
 * Fecha publicación enunciado: 18/04/22
 * Fecha publicación resolución: 25/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
*/

const TitleCase = (text: string) => {
  const specialCharacters = ['¡', '¿'];

  return text
    .split(' ')
    .map((word: string) => {
      let firstChar = word.charAt(0);
      let restOfWord = word.slice(1);

      if (specialCharacters.includes(firstChar)) {
        firstChar += restOfWord.charAt(0).toUpperCase();
        restOfWord = restOfWord.slice(1);
      } else {
        firstChar = firstChar.toUpperCase();
      }

      return firstChar + restOfWord;
    })
    .join(' ');
}

const textA = "¿hola qué tal estás?";
const textB = "¡hola      qué tal estás!";
const textC = "El niño ñoño";

console.log(`First letter in upper case: ${TitleCase(textA)}`);
console.log(`First letter in upper case: ${TitleCase(textB)}`);
console.log(`First letter in upper case: ${TitleCase(textC)}`);