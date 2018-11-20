import React from 'react'
import { Modal } from 'react-spark'

class Modals extends React.Component {
  state = {
    showChoiceModal: false,
    showInfoModal: false,
    showModal: false,
    showWaitModal: false
  };

  render = () => (
    <>
      <h2>Modals</h2>

      <p>Choice:</p>
      {/* <button
        className='sprk-c-Button'
        data-sprk-modal-trigger={this.modalChoiceName}
        type='button'
        onClick={() => {
          this.setState({ showChoiceModal: !this.state.showChoiceModal })
        }}
      >
        Open Choice Modal
      </button>
      <ModalChoice
        id='modalChoice'
        type='choice'
        show={this.state.showChoiceModal}
      >
        This is some content within a Modal. There will also be a way to close
        the modal.
      </ModalChoice> */}

      <p>Info:</p>
      <button
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
        show={this.state.showInfoModal}
      >
        This is some content for the Information Modal.
      </Modal>

      {/* <p>Wait:</p>
      <button
        className='sprk-c-Button'
        type='button'
        data-sprk-modal-trigger={this.modalWaitName}
        onClick={() => {
          this.setState({ showWaitModal: !this.state.showWaitModal })
        }}
      >
        Open Wait Modal
      </button>
      <ModalWait
        id='modalShow'
        type='wait'
        show={this.state.showWaitModal}
      /> */}
    </>
  );
}

export default Modals
