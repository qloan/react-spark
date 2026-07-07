import { bindToggleUIEvents } from '@sparkdesignsystem/spark-core/components/toggle'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName } from '../../util'

class AccordionItem extends React.Component {
  static defaultProps = {
    className: null,
    open: false
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    open: PropTypes.bool
  }

  ref = React.createRef()

  get className () {
    const { className, open } = this.props
    const baseClass = sparkComponentClassName('Accordion', 'item')
    const openClass = sparkComponentClassName('Accordion', 'item--open')

    return classNames(baseClass, {
      [className]: className,
      [openClass]: open
    })
  }

  componentDidMount () {
    bindToggleUIEvents(this.ref.current)
  }

  render = () => {
    const { children, className, ...props } = this.props

    return (
      <li
        className={this.className}
        ref={this.ref}
        {...props}
      >
        {children}
      </li>
    )
  }
}

export default AccordionItem
