import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkObjectClassName, sparkClassName } from '../../util'
import PADDING_SIZES from './paddingSizes'

class Box extends React.Component {
  static defaultProps = {
    children: null,
    padding: null
  };

  static propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(Object.values(PADDING_SIZES)),
    color: PropTypes.string
  };

  get className() {
    const { padding, color } = this.props
    const block = 'Box'
    const paddingSizeClassName = sparkObjectClassName(block, null, padding)
    const colorClassName = sparkClassName('utility', 'BackgroundColor', null, `${color}-tint-50`)
    return classNames(
      sparkObjectClassName(block),
      { [paddingSizeClassName]: padding },
      { [colorClassName]: Boolean(color) }
    )
  }

  render = () => {
    const { children } = this.props

    return <div className={this.className}>{children}</div>
  };
}

export default Box
