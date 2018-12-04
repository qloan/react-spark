import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkBaseClassName,
  sparkComponentClassName
} from '../../util'

/**
 * In order for Icons to work you need to include a sprite SVG file at the top of your body tag.
 */
class Icon extends React.Component {
  static size = {
    L: 'l',
    XL: 'xl',
    XXL: 'xxl'
  }

  static defaultProps = {
    size: '',
    variant: '',
    toggle: '',
    select: false
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    variant: PropTypes.string,
    toggle: PropTypes.string,
    select: PropTypes.bool
  }

  get className() {
    const {className, select, size, toggle, variant} = this.props
    const baseClass = sparkComponentClassName('Icon')
    const sizeClass = sparkComponentClassName('Icon', null, size)
    const toggleClass = sparkComponentClassName('Icon', null, 'toggle')
    const variantClass = sparkComponentClassName(variant, 'icon')
    const selectClass = sparkBaseClassName('SelectContainer', 'icon')

    return classNames(baseClass, {
      [toggleClass]: Boolean(toggle),
      [sizeClass]: Boolean(size),
      [variantClass]: Boolean(variant),
      [selectClass]: Boolean(select),
      [className]: className
    })
  }

  render = () => {
    const {className, name, toggle, select, ...props} = this.props

    return (
      <svg
        className={this.className}
        data-sprk-toggle='icon'
        viewBox='0 0 64 64'
        {...props}
      >
        <use xlinkHref={`#${name}`} data-sprk-toggle={toggle} />
      </svg>
    )
  }
}

export default Icon
