import React from 'react'
import MODAL_VARIANTS from './variants'
import PropTypes from 'prop-types'
import { modals, showModal, hideModal } from '@sparkdesignsystem/spark-core/components/modals'
import { sparkComponentClassName } from '../../util'
import sparkClassName from '../../util/sparkClassName'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

class Modal extends React.Component {
  // state = { show: false }

  // showModal = () => {
  //   this.setState({show: true })
  // }

  // hideModal = () => {
  //   this.setState({show: false })
  // }

  static defaultProps = {
    modalType: MODAL_VARIANTS.INFO,
    isVisible: false,
    show: true
  }

  static PropTypes = {
    modalType: PropTypes.oneOf(Object.values(MODAL_VARIANTS)),
    confirmText: PropTypes.string.isRequired,
    cancelText: PropTypes.string.isRequired,
    confirmAnalyticsString: PropTypes.string.isRequired,
    idString: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    confirmClick: PropTypes.func.isRequired,
    cancelClick: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    children: PropTypes.node
  }

  mainRef = React.createRef()
  maskRef = React.createRef()
  modalRef = React.createRef()

  get className() {
    const baseClass = sparkComponentClassName('Modal') + ' ' + sparkClassName('utility', 'Display', null, 'none')
    return [
      baseClass
      // variantClass
    ].join(' ')
  }

  componentDidMount = () => {
    const {show} = this.props

    if (show) {
      // modals(this.mainRef.current, {})
      // showModal(this.modalRef.current, this.maskRef.current, this.mainRef.current)
    } else {
      // hideModal(this.modalRef.current, this.maskRef.current, this.mainRef.current)
    }
  }

  render = () => {
    const {
      modalType,
      confirmText,
      cancelText,
      confirmAnalyticsString,
      idString,
      isVisible,
      onHide,
      confirmClick,
      cancelClick,
      children,
      variant,
      body,
      ...rest } = this.props

    return <div
      className={this.className}
      {...rest}
    >
      <ModalHeader />
      {children}
      <ModalBody>{body}</ModalBody>
    </div>
  }
}

export default Modal
