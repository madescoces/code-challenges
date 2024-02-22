const randomNumber = (min: number = 0, max: number = 1): number => {
  return Math.random() * (max - min) + min
}

const randomInt = (min: number = 0, max: number = 1): number => {
  return Math.floor(randomNumber(min, max))
}

const randomListOfNumbers = (amount: number, min: number = 0, max: number = 1): number[] => {
  const numbers: number[] = []

  for (let i = 0; i < amount; i++) {
    numbers.push(Math.floor(randomNumber(min, max)))
  }
  return numbers
}

const isAsc = (arr: number[]): boolean => !arr.some((e, index) => index < arr.length - 1 && e > arr[index + 1])

const isDesc = (arr: number[]): boolean => !arr.some((e, index) => index !== 0 && e > arr[index - 1])

const recursiveFactorial = (n: number): number | null => {
  return n < 0 ? null : n === 0 || n === 1 ? 1 : recursiveFactorial(n - 1)!! * n
}

const isEven = (number: number): boolean => number % 2 === 0

export { randomNumber, randomListOfNumbers, isAsc, isDesc, recursiveFactorial, isEven, randomInt }
