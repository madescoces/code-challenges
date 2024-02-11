/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Fecha publicación enunciado: 15/08/22
 * Fecha publicación resolución: 22/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

enum Animals {
  MONKEY = 'Monkey',
  ROOSTER = 'Rooster',
  DOG = 'Dog',
  PIG = 'Pig',
  RAT = 'Rat',
  OX = 'Ox',
  TIGER = 'Tiger',
  RABBIT = 'Rabbit',
  DRAGON = 'Dragon',
  SNAKE = 'Snake',
  HORSE = 'Horse',
  SHEEP = 'Sheep',
}

enum Elements {
  METAL = 'Metal',
  WATER = 'Water',
  WOOD = 'Wood',
  FIRE = 'Fire',
  EARTH = 'Earth',
}

type ChineseCalendarType = [Animals, Elements]

const ChineseZodiac = (year: number): ChineseCalendarType => {
  if (year < 604) {
    throw new Error(`Sexagenarian cicle begins in year 604`)
  }

  const animalsArray = Object.values(Animals).map((animal) => animal.toString())
  const animal = Animals[animalsArray[year % 12].toUpperCase() as keyof typeof Animals]

  const elementsArray = Object.values(Elements).map((element) => element.toString())
  const element = Elements[elementsArray[Math.floor((year % 10) / 2)].toUpperCase() as keyof typeof Elements]

  return [animal, element]
}

console.log(`Chinese Zodiac for 1924 -> Animal: ${ChineseZodiac(1924)[0]} Element: ${ChineseZodiac(1924)[1]}`)
console.log(`Chinese Zodiac for 1946 -> Animal: ${ChineseZodiac(1946)[0]} Element: ${ChineseZodiac(1946)[1]}`)
console.log(`Chinese Zodiac for 1984 -> Animal: ${ChineseZodiac(1984)[0]} Element: ${ChineseZodiac(1984)[1]}`)
console.log(`Chinese Zodiac for 604 -> Animal: ${ChineseZodiac(604)[0]} Element: ${ChineseZodiac(604)[1]}`)
try {
  console.log(`Chinese Zodiac for 603 -> Animal: ${ChineseZodiac(603)[0]} Element: ${ChineseZodiac(603)[1]}`)
} catch (err) {
  console.log(`${err}`)
}
console.log(`Chinese Zodiac for 1987 -> Animal: ${ChineseZodiac(1987)[0]} Element: ${ChineseZodiac(1987)[1]}`)
console.log(`Chinese Zodiac for 2022 -> Animal: ${ChineseZodiac(2022)[0]} Element: ${ChineseZodiac(2022)[1]}`)
