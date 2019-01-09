import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName } from '../../util'

class GroupedColumn extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  get className() {
    const {className} = this.props

    return classnames(
      sparkBaseClassName('Table', null, 'grouped-column'),
      {[className]: className}
    )
  }

  render = () => {
    const {children, className, ...props} = this.props

    return <th className={this.className} {...props}>{children}</th>
  }
}

export default GroupedColumn
