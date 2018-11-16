import React from 'react'
import PropTypes from 'prop-types'
import { sparkComponentClassName } from '../../util'
import sparkClassName from '../../util/sparkClassName'

class ModalBody extends React.Component {
  static defaultProps = {
    show: false
  }

  static PropTypes = {
    show: PropTypes.bool.isRequired
  }

  get className () {
    // const { show } = this.props
    // const baseClass = sparkComponentClassName('ModalBody') + ' ' + sparkClassName('component', 'Modal', null, 'body')
    const baseClass = sparkComponentClassName('Modal', 'body')

    return [
      baseClass
    ].join(' ')
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

export default ModalBody
