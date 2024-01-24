/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const operators = { '{': '}', '[': ']', '(': ')' }

const IsBalancedExpression = (expression: string): boolean => {
  const stack = []
  
  for (const char of expression) {
    let isKey = operators.hasOwnProperty(char)

    if (isKey || Object.values(operators).includes(char)) {
      if (isKey){
        stack.push(char)
      } else if ( stack.length === 0 || char !== operators[stack.pop()]) {
        return false
      }
    } 
  }
  return stack.length === 0
}

const expression = '{[()]}'
console.log(`The expression ${expression} is ${IsBalancedExpression(expression) ? 'equal' : 'not equal'}`)
