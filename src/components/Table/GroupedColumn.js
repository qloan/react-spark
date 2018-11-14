import PropTypes from 'prop-types'
import React from 'react'

import { sparkClassName } from '../../util'

class GroupedColumn extends React.Component {
  static defaultProps = {
    children: null
  }

  static propTypes = {
    children: PropTypes.node
  }

  render = () => {
    const { children } = this.props

    const className = sparkClassName('base', 'Table', null, 'grouped-column')

    return <th className={className}>{children}</th>
  }
}

export default GroupedColumn
