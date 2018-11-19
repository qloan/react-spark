import React from 'react'
import { Modal } from 'react-spark'

class Modals extends React.Component {
  state = {showModal: false}

  render = () => (<>
    <h2>Modals</h2>

    <p>Choice:</p>
    <button
      className='sprk-c-Button'
      type='button'

      onClick={() => {
        this.setState({showModal: !this.state.showModal})
      }}
    >
      Open Choice Modal
    </button>
    <Modal type='choice' show={this.state.showModal}>
      This is some content that is in a Modal. There will also be a way to
      close the modal.
    </Modal>

    <p>Info:</p>
    <button
      className='sprk-c-Button'
      type='button'
      onClick={() => {
        this.setState({showModal: !this.state.showModal})
      }}
    >
      Open Info Modal
    </button>
    <Modal modalType='info' show={this.state.showModal}>
      This is some content for info Modal.
      There will also be a way to close the modal.
    </Modal>

    <p>Wait:</p>
    <button
      className='sprk-c-Button'
      type='button'
      onClick={() => {
        this.setState({showModal: !this.state.showModal})
      }}
    >
      Open Wait Modal
    </button>
    <Modal modalType='wait' show={this.state.showModal}>
      This type of modal can't be closed by the user but will close shortly
      for demonstration purposes.
    </Modal>
  </>)
}

export default Modals
