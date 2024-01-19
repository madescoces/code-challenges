import { promises } from 'fs'
import path = require('path')

// Local address of text file
const url = path.join(__dirname, 'short-text.txt')

// Async function to read text file from disk
const ReadTxt = async (url: string) => {
  try {
    // Read text file
    const data = await promises.readFile(url, 'utf8')

    // Map with words occurrences count
    const wordsMap = CountMyWords(data, true)
    
    // Prints the count of words
    wordsMap.forEach((value, key) => {
      console.log(`${key} se ha repetido ${value} ${value === 1 ? 'vez' : 'veces'}`)
    })
  
  } catch (err) {
    console.error(err)
  }
}

const CountMyWords = (words: string, clean: boolean = false): Map<string, number> => {
  const wordsMap = new Map<string, number>()

  //Split words by space character
  words.split(' ').forEach((word) => {    
    word = word.toLowerCase()
    word = clean ? CleanWord(word) : word

    if (!wordsMap.has(word)) {
      wordsMap.set(word, 1)
    } else {
      wordsMap.set(word, wordsMap.get(word) + 1)
    }
  })

  return wordsMap
}

//Clean words of non alphanumeric characters.
const CleanWord = (word: string) => word.replace(/[^\wáéíóúàèìòùâêîôûäëïöüñçß!?]/g, '')

ReadTxt(url)