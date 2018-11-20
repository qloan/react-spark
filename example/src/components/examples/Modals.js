import React from 'react';
import { ModalChoice, ModalInfo, ModalWait } from 'react-spark';

class Modals extends React.Component {
  state = {
    showChoiceModal: false,
    showInfoModal: false,
    showModal: false,
    showWaitModal: false
  };

  modalChoiceName = 'modalChoiceName';
  modalWaitName = 'modalWaitName';
  modalInfoName = 'modalInfo';

  render = () => (
    <>
      <h2>Modals</h2>

      <p>Choice:</p>
      {/* todo: need to create a modal toggle button that takes a name and sets the data-sprk-modal-trigger attribute */}
      <button
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
        id={this.modalChoiceName}
        type='choice'
        show={this.state.showChoiceModal}
      >
        This is some content within a Modal. There will also be a way to close
        the modal.
      </ModalChoice>

      <p>Info:</p>
      <button
        className='sprk-c-Button'
        type='button'
        data-sprk-modal-trigger={this.modalInfoName}
        onClick={() => {
          this.setState({ showInfoModal: !this.state.showInfoModal })
        }}
      >
        Open Info Modal
      </button>
      <ModalInfo
        id={this.modalInfoName}
        type='info'
        show={this.state.showInfoModal}
      >
        This is some content for the Information Modal.
      </ModalInfo>

      <p>Wait:</p>
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
        id={this.modalWaitName}
        type='wait'
        show={this.state.showWaitModal}
      />
    </>
  );
}

export default Modals
