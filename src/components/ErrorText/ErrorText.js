import React from 'react'
import { sparkBaseClassName } from '../../util'

class ErrorText extends React.Component {
  render = () => {
    const { id, error } = this.props

    return (
      <div
        className={sparkBaseClassName('ErrorContainer')}
        id={`${id}--error-container`}
      >
        <div className={sparkBaseClassName('ErrorText')}>{error}</div>
      </div>
    )
  };
}

export default ErrorText
