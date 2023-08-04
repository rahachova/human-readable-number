function toReadable (number) {
  const singleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const doubleNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const arrayOfNumbers = number.toString().split('')
  if(arrayOfNumbers.length === 1 || (arrayOfNumbers.length === 2 && arrayOfNumbers[0] === '1')) {
    return singleNumbers[number]
  } else if(arrayOfNumbers.length === 2) {
    if(arrayOfNumbers[1] === '0') {
      return doubleNumbers[arrayOfNumbers[0] - 2]
    } else {
      return doubleNumbers[arrayOfNumbers[0] - 2] + ' ' + singleNumbers[arrayOfNumbers[1]]
    }
  } else if(arrayOfNumbers.length === 3) {
    const hundreds = singleNumbers[arrayOfNumbers[0]] + ' hundred'
    if(arrayOfNumbers[1] === '0' && arrayOfNumbers[2] === '0') {
      return hundreds
    } else if(arrayOfNumbers[1] === '0') {
      return hundreds + ' ' + singleNumbers[arrayOfNumbers[2]]
    } else if(arrayOfNumbers[1] === '1') {
      return hundreds + ' ' + singleNumbers[arrayOfNumbers[1] + arrayOfNumbers[2]]
    } else if(arrayOfNumbers[2] !== '0') {
      return hundreds + ' ' + doubleNumbers[arrayOfNumbers[1] - 2] + ' ' + singleNumbers[arrayOfNumbers[2]]
    } else {
      return hundreds + ' ' + doubleNumbers[arrayOfNumbers[1] - 2]
    }
  }
}

module.exports = toReadable
