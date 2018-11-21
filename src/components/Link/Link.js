import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LINK_VARIANTS from './variants'
import { sparkClassName } from '../../util'

class Link extends React.Component {
  static defaultProps = {
    children: null,
    disabled: false,
    variant: LINK_VARIANTS.INLINE
  }

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(LINK_VARIANTS))
  }

  get className() {
    const {disabled, variant} = this.props

    const baseClass = sparkClassName('base', 'Link')
    const disabledClass = sparkClassName('base', 'Link', null, 'disabled')
    const variantClass = sparkClassName('base', 'Link', null, variant)

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
