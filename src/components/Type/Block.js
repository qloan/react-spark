import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName } from '../../util'
import numberToWord from './numberToWord'

class Block extends React.Component {
  static defaultProps = {
    children: null,
    element: null
  }

  static propTypes = {
    children: PropTypes.node,
    element: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['Body', 'Display'])
  }

  get className() {
    const {className, level, type} = this.props
    const block = 'Type' + type + numberToWord(level)

    return classnames(
      sparkBaseClassName(block),
      {[className]: className}
    )
  }

  render = () => {
    const {
      children,
      element: Element,
      ...props
    } = this.props

    return <Element {...props} className={this.className}>{children}</Element>
  }
}

export default Block
