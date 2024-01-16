const test = (str: string) => {
  let array = str.split('')
  [array[0], array[1]] = [array[1], array[0]]
  return array.join('')
}

console.log(test('gato'));  // Outputs: 'agto'
