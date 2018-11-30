import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { toggle } from '@sparkdesignsystem/spark-core/components/toggle'
import { sparkClassName } from '../../util'
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
    // todo: this only works with one accordion on the page. Need to be fixed for multiple accordions
    toggle()
  }

  get className() {
    const { padding } = this.props
    const baseClass = sparkClassName('object', 'VerticalList')
    const paddingClass = sparkClassName('component', 'Accordion')
    return classNames(baseClass, {
      [paddingClass]: Boolean(padding)
    })
  }

  render = () => {
    const { children } = this.props
    return <ul className={this.className}>{children}</ul>
  }
}
Accordion.Item = Item
Accordion.Header = Header
Accordion.Content = Content
export default Accordion
