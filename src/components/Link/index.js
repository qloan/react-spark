import PropTypes from 'prop-types'
import React from 'react'

import LINK_TYPES from './types'
import { sparkClassName } from '../../util'

class Link extends React.Component {
  static defaultProps = {
    children: null,
    disabled: false,
    standalone: false,
    type: LINK_TYPES.INLINE
  }

  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    standalone: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(LINK_TYPES))
  }

  get className() {
    const {disabled, type} = this.props

    const classes = [sparkClassName('base', 'Link')]

    if (type !== LINK_TYPES.INLINE) {
      classes.push(sparkClassName('base', 'Link', null, 'standalone'))
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
      type,
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
