export const normalizeVowels = (text: string): string => {
  const vocalVariants: { [key: string]: string[] } = {
    a: ['a', 'á', 'ä', 'à', 'â', 'ǎ', 'ă', 'å', 'ã', 'ā'],
    e: ['e', 'é', 'ë', 'è', 'ê', 'ē', 'ė', 'ę', 'ě'],
    i: ['i', 'í', 'ï', 'ì', 'î', 'ī', 'į', 'ı'],
    o: ['o', 'ó', 'ö', 'ò', 'ô', 'õ', 'ø', 'ō', 'ő', 'œ'],
    u: ['u', 'ú', 'ü', 'ù', 'û', 'ū', 'ů', 'ű', 'ų'],
  }

  Object.keys(vocalVariants).forEach((key) => {
    const regex = new RegExp(`[${vocalVariants[key].join('')}]`, 'gi')
    text = text.replace(regex, key.toString())
  })
  return text
}
