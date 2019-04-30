import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName, sparkComponentClassName } from '../../util'

/**
 * In order for Icons to work you need to include a sprite SVG file at the top of your body tag.
 */
class Icon extends React.Component {
  static defaultProps = {
    className: null,
    size: 'm',
    toggle: '',
    variant: ''
  }

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    select: PropTypes.bool,
    size: PropTypes.string,
    toggle: PropTypes.string,
    variant: PropTypes.string
  }

  static size = {
    M: 'm',
    L: 'l',
    XL: 'xl',
    XXL: 'xxl'
  }

  get className () {
    const { className, select, size, toggle, variant } = this.props
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
  }
}

export default Icon
