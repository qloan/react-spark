/**
 * @param {string} prefix - 'base', 'object', 'component', 'utility', 'is', or 'has'
 * @param {string} block
 * @param {?string} [element]
 * @param {?string} [modifier]
 * @param {?string} [breakpoint]
 * @return {string}
 */
const sparkClassName = (
  prefix,
  block,
  element = null,
  modifier = null,
  breakpoint = null
) => {
  const NAMESPACE = 'sprk'
  const PREFIXES = {
    base: 'b',
    object: 'o',
    component: 'c',
    utility: 'u',
    is: 'is',
    has: 'has'
  }

  let className = `${NAMESPACE}-${PREFIXES[prefix]}-${block}`

  if (element) className += `__${element}`
  if (modifier) className += `--${modifier}`
  if (breakpoint) className += `@${breakpoint}`

  return className
}

export default sparkClassName
