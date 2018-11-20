import React from 'react'
import PropTypes from 'prop-types'
import { sparkComponentClassName } from '../../util'

class ModalBody extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  get className() {
    const baseClass = sparkComponentClassName('Modal', 'body')

    return [baseClass].join(' ')
  }

  render = () => {
    const { children } = this.props
    return <div className={this.className}>{children}</div>
  };
}

export default ModalBody
