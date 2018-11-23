import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

class ChoiceContent extends React.Component {
  static propTypes = {
    modalName: PropTypes.string,
    body: PropTypes.any,
    close: PropTypes.func,
    footer: PropTypes.any
  }

  render() {
    const { modalName, body, close, footer } = this.props
    return (
      <Fragment>
        <ModalHeader close={() => close()} modalName={modalName} id='modalChoiceHeading' text='Are you sure' />
        <ModalBody>{body}</ModalBody>
        <ModalFooter close={() => close()} modalName={modalName}>{footer}</ModalFooter>
      </Fragment>
    )
  }
}

export default ChoiceContent
