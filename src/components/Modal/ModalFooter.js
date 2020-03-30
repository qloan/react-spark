import React from 'react'
import PropTypes from 'prop-types'
import { sparkObjectClassName } from '../../util'
import Button from '../Button'

class ModalFooter extends React.Component {
  static defaultProps = {
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  };

  static propTypes = {
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    modalId: PropTypes.string,
    spinner: PropTypes.bool
  }

  get className() {
    const baseClass = sparkObjectClassName('Stack', 'item')

    return [baseClass].join('')
  }

  render = () => {
    const { confirmText, cancelText, onConfirm, onCancel, modalId, spinner } = this.props
    return (
      <footer className={this.className}>
        <Button
          id={`${modalId}-button-confirm`}
          name='confirm'
          onClick={onConfirm}
          spinner={spinner}
        >
          {confirmText}
        </Button>

        <Button
          id={`${modalId}-button-cancel`}
          name='cancel'
          className='sprk-c-Button sprk-c-Button--tertiary'
          data-sprk-modal-cancel={modalId}
          aria-label='Close Modal'
          onClick={onCancel}
          disabled={spinner}
        >
          {cancelText}
        </Button>
      </footer>
    )
  };
}

export default ModalFooter
