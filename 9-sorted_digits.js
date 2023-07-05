function descendingOrder(n) {
  const digits = String(n).split('');
  return parseInt( digits.sort((a, b) => b - a).join(''))
}

