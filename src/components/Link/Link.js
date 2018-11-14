import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LINK_VARIANTS from './variants'
import { sparkBaseClassName } from '../../util'

class Link extends React.Component {
  static defaultProps = {
    children: null,
    disabled: false,
    standalone: false,
    variant: LINK_VARIANTS.INLINE
  }

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    standalone: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(LINK_VARIANTS))
  }

  get className() {
    const {disabled, variant} = this.props

    const baseClass = sparkBaseClassName('Link')
    const disabledClass = sparkBaseClassName('Link', null, 'disabled')
    const variantClass = sparkBaseClassName('Link', null, variant)

    return classNames(
      baseClass,
      {
        [disabledClass]: disabled,
        [variantClass]: variant !== LINK_VARIANTS.INLINE
      }
    )
  }

  render = () => {
    const {
      children,
      disabled,
      standalone,
      variant,
      ...rest
    } = this.props

    return (
      <a
        className={this.className}
        {...rest}
      >
        {children}
      </a>
    )
  }
}

export default Link
