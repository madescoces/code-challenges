const InverseMeRecursive = (
  str: string,
  start: number = 0,
  end: number = str.length - 1
): string => {
  if (start >= end) {
    return str
  }

  const strArray: string[] = str.split('');
  [strArray[start], strArray[end]] = [strArray[end], strArray[start]]

  return InverseMeRecursive(strArray.join(''), start + 1, end - 1)
}

console.log('Recursive inverse function:', InverseMeRecursive('holas mundo'))
