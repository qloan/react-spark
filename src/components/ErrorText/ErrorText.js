import React, { Fragment } from 'react';
import Icon from '../Icon';
import { sparkBaseClassName } from '../../util';

class ErrorText extends React.Component {
  render = () => {
    const { id, error } = this.props

    return (
      error && (
        <div
          // todo: add this back if possible
          // className={sparkBaseClassName('ErrorContainer')}
          // spark code is currently using sprk-b-ErrorContainer class to remove html, and this breaks validation
          // this styling is copied from the sprk-b-ErrorContainer class
          style={{
            msFlexAlign: 'center',
            alignItems: 'center',
            display: '-ms-flexbox',
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
