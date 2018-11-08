import sparkClassName from '../sparkClassName'

/**
 * @param {string} block
 * @param {?string} [element]
 * @param {?string} [modifier]
 * @param {?string} [breakpoint]
 * @return {string}
 */
const sparkObjectClassName = (
  block,
  element = null,
  modifier = null,
  breakpoint = null
) => sparkClassName('object', block, element, modifier, breakpoint)

export default sparkObjectClassName
