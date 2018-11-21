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
    id: 'accordion'
  };
  static propTypes = {
    id: PropTypes.string
  };

  componentDidMount() {
    toggle()
  }

  get calssName() {
    const baseClass = [
      sparkClassName('component', 'Accordion'),
      sparkClassName('object', 'VerticalList')
    ].join(' ')
    return classNames(baseClass)
  }

  render = () => {
    const { id, children } = this.props
    return (
      <ul className={this.calssName} data-id={id}>
        {children}
      </ul>
    )
  };
}
Accordion.Item = Item
Accordion.Header = Header
Accordion.Content = Content
export default Accordion
