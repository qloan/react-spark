import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LINK_VARIANTS from './variants'
import { sparkBaseClassName, sparkComponentClassName } from '../../util'

class Link extends React.Component {
  static defaultProps = {
    children: null,
    disabled: false,
    variant: LINK_VARIANTS.INLINE,
    plain: false
  };

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(LINK_VARIANTS)),
    plain: PropTypes.bool,
    masthead: PropTypes.bool
  };

  get className() {
    const { className, disabled, variant, plain, masthead } = this.props

    const disabledClass = sparkBaseClassName('Link', null, 'disabled')
    const variantClass = sparkBaseClassName('Link', null, variant)
    const plainClass = sparkBaseClassName('Link', null, 'plain')
    const mastheadClass = sparkComponentClassName('Masthead', 'link')

    return classNames(sparkBaseClassName('Link'), {
      [disabledClass]: disabled,
      [plainClass]: plain,
      [mastheadClass]: masthead,
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
