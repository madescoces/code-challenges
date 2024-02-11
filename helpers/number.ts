export const randomNumber = (min: number = 0, max: number = 1): number => {
  return Math.random() * (max - min) + min
}

export const randomListOfNumbers = (amount: number, min: number = 0, max: number = 1): number[] => {
  const numbers: number[] = []

  for (let i = 0; i < amount; i++) {
    numbers.push(Math.floor(randomNumber(min, max)))
  }
  return numbers
}

export const isAsc = (arr: number[]): boolean => !arr.some((e, index) => index < arr.length - 1 && e > arr[index + 1])

export const isDesc = (arr: number[]): boolean => !arr.some((e, index) => index !== 0 && e > arr[index - 1])
