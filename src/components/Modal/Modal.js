import {
  showModal,
  hideModal
} from '@sparkdesignsystem/spark-core/components/modals'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import MODAL_VARIANTS from './variants'
import { sparkClassName, sparkComponentClassName } from '../../util'

import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import Stack from '../Stack'
import Spinner from '../Spinner'

class Modal extends Component {
  static defaultProps = {
    title: 'Please Wait',
    hasCloseButton: true
  };
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(MODAL_VARIANTS)).isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    confirmAnalyticsString: PropTypes.string,
    idString: PropTypes.string,
    confirmClick: PropTypes.func,
    cancelClick: PropTypes.func,
    ariaLabelledby: PropTypes.string,
    ariaDescribedby: PropTypes.string,
    dataId: PropTypes.string,
    children: PropTypes.node,
    hasCloseButton: PropTypes.bool
  }

  mainRef = React.createRef()
  maskRef = React.createRef()
  modalRef = React.createRef()

  get className() {
    const { className, type } = this.props

    return classnames(
      sparkComponentClassName('Modal'),
      sparkClassName('utility', 'Display', null, 'none'),
      sparkClassName('component', 'Modal', null, type),
      { [className]: className }
    )
  }

  hide() {
    hideModal(
      this.modalRef.current,
      this.maskRef.current,
      this.mainRef.current
    )
  }

  show() {
    showModal(
      this.modalRef.current,
      this.maskRef.current,
      this.mainRef.current
    )
  }

  toggle() {
    const { show } = this.props
    if (show) {
      this.show()
    } else {
      this.hide()
    }
  }

  componentDidMount = () => {
    this.toggle()
  }

  componentDidUpdate = prevProps => {
    const { show } = this.props
    if (prevProps.show !== show) {
      this.toggle()
    }
  }

  render = () => {
    const {
      ariaDescribedby,
      ariaLabelledby,
      cancelText,
      children,
      className,
      confirmAnalyticsString,
      confirmText,
      dataId,
      id,
      onCancel,
      onConfirm,
      onHide,
      type,
      title,
      onClose,
      hasCloseButton,
      ...props
    } = this.props

    return (
      <div className='sprk-u-JavaScript'>
        <div data-sprk-modal-trigger={id} />  {/* This needs to be fixed, their method looks for this attribute and sets focus to it */}
        <div ref={this.mainRef}>
          <div
            className={this.className}
            ref={this.modalRef}
            role='dialog'
            tabIndex='-1'
            aria-labelledby={ariaLabelledby}
            aria-modal='true'
            aria-describedby={ariaDescribedby}
            data-sprk-modal={id}
            data-sprk-modal-type={type}
            data-id={dataId}
            {...props}
          >
            <Stack itemSpacing={'large'}>
              <ModalHeader
                id={ariaLabelledby}
                onClose={onClose}
                title={title}
                modalName={id}
                hasCloseButton={type !== MODAL_VARIANTS.WAIT ? hasCloseButton : false}
              />
              <ModalBody>
                {type === MODAL_VARIANTS.WAIT && <Spinner />}
                <p className='sprk-o-Stack__item sprk-b-TypeBodyTwo' id={ariaDescribedby}>
                  {children}
                </p>
              </ModalBody>
              {
                type === MODAL_VARIANTS.CHOICE &&
                <ModalFooter
                  modalId={id}
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  confirmText={confirmText}
                  cancelText={cancelText}
                />
              }
            </Stack>
          </div>
          <div
            data-sprk-modal-mask='true'
            className='sprk-c-ModalMask sprk-u-Display--none'
            tabIndex='-1'
            ref={this.maskRef}
          />
        </div>
      </div>
    )
  }
}

export default Modal
