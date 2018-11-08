import PropTypes from 'prop-types'
import React from 'react'

import LINK_VARIANTS from './variants'
import { sparkClassName } from '../../util'

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

    const classes = [sparkClassName('base', 'Link')]

    if (variant !== LINK_VARIANTS.INLINE) {
      classes.push(sparkClassName('base', 'Link', null, variant))
    }
    if (disabled) {
      classes.push(sparkClassName('base', 'Link', null, 'disabled'))
    }

    return classes.join(' ')
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
