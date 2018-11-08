import sparkClassName from '../sparkClassName'

/**
 * @param {string} block
 * @param {?string} [element]
 * @param {?string} [modifier]
 * @param {?string} [breakpoint]
 * @return {string}
 */
const sparkBaseClassName = (
  block,
  element = null,
  modifier = null,
  breakpoint = null
) => sparkClassName('base', block, element, modifier, breakpoint)

export default sparkBaseClassName
