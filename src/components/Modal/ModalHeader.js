import React from 'react'
import PropTypes from 'prop-types'
import { sparkComponentClassName } from '../../util'

class ModalHeader extends React.Component {
  static defaultProps = {};

  static propTypes = {
    modalName: PropTypes.string.isRequired,
    close: PropTypes.func
  };

  get className() {
    const baseClass = sparkComponentClassName('Modal', 'header')

    return [baseClass].join('')
  }

  render = () => {
    const { close, modalName } = this.props
    return (
      <div className={this.className}>
        {/* //todo: use react spark button/ */}
        <button
          className='sprk-c-Modal__icon'
          data-sprk-modal-cancel={modalName}
          aria-label='Close Modal'
          onClick={() => close()}
        >
          Close
          <svg
            className='sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--current-color'
            viewBox='0 0 64 64'
            aria-hidden='true'
            focusable='false'
          >
            <use xlinkHref='#close-circle' />
          </svg>
        </button>
      </div>
    )
  };
}

export default ModalHeader
