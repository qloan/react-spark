import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LINK_VARIANTS from './variants'
import { sparkBaseClassName } from '../../util'

class Link extends React.Component {
  static defaultProps = {
    children: null,
    disabled: false,
    variant: LINK_VARIANTS.INLINE
  };

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(LINK_VARIANTS)),
    plain: PropTypes.bool
  };

  get className() {
    const { className, disabled, variant, plain } = this.props

    const disabledClass = sparkBaseClassName('Link', null, 'disabled')
    const variantClass = sparkBaseClassName('Link', null, variant)
    const plainClass = sparkBaseClassName('Link', null, 'plain')

    return classNames(sparkBaseClassName('Link'), {
      [disabledClass]: disabled,
      [plainClass]: plain,
      [variantClass]: variant !== LINK_VARIANTS.INLINE,
      [className]: className
    })
  }

  render = () => {
    const { children, className, disabled, variant, ...props } = this.props

    return (
      <a className={this.className} {...props}>
        {children}
      </a>
    )
  };
}

export default Link
