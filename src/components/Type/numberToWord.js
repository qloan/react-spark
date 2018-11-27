const dictionary = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight'
}

/**
 * @param {number} number
 * @return {?string}
 */
const numberToWord = number => dictionary[number] || null

export default numberToWord
