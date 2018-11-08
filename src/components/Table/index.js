import PropTypes from 'prop-types'
import React from 'react'

import GroupedColumn from './GroupedColumn'
import Th from './Th'
import TABLE_TYPES from './types'
import { sparkClassName } from '../../util'

class Table extends React.Component {
  static defaultProps = {
    children: null,
    spacing: 'medium',
    striped: false,
    type: TABLE_TYPES.STANDARD
  }

  static propTypes = {
    children: PropTypes.node,
    spacing: PropTypes.oneOf(['medium']),
    striped: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(TABLE_TYPES))
  }

  get containerClassName() {
    return sparkClassName('b', 'TableContainer')
  }

  get tableClassName() {
    const {striped, type} = this.props

    const classes = [sparkClassName('base', 'Table')]

    if (type !== TABLE_TYPES.STANDARD) {
      classes.push(sparkClassName('base', 'Table', null, type))
    }
    if (striped) {
      classes.push(sparkClassName('base', 'Table', null, 'striped'))
    }

    classes.push(sparkClassName('base', 'Table', null, 'spacing-medium'))

    return classes.join(' ')
  }

  render = () => {
    const {children} = this.props

    return (
      <div className={this.containerClassName}>
        <table className={this.tableClassName}>
          {children}
        </table>
      </div>
    )
  }
}

Table.GroupedColumn = GroupedColumn
Table.Th = Th

export default Table
