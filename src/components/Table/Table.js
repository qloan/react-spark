import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Th from './Th'
import VARIANTS from './variants'
import SPACING_SIZES from './spacing-sizes'
import { sparkBaseClassName } from '../../util'

class Table extends React.Component {
  static defaultProps = {
    children: null,
    className: null,
    spacing: SPACING_SIZES.MEDIUM,
    striped: false,
    variant: null
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    spacing: PropTypes.oneOf(
      Object.keys(SPACING_SIZES).map(size => SPACING_SIZES[size])
    ),
    striped: PropTypes.bool,
    variant: PropTypes.oneOf(
      Object.keys(VARIANTS).map(variant => VARIANTS[variant])
    )
  }

  get containerClassName() {
    const {className} = this.props

    return classnames(
      sparkBaseClassName('TableContainer'),
      {[className]: className}
    )
  }

  get tableClassName() {
    const {spacing, striped, variant} = this.props

    const spacingClass = sparkBaseClassName('Table', null, `spacing-${spacing}`)
    const stripedClass = sparkBaseClassName('Table', null, 'striped')
    const variantClass = sparkBaseClassName('Table', null, variant)

    return classnames(
      sparkBaseClassName('Table'),
      spacingClass,
      {
        [stripedClass]: striped,
        [variantClass]: variant
      }
    )
  }

  render = () => {
    const {
      children,
      className,
      spacing,
      striped,
      variant,
      ...props
    } = this.props

    return (
      <div className={this.containerClassName} {...props}>
        <table className={this.tableClassName}>{children}</table>
      </div>
    )
  }
}

Table.Th = Th

export default Table
