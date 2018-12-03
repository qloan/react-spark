import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { sparkComponentClassName, sparkUtiltiyClassName } from '../../util'

class ModalMask extends React.Component {
    static defaultProps = {};

    static propTypes = {
      maskRef: PropTypes.string.isRequired
    };

    get className() {
      const baseClass = sparkComponentClassName('ModalMask')
      const displayClass = sparkUtiltiyClassName('Display', 'none')
      return classNames(baseClass, displayClass)
    }

    render = () => {
      const { maskRef } = this.props
      return (

        <div
          data-sprk-modal-mask='true'
          className='sprk-c-ModalMask sprk-u-Display--none'
          tabIndex='-1'
          ref={maskRef}
        />
      )
    };
}

export default ModalMask
