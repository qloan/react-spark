import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName } from '../../util'

class Th extends React.Component {
  static defaultProps = {
    children: null,
    empty: false
  }

  static propTypes = {
    children: PropTypes.node,
    empty: PropTypes.bool
  }

  get className() {
    const {empty} = this.props

    const emptyHeadingClass = sparkClassName('base', 'Table', 'empty-heading')

    return classNames({[emptyHeadingClass]: empty})
  }

  render = () => {
    const {children} = this.props

    return (<th className={this.className}>{children}</th>)
  }
}

export default Th
