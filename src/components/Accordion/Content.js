import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { sparkComponentClassName, sparkObjectClassName } from '../../util'

class AccordionContent extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired
  };

  get className() {
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
          {children}
        </div>
      </div>
    )
  };
}

export default AccordionContent
