/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Fecha publicación enunciado: 11/07/22
 * Fecha publicación resolución: 18/07/22
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

const validCoins = [200, 100, 50, 10, 5] as const
type Coin = (typeof validCoins)[number]
type Product = { name: string; price: number }

const products: Product[] = [
  { name: 'Coke', price: 100 },
  { name: 'Water', price: 150 },
  { name: 'Beer', price: 200 },
  { name: 'Vodka', price: 400 },
  { name: 'Whine', price: 600 },
]

const validCoin = (value: number): value is Coin => validCoins.includes(value as Coin)

const calculateChange = (total: number, payment: number): Coin[] => {
  let change = payment - total
  const result: Coin[] = []

  for (const coin of validCoins) {
    while (change >= coin) {
      change -= coin
      result.push(coin)
    }
  }

  return result
}

const buyProduct = (selection: number, payment: number[]): [string, Coin[]] | string => {
  if (!payment.every(validCoin)) {
    return 'Coin type not supported. '
  }

  const selectedProduct = products[selection - 1]
  if (!selectedProduct) {
    return `Product ${selection} not found. Please select another product. `
  }

  if (sumNumbers(payment) < selectedProduct.price) {
    return `Insufficient money to buy ${selectedProduct.name}, ${
      selectedProduct.price - sumNumbers(payment)
    }$ more is needed to buy it. `
  }

  const change = calculateChange(selectedProduct.price, sumNumbers(payment))
  return [selectedProduct.name, change]
}

const sumNumbers = (numbers: number[]): number => numbers.reduce((total: number, num: number) => total + num, 0)

// Invalid Coin
console.log(buyProduct(1, [300]))

// Insufficient money
console.log(buyProduct(1, [5, 5, 10, 10, 10, 5]))

// Product not found
console.log(buyProduct(5, [200]))

// Ok, no change
console.log(buyProduct(3, [10, 10, 10, 10, 10, 100, 50]))

// Ok, change
console.log(buyProduct(3, [200, 10, 5, 50, 100]))
