import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkObjectClassName } from '../../util'
import PADDING_SIZES from './paddingSizes'

class Box extends React.Component {
  static defaultProps = {
    children: null,
    padding: null
  }

  static propTypes = {
    children: PropTypes.node,
    padding: PropTypes.oneOf(Object.values(PADDING_SIZES))
  }

  get className() {
    const {padding} = this.props
    const block = 'Box'

    const paddingSizeClassName = sparkObjectClassName(block, null, padding)

    return classNames(
      sparkObjectClassName(block),
      {[paddingSizeClassName]: padding}
    )
  }

  render = () => {
    const {children} = this.props

    return <div className={this.className}>{children}</div>
  }
}

export default Box
