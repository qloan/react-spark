import React from 'react'
import PropTypes from 'prop-types'
import { sparkComponentClassName } from '../../util'
import sparkClassName from '../../util/sparkClassName'

class ModalBody extends React.Component {
  static defaultProps = {
  }

  static propTypes = {
  }

  get className () {
    const baseClass = sparkComponentClassName('Modal', 'body')

    return [
      baseClass
    ].join(' ')
  }

  render = () => {
    return (
      <div className={this.className}
      >
        <p
          className='sprk-b-TypeBodyTwo'
          id='modalChoiceContent'
        />
      </div>
    )
  }
}

export default ModalBody
