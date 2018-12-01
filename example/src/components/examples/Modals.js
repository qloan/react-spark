import React from 'react'
import { Modal } from 'react-spark'

class Modals extends React.Component {
  state = {
    showChoiceModal: false,
    showInfoModal: false,
    showModal: false,
    showWaitModal: false
  }

  render = () => (
    <>
      <h2>Modals</h2>

      <p>Choice:</p>
      <button
        className='sprk-c-Button'
        data-sprk-modal-trigger='exampleChoiceModal'
        type='button'
        onClick={() => {
          this.setState({ showChoiceModal: !this.state.showChoiceModal })
        }}
      >
        Open Choice Modal
      </button>
      {/* <Modal
        ariaDescribedby='modalChoiceContent'
        ariaLabelledby='modalChoiceHeading'
        className='extra-class'
        dataId='modal-choice-1'
        id={'exampleChoiceModal'}
        show={this.state.showChoiceModal}
        type='choice'
      >
        This is some content within a Modal. There will also be a way to close
        the modal.
      </Modal> */}

      <p>Info:</p>
      <button
        data-sprk-modal-trigger='modalInfo'
        className='sprk-c-Button'
        type='button'
        onClick={() => {
          this.setState({ showInfoModal: !this.state.showInfoModal })
        }}
      >
        Open Info Modal
      </button>
      <Modal
        type='info'
        id={'modalInfo'}
        ariaLabelledby='modalInfoHeading'
        ariaDescribedby='modalInfoContent'
        dataId='modal-info-1'
        show={this.state.showInfoModal}
        dismissable={true}
      >
        This is some content for the Information Modal.
      </Modal>

      <p>Wait:</p>
      <button
        className='sprk-c-Button'
        type='button'
        data-sprk-modal-trigger='exampleWaitModal'
        onClick={() => {
          this.setState({ showWaitModal: !this.state.showWaitModal })
          setTimeout(() => {
            this.setState({ showWaitModal: !this.state.showWaitModal })
          }, 1500)
        }}
      >
        Open Wait Modal
      </button>
      <Modal
        id={'exampleWaitModal'}
        type='wait'
        ariaLabelledby='modalWaitHeading'
        ariaDescribedby='modalWaitContent'
        dataId='modal-wait-1'
        show={this.state.showWaitModal}
      >
        This is the body copy.
      </Modal>
      <button className='sprk-c-Button' data-sprk-modal-trigger='exampleInfoModal' type='button'>
        Open Info Modal
      </button>

      <div className='sprk-c-Modal sprk-u-Display--none' role='dialog' tabIndex='-1' aria-labelledby='modalInfoHeading' aria-modal='true' aria-describedby='modalInfoContent' data-sprk-modal='exampleInfoModal' data-id='modal-info-1'>
        <div className='sprk-o-Stack sprk-o-Stack--large'>
          <header className='sprk-o-Stack__item sprk-c-Modal__header'>
            <h2 className='sprk-c-Modal__heading sprk-b-TypeDisplayFive' id='modalInfoHeading'>
              Info Modal
            </h2>

            <button className='sprk-c-Modal__icon' data-sprk-modal-cancel='exampleInfoModal' type='button' aria-label='Close Modal'>
              <svg className='sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--current-color' viewBox='0 0 64 64' aria-hidden='true' focusable='false'>
                <use xlinkHref='#close-circle' />
              </svg>
            </button>
          </header>

          <div className='sprk-o-Stack__item sprk-c-Modal__body'>
            <p className='sprk-b-TypeBodyTwo' id='modalInfoContent'>
              This is some content that is in a Modal. It explains what the Modal is for. There will also be a way to close the modal.
            </p>
          </div>
        </div>
      </div>

      <div data-sprk-modal-mask='true' className='sprk-c-ModalMask sprk-u-Display--none' tabIndex='-1' />
    </>
  )
}

export default Modals
