import VARIANTS from './variants'

/**
 * @param {string} variant
 * @return {string}
 */
const getIconNameFromVariant = variant => ({
  [VARIANTS.INFORMATION]: 'bell',
  [VARIANTS.SUCCESS]: 'check-mark',
  [VARIANTS.FAIL]: 'exclamation'
}[variant])

export { getIconNameFromVariant }
