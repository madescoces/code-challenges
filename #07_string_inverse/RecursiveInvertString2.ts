const InverseMeRecursive2 = (str: string, index: number = 0): string => {
  if (index >= str.length) {
    return '';
  }  
  return InverseMeRecursive2(str, index + 1) + str.charAt(index);
}

console.log(InverseMeRecursive2('gatienzo'))