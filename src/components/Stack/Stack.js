import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import BREAKPOINTS from './breakpoints'
import Item from './Item'

import {
  breakpointWordToLetter,
  sparkObjectClassName
} from '../../util'

class Stack extends React.Component {
  static defaultProps = {
    centerColumn: false,
    centerRow: false,
    children: null,
    endColumn: false,
    endRow: false,
    itemSpacing: null,
    splitAt: null
  }

  static propTypes = {
    centerColumn: PropTypes.bool,
    centerRow: PropTypes.bool,
    children: PropTypes.node,
    endColumn: PropTypes.bool,
    endRow: PropTypes.bool,
    itemSpacing: PropTypes.oneOf(Object.values(BREAKPOINTS)),
    splitAt: PropTypes.oneOf(Object.values(BREAKPOINTS))
  }

  get className() {
    const {
      centerColumn,
      centerRow,
      endColumn,
      endRow,
      itemSpacing,
      splitAt
    } = this.props

    const block = 'Stack'

    const centerColumnClassName =
      sparkObjectClassName(block, null, 'center-column')
    const centerRowClassName =
      sparkObjectClassName(block, null, 'center-row')
    const endColumnClassName =
      sparkObjectClassName(block, null, 'end-column')
    const endRowClassName =
      sparkObjectClassName(block, null, 'end-row')
    const itemSpacingClassName = itemSpacing
      ? sparkObjectClassName(block, null, itemSpacing)
      : null
    const splitAtClassName = splitAt
      ? sparkObjectClassName(
        block,
        null,
        'split',
        breakpointWordToLetter(splitAt)
      )
      : null

    return classNames(
      sparkObjectClassName('Stack'),
      {
        [centerColumnClassName]: centerColumn,
        [centerRowClassName]: centerRow,
        [endColumnClassName]: endColumn,
        [endRowClassName]: endRow,
        [itemSpacingClassName]: itemSpacing,
        [splitAtClassName]: splitAt
      }
    )
  }

  render = () => {
    const {children} = this.props

    return (
      <div className={this.className}>
        {children}
      </div>
    )
  }
}

Stack.Item = Item

export default Stack