import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName, sparkObjectClassName } from '../../util'

class AccordionContent extends React.Component {
  static defaultProps = {
    children: null,
    className: null
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    // Must match the `control` prop of <Accordion.Header>
    id: PropTypes.string.isRequired
  }

  get className () {
    const { className } = this.props

    return classNames(
      sparkComponentClassName('Accordion', 'content'),
      sparkObjectClassName('Stack'),
      sparkObjectClassName('Stack', null, 'medium'),
      { [className]: className }
    )
  }

  render = () => {
    const { id, children, className, ...props } = this.props

    return (
      <div id={id} data-sprk-toggle='content'>
        <div className={this.className} {...props}>
          <div className={sparkComponentClassName('Stack', 'item')}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default AccordionContent
