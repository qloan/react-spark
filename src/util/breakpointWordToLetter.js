const dictionary = {
  min: 'xxs',
  tiny: 'xs',
  small: 's',
  medium: 'm',
  large: 'l',
  huge: 'xl'
}

/**
 * @param {string} word
 * @returns {?string}
 */
const breakpointWordToLetter = word => dictionary[word] || null

export default breakpointWordToLetter
