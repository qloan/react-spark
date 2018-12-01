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
    const stackSpacingClass = sparkObjectClassName('Stack', null, 'medium')

    return classNames(baseClass, stackClass, stackItemClass, stackSpacingClass)
  }

  render = () => {
    const { children } = this.props
    console.log(children)
    return <div className={this.className}>{children}</div>
  };
}

export default ModalBody
