import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName, sparkComponentClassName } from '../../util'

/**
 * In order for Icons to work you need to include a sprite SVG file at the top of your body tag.
 */
class Icon extends React.Component {
  static size = {
    M: 'm',
    L: 'l',
    XL: 'xl',
    XXL: 'xxl'
  };

  static defaultProps = {
    size: 'm',
    variant: '',
    toggle: ''
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    variant: PropTypes.string,
    toggle: PropTypes.string,
    select: PropTypes.bool
  };

  get className() {
    const { className, select, size, toggle, variant, color } = this.props
    const baseClass = sparkComponentClassName('Icon')
    const sizeClass = sparkComponentClassName('Icon', null, size)
    const toggleClass = sparkComponentClassName('Icon', null, 'toggle')
    const colorClass = sparkComponentClassName('Icon', null, 'stroke-current-color')
    const variantClass = sparkComponentClassName(variant, 'icon')
    const selectClass = sparkBaseClassName('SelectContainer', 'icon')

    return classNames(baseClass, {
      [toggleClass]: Boolean(toggle),
      [sizeClass]: Boolean(size),
      [variantClass]: Boolean(variant),
      [selectClass]: Boolean(select),
      [colorClass]: color === 'base',
      [className]: className
    })
  }

  render = () => {
    const { className, name, toggle, select, ...props } = this.props
    const toggleProps = {}
    if (toggle) {
      toggleProps['data-sprk-toggle'] = 'icon'
    }
    return (
      <svg
        className={this.className}
        viewBox='0 0 64 64'
        {...toggleProps}
        {...props}
      >
        <use xlinkHref={`#${name}`} data-sprk-toggle={toggle} />
      </svg>
    )
  };
}

export default Icon
