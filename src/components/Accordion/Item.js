import classNames from 'classnames'
import React from 'react'
import { sparkClassName } from '../../util'

class AccordionItem extends React.Component {
  get className() {
    const baseClass = sparkClassName('component', 'Accordion', 'item')
    return classNames(baseClass)
  }

  render = () => {
    const { children } = this.props
    return (
      <li className={this.className} data-sprk-toggle='container'>
        {children}
      </li>
    )
  };
}

export default AccordionItem
