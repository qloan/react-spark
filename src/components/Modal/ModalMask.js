import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { sparkComponentClassName } from '../../util'

class ModalMask extends React.Component {
    static defaultProps = {};

    static propTypes = {
      maskRef: PropTypes.object.isRequired
    };

    get className() {
      const { className } = this.props
      const baseClass = sparkComponentClassName('ModalMask')
      return classNames(baseClass, {[className]: className})
    }

    handleMaskEvent = (e, closeOnClick = true, onClose) => {
      if(closeOnClick && onClose){
        onClose();
      }
    };

    render = () => {
      const { maskRef, closeOnClick = true, onClose, ...props } = this.props
      return (

        <div
          {...props}
          data-sprk-modal-mask='true'
          className={this.className}
          tabIndex='-1'
          ref={maskRef}
          onClick={e => this.handleMaskEvent(e, closeOnClick, onClose)}
        />
      )
    };
}

export default ModalMask
