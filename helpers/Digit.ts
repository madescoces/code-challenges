export const TotalDigits = (numero: number) => (numero === 0 ? 1 : Math.floor(Math.log10(Math.abs(numero))) + 1)

export const GetDigits = (number: number): number[] => {
  const digits: number[] = []

  while (number >= 1) {
    digits.push(number % 10)
    number = Math.floor(number / 10)
  }
  return digits.reverse()
}