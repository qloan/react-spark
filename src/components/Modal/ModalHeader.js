import React from 'react'
import PropTypes from 'prop-types'
import { sparkComponentClassName } from '../../util'
import sparkClassName from '../../util/sparkClassName'

class ModalHeader extends React.Component {
  static defaultProps = {
    show: false
  }

  static PropTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.node
  }

  get className () {
    // const {show} = this.props
    // const baseClass = sparkComponentClassName('Modal') + ' ' + sparkClassName('component', 'Modal', null, 'header')
    const baseClass = sparkComponentClassName('Modal', 'header')

    return [
      baseClass
    ].join('')
  }

  render = () => {
    const {
      show
    } = this.props

    return <div
      className={this.className}
    />
  }
}

export default ModalHeader
