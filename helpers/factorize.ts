export const FactorMe = (number: number): number[] => {
  let divisor = 2
  let factors = []

  while (divisor <= number) {
    if (number % divisor === 0) {
      number = number / divisor
      factors.push(divisor)
    } else {
      divisor++
    }
  }
  return factors
}