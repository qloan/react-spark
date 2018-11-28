import classNames from 'classnames'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class AccordionItem extends React.Component {
  get className() {
    const {className} = this.props
    const baseClass = sparkComponentClassName('Accordion', 'item')

    return classNames(
      baseClass,
      {[className]: className}
    )
  }

  render = () => {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <li
        className={this.className}
        data-sprk-toggle='container'
        {...props}
      >
        {children}
      </li>
    )
  }
}

export default AccordionItem
