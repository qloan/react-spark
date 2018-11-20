import React, { Fragment } from 'react'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

class InfoContent extends React.Component {
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
