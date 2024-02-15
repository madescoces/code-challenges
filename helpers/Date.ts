type DateFormat = 'yyyy-MM-dd' | 'yyyy-dd-MM' | 'dd-MM-yyyy' | 'MM-dd-yyyy'

type YearsDays = { years: number; days: number }

const parseDate = (date: string, format: DateFormat = 'yyyy-MM-dd') => {
  const regexs: { [format: string]: [number[], RegExp] } = {
    'yyyy-MM-dd': [[0, 1, 2], /^(\d{4})(?:\/|-)([1-9]|0[1-9]|1[0-2])(?:\/|-)([1-9]|0[1-9]|[12]\d|3[01])$/], // yyyy, MM, dd
    'yyyy-dd-MM': [[0, 2, 1], /^(\d{4})(?:\/|-)([1-9]|0[1-9]|[12]\d|3[01])(?:\/|-)([1-9]|0[1-9]|1[0-2])$/], // yyyy, dd , MM
    'dd-MM-yyyy': [[2, 1, 0], /^([1-9]|0[1-9]|[12]\d|3[01])(?:\/|-)([1-9]|0[1-9]|1[0-2])(?:\/|-)(\d{4})$/], // dd, MM , yyyy
    'MM-dd-yyyy': [[2, 0, 1], /^([1-9]|0[1-9]|1[0-2])(?:\/|-)([1-9]|0[1-9]|[12]\d|3[01])(?:\/|-)(\d{4})$/], // MM , dd , yyyy
  }

  const parts = date.match(regexs[format][1])?.slice(1)

  if (!parts) {
    throw new Error(`Invalid date format, try yyyy/mm/dd format instead`)
  }

  const [year, month, day] = regexs[format][0].map((index) => +parts[index])

  return new Date(year, month - 1, day)
}

const IsValidDate = (date: string): boolean => /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(date)

const leapYears = (first: Date, second: Date): number[] => {
  const leapYears: number[] = []
  let [origin, end] = [first.getFullYear(), second.getFullYear()].sort()

  if (origin < 1582) {
    return []
  }

  while (origin < end) {
    if ((origin % 4 === 0 && origin % 100 !== 0) || origin % 400 === 0) {
      leapYears.push(origin)
    }
    origin += 1
  }

  return leapYears
}

const daysBetweenTwoDates = (first: Date, second: Date) =>
  Math.floor(Math.abs(first.getTime() - second.getTime()) / (24 * 1000 * 60 ** 2))

const yearsAndDaysBetweenTwoDates = (first: Date, second: Date): YearsDays => {
  const totalDays = daysBetweenTwoDates(first, second)  
  const totalLeapYears = leapYears(first, second).length
  const years = totalDays > (totalLeapYears === 0 ? 365 : 366) ? Math.abs(first.getFullYear() - second.getFullYear()) : 0
  const remanentDays = totalDays - years * 365 - totalLeapYears
  return { years: years, days: remanentDays }
}

export { DateFormat, IsValidDate, parseDate, leapYears, daysBetweenTwoDates, yearsAndDaysBetweenTwoDates, YearsDays }
