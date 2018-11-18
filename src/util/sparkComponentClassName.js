import sparkClassName from './sparkClassName'

/**
 * @param {string} block
 * @param {?string} [element]
 * @param {?string} [modifier]
 * @param {?string} [breakpoint]
 * @return {string}
 */
const sparkComponentClassName = (
  block,
  element = null,
  modifier = null,
  breakpoint = null
) => sparkClassName('component', block, element, modifier, breakpoint)

export default sparkComponentClassName
