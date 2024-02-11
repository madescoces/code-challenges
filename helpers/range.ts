export const range = (from: number, length: number, step: number = 1): number[] =>
  Array.from({ length: Math.ceil((from + length - from) / step) }, (_, index) => from + index * step)
