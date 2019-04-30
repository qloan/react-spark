import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName, sparkObjectClassName } from '../../util'

import Content from './Content'
import Header from './Header'
import Item from './Item'

class Accordion extends React.Component {
  static defaultProps = {
    className: null
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  get className () {
    const { className } = this.props

    return classNames(
      [
        sparkComponentClassName('Accordion'),
        sparkObjectClassName('VerticalList')
      ],
      { [className]: className }
    )
  }

  render = () => {
    const { children, className, ...props } = this.props

    return (
      <ul className={this.className} {...props}>
        {children}
      </ul>
    )
  }
}

Accordion.Item = Item
Accordion.Header = Header
Accordion.Content = Content

export default Accordion
