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
        data-sprk-modal-trigger={this.modalChoiceName}
        type='button'
        onClick={() => {
          this.setState({showChoiceModal: !this.state.showChoiceModal})
        }}
      >
        Open Choice Modal
      </button>
      <Modal
        ariaDescribedby='modalChoiceContent'
        ariaLabelledby='modalChoiceHeading'
        className='extra-class'
        dataId='modal-choice-1'
        data-extra-attribute
        id={'exampleChoiceModal'}
        show={this.state.showChoiceModal}
        type='choice'
      >
        This is some content within a Modal. There will also be a way to close
        the modal.
      </Modal>

      <p>Info:</p>
      <button
        className='sprk-c-Button'
        type='button'
        onClick={() => {
          this.setState({showInfoModal: !this.state.showInfoModal})
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
      >
        This is some content for the Information Modal.
      </Modal>

      <p>Wait:</p>
      <button
        className='sprk-c-Button'
        type='button'
        data-sprk-modal-trigger={this.modalWaitName}
        onClick={() => {
          this.setState({showWaitModal: !this.state.showWaitModal})
        }}
      >
        Open Wait Modal
      </button>
      <Modal
        id={'exampleChoiceModal'}
        type='wait'
        ariaLabelledby='modalWaitHeading'
        ariaDescribedby='modalWaitContent'
        dataId='modal-wait-1'
        show={this.state.showWaitModal}
      />
    </>
  )
}

export default Modals
