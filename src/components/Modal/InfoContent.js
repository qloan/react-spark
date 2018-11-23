import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

class InfoContent extends React.Component {
  static propTypes = {
    modalName: PropTypes.string,
    body: PropTypes.any,
    close: PropTypes.func
  }

  render() {
    const { modalName, body, close } = this.props
    return (
      <Fragment>
        <ModalHeader close={() => close()} modalName={modalName} />
        <ModalBody>{body}</ModalBody>
      </Fragment>
    )
  }
}

export default InfoContent
