import PropTypes from 'prop-types';
import React from 'react';
import ErrorText from '../ErrorText';
import { sparkClassName } from '../../util';

class InputContainer extends React.Component {
  static defaultProps = {
    children: null
  };

  static propTypes = {
    children: PropTypes.node
  };

  renderErrorContent = () => {
    const { error } = this.props

    if (!error) return null

    return (
      // TODO: Icon SVG
      <ErrorText>{error}</ErrorText>
    )
  };

  render = () => {
    const { children, id, label } = this.props
    const className = sparkClassName('base', 'InputContainer')

    return (
      <div className={sparkClassName('utility', 'JavaScript')}>
        <div className={className}>
          {children}
          <div
            className={sparkClassName('base', 'InputContainer', 'input-border')}
          />
          <label htmlFor={id} className={sparkClassName('base', 'Label')}>
            {label}
          </label>
          <div
            className={sparkClassName('base', 'ErrorContainer')}
            id={`${id}--error-container`}
          >
            {this.renderErrorContent()}
          </div>
        </div>
      </div>
    )
  };
}

export default InputContainer
