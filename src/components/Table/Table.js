import classNames from 'classnames'
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
    spacing: PropTypes.oneOf(['medium']), // TODO: Check on this
    striped: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(TABLE_VARIANTS))
  }

  get containerClassName() {
    return sparkClassName('b', 'TableContainer')
  }

  get tableClassName() {
    const {striped, variant} = this.props

    const baseClass = sparkClassName('base', 'Table')
    const stripedClass = sparkClassName('base', 'Table', null, 'striped')
    const variantClass = sparkClassName('base', 'Table', null, variant)

    return classNames(
      baseClass,
      {
        [stripedClass]: striped,
        [variantClass]: variant !== TABLE_VARIANTS.STANDARD
      }
    )
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
