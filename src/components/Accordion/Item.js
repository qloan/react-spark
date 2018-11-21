import classNames from 'classnames'
import React from 'react'
import { sparkClassName } from '../../util'

class AccordionItem extends React.Component {
  get calssName() {
    const baseClass = sparkClassName('component', 'Accordion', 'item')
    return classNames(baseClass)
  }

  render = () => {
    const { children } = this.props
    return (
      <li className={this.calssName} data-sprk-toggle='container'>
        {children}
      </li>
    )
  };
}

export default AccordionItem
