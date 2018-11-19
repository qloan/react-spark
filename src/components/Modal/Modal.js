import React, { Component, Fragment } from 'react'
import MODAL_VARIANTS from './variants'
import PropTypes from 'prop-types'
import {
  modals,
  showModal,
  hideModal
} from '@sparkdesignsystem/spark-core/components/modals'
import { sparkComponentClassName } from '../../util'
import sparkClassName from '../../util/sparkClassName'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

class Modal extends Component {
  static defaultProps = {
    type: MODAL_VARIANTS.INFO
  };

  static propTypes = {
    type: PropTypes.oneOf(Object.values(MODAL_VARIANTS)),
    confirmText: PropTypes.string.isRequired,
    cancelText: PropTypes.string.isRequired,
    confirmAnalyticsString: PropTypes.string.isRequired,
    idString: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired,
    confirmClick: PropTypes.func.isRequired,
    cancelClick: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  mainRef = React.createRef();
  maskRef = React.createRef();
  modalRef = React.createRef();

  get className() {
    const baseClass =
      sparkComponentClassName('Modal') +
      ' ' +
      sparkClassName('utility', 'Display', null, 'none')
    return [
      baseClass
      // variantClass
    ].join(' ')
  }

  componentDidMount = () => {
    const { show } = this.props
    if (show) {
      showModal(
        this.modalRef.current,
        this.maskRef.current,
        this.mainRef.current
      )
    } else {
      hideModal(
        this.modalRef.current,
        this.maskRef.current,
        this.mainRef.current
      )
    }
  };

  componentDidUpdate = prevProps => {
    const { show } = this.props
    if (prevProps.show !== show) {
      if (show) {
        showModal(
          this.modalRef.current,
          this.maskRef.current,
          this.mainRef.current
        )
      } else {
        hideModal(
          this.modalRef.current,
          this.maskRef.current,
          this.mainRef.current
        )
      }
    }
  };

  render = () => {
    const {
      type,
      confirmText,
      cancelText,
      confirmAnalyticsString,
      idString,
      onHide,
      confirmClick,
      cancelClick,
      children,
      variant,
      body,
      footer,
      ...rest
    } = this.props

    return (
      <div ref={this.mainRef}>
        <div
          className={this.className}
          {...rest}
          ref={this.modalRef}
          role='dialog'
          tabIndex='-1'
          aria-labelledby='modalChoiceHeading'
          aria-modal='true'
          aria-describedby='modalChoiceContent'
          data-sprk-modal='exampleChoiceModal'
          data-id='modal-choice-1'
        >
          <div className='sprk-o-Stack sprk-o-Stack--large'>
            <ModalHeader close={() => hideModal(
              this.modalRef.current,
              this.maskRef.current,
              this.mainRef.current
            )} />
            {children}
            <ModalBody>{body}</ModalBody>
            <ModalFooter close={() => hideModal(
              this.modalRef.current,
              this.maskRef.current,
              this.mainRef.current
            )}>{footer}</ModalFooter>
          </div>
        </div>
        <div
          data-sprk-modal-mask='true'
          className='sprk-c-ModalMask sprk-u-Display--none'
          tabIndex='-1'
          ref={this.maskRef}
        />
      </div>
    )
  };
}

export default Modal
