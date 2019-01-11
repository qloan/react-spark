import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import GroupedColumn from './GroupedColumn';
import Th from './Th';
import TABLE_VARIANTS from './types';
import { sparkBaseClassName } from '../../util';

class Table extends React.Component {
  static defaultProps = {
    children: null,
    spacing: 'medium',
    striped: false,
    variant: TABLE_VARIANTS.STANDARD
  };

  static propTypes = {
    children: PropTypes.node,
    spacing: PropTypes.oneOf(['medium']), // TODO: Check on this
    striped: PropTypes.bool,
    variant: PropTypes.oneOf(Object.values(TABLE_VARIANTS))
  };

  get containerClassName() {
    const { className } = this.props

    return classnames(sparkBaseClassName('TableContainer'), {
      [className]: className
    })
  }

  get tableClassName() {
    const { striped, variant } = this.props

    const stripedClass = sparkBaseClassName('Table', null, 'striped')
    const variantClass = sparkBaseClassName('Table', null, variant)

    return classnames(sparkBaseClassName('Table'), {
      [stripedClass]: striped,
      [variantClass]: variant !== TABLE_VARIANTS.STANDARD
    })
  }

  render = () => {
    const { children, className, striped, ...props } = this.props

    return (
      <div className={this.containerClassName} {...props}>
        <table className={this.tableClassName}>{children}</table>
      </div>
    )
  };
}

Table.GroupedColumn = GroupedColumn
Table.Th = Th

export default Table
