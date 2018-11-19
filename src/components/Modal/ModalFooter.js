import React from 'react'
import PropTypes from 'prop-types'
import { sparkComponentClassName } from '../../util'

class ModalFooter extends React.Component {
  static defaultProps = {};

  static propTypes = {
    close: PropTypes.func
  }

  get className() {
    const baseClass = sparkComponentClassName('Modal', 'footer')

    return [baseClass].join('')
  }

  render = () => {
    const { close } = this.props
    return (
      <div className={this.className}>
        {/* //todo: use react spark button/ */}
        <button
          className='sprk-c-Button sprk-u-mrm'
          data-sprk-modal-cancel='exampleChoiceModal'
        >
          Confirm
        </button>

        <button
          className='sprk-c-Button sprk-c-Button--tertiary'
          data-sprk-modal-cancel='exampleChoiceModal'
          aria-label='Close Modal'
          onClick={() => close()}
        >
          Cancel
        </button>
      </div>
    )
  };
}

export default ModalFooter
