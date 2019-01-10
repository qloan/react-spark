import React, { Fragment } from 'react';
import Icon from '../Icon';
import { sparkBaseClassName } from '../../util';

class ErrorText extends React.Component {
  render = () => {
    const { id, error } = this.props

    return (
      error && (
        <div
          // TODO: THIS CLASS SHOULD BE HERE BUT IT DISSAPEARS FOR SOME REASON
          // className={sparkBaseClassName('ErrorContainer')}
          id={`${id}--error-container`}
        >
          <div className={sparkBaseClassName('ErrorText')}>
            <Icon name='exclamation-filled' className='sprk-b-ErrorIcon' />
            {error}
          </div>
        </div>
      )
    )
  };
}

export default ErrorText
