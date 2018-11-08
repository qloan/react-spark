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

  render = () => {
    const {children, empty} = this.props

    let classes = []

    if (empty) {
      classes.push(sparkClassName('base', 'Table', 'empty-heading'))
    }

    const className = classes.join(' ')

    return (<th className={className}>{children}</th>)
  }
}

export default Th
