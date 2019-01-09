import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { sparkComponentClassName, sparkObjectClassName } from '../../util'

class ModalBody extends React.Component {
  static defaultProps = {};

  static propTypes = {
    children: PropTypes.node
  };

  get className() {
    const baseClass = sparkComponentClassName('Modal', 'body')
    const stackClass = sparkObjectClassName('Stack')
    const stackItemClass = sparkObjectClassName('Stack', 'item')
    return classNames(baseClass, stackClass, stackItemClass)
  }

  render = () => {
    const { children } = this.props
    return <div className={this.className}>{children}</div>
  };
}

export default ModalBody
