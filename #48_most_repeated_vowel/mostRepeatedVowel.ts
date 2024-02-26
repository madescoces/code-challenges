import { normalizeVowels } from '../helpers/text'

type VowelRepetition = { [key: string]: number }
type Vowels = 'a' | 'e' | 'i' | 'o' | 'u'

const mostRepeatedVowels = (text: string): string[] => {
  if (hasVowels(text)) return []
  
  const textNormalized = normalizeVowels(text)
  const vowelsCounter: VowelRepetition = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  }

  Object.keys(vowelsCounter).forEach((vowel) => {
    vowelsCounter[vowel as keyof VowelRepetition] = countVowelOccurrences(vowel as keyof Vowels, textNormalized)
  })

  return Object.keys(vowelsCounter).filter((key) => vowelsCounter[key] === getMax(vowelsCounter))
}

const hasVowels = (text: string): boolean => !/[aeiou]/i.test(text.toLowerCase())

const countVowelOccurrences = (vowel: keyof Vowels, text: string): number => {
  const textArray = text.toLowerCase().split('')
  return textArray.filter((v) => v === vowel).length
}

const getMax = (object: VowelRepetition): number => Math.max(...Object.values(object))

const toEvaluate = [
  'aaaaaeeeeiiioou',
  'AáaaaEeeeIiiOoU',
  'eeeeiiioouaaaaa',
  '.-Aá?aaaBbEeeweIiiOoU:',
  '.-Aá?aaa BbEeew eIiiOoU:',
  '.-Aá?aaa BbEeew eEIiiOoU:',
  '.-Aá?aaa BbEeew eEIiiOoUuuuuu:',
  'aeiou',
  'brp qyz',
]

toEvaluate.forEach((text) => {
  console.log(`The most repeated vowel in the text was: ${mostRepeatedVowels(text)}`)
})
