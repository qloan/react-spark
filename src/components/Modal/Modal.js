import {
  showModal,
  hideModal
} from '@sparkdesignsystem/spark-core/components/modals'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import MODAL_VARIANTS from './variants'
import { sparkClassName, sparkComponentClassName } from '../../util'

import InfoContent from './InfoContent'
import ChoiceContent from './ChoiceContent'
import WaitContent from './WaitContent'

class Modal extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(MODAL_VARIANTS)),
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    confirmAnalyticsString: PropTypes.string,
    idString: PropTypes.string,
    onHide: PropTypes.func,
    confirmClick: PropTypes.func,
    cancelClick: PropTypes.func,
    show: PropTypes.bool.isRequired,
    ariaLabelledby: PropTypes.string,
    ariaDescribedby: PropTypes.string,
    dataId: PropTypes.string,
    children: PropTypes.node
  }

  mainRef = React.createRef()
  maskRef = React.createRef()
  modalRef = React.createRef()

  get className() {
    const {className} = this.props

    return classnames(
      sparkComponentClassName('Modal'),
      sparkClassName('utility', 'Display', null, 'none'),
      {[className]: className}
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
    const {show} = this.props
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
    const {show} = this.props
    if (prevProps.show !== show) {
      this.toggle()
    }
  }

  render = () => {
    const {
      ariaDescribedby,
      ariaLabelledby,
      cancelClick,
      cancelText,
      children,
      className,
      confirmAnalyticsString,
      confirmClick,
      confirmText,
      dataId,
      footer,
      id,
      idString,
      onHide,
      type,
      variant,
      ...props
    } = this.props

    return (
      <div ref={this.mainRef}>
        {/* needed for close event from crashing. may need a better solution */}
        <div data-sprk-modal-trigger={id} />
        <div
          className={this.className}
          ref={this.modalRef}
          role='dialog'
          tabIndex='-1'
          aria-labelledby={ariaLabelledby}
          aria-modal='true'
          aria-describedby={ariaDescribedby}
          data-sprk-modal={id}
          data-id={dataId}
          {...props}
        >
          <div className='sprk-o-Stack sprk-o-Stack--large'>
            {type === MODAL_VARIANTS.INFO && (
              <InfoContent
                modalName={id}
                body={children}
                close={() => this.hide()}
              />
            )}
            {type === MODAL_VARIANTS.CHOICE && (
              <ChoiceContent
                modalName={id}
                body={children}
                close={() => this.hide()}
              />
            )}
            {type === MODAL_VARIANTS.WAIT && (
              <WaitContent
                modalName={id}
                body={children}
                close={() => this.hide()}
              />
            )}
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
  }
}

export default Modal
