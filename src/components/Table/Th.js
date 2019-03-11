import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkBaseClassName } from '../../util'

class Th extends React.Component {
  static defaultProps = {
    children: null,
    className: null,
    empty: false,
    groupedColumn: false
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    empty: PropTypes.bool,
    groupedColumn: PropTypes.bool
  }

  get className () {
    const { className, empty, groupedColumn } = this.props

    const emptyHeadingClass = sparkBaseClassName('Table', 'empty-heading')
    const groupedColumnClass = sparkBaseClassName('Table', null, 'grouped-column')

    return classnames({
      [emptyHeadingClass]: empty,
      [groupedColumnClass]: groupedColumn,
      [className]: className
    })
  }

  render = () => {
    const { children, className, empty, groupedColumn, ...props } = this.props

    return (
      <th className={this.className} {...props}>
        {children}
      </th>
    )
  }
}

export default Th
