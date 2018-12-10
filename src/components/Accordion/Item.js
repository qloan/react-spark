import classNames from 'classnames'
import React from 'react'
import { sparkComponentClassName } from '../../util'
import { bindToggleUIEvents } from '@sparkdesignsystem/spark-core/components/toggle'

class AccordionItem extends React.Component {
  get className() {
    const { className } = this.props
    const baseClass = sparkComponentClassName('Accordion', 'item')

    return classNames(baseClass, { [className]: className })
  }

  ref = React.createRef();

  componentDidMount() {
    bindToggleUIEvents(this.ref.current)
  }
  render = () => {
    const { children, className, ...props } = this.props

    return (
      <li
        className={this.className}
        data-sprk-toggle='container'
        ref={this.ref}
        {...props}
      >
        {children}
      </li>
    )
  };
}

export default AccordionItem
