/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 */

type UncommonString = [stra:string, strb:string]

const PrintUncommon = (stra: string, strb: string):UncommonString => {
  const outa = stra.split('').filter((ch) => !strb.includes(ch)).join('')
  const outb = strb.split('').filter((ch) => !stra.includes(ch)).join('')
  return [outa, outb]
}

console.log('Uncommon chars: ', PrintUncommon('pablo', 'foglia'))
console.log('Uncommon chars: ', PrintUncommon('Usa el canal de nuestro discord (https://mouredev.com/discord) \"\uD83D\uDD01reto-semanal\" para preguntas, dudas o prestar ayuda a la comunidad','Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.'))