import React from 'react'
import PropTypes from 'prop-types'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import sparkClassName from '../../util/sparkClassName'

class WaitContent extends React.Component {
  static propTypes = {
    modalName: PropTypes.string,
    body: PropTypes.any,
    close: PropTypes.func
  }

  get className() {
    const baseClass = [
      sparkClassName('component', 'Modal', null, 'wait')
    ].join(' ')
    return [baseClass].join(' ')
  }

  render() {
    const { modalName, body, close } = this.props
    return (
      <div className={this.className}>
        <ModalHeader close={() => close()} modalName={modalName} />
        <div className='sprk-o-Stack__item sprk-c-Modal__header'>
          <h2 className='sprk-c-Modal__heading sprk-b-TypeDisplayFive'>
            Please Wait...
          </h2>
        </div>
        <ModalBody>{body}</ModalBody>
        <div className='sprk-o-Stack__item sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium'>
          <div className='sprk-o-Stack__item sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large sprk-c-Spinner--dark' />
          <p className='sprk-o-Stack__item sprk-b-TypeBodyTwo' id='modalWaitContent'>
            This modal will close shortly for demonstration purposes.
          </p>
        </div>
      </div>
    )
  }
}

export default WaitContent
