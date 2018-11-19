import React from 'react'
import {
  ModalChoice,
  ModalInfo,
  ModalWait
} from 'react-spark'

class Modals extends React.Component {
  state = {
    showChoiceModal: false,
    showInfoModal: false,
    showModal: false,
    showWaitModal: false
  }

  render = () => (<>
    <h2>Modals</h2>

    <p>Choice:</p>
    <button
      className='sprk-c-Button'
      type='button'
      onClick={() => {
        this.setState({showChoiceModal: !this.state.showChoiceModal})
      }}
    >
      Open Choice Modal
    </button>
    <ModalChoice type='choice' show={this.state.showChoiceModal}>
      This is some content within a Modal. There will also be a way to
      close the modal.
    </ModalChoice>

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
    <ModalInfo type='info' show={this.state.showInfoModal}>
      This is some content for the Information Modal.
    </ModalInfo>

    <p>Wait:</p>
    <button
      className='sprk-c-Button'
      type='button'
      onClick={() => {
        this.setState({showWaitModal: !this.state.showWaitModal})
      }}
    >
      Open Wait Modal
    </button>
    <ModalWait type='wait' show={this.state.showWaitModal} />
  </>)
}

export default Modals
