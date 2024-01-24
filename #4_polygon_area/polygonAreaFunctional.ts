const RectangleArea = (figure: Polygon): number => {
  return figure.side * figure.base
}

const TriangleArea = (figure: Polygon): number => {
  return RectangleArea(figure) / 2
}

const SquareArea = (figure: Polygon): number => {
  return figure.side ** 2
}

interface Polygon {
  side: number
  base: number
}

interface AreaCalculator {
  (figure: Polygon): number
}

const rectangle: Polygon = { base: 10, side: 5 };
const square: Polygon = { base: 10, side: 10 };
const triangle: Polygon = { base: 10, side: 5 };

const PolygonArea = (areaCalc: AreaCalculator, figure: Polygon) => areaCalc(figure)

console.log(`Area de un rectangulo de 10x5 es: ${PolygonArea(RectangleArea, rectangle)}`)
console.log(`Area de un cuadrado de 10 de lado es: ${PolygonArea(SquareArea, square)}`)
console.log(`Area de un triángulo de 10 x 5 es: ${PolygonArea(TriangleArea, triangle)}`)