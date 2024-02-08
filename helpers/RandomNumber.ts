export const randomNumber = (min: number = 0, max: number = 1): number => {
  return Math.random() * (max - min) + min
}

export const randomListOfNumbers = (min: number = 0, max: number = 1): number[] => {
  const numbers: number[] = []

  for (let i = 0; i < max; i++) {
    numbers.push(Math.floor(randomNumber(min, max)))
  }
  return numbers
}
