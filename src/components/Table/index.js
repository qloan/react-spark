import PropTypes from 'prop-types'
import React from 'react'

import GroupedColumn from './GroupedColumn'
import Th from './Th'
import TABLE_VARIANTS from './types'
import { sparkClassName } from '../../util'

class Table extends React.Component {
  static defaultProps = {
    children: null,
    spacing: 'medium',
    striped: false,
    variant: TABLE_VARIANTS.STANDARD
  }

  static propTypes = {
    children: PropTypes.node,
    spacing: PropTypes.oneOf(['medium']),
    striped: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(TABLE_VARIANTS))
  }

  get containerClassName() {
    return sparkClassName('b', 'TableContainer')
  }

  get tableClassName() {
    const {striped, variant} = this.props

    const classes = [sparkClassName('base', 'Table')]

    if (variant !== TABLE_VARIANTS.STANDARD) {
      classes.push(sparkClassName('base', 'Table', null, variant))
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
