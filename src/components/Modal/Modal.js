import React, { Component } from 'react';
import MODAL_VARIANTS from './variants';
import PropTypes from 'prop-types';
import {
  showModal,
  hideModal
} from '@sparkdesignsystem/spark-core/components/modals';
import { sparkComponentClassName } from '../../util';
import sparkClassName from '../../util/sparkClassName';
import InfoContent from './InfoContent';

class ModalInfo extends Component {
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
    children: PropTypes.node
  };

  mainRef = React.createRef();
  maskRef = React.createRef();
  modalRef = React.createRef();

  get className() {
    const baseClass = [
      sparkComponentClassName('Modal'),
      sparkClassName('utility', 'Display', null, 'none')
    ].join(' ')
    return [baseClass].join(' ')
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
  };

  componentDidUpdate = prevProps => {
    const { show } = this.props
    if (prevProps.show !== show) {
      this.toggle()
    }
  };

  render = () => {
    const {
      id,
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
      footer,
      ...rest
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
          aria-labelledby='modalInfoHeading'
          aria-modal='true'
          aria-describedby='modalInfoContent'
          data-sprk-modal={id}
          data-id='modal-info-1'
          {...rest}
        >
          <div className='sprk-o-Stack sprk-o-Stack--large'>
            {type === MODAL_VARIANTS.INFO && (
              <InfoContent
                modalName={id}
                body={children}
                close={() => this.hide()}
              />
            )}
            {/* {type ===  MODAL_VARIANTS.CHOICe && <ChoiceContent />}
            {type ===  MODAL_VARIANTS.WAIT && <WaitContent />} */}
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

export default ModalInfo
