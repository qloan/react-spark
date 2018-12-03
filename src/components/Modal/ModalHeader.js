import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { sparkComponentClassName, sparkObjectClassName } from '../../util'
import ModalHeading from './ModalHeading'

class ModalHeader extends React.Component {
  static defaultProps = {
    onClose: () => {
      console.log('closed')
    }
  };

  static propTypes = {
    onClose: PropTypes.func,
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    hasCloseButton: PropTypes.bool
  };

  get className() {
    const baseClass = sparkComponentClassName('Modal', 'header')
    const stackItemClass = sparkObjectClassName('Stack', 'item')

    return classNames(baseClass, stackItemClass)
  }

  render = () => {
    const { onClose, id, title, hasCloseButton } = this.props
    return (
      <header className={this.className}>
        {/* //todo: use react spark button/ */}
        <ModalHeading id={id}>
          {title}
        </ModalHeading>
        {
          hasCloseButton &&
          <button onClick={onClose} className='sprk-c-Modal__icon' data-sprk-modal-cancel={id} type='button' aria-label='Close Modal'>
            <svg className='sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--current-color' viewBox='0 0 64 64' aria-hidden='true' focusable='false'>
              <use xlinkHref='#close-circle' />
            </svg>
          </button>
        }
      </header>
    )
  };
}

export default ModalHeader
