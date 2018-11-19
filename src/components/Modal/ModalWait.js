import React, { Component } from 'react'
import MODAL_VARIANTS from './variants'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  showModal,
  hideModal
} from '@sparkdesignsystem/spark-core/components/modals'
import { sparkComponentClassName } from '../../util'
import sparkClassName from '../../util/sparkClassName'
import ModalHeader from './ModalHeader'

class ModalWait extends Component {
  static defaultProps = {
    type: MODAL_VARIANTS.CHOICE,
    variant: 'wait'
  };

  static propTypes = {
    type: PropTypes.oneOf(Object.values(MODAL_VARIANTS)),
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    confirmAnalyticsString: PropTypes.string,
    idString: PropTypes.string,
    onHide: PropTypes.func,
    confirmClick: PropTypes.func,
    cancelClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  mainRef = React.createRef();
  maskRef = React.createRef();
  modalRef = React.createRef();

  get className() {
    const { variant } = this.props
    const baseClass =
      sparkComponentClassName('Modal') + ' ' +
      sparkClassName('utility', 'Display', null, 'none')

    const variantClass = sparkComponentClassName('Modal') + ' ' +
      sparkClassName('component', 'Modal', null, variant) + ' ' +
      sparkClassName('utility', 'Display', null, 'none')

    return classNames(baseClass, {
      [variantClass]: variant !== MODAL_VARIANTS.CHOICE
    })
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
          // className='sprk-c-Modal sprk-c-Modal--wait sprk-u-Display--none'
          role='dialog'
          tabIndex='-1'
          aria-labelledby='modalWaitHeading'
          aria-modal='true'
          aria-describedby='modalWaitContent'
          data-sprk-modal='exampleWaitModal'
          data-sprk-modal-type='wait'
          data-id='modal-wait-1'
        >
          <div className='sprk-o-Stack sprk-o-Stack--large'>
            <ModalHeader close={() => hideModal(
              this.modalRef.current,
              this.maskRef.current,
              this.mainRef.current
            )} />
            <div className='sprk-o-Stack__item sprk-c-Modal__header'>
              <h2 className='sprk-c-Modal__heading sprk-b-TypeDisplayFive' id='modalWaitHeading'>
            Please Wait...
              </h2>
            </div>
            {children}
            <div className='sprk-o-Stack__item sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium'>
              <div className='sprk-o-Stack__item sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large sprk-c-Spinner--dark' />
              <p className='sprk-o-Stack__item sprk-b-TypeBodyTwo' id='modalWaitContent'>
            This modal will close shortly for demonstration purposes.
              </p>
            </div>
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

export default ModalWait
