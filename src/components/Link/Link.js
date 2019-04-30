import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LINK_VARIANTS from './variants'
import { sparkBaseClassName } from '../../util'

class Link extends React.Component {
  static defaultProps = {
    children: null,
    className: null,
    disabled: false,
    hasIcon: false,
    variant: null
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hasIcon: PropTypes.bool,
    variant: PropTypes.oneOf(
      Object.keys(LINK_VARIANTS).map(key => LINK_VARIANTS[key])
    )
  }

  get className () {
    const { className, disabled, hasIcon, variant } = this.props

    const disabledClass = sparkBaseClassName('Link', null, 'disabled')
    const hasIconClass = sparkBaseClassName('Link', null, 'has-icon')
    const variantClass = sparkBaseClassName('Link', null, variant)

    return classNames(sparkBaseClassName('Link'), {
      [disabledClass]: disabled,
      [hasIconClass]: hasIcon,
      [variantClass]: variant,
      [className]: className
    })
  }

  render = () => {
    const { children, className, disabled, hasIcon, variant, ...props } = this.props

    return (
      <a className={this.className} {...props}>
        {children}
      </a>
    )
  }
}

export default Link
