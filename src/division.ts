function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error('not divisible by 0')
  }
  return a / b
}

module.exports = division
