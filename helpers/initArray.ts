export const initArray = (cols: number, rows: number = 0, value: number = 0): number[] | number[][] => {
  const arr = Array(rows).fill(value)
  return rows ? arr.map(() => Array(cols).fill(value)) : arr
}
