import { toggle } from '@sparkdesignsystem/spark-core/components/toggle'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  sparkComponentClassName,
  sparkObjectClassName
} from '../../util'

import Item from './Item'
import Header from './Header'
import Content from './Content'

class Accordion extends React.Component {
  static defaultProps = {
    padding: false
  }

  static propTypes = {
    padding: PropTypes.bool
  }

  componentDidMount() {
    if (!window.initToggles) {
      toggle()
      window.initToggles = true
    }
  }

  get className() {
    const {className, padding} = this.props
    const baseClass = sparkObjectClassName('VerticalList')
    const paddingClass = sparkComponentClassName('Accordion')

    return classNames(
      baseClass,
      {
        [paddingClass]: padding,
        [className]: className
      }
    )
  }

  render = () => {
    const {
      children,
      className,
      padding,
      ...props
    } = this.props

    return <ul className={this.className} {...props}>{children}</ul>
  }
}

Accordion.Item = Item
Accordion.Header = Header
Accordion.Content = Content

export default Accordion
