import React, { Fragment } from 'react'
import Icon from '../Icon'
import { sparkBaseClassName } from '../../util'

class ErrorText extends React.Component {
  render = () => {
    const { id, error } = this.props

    return (
      error && (
        <div
          className={sparkBaseClassName('ErrorContainer-Custom')}
          id={`${id}--error-container`}
        >
          <Icon name='exclamation-filled' className='sprk-b-ErrorIcon' />
          <div className={sparkBaseClassName('ErrorText')}>{error}</div>
        </div>
      )
    )
  };
}

export default ErrorText
