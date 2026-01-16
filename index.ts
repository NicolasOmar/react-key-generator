const generateKey = (max: number = 5000, min: number = 1): string => {
  max = Math.floor(max)
  min = Math.ceil(min)
  const secureRandomNumbers = new Uint32Array(1)
  window.crypto.getRandomValues(secureRandomNumbers)

  const finalRandomNumber = secureRandomNumbers[0] ?? 0
  return Math.floor(finalRandomNumber * (max - min) + min).toString()
}

export { generateKey }