import React from 'react';
import classNames from 'classnames';
import { sparkClassName } from '../../util';

class ToggleContent extends React.Component {
  get className() {
    const baseClass = sparkClassName('base', 'TypeBodyFour')
    const utilityPTSClass = sparkClassName('utility', 'pts')
    const utilityPBSClass = sparkClassName('utility', 'pbs')
    return classNames(baseClass, {
      [utilityPTSClass]: true,
      [utilityPBSClass]: true
    })
  }

  render = () => {
    const { children } = this.props
    return (
      <div data-sprk-toggle='content'>
        <div className={this.className}>{children}</div>
      </div>
    )
  };
}

export default ToggleContent
