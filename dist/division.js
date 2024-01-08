function division(a, b) {
  if (b === 0) {
    throw new Error('not divisible by 0')
  }
  return a / b
}
module.exports = division
