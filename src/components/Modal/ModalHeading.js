import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { sparkComponentClassName, sparkBaseClassName } from '../../util'

class ModalHeading extends React.Component {
  static defaultProps = {};

  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  get className() {
    const baseClass = sparkComponentClassName('Modal', 'heading')
    const typeDisplayFiveClass = sparkBaseClassName('TypeDisplayFive')
    return classNames(baseClass, typeDisplayFiveClass)
  }

  render = () => {
    const { children, id } = this.props
    return (
      <h2 className={this.className} id={id}>
        { children }
      </h2>
    )
  };
}

export default ModalHeading
