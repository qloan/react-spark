import React from 'react'
import Icon from '../Icon'
import { sparkBaseClassName } from '../../util'

class ErrorText extends React.Component {
  render = () => {
    const { id, error } = this.props

    return (
      error && (
        <div
          style={{
            msFlexAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            marginTop: '8px'
          }}
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
