interface PolygonOpp {  
  area: () => number
}

class Square implements PolygonOpp {
  side: number
  constructor(side: number) {
    this.side = side
  }  

  area = () => {
    return this.side ** 2
  }
}

class Triangle implements PolygonOpp {
  side: number
  base: number
  constructor(side: number, base: number) {
    this.side = side
    this.base = base
  }

  area = () => {
    return (this.side * this.base) / 2
  }
}

class Rectangle implements PolygonOpp {
  side: number
  base: number
  constructor(side: number, base: number) {
    this.side = side
    this.base = base
  }

  area = () => {
    return this.side * this.base
  }
}

let triangleOop = new Triangle(10, 5)
let rectangleOop = new Rectangle(10, 5)
let squareOop = new Square(10)

const AreaOfPolygon = (poly: PolygonOpp) => {
  console.log(`Total area of ${poly.constructor.name}: ${poly.area()}`) 
}

AreaOfPolygon(triangleOop)
AreaOfPolygon(rectangleOop)
AreaOfPolygon(squareOop)