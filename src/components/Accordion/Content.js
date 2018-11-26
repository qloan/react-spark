import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { sparkClassName } from '../../util'

class AccordionContent extends React.Component {
  static defaultProps = {};
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  get calssName() {
    const baseClass = [
      sparkClassName('component', 'Accordion', 'content'),
      sparkClassName('object', 'Stack'),
      sparkClassName('object', 'Stack', null, 'medium')
    ].join(' ')
    return classNames(baseClass)
  }

  render = () => {
    const { id, children } = this.props
    return (
      <div id={id} data-sprk-toggle='content'>
        <div className={this.calssName}>{children}</div>
      </div>
    )
  };
}

export default AccordionContent
