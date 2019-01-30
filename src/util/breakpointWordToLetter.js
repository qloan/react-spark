const dictionary = new Map([
  ['min', 'xxs'],
  ['tiny', 'xs'],
  ['small', 's'],
  ['medium', 'm'],
  ['large', 'l'],
  ['huge', 'xl']
])

/**
 * @param {string} word
 * @returns {?string}
 */
const breakpointWordToLetter = word => dictionary.get(word) || null

export default breakpointWordToLetter
