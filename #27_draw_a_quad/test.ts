const drawPattern = (n:number) => {
  // Imprimir la parte superior de la figura
  for (let i = -(n - 1); i < n; i++) {
    let row = ''
    for (let j = -(n - 1); j < n; j++) {
      if (Math.abs(i) + Math.abs(j) < n) {
        row += '* '
      } else {
        row += '  '
      }
    }
    console.log(row)
  }
}

drawPattern(3)
